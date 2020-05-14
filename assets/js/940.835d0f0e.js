(window.webpackJsonp=window.webpackJsonp||[]).push([[940],{1286:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"css-image-sprites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-image-sprites"}},[t._v("#")]),t._v(" CSS Image Sprites")]),t._v(" "),a("h2",{attrs:{id:"a-basic-implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-basic-implementation"}},[t._v("#")]),t._v(" A Basic Implementation")]),t._v(" "),a("p",[a("strong",[t._v("What's an image sprite?")])]),t._v(" "),a("p",[t._v("An image sprite is a single asset located within an image sprite sheet.\nAn image sprite sheet is an image file that contains more than one asset that can be extracted from it.")]),t._v(" "),a("p",[t._v("For example:")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://i.stack.imgur.com/XuyVW.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://i.stack.imgur.com/XuyVW.png",alt:"a basic image sprite sheet"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("The image above is an image sprite sheet, and each one of those stars is a sprite within the sprite sheet. These sprite sheets are useful because they improve performance by reducing the number of HTTP requests a browser might have to make.")]),t._v(" "),a("p",[t._v("So how do you implement one? Here's some example code.")]),t._v(" "),a("p",[a("strong",[t._v("HTML")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("<div class="),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"icon icon1"')]),t._v("></div>\n<div class="),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"icon icon2"')]),t._v("></div>\n<div class="),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"icon icon3"')]),t._v("></div>\n\n")])])]),a("p",[a("strong",[t._v("CSS")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".icon")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("“icons-sprite.png”"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inline-block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".icon1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0px 0px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".icon2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -20px 0px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".icon3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -40px 0px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("By using setting the sprite's width and height and by using the background-position property in CSS (with an x and y value) you can easily extract sprites from a sprite sheet using CSS.")]),t._v(" "),a("h4",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),a("li",[t._v("**//Using background-position**"),a("br"),t._v('\nbackground: url("sprite-image.png");'),a("br"),t._v("\nbackground-position: -20px 50px;")]),t._v(" "),a("li",[t._v("**//Background property shorthand**"),a("br"),t._v('\nbackground: url("sprite-image.png") -20px 50px;')]),t._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),a("p",[t._v("For some use cases, sprites are slowly falling out of favor, being replaced by icon webfonts or "),a("a",{attrs:{href:"http://stackoverflow.com/documentation/svg/963/introduction-to-svg#t=201607281322046213028",target:"_blank",rel:"noopener noreferrer"}},[t._v("SVG images"),a("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);s.default=e.exports}}]);