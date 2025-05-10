import { View, Image, Input, Button, Text } from '@tarojs/components'
import { useState } from 'react'
import Taro from '@tarojs/taro'
import './index.scss'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

const Login = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [avatar, setAvatar] = useState('https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0')
  const [error, setError] = useState('')

  /**
   * 处理登录请求
   */
  const handleLogin = async () => {
    if (!username || !password) {
      setError('请输入用户名和密码')
      return
    }

    try {
      // TODO: 调用登录接口
      Taro.showToast({
        title: '登录成功',
        icon: 'success'
      })
      // 登录成功后跳转到首页
      Taro.switchTab({
        url: '/pages/home/home'
      })
    } catch (err) {
      setError('登录失败，请检查用户名和密码')
    }
  }

  const handleRegister = async () => {
    if (!username || !password) {
      setError('请输入用户名和密码')
      return
    }

    try {
      // TODO: 调用注册接口
      Taro.showToast({
        title: '注册成功',
        icon: 'success'
      })
      setIsLogin(true)
    } catch (err) {
      setError('注册失败，用户名可能已存在')
    }
  }

  const chooseAvatar = async () => {
    try {
      const res = await Taro.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        sourceType: ['album', 'camera']
      })
      setAvatar(res.tempFilePaths[0])
    } catch (err) {
      console.error('选择头像失败', err)
    }
  }

  const handleForgotPassword = () => {
    Taro.showToast({
      title: '请联系管理员重置密码',
      icon: 'none'
    })
  }

  return (
    <View className='login-container'>
      <View className='avatar-container'>
        <Image
          className='avatar'
          src={avatar}
          onClick={!isLogin ? chooseAvatar : undefined}
        />
        {!isLogin && <Text className='avatar-tip'>点击更换头像</Text>}
      </View>

      <View className='form-container'>
        <View className='input-wrapper'>
          <UserOutlined style={{ fontSize: 20, color: '#999', marginRight: 8 }} />
          <Input
            className='input'
            placeholder='请输入用户名'
            value={username}
            onInput={e => setUsername(e.detail.value)}
          />
        </View>
        <View className='input-wrapper'>
          <LockOutlined style={{ fontSize: 20, color: '#999', marginRight: 8 }} />
          <Input
            className='input'
            password
            placeholder='请输入密码'
            value={password}
            onInput={e => setPassword(e.detail.value)}
          />
        </View>

        {error && <Text className='error-text'>{error}</Text>}

        {isLogin && (
          <Text className='forgot-text' onClick={handleForgotPassword}>
            忘记密码？
          </Text>
        )}

        <Button
          className='button'
          type='primary'
          onClick={isLogin ? handleLogin : handleRegister}
          disabled={!username || !password}
        >
          {isLogin ? '登录' : '注册'}
        </Button>

        <Text
          className='switch-text'
          onClick={() => {
            setIsLogin(!isLogin)
            setError('')
          }}
        >
          {isLogin ? '没有账号？去注册' : '已有账号？去登录'}
        </Text>
      </View>
    </View>
  )
}

export default Login 