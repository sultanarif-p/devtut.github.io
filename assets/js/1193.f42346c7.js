(window.webpackJsonp=window.webpackJsonp||[]).push([[1193],{1538:function(a,t,s){"use strict";s.r(t);var e=s(19),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"gtk3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gtk3"}},[a._v("#")]),a._v(" Gtk3")]),a._v(" "),s("h2",{attrs:{id:"hello-world-in-gtk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hello-world-in-gtk"}},[a._v("#")]),a._v(" Hello World in Gtk")]),a._v(" "),s("p",[a._v('This example show how one may create a simple "Hello World" in Gtk3, setting up a window and button widgets. The sample code will also demonstrate how to set different attributes and actions on the widgets.')]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("module")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Main")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("Main.main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("where")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token import_statement"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" Graphics.UI.Gtk")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("main")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("IO")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("main")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("do")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("initGUI")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("window")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("windowNew")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("on")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("window")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("objectDestroy")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("mainQuit")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("set")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("window")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("containerBorderWidth")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("windowTitle")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello World"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("button")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("buttonNew")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("set")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("button")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("buttonLabel")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello World"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("on")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("button")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("buttonActivated")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("$")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("do")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("putStrLn")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"A \\"clicked\\"-handler to say \\"destroy\\""')]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("widgetDestroy")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("window")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("set")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("window")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("containerChild")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("button")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("widgetShowAll")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("window")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("mainGUI")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("-- main loop")]),a._v("\n\n")])])]),s("h4",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[a._v("#")]),a._v(" Syntax")]),a._v(" "),s("li",[a._v("\nobj <- < widgetName >New -- How widgets (e.g Windows, Buttons, Grids) are created\n")]),a._v(" "),s("li",[a._v("\nset < widget > [ < attributes > ] -- Set attributes as defined as Attr self in widget documentation (e.g. buttonLabel)\n")]),a._v(" "),s("li",[a._v("\non < widget > < event > < IO action > -- Adding an IO action to a widgets Signal self (e.g. buttonActivated)\n")]),a._v(" "),s("h4",{attrs:{id:"remarks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[a._v("#")]),a._v(" Remarks")]),a._v(" "),s("p",[a._v("On many Linux distributions, the Haskell Gtk3 library is available as a package in the systems package manager (e.g. "),s("code",[a._v("libghc-gtk")]),a._v(" in Ubuntu's APT). However, for some developers it might be preferable to use a tool like "),s("code",[a._v("stack")]),a._v(" to manage isolated environments, and have Gtk3 installed via "),s("code",[a._v("cabal")]),a._v(" instead of via an global installation by the systems package manager. For this option, "),s("code",[a._v("gtk2hs-buildtools")]),a._v(" is required. Run "),s("code",[a._v("cabal install gtk2hs-buildtools")]),a._v(" before adding "),s("code",[a._v("gtk")]),a._v(", "),s("code",[a._v("gtk3")]),a._v(" or any other Gtk-based Haskell libraries to your projects "),s("code",[a._v("build-depends")]),a._v(" entry in your cabal file.")])])}),[],!1,null,null,null);t.default=n.exports}}]);