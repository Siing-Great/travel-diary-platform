import { View, Image, Text } from '@tarojs/components'
import './detail.scss'

const mockDetail = {
  title: '我的第一次旅行',
  content: '这里是游记的详细内容……',
  images: ['https://placekitten.com/300/200'],
  author: '小明',
  date: '2024-06-01'
}

const Detail = () => {
  const diary = mockDetail

  return (
    <View className='detail-container'>
      <Text className='title'>{diary.title}</Text>
      <View className='meta'>
        <Text>{diary.author}</Text>
        <Text>{diary.date}</Text>
      </View>
      {diary.images.map((img, idx) => (
        <Image key={idx} src={img} className='image' />
      ))}
      <Text className='content'>{diary.content}</Text>
    </View>
  )
}

export default Detail 