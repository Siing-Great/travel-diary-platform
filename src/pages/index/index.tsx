import { View, Image, Text } from '@tarojs/components'
import { useLoad, useReady } from '@tarojs/taro'
import { useState, useEffect } from 'react'
import './index.scss'

// 模拟数据
const mockDiaries = [
  {
    id: 1,
    title: '美丽的西湖之旅',
    desc: '今天去了西湖，风景真的很美，湖水清澈，远处的山峦若隐若现，让人心旷神怡。漫步在湖边，感受着微风拂面，真是惬意极了。',
    image: 'https://picsum.photos/400/300',
    date: '2024-03-20',
    location: '杭州'
  },
  {
    id: 2,
    title: '故宫一日游',
    desc: '参观了故宫，感受到了历史的厚重感，建筑宏伟壮观，每一砖每一瓦都诉说着古老的故事。',
    image: 'https://picsum.photos/400/400',
    date: '2024-03-19',
    location: '北京'
  },
  {
    id: 3,
    title: '外滩夜景',
    desc: '夜晚的外滩真的很美，灯光璀璨，江风徐徐，对岸的浦东夜景尽收眼底。',
    image: 'https://picsum.photos/400/250',
    date: '2024-03-18',
    location: '上海'
  },
  {
    id: 4,
    title: '鼓浪屿漫步',
    desc: '在鼓浪屿的小巷中漫步，感受着海风和阳光，这里的建筑风格独特，充满了文艺气息。',
    image: 'https://picsum.photos/400/350',
    date: '2024-03-17',
    location: '厦门'
  },
  {
    id: 5,
    title: '黄山日出',
    desc: '凌晨四点起床，只为看黄山日出。当第一缕阳光洒在云海上，那种震撼无法用语言形容。',
    image: 'https://picsum.photos/400/280',
    date: '2024-03-16',
    location: '黄山'
  },
  {
    id: 6,
    title: '丽江古城',
    desc: '漫步在丽江古城的石板路上，感受着纳西族的文化气息，这里的慢生活让人向往。',
    image: 'https://picsum.photos/400/320',
    date: '2024-03-15',
    location: '丽江'
  }
]

export default function Index() {
  const [leftColumn, setLeftColumn] = useState<any[]>([])
  const [rightColumn, setRightColumn] = useState<any[]>([])

  // 初始化数据
  useEffect(() => {
    // 将数据平均分配到两列
    const left: any[] = []
    const right: any[] = []
    
    mockDiaries.forEach((diary, index) => {
      if (index % 2 === 0) {
        left.push(diary)
      } else {
        right.push(diary)
      }
    })

    setLeftColumn(left)
    setRightColumn(right)
  }, [])

  // 渲染单个卡片
  const renderCard = (diary: any) => (
    <View key={diary.id} className='diary-card'>
      <Image
        className='diary-image'
        src={diary.image}
        mode='aspectFill'
      />
      <View className='diary-content'>
        <Text className='diary-title'>{diary.title}</Text>
        <Text className='diary-desc'>{diary.desc}</Text>
        <View className='diary-footer'>
          <View className='diary-date'>
            <Text>{diary.date}</Text>
          </View>
          <View className='diary-location'>
            <Text>{diary.location}</Text>
          </View>
        </View>
      </View>
    </View>
  )

  return (
    <View className='diary-container'>
      <View className='diary-columns'>
        <View className='diary-column'>
          {leftColumn.map(renderCard)}
        </View>
        <View className='diary-column'>
          {rightColumn.map(renderCard)}
        </View>
      </View>
    </View>
  )
}
