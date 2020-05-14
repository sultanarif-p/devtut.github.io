(window.webpackJsonp=window.webpackJsonp||[]).push([[530],{882:function(a,s,e){"use strict";e.r(s);var t=e(19),n=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"sourcing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sourcing"}},[a._v("#")]),a._v(" Sourcing")]),a._v(" "),e("h2",{attrs:{id:"sourcing-a-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sourcing-a-file"}},[a._v("#")]),a._v(" Sourcing a file")]),a._v(" "),e("p",[a._v("Sourcing a file is different from execution, in that all commands are evaluated within the context of the current bash session - this means that any variables, function, or aliases defined will persist throughout your session.")]),a._v(" "),e("p",[a._v("Create the file you wish to source "),e("code",[a._v("sourceme.sh")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token shebang important"}},[a._v("#!/bin/bash")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("A")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"hello_world"')]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("alias")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("sayHi")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"echo Hi"')]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function-name function"}},[a._v("sayHello")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" Hello\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n")])])]),e("p",[a._v("From your session, source the file")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" sourceme.sh\n\n")])])]),e("p",[a._v("From hencefourth, you have all the resources of the sourced file available")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$A")]),a._v("\nhello_world\n\n$ sayHi\nHi\n\n$ sayHello\nHello\n\n")])])]),e("p",[a._v("Note that the command "),e("code",[a._v(".")]),a._v(" is synonymous to "),e("code",[a._v("source")]),a._v(", such that you can simply use")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v(" sourceme.sh\n\n")])])]),e("h2",{attrs:{id:"sourcing-a-virtual-environment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sourcing-a-virtual-environment"}},[a._v("#")]),a._v(" Sourcing a virtual environment")]),a._v(" "),e("p",[a._v("When developing several applications on one machine, it becomes useful to separate out dependencies into virtual environments.")]),a._v(" "),e("p",[a._v("With the use of "),e("a",{attrs:{href:"https://github.com/pypa/virtualenv/blob/master/README.rst",target:"_blank",rel:"noopener noreferrer"}},[e("code",[a._v("virtualenv")]),e("OutboundLink")],1),a._v(", these environments are sourced into your shell so that when you run a command, it comes from that virtual environment.")]),a._v(" "),e("p",[a._v("This is most commonly installed using "),e("code",[a._v("pip")]),a._v(".")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("pip "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" https://github.com/pypa/virtualenv/tarball/15.0.2\n\n")])])]),e("p",[a._v("Create a new environment")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("virtualenv --python"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("python3.5 my_env\n\n")])])]),e("p",[a._v("Activate the environment")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" my_env/bin/activate\n\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);