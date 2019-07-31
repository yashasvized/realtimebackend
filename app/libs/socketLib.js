/**
 * modules dependencies.
 */
const socketio = require('socket.io');
const mongoose = require('mongoose');
const shortid = require('shortid');
const logger = require('./loggerLib.js');
const events = require('events');
const eventEmitter = new events.EventEmitter();

const tokenLib = require("./tokenLib.js");
const check = require("./checkLib.js");
const response = require('./responseLib')

let setServer = (server) => {

    let allOnlineUsers = []

    let io = socketio.listen(server);

    let myIo = io.of('/')

    myIo.on('connection',(socket) => {

        console.log("on connection--emitting verify user");



         /**
     * @apiGroup sockets
     * @api verifyuser verifyuser(event)
     *
     * @apiDescription Emits an event as soon as user connects to the server
    */
        socket.emit("verifyUser", "");

        // code to verify the user and make him online


        
         /**
     * @apiGroup sockets
     * @api set-user set-user(event)
     *
     * @apiDescription verifies the authtoken of the user and sets it
    */

        socket.on('set-user',(authToken) => {

            console.log("set-user called")
            tokenLib.verifyClaimWithoutSecret(authToken,(err,user)=>{
                if(err){
                    socket.emit('auth-error', { status: 500, error: 'Please provide correct auth token' })
                }
                else{

                    console.log("user is verified..setting details");
                    let currentUser = user.data;
                    // setting socket user id 
                    socket.userId = currentUser.userId
                    let fullName = `${currentUser.firstName} ${currentUser.lastName}`
                    console.log(`${fullName} is online`);


                    let userObj = {userId:currentUser.userId,fullName:fullName}
                    allOnlineUsers.push(userObj)
                    console.log(allOnlineUsers)

                    // setting room name
                    socket.room = 'edChat'
                    // joining chat-group room.
                    socket.join(socket.room)
                    myIo.emit('online-user-list',allOnlineUsers);

                }


            })
          
        }) // end of listening set-user event


        socket.on('disconnect', () => {
            // disconnect the user from socket
            // remove the user from online list
            // unsubscribe the user from his own channel

            console.log("user is disconnected");
            // console.log(socket.connectorName);
            console.log(socket.userId);


            var removeIndex = allOnlineUsers.map(function(user) { return user.userId; }).indexOf(socket.userId);
            allOnlineUsers.splice(removeIndex,1)
            console.log(allOnlineUsers)

            socket.to(socket.room).broadcast.emit('online-user-list',allOnlineUsers);
            socket.leave(socket.room)


            

        


        }) // end of on disconnect

        socket.on('get-users',(data)=>{
            myIo.emit('all-users',data)
        })


               /**
     * @apiGroup sockets
     * @api chat-msg chat-msg(event)
     *
     * @apiDescription Used for sending friend request to the particular Id
    */
        socket.on('chat-msg', (data) => {
                myIo.emit(data.friendId,data)
             

        });


                   /**
     * @apiGroup sockets
     * @api post-msg post-msg(event)
     *
     * @apiDescription Used when someone post list in Id so that other users can see it in realtime
    */
        socket.on('post-msg', (data) => {
            console.log("socket post-msg called")
            if(data.friends!==null)
            for(let i = 0;i<data.friends.length;i++){
                myIo.emit(data.friends[i].friendId+"1",data)
                console.log(data.friends[i].friendId+"1");
            }         

        });

                      /**
     * @apiGroup sockets
     * @api check-msg check-msg(event)
     *
     * @apiDescription Used when someone check list in Id so that other users can see it in realtime
    */

        socket.on('check-msg', (data) => {
            console.log("socket check-msg called")
            if(data.friends!==null)
            for(let i = 0;i<data.friends.length;i++){
                myIo.emit(data.friends[i].friendId+"7",data)
                console.log(data.friends[i].friendId+"7");
            }         

        });

                      /**
     * @apiGroup sockets
     * @api checksub-msg checksub-msg(event)
     *
     * @apiDescription Used when someone checksub list in Id so that other users can see it in realtime
    */
        socket.on('checksub-msg', (data) => {
            console.log("socket check-msg called")
            if(data.friends!==null)
            for(let i = 0;i<data.friends.length;i++){
                myIo.emit(data.friends[i].friendId+"8",data)
                console.log(data.friends[i].friendId+"7");
            }         

        });

                      /**
     * @apiGroup sockets
     * @api del-msg del-msg(event)
     *
     * @apiDescription Used when someone delete list in Id so that other users can see it in realtime
    */
        socket.on('del-msg', (data) => {
            if(data.friends!==null)
            console.log("socket del-msg called")
            for(let i = 0;i<data.friends.length;i++){
                myIo.emit(data.friends[i].friendId+"2",data)
            }         

        });

                      /**
     * @apiGroup sockets
     * @api update-msg update-msg(event)
     *
     * @apiDescription Used when someone update list in Id so that other users can see it in realtime
    */
        socket.on('update-msg', (data) => {
            console.log("socket update-msg called")
            if(data.friends!==undefined){
            for(let i = 0;i<data.friends.length;i++){
                myIo.emit(data.friends[i].friendId+"3",data)
            }         
        }
        });
                      /**
     * @apiGroup sockets
     * @api sub-msg sub-msg(event)
     *
     * @apiDescription Used when someone post sub list in Id so that other users can see it in realtime
    */
        socket.on('sub-msg', (data) => {
            console.log("socket sub-msg called")
            if(data.friends!==null)
            for(let i = 0;i<data.friends.length;i++){
                myIo.emit(data.friends[i].friendId+"4",data)
            }         

        });


                          /**
     * @apiGroup sockets
     * @api delsub-msg delsub-msg(event)
     *
     * @apiDescription Used when someone post sub list in Id so that other users can see it in realtime
    */
        socket.on('delsub-msg', (data) => {
            console.log("socket sub-msg called")
            if(data.friends!==null)
            for(let i = 0;i<data.friends.length;i++){
                myIo.emit(data.friends[i].friendId+"5",data)
            }         

        });

                              /**
     * @apiGroup sockets
     * @api editsub-msg editsub-msg(event)
     *
     * @apiDescription Used when someone edit sub list in Id so that other users can see it in realtime
    */
        socket.on('editsub-msg', (data) => {
            console.log("socket delsub-msg called")
            if(data.friends!==null)
            for(let i = 0;i<data.friends.length;i++){
                myIo.emit(data.friends[i].friendId+"6",data)
            }         

        });

                                    /**
     * @apiGroup sockets
     * @api accept accept(event)
     *
     * @apiDescription Used when someone accept friend request in Id so that other user can see it in realtime
    */
        socket.on('accept', (data) => {
            console.log("accept called")
            console.log(data);
            console.log(data.friendId);

            myIo.emit(data.friendId+data.friendName,data)

        });


    });

}


module.exports = {
    setServer: setServer
}
