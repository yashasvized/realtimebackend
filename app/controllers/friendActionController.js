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
const friendaction = mongoose.model('friendaction')
const friendModel = mongoose.model('Friend')
const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken')

let createfriendaction = (req, res) => {

    let createFriendReciever = () => {

        
        return new Promise((resolve, reject) => {

            if(req.body.userName===null){

                let apiResponse = response.generate(true, 'Failed to create new User', 500, null)
                reject(apiResponse)
                console.log(req.body.userName)
            }

        
                    let newFriend = new friendaction({
                        userId: req.body.userId,
                        friendId: req.body.friendId,
                        friendName: req.body.friendName,
                        userName:req.body.userName,
                        listId:req.body.listId,
                        previousValue:req.body.previousValue,
                        currentValue:req.body.currentValue,
                        action:req.body.action,
                        index:req.body.index,
                        subitemIndex:req.body.subitemIndex,
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
                                      
                
        })

    }// end create list function
    


    createFriendReciever(req, res)
        .then((resolve) => {
            let apiResponse = response.generate(false, 'action saved', 200, resolve)
            res.send(apiResponse)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })

}// end list function 

let getAllfriendactions = (req, res) => {
    console.log(req.body.userId)
    friendaction.find({userId: req.body.userId})
        .select(' -__v -_id ')
        .lean()
        .sort({createdOn:-1})
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'friendaction Controller: getAllfriendactions', 10)
                let apiResponse = response.generate(true, 'Failed To Find User Details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No User Found', 'friendaction Controller: getAllfriendactions')
                let apiResponse = response.generate(true, 'No User Found', 404, null)
                res.send(apiResponse)
            } else {
                friendaction.deleteOne(result[0]).exec((err, result) => {
                    if (err) {
                        console.log(err)
                        logger.error(err.message, 'friend Controller: getAllUser', 10)
                        let apiResponse = response.generate(true, 'Failed To Find User Details', 500, null)
                    }else{
                        console.log("success")
                    }
                })
                let apiResponse = response.generate(false, 'friend actions Found', 200, result[0])
               
                res.send(apiResponse)
            }
        })
}// end get all users

let geteveryfriendactions = (req, res) => {
    console.log(req.body.userId)
    friendaction.find({userId: req.body.userId})
        .select(' -__v -_id ')
        .lean()
        .sort({createdOn:-1})
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'friendaction Controller: geteveryfriendactions', 10)
                let apiResponse = response.generate(true, 'Failed To Find User Details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No User Found', 'friendaction Controller: geteveryfriendactions')
                let apiResponse = response.generate(true, 'No User Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'friend action Found', 200, result)
               
                res.send(apiResponse)
            }
        })
}// end get all users

let deletefriendactions = (req, res) => {
    console.log(req.body.userId)
    friendaction.findOneAndDelete({userId: req.body.userId,previousValue:req.body.previousValue})
        .select(' -__v -_id ')
        .lean()
        .sort({createdOn:-1})
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'friendaction Controller: geteveryfriendactions', 10)
                let apiResponse = response.generate(true, 'Failed To Find User Details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No User Found', 'friendaction Controller: geteveryfriendactions')
                let apiResponse = response.generate(true, 'No User Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'friend action Found', 200, result)
               
                res.send(apiResponse)
            }
        })
}// end get all users

module.exports = {
    createfriendaction:createfriendaction,
    getAllfriendactions:getAllfriendactions,
    geteveryfriendactions:geteveryfriendactions,
    deletefriendactions:deletefriendactions
}