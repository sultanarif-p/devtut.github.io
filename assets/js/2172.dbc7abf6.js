(window.webpackJsonp=window.webpackJsonp||[]).push([[2172],{2519:function(t,n,s){"use strict";s.r(n);var a=s(19),o=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"connect-to-mongodb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#connect-to-mongodb"}},[t._v("#")]),t._v(" Connect to Mongodb")]),t._v(" "),s("p",[t._v("MongoDB is a free and open-source cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemas.")]),t._v(" "),s("p",[t._v("For more details go to "),s("a",{attrs:{href:"https://www.mongodb.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.mongodb.com/"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"simple-example-to-connect-mongodb-from-node-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#simple-example-to-connect-mongodb-from-node-js"}},[t._v("#")]),t._v(" Simple example to Connect mongoDB from Node.JS")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("MongoClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("connect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mongodb://localhost:27017/myNewDB'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("db")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n        console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Unable to connect DB. Error: "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" \n        console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Connected to DB'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("myNewDB is DB name, if it does not exists in database then it will create automatically with this call.")]),t._v(" "),s("h2",{attrs:{id:"simple-way-to-connect-mongodb-with-core-node-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#simple-way-to-connect-mongodb-with-core-node-js"}},[t._v("#")]),t._v(" Simple way to Connect mongoDB with core Node.JS")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('\n var MongoClient = require(\'mongodb\').MongoClient;\n    \n    //connection with mongoDB\n    MongoClient.connect("mongodb://localhost:27017/MyDb", function (err, db) {\n          //check the connection\n if(err){\n           console.log("connection failed.");      \n}else{\n                    console.log("successfully connected to mongoDB.");\n    });\n\n')])])]),s("h4",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),s("ul",[s("li",[t._v("MongoClient.connect('mongodb://127.0.0.1:27017/crud',function (err,db) {//do womething here});")])])])}),[],!1,null,null,null);n.default=o.exports}}]);