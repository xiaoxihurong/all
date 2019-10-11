var express=require('express')
var router=require('./router')
var bodyParser=require('body-parser')

var app=express()

//配置art-template
app.engine('html',require('express-art-template'))
//配置bodyParser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//开放node_moudles和public
app.use('/node_modules/',express.static('./node_modules/'))
app.use('/public/',express.static('./public/'))

//挂载router
app.use(router)

app.listen(500,function(){
	console.log('running')
})

module.exports=app