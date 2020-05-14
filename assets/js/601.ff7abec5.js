(window.webpackJsonp=window.webpackJsonp||[]).push([[601],{945:function(t,e,s){"use strict";s.r(e);var a=s(19),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"typedef"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typedef"}},[t._v("#")]),t._v(" Typedef")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("typedef")]),t._v(" mechanism allows the creation of aliases for other types.  It does not create new types.  People often use "),s("code",[t._v("typedef")]),t._v(" to improve the portability of code, to give aliases to structure or union types, or to create aliases for function (or function pointer) types.")]),t._v(" "),s("p",[t._v("In the C standard, "),s("code",[t._v("typedef")]),t._v(" is classified as a 'storage class' for convenience; it occurs syntactically where storage classes such as "),s("code",[t._v("static")]),t._v(" or "),s("code",[t._v("extern")]),t._v(" could appear.")]),t._v(" "),s("h2",{attrs:{id:"typedef-for-structures-and-unions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typedef-for-structures-and-unions"}},[t._v("#")]),t._v(" Typedef for Structures and Unions")]),t._v(" "),s("p",[t._v("You can give alias names to a "),s("code",[t._v("struct")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" Person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nPerson person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("Compared to the traditional way of declaring structs, programmers wouldn't need to have "),s("code",[t._v("struct")]),t._v(" every time they declare an instance of that struct.")]),t._v(" "),s("p",[t._v("Note that the name "),s("code",[t._v("Person")]),t._v(" (as opposed to "),s("code",[t._v("struct Person")]),t._v(") is not defined until the final semicolon.  Thus for linked lists and tree structures which need to contain a pointer to the same structure type, you must use either:")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("next"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" Person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("or:")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" Person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    Person "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("next"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("The use of a "),s("code",[t._v("typedef")]),t._v(" for a "),s("code",[t._v("union")]),t._v(" type is very similar.")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("union")]),t._v(" Float Float"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("union")]),t._v(" Float\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v("  b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sizeof")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("A structure similar to this can be used to analyze the bytes that make up a "),s("code",[t._v("float")]),t._v(" value.")]),t._v(" "),s("h2",{attrs:{id:"simple-uses-of-typedef"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#simple-uses-of-typedef"}},[t._v("#")]),t._v(" Simple Uses of Typedef")]),t._v(" "),s("h3",{attrs:{id:"for-giving-short-names-to-a-data-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#for-giving-short-names-to-a-data-type"}},[t._v("#")]),t._v(" For giving short names to a data type")]),t._v(" "),s("p",[t._v("Instead of:")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("mystructure")]),t._v(" object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("one can use")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* write once */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" ll"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("mystructure")]),t._v(" mystruct"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* use whenever needed */")]),t._v("\nll foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmystruct object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("This reduces the amount of typing needed if the type is used many times in the program.")]),t._v(" "),s("h3",{attrs:{id:"improving-portability"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#improving-portability"}},[t._v("#")]),t._v(" Improving portability")]),t._v(" "),s("p",[t._v("The attributes of data types vary across different architectures. For example, an "),s("code",[t._v("int")]),t._v(" may be a 2-byte type in one implementation and an 4-byte type in another. Suppose a program needs to use a 4-byte type to run correctly.")]),t._v(" "),s("p",[t._v("In one implementation, let the size of "),s("code",[t._v("int")]),t._v(" be 2 bytes and that of "),s("code",[t._v("long")]),t._v(" be 4 bytes. In another, let the size of "),s("code",[t._v("int")]),t._v(" be 4 bytes and that of "),s("code",[t._v("long")]),t._v(" be 8 bytes. If the program is written using the second implementation,")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* program expecting a 4 byte integer */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* need to hold 4 bytes to work */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* some code involving many more ints */")]),t._v("\n\n")])])]),s("p",[t._v("For the program to run in the first implementation, all the "),s("code",[t._v("int")]),t._v(" declarations will have to be changed to "),s("code",[t._v("long")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* program now needs long */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*need to hold 4 bytes to work */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* some code involving many more longs - lot to be changed */")]),t._v("\n\n")])])]),s("p",[t._v("To avoid this, one can use "),s("code",[t._v("typedef")])]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* program expecting a 4 byte integer */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" myint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* need to declare once - only one line to modify if needed */")]),t._v("\nmyint foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* need to hold 4 bytes to work */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* some code involving many more myints */")]),t._v("\n\n")])])]),s("p",[t._v("Then, only the "),s("code",[t._v("typedef")]),t._v(" statement would need to be changed each time, instead of examining the whole program.")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("<stdint.h>")]),t._v(" header and the related "),s("code",[t._v("<inttypes.h>")]),t._v(" header define standard type names (using "),s("code",[t._v("typedef")]),t._v(") for integers of various sizes, and these names are often the best choice in modern code that needs fixed size integers.  For example, "),s("code",[t._v("uint8_t")]),t._v(" is an unsigned 8-bit integer type; "),s("code",[t._v("int64_t")]),t._v(" is a signed 64-bit integer type.  The type "),s("code",[t._v("uintptr_t")]),t._v(" is an unsigned integer type big enough to hold any pointer to object.  These types are theoretically optional — but it is rare for them not to be available.  There are variants like "),s("code",[t._v("uint_least16_t")]),t._v(" (the smallest unsigned integer type with at least 16 bits) and "),s("code",[t._v("int_fast32_t")]),t._v(" (the fastest signed integer type with at least 32 bits).  Also, "),s("code",[t._v("intmax_t")]),t._v(" and "),s("code",[t._v("uintmax_t")]),t._v(" are the largest integer types supported by the implementation.  These types are mandatory.")]),t._v(" "),s("h3",{attrs:{id:"to-specify-a-usage-or-to-improve-readability"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#to-specify-a-usage-or-to-improve-readability"}},[t._v("#")]),t._v(" To specify a usage or to improve readability")]),t._v(" "),s("p",[t._v("If a set of data has a particular purpose, one can use "),s("code",[t._v("typedef")]),t._v(" to give it a meaningful name. Moreover, if the property of the data changes such that the base type must change, only the "),s("code",[t._v("typedef")]),t._v(" statement would have to be changed, instead of examining the whole program.")]),t._v(" "),s("h2",{attrs:{id:"typedef-for-function-pointers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typedef-for-function-pointers"}},[t._v("#")]),t._v(" Typedef for Function Pointers")]),t._v(" "),s("p",[t._v("We can use "),s("code",[t._v("typedef")]),t._v(" to simplify the usage of function pointers.  Imagine we have some functions, all having the same signature, that use their argument to print out something in different ways:")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdio.h>")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print_to_n")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%d\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print_n")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v('"'),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("d\\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("Now we can use a "),s("code",[t._v("typedef")]),t._v(" to create a named function pointer type called printer:")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("printer_t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("This creates a type, named "),s("code",[t._v("printer_t")]),t._v(" for a pointer to a function that takes a single "),s("code",[t._v("int")]),t._v(" argument and returns nothing, which matches the signature of the functions we have above. To use it we create a variable of the created type and assign it a pointer to one of the functions in question:")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("printer_t p "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("print_to_n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("print_to_n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This would be required without the type")]),t._v("\n\n")])])]),s("p",[t._v("Then to call the function pointed to by the function pointer variable:")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Prints 1 2 3 4 5 on separate lines")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// So does this")]),t._v("\n\n")])])]),s("p",[t._v("Thus the "),s("code",[t._v("typedef")]),t._v(" allows a simpler syntax when dealing with function pointers. This becomes more apparent when function pointers are used in more complex situations, such as arguments to functions.")]),t._v(" "),s("p",[t._v("If you are using a function that takes a function pointer as a parameter without a function pointer type defined the function definition would be,")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("printer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//code")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//code")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("However, with the "),s("code",[t._v("typedef")]),t._v(" it is:")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("printer_t printer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//code")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//code")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("Likewise functions can return function pointers and again, the use of a "),s("code",[t._v("typedef")]),t._v(" can make the syntax simpler when doing so.")]),t._v(" "),s("p",[t._v("A classic example is the "),s("code",[t._v("signal")]),t._v(" function from "),s("code",[t._v("<signal.h>")]),t._v(".  The declaration for it (from the C standard) is:")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("signal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" sig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("func"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("That's a function that takes two arguments — an "),s("code",[t._v("int")]),t._v(" and a pointer to a function which takes an "),s("code",[t._v("int")]),t._v(" as an argument and returns nothing — and which returns a pointer to function like its second argument.")]),t._v(" "),s("p",[t._v("If we defined a type "),s("code",[t._v("SigCatcher")]),t._v(" as an alias for the pointer to function type:")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("SigCatcher"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("then we could declare "),s("code",[t._v("signal()")]),t._v(" using:")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("SigCatcher "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("signal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" sig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SigCatcher func"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("On the whole, this is easier to understand (even though the C standard did not elect to define a type to do the job).  The "),s("code",[t._v("signal")]),t._v(" function takes two arguments, an "),s("code",[t._v("int")]),t._v(" and a "),s("code",[t._v("SigCatcher")]),t._v(", and it returns a "),s("code",[t._v("SigCatcher")]),t._v(" — where a "),s("code",[t._v("SigCatcher")]),t._v(" is a pointer to a function that takes an "),s("code",[t._v("int")]),t._v(" argument and returns nothing.")]),t._v(" "),s("p",[t._v("Although using "),s("code",[t._v("typedef")]),t._v(" names for pointer to function types makes life easier, it can also lead to confusion for others who will maintain your code later on, so use with caution and proper documentation. See also "),s("a",{attrs:{href:"https://stackoverflow.com/documentation/c/250/function-pointers",target:"_blank",rel:"noopener noreferrer"}},[t._v("Function Pointers"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h4",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),s("ul",[s("li",[t._v("typedef existing_name alias_name;")])]),t._v(" "),s("h4",{attrs:{id:"remarks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),s("p",[s("strong",[t._v("Disadvantages of Typedef")])]),t._v(" "),s("p",[s("code",[t._v("typedef")]),t._v(" could lead to the pollution of namespace in large C programs.")]),t._v(" "),s("p",[s("strong",[t._v("Disadvantages of Typedef Structs")])]),t._v(" "),s("p",[t._v("Also, "),s("code",[t._v("typedef")]),t._v("'d structs without a tag name are a major cause of needless imposition of ordering relationships among header files.")]),t._v(" "),s("p",[t._v("Consider:")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("ifndef")]),t._v(" FOO_H")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" FOO_H 1")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" FOO_DEF (0xDEADBABE)")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("bar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* forward declaration, defined in bar.h*/")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("foo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("bar")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("endif")])]),t._v("\n\n")])])]),s("p",[t._v("With such a definition, not using "),s("code",[t._v("typedefs")]),t._v(", it is possible for a compilation unit to include "),s("code",[t._v("foo.h")]),t._v(" to get at the "),s("code",[t._v("FOO_DEF")]),t._v(" definition. If it doesn't attempt to dereference the "),s("code",[t._v("bar")]),t._v(" member of the "),s("code",[t._v("foo")]),t._v(" struct then there will be no need to include the "),s("code",[t._v("bar.h")]),t._v(" file.")]),t._v(" "),s("p",[s("strong",[t._v("Typedef vs #define")])]),t._v(" "),s("p",[s("code",[t._v("#define")]),t._v(" is a C pre-processor directive which is also used to define the aliases for various data types similar to "),s("code",[t._v("typedef")]),t._v(" but with the following differences:")]),t._v(" "),s("li",[t._v("\n`typedef` is limited to giving symbolic names to types only where as `#define` can be used to define alias for values as well.\n")]),t._v(" "),s("li",[t._v("\n`typedef` interpretation is performed by the compiler whereas `#define` statements are processed by the pre-processor.\n")]),t._v(" "),s("li",[t._v("\nNote that `#define cptr char *` followed by `cptr a, b;` does not do the same as `typedef char *cptr;` followed by `cptr a, b;`.  With the `#define`, `b` is a plain `char` variable, but it is also a pointer with the `typedef`.\n")])])}),[],!1,null,null,null);e.default=n.exports}}]);