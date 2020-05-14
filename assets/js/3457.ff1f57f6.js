(window.webpackJsonp=window.webpackJsonp||[]).push([[3457],{3805:function(t,a,s){"use strict";s.r(a);var e=s(19),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"date"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#date"}},[t._v("#")]),t._v(" Date")]),t._v(" "),s("h2",{attrs:{id:"converting-parsing-a-string-to-a-date"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#converting-parsing-a-string-to-a-date"}},[t._v("#")]),t._v(" Converting (Parsing) a String to a Date")]),t._v(" "),s("p",[t._v("If you know the format of the string you are converting (parsing) you should use "),s("code",[t._v("DateTime.ParseExact")])]),t._v(" "),s("div",{staticClass:"language-vb extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vb"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" dateString "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"12.07.2003"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" dateFormat "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dd.MM.yyyy"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" dateValue "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Date")]),t._v("\n\ndateValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" DateTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ParseExact"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dateString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dateFormat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Globalization"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CultureInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("InvariantCulture"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[t._v("If you are not certain for the format of the string, you can use "),s("code",[t._v("DateTime.TryParseExact")]),t._v(" and test the result to see if parsed or not:")]),t._v(" "),s("div",{staticClass:"language-vb extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vb"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" dateString "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"23-09-2013"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" dateFormat "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dd-MM-yyyy"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" dateValue "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Date")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),t._v(" DateTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TryParseExact"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dateString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dateFormat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Globalization"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CultureInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("InvariantCulture"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" DateTimeStyles"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("None"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dateValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Then")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'the parse worked and the dateValue variable now holds the datetime that was parsed as it is passing in ByRef")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Else")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'the parse failed")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"converting-a-date-to-a-string"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#converting-a-date-to-a-string"}},[t._v("#")]),t._v(" Converting a Date To A String")]),t._v(" "),s("p",[t._v("Simply use the "),s("code",[t._v(".ToString")]),t._v(" overload of a "),s("code",[t._v("DateTime")]),t._v(" object to get the format you require:")]),t._v(" "),s("div",{staticClass:"language-vb extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vb"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" dateValue "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" DateTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("New")]),t._v(" DateTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2001")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("03")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("06")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" dateString "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dateValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ToString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yyyy-MM-dd"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'2001-03-06")]),t._v("\n\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);