(window.webpackJsonp=window.webpackJsonp||[]).push([[2144],{2490:function(s,t,a){"use strict";a.r(t);var e=a(19),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"security-via-grants"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security-via-grants"}},[s._v("#")]),s._v(" Security via GRANTs")]),s._v(" "),a("h2",{attrs:{id:"best-practice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[s._v("#")]),s._v(" Best Practice")]),s._v(" "),a("p",[s._v("Limit root (and any other SUPER-privileged user) to")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@localhost")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\n")])])]),a("p",[s._v("That prevents access from other servers. You should hand out SUPER to very few people, and they should be aware of their responsibility. The application should not have SUPER.")]),s._v(" "),a("p",[s._v("Limit application logins to the one database it uses:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" dbname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\n")])])]),a("p",[s._v("That way, someone who hacks into the application code can't get past dbname. This can be further refined via either of these:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" dname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('-- "read only"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" dname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tblname "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('-- "just one table"')]),s._v("\n\n")])])]),a("p",[s._v("The readonly may also need 'safe' things like")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TEMPORARY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" dname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('-- "read only"')]),s._v("\n\n")])])]),a("p",[s._v("As you say, there is no absolute security. My point here is there you can do a few things to slow hackers down. (Same goes for honest people goofing.)")]),s._v(" "),a("p",[s._v('In rare cases, you may need the application to do something available only to root. this can be done via a "Stored Procedure" that has '),a("code",[s._v("SECURITY DEFINER")]),s._v(" (and root defines it). That will expose only what the SP does, which might, for example, be one particular action on one particular table.")]),s._v(" "),a("h2",{attrs:{id:"host-of-user-host"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#host-of-user-host"}},[s._v("#")]),s._v(" Host (of user@host)")]),s._v(" "),a("p",[s._v('The "host" can be either a host name or an IP address.  Also, it can involve wild cards.')]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" sam"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'my.domain.com'")]),s._v(" IDENTIFIED "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),a("p",[s._v("Examples:  Note:  these usually need to be quoted")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("localhost "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- the same machine as mysqld")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'my.domain.com'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- a specific domain; this involves a lookup")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'11.22.33.44'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- a specific IP address")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'192.168.1.%'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('-- wild card for trailing part of IP address.  (192.168.% and 10.% and 11.% are "internal" ip addresses.)')]),s._v("\n\n")])])]),a("p",[s._v("Using "),a("code",[s._v("localhost")]),s._v(" relies on the security of the server.  For best practice "),a("code",[s._v("root")]),s._v(" should only be allowed in through localhost.  In some cases, these mean the same thing:  "),a("code",[s._v("0.0.0.1")]),s._v(" and "),a("code",[s._v("::1")]),s._v(".")])])}),[],!1,null,null,null);t.default=n.exports}}]);