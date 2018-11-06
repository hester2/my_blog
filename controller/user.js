const moment =require('moment')
const conn =require('../db/index.js')
// 展示注册页面
const showRegisterPage =(req,res) =>{
    res.render('./user/register.ejs',{})
    // res表示 和 服务器相关的参数 和 方法
}

// 展示登录页面
const showLoginPage =(req,res) => {
    res.render('./user/login.ejs',{})
}

// 注册新用户的请求处理函数
const reg =(req,res) =>{
    console.log(req.body)
    // 获取客户端提交过来的用户信息
    const user =req.body
    // 判断表单心思是否合法，不合法返回错误状态嘛和信息
    if(user.username.trim().length === 0 ||
    user.password.trim().length === 0 ||
    user.nickname.trim().length === 0 ) return res.status(400).send({ status:400,msg:'请填写完整的表单信息！'});
  
    // 查重 ： 执行sql语句，在数据库中查询当前提交过来的用户名是否已存在
    const querySql='select count(*) as count from user where username= ?'
    conn.query(querySql,user.username,(err,result) =>{
        console.log(err)

        if(err) return res.status(500).send({status:500,msg:'用户名查询失败！请重试'})
        console.log(result[0].count !=0)
        if(result[0].count !=0) return res.status(402).send({
            status:402,msg:'用户名已存在！请重试'})

    //    给用户添加创建时间的属性
    user.ctime=moment().format('YYYY-MM-DD HH:mm:ss')

    // 用户名不存在需要执行添加用户的sql语句
    const addSql ='insert into user set ?'
    conn.query(addSql,user,(err,result) => {
        if (err || result.affectedRows != 1) return res.status(402).send({
            status:402,msg:'用户添加失败！请重试'})
            res.send({ status: 200, msg: '用户注册成功!' });
    })
    })
}
// 登录请求处理函数
const login = (req,res) =>{
    const user =req.body

    const querySql = 'select * from user where username = ? and password = ?'
    conn.query(querySql,[user.username,user.password],(err,result) =>{
        if(err) return res.status(500).send({status:500,msg:'登录失败！请重试！'})
        if(result.length === 0) return res.status(400).send({status:400,msg:'用户名或密码错误!请重试'})
        res.send({status:200,msg:'恭喜你！登录成功'})
    })
}
module.exports={
    showRegisterPage,
    showLoginPage,
    reg,login
}