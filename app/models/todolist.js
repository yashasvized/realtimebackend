const mongoose = require('mongoose')
const Schema = mongoose.Schema
const time = require('../libs/timeLib')

const todolist = new Schema({
    userId:{
        type:String
    },
    listId:{
        type:String
    },
    title:{
        type:String
    },
    subitem:{
        type:Array
    },
    edit:{
        type:Boolean,
        default:false
    },
    checked:{
        type:Boolean,
        default:false
    },
    listGenerationTime: {
        type: Date,
        default: time.now()
      }
})

module.exports = mongoose.model('todolist', todolist)
