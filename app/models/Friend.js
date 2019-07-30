const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

let friendSchema = new Schema({
  userId: {
    type: String,
    default: '',
  },
  userName: {
    type: String,
    default: ''
  },
  friendName: {
    type: String,
    default: ''
  },
  isfriend:{
    type:Boolean,
    default:false
  },
  friendreqsent: {
    type:Boolean,
    default:false
  },
  friendreqrecieved: {
    type:Boolean,
    default:false
  },
  friendId: {
    type: String,
    default: '',
  },
  createdOn :{
    type:Date,
    default:""
  }


})


mongoose.model('Friend', friendSchema);