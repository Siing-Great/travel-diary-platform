import { View, Text, Button } from '@tarojs/components'
import { useState } from 'react'
import './mydiary.scss'

const mockMyDiaries = [
  { id: 1, title: '我的第一次旅行', status: '已通过' },
  { id: 2, title: '海边的日记', status: '未通过' }
]

const MyDiary = () => {
  const [diaries] = useState(mockMyDiaries)

  return (
    <View className='mydiary-container'>
      <Text className='header'>我的游记</Text>
      {diaries.length === 0 ? (
        <Text>暂无游记</Text>
      ) : (
        diaries.map(diary => (
          <View className='diary-item' key={diary.id}>
            <Text>{diary.title}</Text>
            <Text className='status'>{diary.status}</Text>
            <Button size='mini'>编辑</Button>
          </View>
        ))
      )}
    </View>
  )
}

export default MyDiary 