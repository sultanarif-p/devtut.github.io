(window.webpackJsonp=window.webpackJsonp||[]).push([[2582],{2928:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"conditional-logic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conditional-logic"}},[t._v("#")]),t._v(" Conditional logic")]),t._v(" "),a("h2",{attrs:{id:"if-else-and-else-if"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#if-else-and-else-if"}},[t._v("#")]),t._v(" if, else and else if")]),t._v(" "),a("p",[t._v("Powershell supports standard conditional logic operators, much like many programming languages. These allow certain functions or commands to be run under particular circumstances.")]),t._v(" "),a("p",[t._v("With an "),a("code",[t._v("if")]),t._v(" the commands inside the brackets ("),a("code",[t._v("{}")]),t._v(") are only executed if the conditions inside the if("),a("code",[t._v("()")]),t._v(") are met")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$test")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$test")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-eq")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Host")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"if condition met"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("You can also do an "),a("code",[t._v("else")]),t._v(". Here the "),a("code",[t._v("else")]),t._v(" commands are executed if the "),a("code",[t._v("if")]),t._v(" conditions are "),a("strong",[t._v("not")]),t._v(" met:")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$test")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$test")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-eq")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Host")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"if condition met"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Host")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"if condition not met"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("or an "),a("code",[t._v("elseif")]),t._v(". An else if runs the commands if the "),a("code",[t._v("if")]),t._v(" conditions are not met and the "),a("code",[t._v("elseif")]),t._v(" conditions are met:")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$test")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$test")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-eq")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Host")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"if condition met"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("elseif")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$test")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-eq")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Host")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ifelse condition met"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("Note the above use "),a("code",[t._v("-eq")]),t._v("(equality) CmdLet and not "),a("code",[t._v("=")]),t._v(" or "),a("code",[t._v("==")]),t._v(" as many other languages do for equlaity.")]),t._v(" "),a("h2",{attrs:{id:"negation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#negation"}},[t._v("#")]),t._v(" Negation")]),t._v(" "),a("p",[t._v("You may want to negate a boolean value, i.e. enter an "),a("code",[t._v("if")]),t._v(" statement when a condition is false rather than true. This can be done by using the "),a("code",[t._v("-Not")]),t._v(" CmdLet")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$test")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-Not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$test")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-eq")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Host")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"if condition not met"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("You can also use "),a("code",[t._v("!")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$test")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$test")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-eq")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Host")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"if condition not met"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("there is also the "),a("code",[t._v("-ne")]),t._v(" (not equal) operator:")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$test")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$test")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-ne")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Host")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"variable test is not equal to 'test2'\"")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"if-conditional-shorthand"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#if-conditional-shorthand"}},[t._v("#")]),t._v(" If conditional shorthand")]),t._v(" "),a("p",[t._v("If you want to use the shorthand you can make use of conditional logic with the following shorthand. Only the string 'false' will evaluate to true (2.0).")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Done in Powershell 2.0 ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$boolean")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("$false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$string")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"false"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$emptyString")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# this does not run because $boolean is false")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Host")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Shorthand If conditions can be nice, just make sure they are always boolean."')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This does run because the string is non-zero length")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Host")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"If the variable is not strictly null or Boolean false, it will evaluate to true as it is an object or string with length greater than 0."')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$emptyString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This does not run because the string is zero-length")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Host")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Checking empty strings can be useful as well."')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This does not run because the condition is null")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Host")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Checking Nulls will not print this statement."')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("h4",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),a("ul",[a("li",[t._v("if(expression){}")]),t._v(" "),a("li",[t._v("if(expression){}else{}")]),t._v(" "),a("li",[t._v("if(expression){}elseif(expression){}")]),t._v(" "),a("li",[t._v("if(expression){}elseif(expression){}else{}")])]),t._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),a("p",[t._v("See also "),a("a",{attrs:{href:"http://stackoverflow.com/documentation/powershell/1071/operators/3451/comparison-operators",target:"_blank",rel:"noopener noreferrer"}},[t._v("Comparison Operators"),a("OutboundLink")],1),t._v(", which can be used in conditional expressions.")])])}),[],!1,null,null,null);s.default=n.exports}}]);