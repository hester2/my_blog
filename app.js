const express = require('express')
// const fs = require('fs')
// const path = require('path')
const app = express()
// const bodyParser = require('body-parser')

// 设置 默认采用的模板引擎名称
app.set('view engine', 'ejs')
// 设置模板页面的存放路径
app.set('views', './views')

// 注册解析表单数据的中间件
// app.use(bodyParser.urlencoded({ extended: false }))

app.get('/',(req,res) => {
  res.render('./index.ejs',{})
})

// 把 node_modules 文件夹，托管为静态资源目录
app.use('/node_modules', express.static('./node_modules'))


app.listen(80, () => {
  console.log('server running at http://127.0.0.1')
})
