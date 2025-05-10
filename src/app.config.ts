export default defineAppConfig({
  pages: [
    'pages/login/index',
    'pages/home/home',
    'pages/publish/publish',
    'pages/detail/detail',
    'pages/mydiary/mydiary'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '旅游日记',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/home/home',
        text: '首页'
      },
      {
        pagePath: 'pages/login/index',
        text: '登录'
      },
      {
        pagePath: 'pages/mydiary/mydiary',
        text: '我的'
      }
    ]
  }
})
