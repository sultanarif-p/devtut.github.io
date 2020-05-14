(window.webpackJsonp=window.webpackJsonp||[]).push([[865],{1211:function(t,e,s){"use strict";s.r(e);var a=s(19),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"nullreferenceexception"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nullreferenceexception"}},[t._v("#")]),t._v(" NullReferenceException")]),t._v(" "),s("h2",{attrs:{id:"nullreferenceexception-explained"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nullreferenceexception-explained"}},[t._v("#")]),t._v(" NullReferenceException explained")]),t._v(" "),s("p",[t._v("A "),s("code",[t._v("NullReferenceException")]),t._v(" is thrown when you try to access a non-static member (property, method, field or event) of a reference object but it is null.")]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Car")]),t._v(" myFirstCar "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("Car")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Car")]),t._v(" mySecondCar "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Color")]),t._v(" myFirstColor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" myFirstCar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// No problem as myFirstCar exists / is not null")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Color")]),t._v(" mySecondColor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mySecondCar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Throws a NullReferenceException ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// as mySecondCar is null and yet we try to access its color.")]),t._v("\n\n")])])]),s("p",[t._v("To debug such an exception, it's quite easy: on the line where the exception is thrown, you just have to look before every '"),s("code",[t._v(".")]),t._v("' or '"),s("code",[t._v("[")]),t._v("', or on rare occasions '"),s("code",[t._v("(")]),t._v("'.")]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[t._v("myGarage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CarCollection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("currentIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Color "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" theCarInTheStreet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("Where does my exception come from?\nEither:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("myGarage")]),t._v(" is "),s("code",[t._v("null")])]),t._v(" "),s("li",[s("code",[t._v("myGarage.CarCollection")]),t._v(" is "),s("code",[t._v("null")])]),t._v(" "),s("li",[s("code",[t._v("currentIndex")]),t._v(" is "),s("code",[t._v("null")])]),t._v(" "),s("li",[s("code",[t._v("myGarage.CarCollection[currentIndex.Value]")]),t._v(" is "),s("code",[t._v("null")])]),t._v(" "),s("li",[s("code",[t._v("theCarInTheStreet")]),t._v(" is "),s("code",[t._v("null")])])]),t._v(" "),s("p",[t._v("In debug mode, you only have to put your mouse cursor on every of these elements and you will find your null reference. Then, what you have to do is understand why it doesn't have a value. The correction totally depends on the goal of your method.")]),t._v(" "),s("p",[t._v("Have you forgotten to instantiate/initialize it?")]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[t._v("myGarage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CarCollection "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("Car")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("Are you supposed to do something different if the object is null?")]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myGarage "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Maybe you should buy a garage first!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("Or maybe someone gave you a null argument, and was not supposed to:")]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("theCarInTheStreet "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("ArgumentNullException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"theCarInTheStreet"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("In any case, remember that a method should never throw a NullReferenceException. If it does, that means you have forgotten to check something.")])])}),[],!1,null,null,null);e.default=n.exports}}]);