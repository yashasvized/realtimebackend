const mongoose = require('mongoose');
const shortid = require('shortid');
const time = require('./../libs/timeLib');
const passwordLib = require('./../libs/generatePasswordLib');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const validateInput = require('./../libs/paramsValidationLib')
const check = require('./../libs/checkLib')
const token = require('./../libs/tokenLib')
const AuthModel = mongoose.model('Auth')
const UserModel = mongoose.model('User')
const friendModel = mongoose.model('Friend')
const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken')

let friendreqsent = (req, res) => {

    let createFriendReciever = () => {
        return new Promise((resolve, reject) => {
            friendModel.findOne({ userId: req.body.friendId,friendId: req.body.userId })
            .exec((err, retrievedUserDetails) => {
                if (err) {
                    console.log(err)
                }else if(check.isEmpty(retrievedUserDetails)){
                    let newFriend = new friendModel({
                        userId: req.body.friendId,
                        friendId: req.body.userId,
                        friendName: req.body.userName,
                        userName:req.body.friendName,
                        friendreqsent:true,
                        createdOn: time.now()
                    })
                    newFriend.save((err, newUser) => {
                        if (err) {
                            console.log(err)
                            logger.error(err.message, 'Failed to create list', 10)
                            let apiResponse = response.generate(true, 'Failed to create new User', 500, null)
                            reject(apiResponse)
                        } else {
                            let newUserObj = newUser.toObject();
                            resolve(newUserObj)
                        }
                    })
                }else{
                    let apiResponse = response.generate(true, 'Friend req already sent', 500, null)
                    reject(apiResponse)
                }
            })
           
                     
               
        })
    }// end create list function
    let createFriendUser = () => {
        return new Promise((resolve, reject) => {
           
                         friendModel.findOne({ userId: req.body.userId,friendId: req.body.friendId })
            .exec((err, retrievedUserDetails) => {
                if (err) {
                    console.log(err)
                }else if(check.isEmpty(retrievedUserDetails)){
                    let newFriend = new friendModel({
                        userId: req.body.userId,
                        friendId: req.body.friendId,
                        friendName: req.body.friendName,
                        userName:req.body.userName,
                        friendreqrecieved:true,
                        createdOn: time.now()
                    })
                    newFriend.save((err, newUser) => {
                        if (err) {
                            console.log(err)
                            logger.error(err.message, 'Failed to create list', 10)
                            let apiResponse = response.generate(true, 'Failed to create new User', 500, null)
                            reject(apiResponse)
                        } else {
                            let newUserObj = newUser.toObject();
                            resolve(newUserObj)
                        }
                    })
                }else{
                    let apiResponse = response.generate(true, 'Friend req already sent', 500, null)
                    reject(apiResponse)
                }
            })
           
               
        })
    }// end create list function


    createFriendReciever(req, res)
        .then(createFriendUser)
        .then((resolve) => {
            let apiResponse = response.generate(false, 'Friend req sent', 200, resolve)
            res.send(apiResponse)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })

}// end list function 

let getAllfriendReqsent = (req, res) => {
    console.log(req.body.userId)
    friendModel.find({friendId: req.body.userId,friendreqsent:true,isfriend:false})
        .select(' -__v -_id -password')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'friend Controller: getAllfriendReqsent', 10)
                let apiResponse = response.generate(true, 'Failed To Find User Details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No User Found', 'friend Controller: getAllfriendReqsent')
                let apiResponse = response.generate(true, 'No User Found', 404, null)
                res.send(apiResponse)
            } else {
                delete result.password;
                let apiResponse = response.generate(false, 'All friend request Found', 200, result)
                res.send(apiResponse)
            }
        })
}// end get all users

let getAllfriendReqrecieved = (req, res) => {
    friendModel.find({friendId: req.body.userId,friendreqrecieved:true,isfriend:false})
        .select(' -__v -_id -password')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'friend Controller: getAllfriendReqrecieved', 10)
                let apiResponse = response.generate(true, 'Failed To Find User Details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No User Found', 'friend Controller: getAllfriendReqrecieved')
                let apiResponse = response.generate(true, 'No User Found', 404, null)
                res.send(apiResponse)
            } else {
                delete result.password;
                let apiResponse = response.generate(false, 'All friend request Found', 200, result)
                res.send(apiResponse)
            }
        })
}// end get all users

let getAllfriend = (req, res) => {
    friendModel.find({userId: req.body.userId,isfriend:true})
        .select(' -__v -_id ')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'friend Controller: getAllUser', 10)
                let apiResponse = response.generate(true, 'Failed To Find User Details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No User Found', 'friend Controller: getAllUser')
                let apiResponse = response.generate(true, 'No User Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'All friend Found', 200, result)
                res.send(apiResponse)
            }
        })
}// end get all users

let acceptfriendreq = (req,res)=>{
     friendModel.update({userId:req.body.userId,friendId:req.body.friendId }, {isfriend:true}).exec((err, result) => {
        if(err){
            logger.info('No User Found', 'friend Controller: acceptfriendreq')
            let apiResponse = response.generate(true, 'No User Found', 404, null)
            console.log(apiResponse);
        }else{
            console.log(result);
        }
    });
    friendModel.update({userId:req.body.friendId,friendId:req.body.userId }, {isfriend:true}).exec((err, result) => {
        if(err){
            logger.info('No User Found', 'friend Controller: acceptfriendreq')
            let apiResponse = response.generate(true, 'No User Found', 404, null)
            console.log(apiResponse)
        }else{
            console.log(result);
        }
    });
    let apiResponse = response.generate(false, 'Friend accepted', 200, null)
    res.send(apiResponse)
}


module.exports = {

   friendreqsent:friendreqsent,
   getAllfriendReqsent:getAllfriendReqsent,
   getAllfriendReqrecieved:getAllfriendReqrecieved,
   getAllfriend:getAllfriend,
   acceptfriendreq:acceptfriendreq

}// end exports
