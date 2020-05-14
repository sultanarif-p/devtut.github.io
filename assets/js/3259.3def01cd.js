(window.webpackJsonp=window.webpackJsonp||[]).push([[3259],{3605:function(t,s,e){"use strict";e.r(s);var a=e(19),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"exists-clause"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#exists-clause"}},[t._v("#")]),t._v(" EXISTS CLAUSE")]),t._v(" "),e("h2",{attrs:{id:"exists-clause-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#exists-clause-2"}},[t._v("#")]),t._v(" EXISTS CLAUSE")]),t._v(" "),e("p",[t._v("Customer Table")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Id")]),t._v(" "),e("th",[t._v("FirstName")]),t._v(" "),e("th",[t._v("LastName")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("Ozgur")]),t._v(" "),e("td",[t._v("Ozturk")])]),t._v(" "),e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",[t._v("Youssef")]),t._v(" "),e("td",[t._v("Medi")])]),t._v(" "),e("tr",[e("td",[t._v("3")]),t._v(" "),e("td",[t._v("Henry")]),t._v(" "),e("td",[t._v("Tai")])])])]),t._v(" "),e("p",[t._v("Order Table")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Id")]),t._v(" "),e("th",[t._v("CustomerId")]),t._v(" "),e("th",[t._v("Amount")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("2")]),t._v(" "),e("td",[t._v("123.50")])]),t._v(" "),e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",[t._v("3")]),t._v(" "),e("td",[t._v("14.80")])])])]),t._v(" "),e("h3",{attrs:{id:"get-all-customers-with-a-least-one-order"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-all-customers-with-a-least-one-order"}},[t._v("#")]),t._v(" Get all customers with a least one order")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" Customer "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXISTS")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Order")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Order")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CustomerId"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Customer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Id\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),e("p",[t._v("Result")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Id")]),t._v(" "),e("th",[t._v("FirstName")]),t._v(" "),e("th",[t._v("LastName")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",[t._v("Youssef")]),t._v(" "),e("td",[t._v("Medi")])]),t._v(" "),e("tr",[e("td",[t._v("3")]),t._v(" "),e("td",[t._v("Henry")]),t._v(" "),e("td",[t._v("Tai")])])])]),t._v(" "),e("h3",{attrs:{id:"get-all-customers-with-no-order"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-all-customers-with-no-order"}},[t._v("#")]),t._v(" Get all customers with no order")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" Customer "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXISTS")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Order")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Order")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CustomerId "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Customer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Id\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),e("p",[t._v("Result")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Id")]),t._v(" "),e("th",[t._v("FirstName")]),t._v(" "),e("th",[t._v("LastName")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("Ozgur")]),t._v(" "),e("td",[t._v("Ozturk")])])])]),t._v(" "),e("h3",{attrs:{id:"purpose"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#purpose"}},[t._v("#")]),t._v(" Purpose")]),t._v(" "),e("p",[e("code",[t._v("EXISTS")]),t._v(", "),e("code",[t._v("IN")]),t._v(" and "),e("code",[t._v("JOIN")]),t._v(" could sometime be used for the same result, however, they are not equals :")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("EXISTS")]),t._v(" should be used to check if a value exist in another table")]),t._v(" "),e("li",[e("code",[t._v("IN")]),t._v(" should be used for static list")]),t._v(" "),e("li",[e("code",[t._v("JOIN")]),t._v(" should be used to retrieve data from other(s) table(s)")])])])}),[],!1,null,null,null);s.default=r.exports}}]);