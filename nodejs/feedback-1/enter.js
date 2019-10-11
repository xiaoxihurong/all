var http=require('http')
var fs=require('fs')
var url=require('url')
var template=require('art-template')

	var comtents=[
	{
		name:'张三',
		message:'今天天气不错',
		dateTime:'2019-9-23'
	},
	{
		name:'张三',
		message:'今天天气不错',
		dateTime:'2019-9-23'
	},
	{
		name:'张三',
		message:'今天天气不错',
		dateTime:'2019-9-23'
	},
	{
		name:'张三',
		message:'今天天气不错',
		dateTime:'2019-9-23'
	},
	{
		name:'张三',
		message:'今天天气不错',
		dateTime:'2019-9-23'
	}
	]


http.createServer(function(req,res){
	var parseObj=url.parse(req.url,true)
	var pathname=parseObj.pathname
	if(pathname==='/'){
		fs.readFile('./views/index.html', function(err,data){
			if(err){
				return res.end("read error")
			}
			var ret=template.render(data.toString(),{
				comments:comtents
			})
			// res.setHeader('Content-Type','text/html;charset=utf-8')
			res.end(ret)
		})
	}else if(pathname==='/post'){
		fs.readFile('./views/post.html',function(err,data){
			if(err){
				return res.end("读取文件错误")
			}
			res.end(data)
		})
	}else if(pathname.indexOf('/public/')===0){
		fs.readFile('.'+pathname,function(err,data){
			if (err) {
          		return res.end('404 Not Found.')
        	}
       		res.end(data)
    	})
	}else if(pathname=='/pinglun'){
		var comment=parseObj.query
		comment.dateTime='2019-9-23'
		comtents.unshift(comment)
		res.statusCode = 302
     	res.setHeader('Location', '/')
      	res.end()
	}else{
		fs.readFile('./views/404.html', function (err, data) {
        if (err) {
          return res.end('404 Not Found.')
        }
        res.end(data)
      })
	}

})
.listen(500,function(){
	console.log("running")
})