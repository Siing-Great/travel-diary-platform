import { View, Input, Image, Text, Button, ScrollView } from '@tarojs/components'
import { useState } from 'react'
import Taro from '@tarojs/taro'
import './home.scss'

const mockDiaries = [
  {
    id: 1,
    title: '我的第一次旅行',
    cover: 'https://placekitten.com/300/200',
    author: '小明',
    date: '2024-06-01'
  },
  {
    id: 2,
    title: '海边的日记',
    cover: 'https://placekitten.com/301/200',
    author: '小红',
    date: '2024-06-02'
  }
]

const Home = () => {
  const [search, setSearch] = useState('')
  const [diaries, setDiaries] = useState(mockDiaries)

  const handleSearch = () => {
    if (!search) {
      setDiaries(mockDiaries)
    } else {
      setDiaries(
        mockDiaries.filter(
          d => d.title.includes(search) || d.author.includes(search)
        )
      )
    }
  }

  const goToDetail = (id) => {
    Taro.navigateTo({
      url: `/pages/detail/index?id=${id}`
    })
  }

  const goToPublish = () => {
    Taro.navigateTo({
      url: '/pages/publish/index'
    })
  }

  return (
    <View className='home-container'>
      <View className='search-bar'>
        <Input
          className='search-input'
          placeholder='输入标题或昵称进行搜索'
          value={search}
          onInput={e => setSearch(e.detail.value)}
        />
        <Button className='search-btn' onClick={handleSearch}>搜索</Button>
      </View>
      <ScrollView scrollY className='diary-list'>
        {diaries.length === 0 ? (
          <View className='empty'>暂无游记，快去发布吧！</View>
        ) : (
          diaries.map(diary => (
            <View className='diary-card' key={diary.id} onClick={() => goToDetail(diary.id)}>
              <Image className='cover' src={diary.cover} />
              <View className='info'>
                <Text className='title'>{diary.title}</Text>
                <Text className='author'>{diary.author}</Text>
                <Text className='date'>{diary.date}</Text>
              </View>
            </View>
          ))
        )}
      </ScrollView>
      <Button className='publish-btn' onClick={goToPublish}>+ 发布游记</Button>
    </View>
  )
}

export default Home 