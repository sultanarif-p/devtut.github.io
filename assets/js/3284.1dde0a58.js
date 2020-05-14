(window.webpackJsonp=window.webpackJsonp||[]).push([[3284],{3630:function(t,s,a){"use strict";a.r(s);var e=a(19),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"row-number"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#row-number"}},[t._v("#")]),t._v(" Row number")]),t._v(" "),a("h2",{attrs:{id:"row-numbers-without-partitions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#row-numbers-without-partitions"}},[t._v("#")]),t._v(" Row numbers without partitions")]),t._v(" "),a("p",[t._v("Include a row number according to the order specified.")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v("\n  ROW_NUMBER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("OVER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" Fname "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ASC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" RowNumber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Fname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  LName\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" Employees\n\n")])])]),a("h2",{attrs:{id:"row-numbers-with-partitions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#row-numbers-with-partitions"}},[t._v("#")]),t._v(" Row numbers with partitions")]),t._v(" "),a("p",[t._v("Uses a partition criteria to group the row numbering according to it.")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v("\n  ROW_NUMBER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("OVER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PARTITION")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" DepartmentId "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" DepartmentId "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ASC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" RowNumber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  DepartmentId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Fname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" LName\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" Employees\n\n")])])]),a("h2",{attrs:{id:"delete-all-but-last-record-1-to-many-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete-all-but-last-record-1-to-many-table"}},[t._v("#")]),t._v(" Delete All But Last Record (1 to Many Table)")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v(" cte "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" ProjectID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         ROW_NUMBER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("OVER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PARTITION")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" ProjectID "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" InsertDate "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DESC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" rn\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" ProjectNotes\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DELETE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" cte "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" rn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("h4",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),a("ul",[a("li",[t._v("ROW_NUMBER ( )")]),t._v(" "),a("li",[t._v("OVER ( [ PARTITION BY value_expression , ... [ n ] ] order_by_clause )")])])])}),[],!1,null,null,null);s.default=r.exports}}]);