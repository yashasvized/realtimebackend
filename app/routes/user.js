const express = require('express');
const router = express.Router();
const userController = require("./../../app/controllers/userController");
const friendController = require("./../../app/controllers/friendController");
const todolistController = require("./../../app/controllers/todolistController");
const friendactions = require("./../../app/controllers/friendActionController");
const appConfig = require("./../../config/appConfig")
const auth = require('./../middlewares/auth')

module.exports.setRouter = (app) => {
    let baseUrl = `${appConfig.apiVersion}/users`;


     /**
     * @apiGroup friendaction
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/getallaction api for getting friend actions.
     *
     * @apiParam {string} userId userId of the user. (body params) (required)
     * 
     * 
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "friend action found",
            "status": 200,
            "data": [{
                friendId:fksamgsaf,
               userId:df9w3f3,
                userName:"fgfg",
                friendName:"ffd",
               action:"postlist",
               createdOn:Date.now()
        }]
    */


    app.post(`${baseUrl}/getallaction`,friendactions.geteveryfriendactions)

    var path = require('path');

    var path = require('path');
    var filePath = "./apidoc/index.html"
    var resolvedPath = path.resolve(filePath);
    console.log(resolvedPath);

    app.get(`${baseUrl}/apidoc`,(req,res)=>{
        res.sendFile(resolvedPath);
    })


     /**
     * @apiGroup friendaction
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/getaction api for getting friend actions one at a time.
     *
     * @apiParam {string} userId userId of the user. (body params) (required)
     * 
     * 
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "friend action found",
            "status": 200,
            "data": {
                friendId:fksamgsaf,
               userId:df9w3f3,
                userName:"fgfg",
                friendName:"ffd",
               action:"postlist",
               createdOn:Date.now()
        }
    */

    app.post(`${baseUrl}/getaction`,friendactions.getAllfriendactions)


    /**
     * @apiGroup friendaction
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/saveaction api for saving friend actions.
     *
     * @apiParam {string} userId userId of the user. (body params) (required)
     * @apiParam {string} friendId friendId of the friend. (body params) (required)
     * @apiParam {string} friendName friendName of the friend. (body params) (required)
     * @apiParam {string} userName userName of the user. (body params) (required)
     * @apiParam {string} action action of the friend. (body params) (required)
     * 
     * 
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "friend action saved",
            "status": 200,
            "data": {
                friendId:fksamgsaf,
               userId:df9w3f3,
                userName:"fgfg",
                friendName:"ffd",
               action:"postlist",
               createdOn:Date.now()
        }
    */

   app.get(`${baseUrl}/allusers`,userController.getAllUser)


    app.post(`${baseUrl}/saveaction`,friendactions.createfriendaction)


    //friendactions


     /**
     * @apiGroup friend
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/sentreq api for sending friends request.
     *
     * @apiParam {string} userId userId of the user. (body params) (required)
     * 
     * 
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "friend request sent",
            "status": 200,
            "data": {
                friendId:fksamgsaf,
               userId:df9w3f3,
                userName:"fgfg",
                friendName:"ffd",
                isfriend:false,
                createdOn:data.now(),
                friendreqsent:true
        }
    */

    app.post(`${baseUrl}/sendreq`,friendController.friendreqsent)


      /**
     * @apiGroup friend
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/getsentreq api for getting friends request sent of user.
     *
     * @apiParam {string} userId userId of the user. (body params) (required)
     * 
     * 
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "all friend request found",
            "status": 200,
            "data": {
                friendId:fksamgsaf,
               userId:df9w3f3,
                userName:"fgfg",
                friendName:"ffd",
                isfriend:true,
                createdOn:data.now(),
                friendreqsent:true
        }
    */

    app.post(`${baseUrl}/getsentreq`,friendController.getAllfriendReqsent)


      /**
     * @apiGroup friend
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/getrecievedreq api for getting friends request recieved of user.
     *
     * @apiParam {string} userId userId of the user. (body params) (required)
     * 
     * 
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "all friend request found",
            "status": 200,
            "data": {
                friendId:fksamgsaf,
               userId:df9w3f3,
                userName:"fgfg",
                friendName:"ffd",
                isfriend:true,
                createdOn:data.now(),
                friendreqrecieved:true
        }
    */

    app.post(`${baseUrl}/getrecievedreq`,friendController.getAllfriendReqrecieved)


      /**
     * @apiGroup friend
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/acceptfriend api for accepting friend request.
     *
     * @apiParam {string} userId userId of the user. (body params) (required)
     * 
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "list created",
            "status": 200,
            "data": {
              n:1,
               nmodified:1,
                nok:1
        }
    */

    app.post(`${baseUrl}/acceptfriend`,friendController.acceptfriendreq)


      /**
     * @apiGroup friend
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/getfriend api for getting friends of user.
     *
     * @apiParam {string} userId userId of the user. (body params) (required)
     *  @apiParam {string} friendId friendId of the friend. (body params) (required)
     * 
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "all friend found",
            "status": 200,
            "data": {
                friendId:fksamgsaf,
               userId:df9w3f3,
                userName:"fgfg",
                friendName:"ffd",
                isfriend:true,
                createdOn:data.now()
        }
    */

    app.post(`${baseUrl}/getfriends`,friendController.getAllfriend)

    

    //end of friend routes

      /**
     * @apiGroup todolist
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/postlist api for posting list.
     *
     * @apiParam {string} userId userId of the list. (body params) (required)
     * @apiParam {string} title title of the list. (body params) (required)
     * 
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "list created",
            "status": 200,
            "data": {
                listId:fksamgsaf,
               userId:df9w3f3,
                title:"fgfg",
                checked:false,
                subitem:[],
                listgenerationtime:data.now()
        }
    */


    app.post(`${baseUrl}/postlist`,todolistController.todoListCreation)





       /**
     * @apiGroup todolist
     * @apiVersion  1.0.0
     * @api {get} /api/v1/users/:userId api for getting list.
     *
     * @apiParam {string} userId userId of the list. (params) (required)
     * 
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "list found",
            "status": 200,
            "data": [{
                listId:fksamgsaf,
               userId:df9w3f3,
                title:"fgfg",
                checked:false,
                subitem:[],
                listgenerationtime:data.now()
        }]
    */



      /**
     * @apiGroup todolist
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/delete api for deleting list.
     *
     * @apiParam {string} listId listId of the list. (body params) (required)
     * 
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "list deleted successfully",
            "status": 200,
            "data": {
                n:1,
               nmodified:1,
                nok:1
        }
    */
    app.post(`${baseUrl}/delete`,todolistController.deleteUser)


      /**
     * @apiGroup todolist
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/deletesub api for deleting sub of list.
     *
     * @apiParam {string} listId listId of the list. (body params) (required)
     * 
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "sub deleted",
            "status": 200,
            "data": {
                n:1,
               nmodified:1,
                nok:1
        }
    */

    app.post(`${baseUrl}/deletesub`,todolistController.deletesub)


      /**
     * @apiGroup todolist
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/updatesub api for updating sub of list.
     *
     * @apiParam {string} listId listId of the list. (body params) (required)
     * @apiParam {string} edits edits of the list. (body params) (required)
     * 
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "sub list details edited",
            "status": 200,
            "data": {
                n:1,
               nmodified:1,
                nok:1
        }
    */

    app.post(`${baseUrl}/updatesub`,todolistController.updatesub)



    /**
     * @apiGroup todolist
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/updatecheck api for updating check of list.
     *
     * @apiParam {string} listId listId of the list. (body params) (required)
     * 
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "sub list check details edited",
            "status": 200,
            "data": {
                n:1,
               nmodified:1,
                nok:1
        }
    */

    app.post(`${baseUrl}/updatecheck`,todolistController.updatecheckheader)



 /**
     * @apiGroup todolist
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/updatechecksub api for updating check of sub list.
     *
     * @apiParam {string} listId listId of the list. (body params) (required)
     * @apiParam {string} content content of the sub list. (body params) (required)
     * 
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "sub list check details edited",
            "status": 200,
            "data": {
                n:1,
               nmodified:1,
                nok:1
        }
    */
    app.post(`${baseUrl}/updatechecksub`,todolistController.updatecheck)


     /**
     * @apiGroup todolist
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/edit api for editing sub list.
     *
     * @apiParam {string} listId listId of the list. (body params) (required)
     * @apiParam {string} content content of the sub list. (body params) (required)
     * @apiParam {string} subedit subedit of the sub list. (body params) (required)
     * 
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "sub list details edited",
            "status": 200,
            "data": {
                n:1,
               nmodified:1,
                nok:1
        }
    */

    app.post(`${baseUrl}/editsub`,todolistController.editsub)



     /**
     * @apiGroup todolist
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/edit api for editing list.
     *
     * @apiParam {string} listId listId of the list. (body params) (required)
     * 
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "list details edited",
            "status": 200,
            "data": {
                n:1,
               nmodified:1,
                nok:1
        }
    */
    app.post(`${baseUrl}/edit`,todolistController.editUser)







    app.get("/confirmation/:token",userController.updatePassword)


     /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/update api for user signup.
     *
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     * 
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "password reset sent",
            "status": 200,
            "data": {
                "mobileNumber": 2234435524,
                "email": "someone@mail.com",
                "lastName": "Sengar",
                "firstName": "Rishabh",
                "userId": "-E9zxTYA8",
                "password":"encrypted"

        }
    */

   app.post(`${baseUrl}/confirmation`,userController.forgetPassword)



 /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/update/:token api for updating password.
     *    
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
             password updated
         }
    */
   app.get(`${baseUrl}/updatepassword`,userController.updatePassword)

   
  /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/allusers api for geting all users.
     *      
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
      {
        "error": false,
            "message": "all user found",
            "status": 200,
     
      [
         {
                "mobileNumber": 2234435524,
                "email": "someone@mail.com",
                "lastName": "Sengar",
                "firstName": "Rishabh",
                "userId": "-E9zxTYA8",

        },
          {
                "mobileNumber": 333435524,
                "email": "someone@mail.com",
                "lastName": "yash",
                "firstName": "Rishabh",
                "userId": "-E9zxTYA8",

        }
    ]
}
    */



  //  app.get(`${baseUrl}/view/all`, auth.isAuthorized, userController.getAllUser);


    // params: userId.
   // app.get(`${baseUrl}/:userId/details`, auth.isAuthorized, userController.getSingleUser);

  //  app.post(`/chat/:userId`, userController.chatUser);

  //  app.post(`/chatdis/:userId`, userController.disconnectchatUser);
    
    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/login api for user signup.
     *
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     * @apiParam {string} firstName firstName of the user. (body params) (required)
     * @apiParam {string} lastName lastName of the user. (body params) (required)
     * @apiParam {number} mobileNumber mobileNumber of the user. (body params) (required)
     * 
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "Signup Successful",
            "status": 200,
            "data": {
                "mobileNumber": 2234435524,
                "email": "someone@mail.com",
                "lastName": "Sengar",
                "firstName": "Rishabh",
                "userId": "-E9zxTYA8",
                "password":"encrypted"

        }
    */
    app.post(`${baseUrl}/signup`, userController.signUpFunction);

    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/login api for user login.
     *
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "Login Successful",
            "status": 200,
            "data": {
                "authToken": "eyJhbGciOiJIUertyuiopojhgfdwertyuVCJ9.MCwiZXhwIjoxNTIwNDI29tIiwibGFzdE5hbWUiE4In19.hAR744xIY9K53JWm1rQ2mc",
                "userDetails": {
                "mobileNumber": 2234435524,
                "email": "someone@mail.com",
                "lastName": "Sengar",
                "firstName": "Rishabh",
                "userId": "-E9zxTYA8"
            }

        }
    */

    app.post(`${baseUrl}/login`, userController.loginFunction);


    app.get(`${baseUrl}/:userId`,todolistController.findList)

   // app.post(`${baseUrl}/logout`, auth.isAuthorized, userController.logout);

}
