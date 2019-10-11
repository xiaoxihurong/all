var mongoose=require('mongoose')

mongoose.connect('mongodb://localhost/student')

mongoose.Pormise=global.Pormise

var Schema=mongoose.Schema

var studentSchema=new Schema({
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    gender:{
        type:Number,
        enum: [0, 1],
        default: 0
    },
    hobbies:{
        type:String
    }
})
module.exports=mongoose.model('Student',studentSchema)