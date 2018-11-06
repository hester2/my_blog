const express = require('express')

const bodyParser = require('body-parser')

const app = express()

// 设置默认的模板引擎
app.set('view engine', 'ejs')
// 模板的根目录  将来渲染页面时都相对此路径
app.set('views', './views')

// 托管静态资源
app.use('/node_modules', express.static('./node_modules'))



// 设置 默认采用的模板引擎名称
app.set('view engine', 'ejs')
// 设置模板页面的存放路径
app.set('views', './views')

// 注册解析表单数据的中间件
 app.use(bodyParser.urlencoded({ extended: false }))

app.get('/',(req,res) => {
  res.render('./index.ejs',{})
})

// 导入首页的路由模块
const indexRouter = require('./router/index.js')
app.use(indexRouter)

// 导入用户功能的路由模块
const userRouter = require('./router/user.js')
app.use(userRouter)


app.listen(80, () => {
  console.log('http://127.0.0.1');
