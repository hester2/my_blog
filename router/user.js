const express =require('express')
const router =express.Router()
// // mysql.createConnection()node链接数据库的方法
// const conn =mysql.createConnection({
//     host:'127.0.0.1',
//     user:'root',
//     password:'root',
//     database:'my_blog'
// })
// 导入 用户相关的 处理函数模块
const ctrl = require('../controller/user.js')
// 监听客户端的请求 把客户端这个传输给服务器
router.get('/register',ctrl.showRegisterPage);
router.get('/login',ctrl.showLoginPage);
// 注册逻辑
router.post('/register',ctrl.reg);

router.post('/login',ctrl.login)

module.exports=router
// 导出路由