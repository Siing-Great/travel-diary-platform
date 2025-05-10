import { View, Input, Textarea, Button, Image } from '@tarojs/components'
import { useState } from 'react'
import Taro from '@tarojs/taro'
import './publish.scss'

const Publish = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [images, setImages] = useState<string[]>([])

  const handleChooseImage = async () => {
    const res = await Taro.chooseImage({ count: 9 })
    setImages(res.tempFilePaths)
  }

  const handleSubmit = () => {
    // TODO: 提交发布逻辑
    Taro.showToast({ title: '发布成功', icon: 'success' })
    setTitle('')
    setContent('')
    setImages([])
  }

  return (
    <View className='publish-container'>
      <Input
        className='input'
        placeholder='请输入标题'
        value={title}
        onInput={e => setTitle(e.detail.value)}
      />
      <Textarea
        className='textarea'
        placeholder='请输入游记内容'
        value={content}
        onInput={e => setContent(e.detail.value)}
      />
      <View className='image-list'>
        {images.map((img, idx) => (
          <Image key={idx} src={img} className='image' />
        ))}
        <Button onClick={handleChooseImage}>上传图片</Button>
      </View>
      <Button className='submit-btn' onClick={handleSubmit}>发布游记</Button>
    </View>
  )
}

export default Publish 