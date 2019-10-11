/**
 * student.js
 * 操作数据的模块
 * 封装了操作李数据库的方法
 */

var fs = require('fs')
var dbPath = './db.json'
/**
 * 获取全部学生
 */
exports.find = function(callback) {
    fs.readFile(dbPath, 'utf8', function(err, data) {
        if (err) {
            return callback(err)
        }
        callback(null, JSON.parse(data).students)
    })
}


/**
 *查一个学生
 */
exports.findOneById = function(id, callback) {
    fs.readFile(dbPath, 'utf8', function(err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students
  		//console.log(students)
		// console.log(id)
        var ret = students.find(function(item) {
            return item.id === parseInt(id)
        })
		// console.log(ret)
        return callback(null, ret)
    })
}

/**
 *添加学生
 */
exports.add = function(student, callback) {
    //先读   在加入新数据      在写入文本中
    fs.readFile(dbPath, 'utf8', function(err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students
        var index=students.length - 1||1
        student.id = students[index].id + 1
        students.push(student)

        var fileContent = JSON.stringify({
            students: students
        })

        fs.writeFile(dbPath, fileContent, function(err) {
            if (err) {
                return callback(err)
            }
            callback(null)
        })
    })
}

/**
 * 更新学生数据
 */
exports.updataById = function(student, callback) {
    fs.readFile(dbPath, 'utf-8', function(err, data) {
        if (err) {
            return callback(err)
        }
		student.id = parseInt(student.id)

        var students = JSON.parse(data).students

        var stu = students.find(function(item) {
            return item.id === student.id
        })
        // console.log(student)
        for(var key in student){
        	stu[key]=student[key]
        }

        var fileContent=JSON.stringify({
        	students:students
        })

       fs.writeFile(dbPath, fileContent, function(err){
       		if(err){
       			return callback(err)
       		}
       		callback(null)
       })
    })
}


/**
 * 处理删除学生
 */
exports.delete=function(id,callback){
	fs.readFile(dbPath,function(err,data){
		if(err){
			return callback(err)
		}
		var students=JSON.parse(data).students
		// var ret=students.find(function(item){
		// 	return item.id===parseInt(id)
		// })
		students.splice(parseInt(id)-1,1)

		var fileContent=JSON.stringify({students:students})

		fs.writeFile(dbPath, fileContent, function(err){
			if(err){
				return callback(err)
			}
			callback(null)
		})
	})
}