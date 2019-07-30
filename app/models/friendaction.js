const mongoose = require('mongoose')
const Schema = mongoose.Schema
const time = require('../libs/timeLib')

const friendaction = new Schema({
    userId:{
        type:String
    },
    friendId:{
        type:String
    },
    listId:{
        type:String,
        default:""
    },
    checked:{
        type:Boolean,
        default:false
    },
    createdOn: {
        type: Date,
        default: time.now()
      },
      previousValue:{
          type:String
      },
      currentValue:{
        type:String
      },
      index:{
          type:Number
      },
      subitemIndex:{
          type:Number
      },
      action:{
          type:String
      },
      friendName:{
          type:String
      },
      userName:{
          type:String
      }
})

module.exports = mongoose.model('friendaction', friendaction)