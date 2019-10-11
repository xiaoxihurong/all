var express=require('express')
var fs=require('fs')

var Student=require('./student')

var  router=express.Router()


router.get('/',function(req,res){
	res.redirect('/student')
})

//渲染主页
router.get('/student',function(req,res){
	Student.find(function(err,students){
		if(err){
			return res.status(500).send('Server error')
		}
		res.render('index.html',{
     		students:students
		})
	})
})


//渲染添加学生页面
router.get('/students/new', function (req, res) {
  res.render('new.html')
})


//处理添加学生
router.post('/students/new/submit',function(req,res){
	Student.add(req.body,function(err){
		if(err){
			return res.status(500).send('Server error')
		}
		res.redirect('/student')
	})
})

//渲染编辑页面
router.get('/students/edit',function(req,res){
	console.log(req.query.id)
	Student.findOneById(parseInt(req.query.id),function(err,student){
		if(err){
			return res.status(500).send('Server error')
		}
		res.render('edit.html',{student:student})
	})
})

//处理编辑学生
router.post('/students/edit',function(req,res){
	// console.log(req.body)
	Student.updataById(req.body,function(err){
		if(err){
			return res.status(500).send('Server error')
		}
		res.redirect('/student')
	})
})

//处理删除学生
router.get('/students/delete',function(req,res){
	Student.delete(parseInt(req.query.id),function(err){
		if(err){
			return res.status(500).seng('Server error')
		}
		res.redirect('/student')
	})

})

module.exports = router