define({ "api": [
  {
    "group": "friend",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/acceptfriend",
    "title": "api for accepting friend request.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"list created\",\n    \"status\": 200,\n    \"data\": {\n      n:1,\n       nmodified:1,\n        nok:1\n}",
          "type": "object"
        }
      ]
    },
    "filename": "C:/Users/Yash/Desktop/New folder/Backend/app/routes/user.js",
    "groupTitle": "friend",
    "name": "PostApiV1UsersAcceptfriend"
  },
  {
    "group": "friend",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/getfriend",
    "title": "api for getting friends of user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "friendId",
            "description": "<p>friendId of the friend. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"all friend found\",\n    \"status\": 200,\n    \"data\": {\n        friendId:fksamgsaf,\n       userId:df9w3f3,\n        userName:\"fgfg\",\n        friendName:\"ffd\",\n        isfriend:true,\n        createdOn:data.now()\n}",
          "type": "object"
        }
      ]
    },
    "filename": "C:/Users/Yash/Desktop/New folder/Backend/app/routes/user.js",
    "groupTitle": "friend",
    "name": "PostApiV1UsersGetfriend"
  },
  {
    "group": "friend",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/getrecievedreq",
    "title": "api for getting friends request recieved of user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"all friend request found\",\n    \"status\": 200,\n    \"data\": {\n        friendId:fksamgsaf,\n       userId:df9w3f3,\n        userName:\"fgfg\",\n        friendName:\"ffd\",\n        isfriend:true,\n        createdOn:data.now(),\n        friendreqrecieved:true\n}",
          "type": "object"
        }
      ]
    },
    "filename": "C:/Users/Yash/Desktop/New folder/Backend/app/routes/user.js",
    "groupTitle": "friend",
    "name": "PostApiV1UsersGetrecievedreq"
  },
  {
    "group": "friend",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/getsentreq",
    "title": "api for getting friends request sent of user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"all friend request found\",\n    \"status\": 200,\n    \"data\": {\n        friendId:fksamgsaf,\n       userId:df9w3f3,\n        userName:\"fgfg\",\n        friendName:\"ffd\",\n        isfriend:true,\n        createdOn:data.now(),\n        friendreqsent:true\n}",
          "type": "object"
        }
      ]
    },
    "filename": "C:/Users/Yash/Desktop/New folder/Backend/app/routes/user.js",
    "groupTitle": "friend",
    "name": "PostApiV1UsersGetsentreq"
  },
  {
    "group": "friend",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/sentreq",
    "title": "api for sending friends request.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"friend request sent\",\n    \"status\": 200,\n    \"data\": {\n        friendId:fksamgsaf,\n       userId:df9w3f3,\n        userName:\"fgfg\",\n        friendName:\"ffd\",\n        isfriend:false,\n        createdOn:data.now(),\n        friendreqsent:true\n}",
          "type": "object"
        }
      ]
    },
    "filename": "C:/Users/Yash/Desktop/New folder/Backend/app/routes/user.js",
    "groupTitle": "friend",
    "name": "PostApiV1UsersSentreq"
  },
  {
    "group": "friendaction",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/getaction",
    "title": "api for getting friend actions one at a time.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"friend action found\",\n    \"status\": 200,\n    \"data\": {\n        friendId:fksamgsaf,\n       userId:df9w3f3,\n        userName:\"fgfg\",\n        friendName:\"ffd\",\n       action:\"postlist\",\n       createdOn:Date.now()\n}",
          "type": "object"
        }
      ]
    },
    "filename": "C:/Users/Yash/Desktop/New folder/Backend/app/routes/user.js",
    "groupTitle": "friendaction",
    "name": "PostApiV1UsersGetaction"
  },
  {
    "group": "friendaction",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/getallaction",
    "title": "api for getting friend actions.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"friend action found\",\n    \"status\": 200,\n    \"data\": [{\n        friendId:fksamgsaf,\n       userId:df9w3f3,\n        userName:\"fgfg\",\n        friendName:\"ffd\",\n       action:\"postlist\",\n       createdOn:Date.now()\n}]",
          "type": "object"
        }
      ]
    },
    "filename": "C:/Users/Yash/Desktop/New folder/Backend/app/routes/user.js",
    "groupTitle": "friendaction",
    "name": "PostApiV1UsersGetallaction"
  },
  {
    "group": "friendaction",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/saveaction",
    "title": "api for saving friend actions.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "friendId",
            "description": "<p>friendId of the friend. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "friendName",
            "description": "<p>friendName of the friend. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userName",
            "description": "<p>userName of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "action",
            "description": "<p>action of the friend. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"friend action saved\",\n    \"status\": 200,\n    \"data\": {\n        friendId:fksamgsaf,\n       userId:df9w3f3,\n        userName:\"fgfg\",\n        friendName:\"ffd\",\n       action:\"postlist\",\n       createdOn:Date.now()\n}",
          "type": "object"
        }
      ]
    },
    "filename": "C:/Users/Yash/Desktop/New folder/Backend/app/routes/user.js",
    "groupTitle": "friendaction",
    "name": "PostApiV1UsersSaveaction"
  },
  {
    "group": "todolist",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/:userId",
    "title": "api for getting list.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the list. (params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"list found\",\n    \"status\": 200,\n    \"data\": [{\n        listId:fksamgsaf,\n       userId:df9w3f3,\n        title:\"fgfg\",\n        checked:false,\n        subitem:[],\n        listgenerationtime:data.now()\n}]",
          "type": "object"
        }
      ]
    },
    "filename": "C:/Users/Yash/Desktop/New folder/Backend/app/routes/user.js",
    "groupTitle": "todolist",
    "name": "GetApiV1UsersUserid"
  },
  {
    "group": "todolist",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/delete",
    "title": "api for deleting list.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listId",
            "description": "<p>listId of the list. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"list deleted successfully\",\n    \"status\": 200,\n    \"data\": {\n        n:1,\n       nmodified:1,\n        nok:1\n}",
          "type": "object"
        }
      ]
    },
    "filename": "C:/Users/Yash/Desktop/New folder/Backend/app/routes/user.js",
    "groupTitle": "todolist",
    "name": "PostApiV1UsersDelete"
  },
  {
    "group": "todolist",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/deletesub",
    "title": "api for deleting sub of list.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listId",
            "description": "<p>listId of the list. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"sub deleted\",\n    \"status\": 200,\n    \"data\": {\n        n:1,\n       nmodified:1,\n        nok:1\n}",
          "type": "object"
        }
      ]
    },
    "filename": "C:/Users/Yash/Desktop/New folder/Backend/app/routes/user.js",
    "groupTitle": "todolist",
    "name": "PostApiV1UsersDeletesub"
  },
  {
    "group": "todolist",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/edit",
    "title": "api for editing list.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listId",
            "description": "<p>listId of the list. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"list details edited\",\n    \"status\": 200,\n    \"data\": {\n        n:1,\n       nmodified:1,\n        nok:1\n}",
          "type": "object"
        }
      ]
    },
    "filename": "C:/Users/Yash/Desktop/New folder/Backend/app/routes/user.js",
    "groupTitle": "todolist",
    "name": "PostApiV1UsersEdit"
  },
  {
    "group": "todolist",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/edit",
    "title": "api for editing sub list.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listId",
            "description": "<p>listId of the list. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>content of the sub list. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "subedit",
            "description": "<p>subedit of the sub list. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"sub list details edited\",\n    \"status\": 200,\n    \"data\": {\n        n:1,\n       nmodified:1,\n        nok:1\n}",
          "type": "object"
        }
      ]
    },
    "filename": "C:/Users/Yash/Desktop/New folder/Backend/app/routes/user.js",
    "groupTitle": "todolist",
    "name": "PostApiV1UsersEdit"
  },
  {
    "group": "todolist",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/postlist",
    "title": "api for posting list.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the list. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>title of the list. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"list created\",\n    \"status\": 200,\n    \"data\": {\n        listId:fksamgsaf,\n       userId:df9w3f3,\n        title:\"fgfg\",\n        checked:false,\n        subitem:[],\n        listgenerationtime:data.now()\n}",
          "type": "object"
        }
      ]
    },
    "filename": "C:/Users/Yash/Desktop/New folder/Backend/app/routes/user.js",
    "groupTitle": "todolist",
    "name": "PostApiV1UsersPostlist"
  },
  {
    "group": "todolist",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/updatecheck",
    "title": "api for updating check of list.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listId",
            "description": "<p>listId of the list. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"sub list check details edited\",\n    \"status\": 200,\n    \"data\": {\n        n:1,\n       nmodified:1,\n        nok:1\n}",
          "type": "object"
        }
      ]
    },
    "filename": "C:/Users/Yash/Desktop/New folder/Backend/app/routes/user.js",
    "groupTitle": "todolist",
    "name": "PostApiV1UsersUpdatecheck"
  },
  {
    "group": "todolist",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/updatechecksub",
    "title": "api for updating check of sub list.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listId",
            "description": "<p>listId of the list. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>content of the sub list. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"sub list check details edited\",\n    \"status\": 200,\n    \"data\": {\n        n:1,\n       nmodified:1,\n        nok:1\n}",
          "type": "object"
        }
      ]
    },
    "filename": "C:/Users/Yash/Desktop/New folder/Backend/app/routes/user.js",
    "groupTitle": "todolist",
    "name": "PostApiV1UsersUpdatechecksub"
  },
  {
    "group": "todolist",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/updatesub",
    "title": "api for updating sub of list.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listId",
            "description": "<p>listId of the list. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "edits",
            "description": "<p>edits of the list. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"sub list details edited\",\n    \"status\": 200,\n    \"data\": {\n        n:1,\n       nmodified:1,\n        nok:1\n}",
          "type": "object"
        }
      ]
    },
    "filename": "C:/Users/Yash/Desktop/New folder/Backend/app/routes/user.js",
    "groupTitle": "todolist",
    "name": "PostApiV1UsersUpdatesub"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/allusers",
    "title": "api for geting all users.",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "      {\n        \"error\": false,\n            \"message\": \"all user found\",\n            \"status\": 200,\n     \n      [\n         {\n                \"mobileNumber\": 2234435524,\n                \"email\": \"someone@mail.com\",\n                \"lastName\": \"Sengar\",\n                \"firstName\": \"Rishabh\",\n                \"userId\": \"-E9zxTYA8\",\n\n        },\n          {\n                \"mobileNumber\": 333435524,\n                \"email\": \"someone@mail.com\",\n                \"lastName\": \"yash\",\n                \"firstName\": \"Rishabh\",\n                \"userId\": \"-E9zxTYA8\",\n\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "C:/Users/Yash/Desktop/New folder/Backend/app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersAllusers"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "api for user signup.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>mobileNumber of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Signup Successful\",\n    \"status\": 200,\n    \"data\": {\n        \"mobileNumber\": 2234435524,\n        \"email\": \"someone@mail.com\",\n        \"lastName\": \"Sengar\",\n        \"firstName\": \"Rishabh\",\n        \"userId\": \"-E9zxTYA8\",\n        \"password\":\"encrypted\"\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "C:/Users/Yash/Desktop/New folder/Backend/app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogin"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "api for user login.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Login Successful\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"eyJhbGciOiJIUertyuiopojhgfdwertyuVCJ9.MCwiZXhwIjoxNTIwNDI29tIiwibGFzdE5hbWUiE4In19.hAR744xIY9K53JWm1rQ2mc\",\n        \"userDetails\": {\n        \"mobileNumber\": 2234435524,\n        \"email\": \"someone@mail.com\",\n        \"lastName\": \"Sengar\",\n        \"firstName\": \"Rishabh\",\n        \"userId\": \"-E9zxTYA8\"\n    }\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "C:/Users/Yash/Desktop/New folder/Backend/app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogin"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/update",
    "title": "api for user signup.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"password reset sent\",\n    \"status\": 200,\n    \"data\": {\n        \"mobileNumber\": 2234435524,\n        \"email\": \"someone@mail.com\",\n        \"lastName\": \"Sengar\",\n        \"firstName\": \"Rishabh\",\n        \"userId\": \"-E9zxTYA8\",\n        \"password\":\"encrypted\"\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "C:/Users/Yash/Desktop/New folder/Backend/app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersUpdate"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/update/:token",
    "title": "api for updating password.",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    password updated\n}",
          "type": "object"
        }
      ]
    },
    "filename": "C:/Users/Yash/Desktop/New folder/Backend/app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersUpdateToken"
  }
] });
