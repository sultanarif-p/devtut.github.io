(window.webpackJsonp=window.webpackJsonp||[]).push([[3052],{3395:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"casting-type-conversion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#casting-type-conversion"}},[t._v("#")]),t._v(" Casting (type conversion)")]),t._v(" "),a("h2",{attrs:{id:"casting-to-a-float"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#casting-to-a-float"}},[t._v("#")]),t._v(" Casting to a Float")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123.50"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to_f   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#=> 123.5")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Float")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123.50"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#=> 123.5")]),t._v("\n\n")])])]),a("p",[t._v("However, there is a difference when the string is not a valid "),a("code",[t._v("Float")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"something"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to_f   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#=> 0.0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Float")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"something"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# ArgumentError: invalid value for Float(): "something"')]),t._v("\n\n")])])]),a("h2",{attrs:{id:"casting-to-a-string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#casting-to-a-string"}},[t._v("#")]),t._v(" Casting to a String")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to_s    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#=> "123.5"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#=> "123.5"')]),t._v("\n\n")])])]),a("p",[t._v("Usually, "),a("code",[t._v("String()")]),t._v(" will just call "),a("code",[t._v("#to_s")]),t._v(".")]),t._v(" "),a("p",[t._v("Methods "),a("code",[t._v("Kernel#sprintf")]),t._v(" and "),a("code",[t._v("String#%")]),t._v(" behave similar to C:")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[t._v("sprintf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%s"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#=> "')]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123.5")]),t._v('"\n'),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%s"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123.5")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#=> "')]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123.5")]),t._v('"\n'),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%d"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123.5")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#=> "123"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%.2f"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123.")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#=> "123.50"')]),t._v("\n\n")])])]),a("h2",{attrs:{id:"casting-to-an-integer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#casting-to-an-integer"}},[t._v("#")]),t._v(" Casting to an Integer")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123.50"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to_i     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#=> 123")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123.50"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#=> 123")]),t._v("\n\n")])])]),a("p",[t._v("A string will take the value of any integer at its start, but will not take integers from anywhere else:")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123-foo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to_i "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# => 123")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo-123"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to_i "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# => 0")]),t._v("\n\n")])])]),a("p",[t._v("However, there is a difference when the string is not a valid Integer:")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"something"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to_i     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#=> 0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"something"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# ArgumentError: invalid value for Integer(): "something"')]),t._v("\n\n")])])]),a("h2",{attrs:{id:"floats-and-integers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#floats-and-integers"}},[t._v("#")]),t._v(" Floats and Integers")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#=> 0")]),t._v("\n\n")])])]),a("p",[t._v("Since we are dividing two integers, the result is an integer. To solve this problem, we need to cast at least one of those to Float:")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#=> 0.5")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v("to_f "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#=> 0.5")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Float")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#=> 0.5")]),t._v("\n\n")])])]),a("p",[t._v("Alternatively, "),a("code",[t._v("fdiv")]),t._v(" may be used to return the floating point result of division without explicitly casting either operand:")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v("fdiv "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# => 0.5")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);