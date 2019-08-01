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
const todolistModel = mongoose.model('todolist')
const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken')




// start user todolist creation and save

let todoListCreation = (req, res) => {

    let validateUserInput = () => {
        return new Promise((resolve, reject) => {
            if (req.body.title) {
                let apiResponse = response.generate(false, 'One or More Parameter(s) is missing', 200, resolve)
                    resolve(apiResponse)
                }
             else {
                logger.error('Field Missing During User Creation', 'todolist heading', 5)
                let apiResponse = response.generate(true, 'One or More Parameter(s) is missing', 400, null)
                reject(apiResponse)
            }
        })
    }// end validate user input
    let createList = () => {
        return new Promise((resolve, reject) => {
            let a;
                            if(req.body.listy!==null){
                                    a= req.body.listy
                            }
                            else{
                                a=shortid.generate()
                            }
                        let newUser = new todolistModel({
                            listId: a,
                            userId: req.body.userId,
                            title: req.body.title,
                            subitem:req.body.subitem,
                            checked:false,
                            edit:false,
                            listGenerationTime: time.now()
                        })
                        newUser.save((err, newUser) => {
                            if (err) {
                                console.log(err)
                                logger.error(err.message, 'Failed to create list', 10)
                                let apiResponse = response.generate(true, 'Failed to create new list', 500, null)
                                reject(apiResponse)
                            } else {
                                let newUserObj = newUser.toObject();
                                resolve(newUserObj)
                            }
                        })
               
        })
    }// end create list function


    validateUserInput(req, res)
        .then(createList)
        .then((resolve) => {
            let apiResponse = response.generate(false, 'list created', 200, resolve)
            res.send(apiResponse)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })

}// end list function 

let findList = (req,res) => {
      // creating find query.
      let findQuery = {
        userId: req.params.userId
      }
      console.log(req.params.userId);

      todolistModel.find(findQuery)
        .select('-_id -__v')
        .sort('-listGenerationTime')
        .lean()
        .exec((err, result) => {
          if (err) {
            console.log(err)
            logger.error(err.message, 'todolist Controller: findlist', 10)
            let apiResponse = response.generate(true, `error occurred: ${err.message}`, 500, null)
            res.send(apiResponse)
          } else if (check.isEmpty(result)) {
            logger.info('No list Found', 'todolist Controller: findlist')
            let apiResponse = response.generate(true, req.params.userId, 432304, null)
            res.send(apiResponse)
          } else {

            // reversing array.
            let reverseResult = result.reverse()
            let apiResponse = response.generate(false, 'list Found', 200, result)
            res.send(apiResponse)
          }
        })
    
  } // end of the findChats function.

  let deleteUser = (req, res) => {

    todolistModel.findOneAndRemove({ 'listId': req.body.listId }).exec((err, result) => {
        if (err) {
            console.log(err)
            logger.error(err.message, 'todolist Controller: deleteUser', 10)
            let apiResponse = response.generate(true, 'Failed To delete user', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            logger.info('No list Found', 'todolist Controller: deleteUser')
            let apiResponse = response.generate(true, 'No User Found', 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'Deleted the list successfully', 200, result)
            res.send(apiResponse)
        }
    });
}

let editUser = (req, res) => {


    todolistModel.update({ listId: req.body.listId }, {title:req.body.title}).exec((err, result) => {
        if (err) {
            console.log(err)
            logger.error(err.message, 'todolist Controller:editUser', 10)
            let apiResponse = response.generate(true, 'Failed To edit user details', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            logger.info('No Header Found', 'todolist Controller: editUser')
            let apiResponse = response.generate(true, 'No User Found', 404, null)
            res.send(apiResponse)
        } else {
            console.log(req.body.listId);
            let apiResponse = response.generate(false, 'list details edited', 200, result)
            res.send(apiResponse)
        }
    });// end user model update
   
}

let editsub = (req, res) => {
    todolistModel.update({ 'listId': req.body.listId }, {$push:{
        subitem:{
            subitem:req.body.content,
            subedit:req.body.subedit,
            checked:false
        }
    }}).exec((err, result) => {
        if (err) {
            console.log(err)
            logger.error(err.message, 'todolist Controller:editsub', 10)
            let apiResponse = response.generate(true, 'Failed To edit sub details', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            logger.info('No Header Found', 'todolist Controller: editsub')
            let apiResponse = response.generate(true, 'No sub Found', 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'sub list details edited', 201, result)
            res.send(apiResponse)
        }
    });// end user model update
}

let deletesub = (req, res) => {


        todolistModel.update({ 'listId': req.body.listId }, {$pull: {subitem:{subitem: req.body.content}}}).exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'todolist Controller:deletesub', 10)
                let apiResponse = response.generate(true, 'Failed To delete sub details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No Header Found', 'todolist Controller: deletesub')
                let apiResponse = response.generate(true, 'No sub Found', 404, null)
                res.send(apiResponse)
            } else {
                console.log(req.body.content)
                let apiResponse = response.generate(false, 'sub delted', 200, result)
                res.send(apiResponse)
            }
        });// end user model update
     }// end edit user

     let updatesub = (req, res) => {
        todolistModel.updateOne({ 'listId': req.body.listId ,"subitem.subitem" : req.body.edits},{ $set: { "subitem.$.subitem" : req.body.content } } ).exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'todolist Controller:updatesub', 10)
                let apiResponse = response.generate(true, 'Failed To update sub details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No Header Found', 'todolist Controller: updatesub')
                let apiResponse = response.generate(true, 'No sub Found', 404, null)
                res.send(apiResponse)
            } else {
                console.log(req.body.content)
                let apiResponse = response.generate(false, 'sub list details edited', 200, result)
                res.send(apiResponse)
            }
        });// end user model update
     }// end edit user

     let updatecheck = (req, res) => {
        todolistModel.updateOne({ 'listId': req.body.listId ,"subitem.subitem" : req.body.edits},{ $set: { "subitem.$.checked" : req.body.checked } } ).exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'todolist Controller:update', 10)
                let apiResponse = response.generate(true, 'Failed To update check details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No Header Found', 'todolist Controller: updatecheck')
                let apiResponse = response.generate(true, 'No check Found', 404, null)
                res.send(apiResponse)
            } else {
                console.log(req.body.checked)
                let apiResponse = response.generate(false, 'sub list check details edited', 200, result)
                res.send(apiResponse)
            }
        });// end user model update
     }// end edit user

     let updatecheckheader = (req, res) => {


        todolistModel.update({ 'listId': req.body.listId,userId:req.body.userId }, {checked:req.body.checked}).exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'todolist Controller:updatecheckheader', 10)
                let apiResponse = response.generate(true, 'Failed update check details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No Header Found', 'todolist Controller:updatecheckheader')
                let apiResponse = response.generate(true, 'No check Found', 404, null)
                res.send(apiResponse)
            } else {
                console.log(req.body.checked)
                let apiResponse = response.generate(false, 'header details edited', 200, result)
                res.send(apiResponse)
            }
        });// end user model update
       
    }

module.exports = {

    todoListCreation:todoListCreation,
    findList:findList,
    deleteUser:deleteUser,
    editUser:editUser,
    deletesub:deletesub,
    updatesub:updatesub,
    editsub:editsub,
    updatecheck:updatecheck,
    updatecheckheader:updatecheckheader

}// end exports
