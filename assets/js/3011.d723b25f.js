(window.webpackJsonp=window.webpackJsonp||[]).push([[3011],{3356:function(e,t,a){"use strict";a.r(t);var o=a(19),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"using-reactjs-in-flux-way"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-reactjs-in-flux-way"}},[e._v("#")]),e._v(" Using ReactJS in Flux way")]),e._v(" "),a("h2",{attrs:{id:"data-flow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-flow"}},[e._v("#")]),e._v(" Data Flow")]),e._v(" "),a("blockquote"),e._v(" "),a("p",[e._v("This is outline of comprehensive "),a("a",{attrs:{href:"https://facebook.github.io/flux/docs/overview.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Overview"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Flux pattern assumes the use of unidirectional data flow.")]),e._v(" "),a("li",[e._v("\n**Action** — simple object describing action `type` and other input data.\n")]),e._v(" "),a("li",[e._v("\n**Dispatcher** — single action receiver and callbacks controller. Imagine it is central hub of your application.\n")]),e._v(" "),a("li",[e._v("\n**Store** — contains the application state and logic. It registers callback in dispatcher and emits event to view when change to the data layer has occured.\n")]),e._v(" "),a("li",[e._v("\n**View** — React component that receives change event and data from store. It causes re-rendering when something is changed.\n"),a("blockquote",[e._v("\nAs of Flux data flow, views may also **create actions** and pass them to dispatcher for user interactions.\n")])]),e._v(" "),a("h3",{attrs:{id:"reverted"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reverted"}},[e._v("#")]),e._v(" Reverted")]),e._v(" "),a("p",[e._v("To make it more clearer, we can start from the end.")]),e._v(" "),a("li",[e._v("\nDifferent React components (**views**) get data from different stores about made changes.\n"),a("blockquote",[e._v("\nFew components may be called **controller-views**, cause they provide the glue code to get the data from the stores and to pass data down the chain of their descendants. Controller-views represent any significant section of the page.\n")])]),e._v(" "),a("li",[e._v("\n**Stores** can be remarked as callbacks that compare action type and other input data for business logic of your application.\n")]),e._v(" "),a("li",[e._v("\n**Dispatcher** is common actions receiver and callbacks container.\n")]),e._v(" "),a("li",[e._v("\n**Actions** are nothing than simple objects with required `type` property.\n"),a("blockquote",[e._v("\nFormerly, you'll want to use constants for action types and helper methods (called **action creators**).\n")])]),e._v(" "),a("blockquote"),e._v(" "),a("p",[e._v("Formerly, you'll want to use constants for action types and helper methods (called "),a("strong",[e._v("action creators")]),e._v(").")]),e._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[e._v("#")]),e._v(" Remarks")]),e._v(" "),a("p",[a("strong",[e._v("Flux")]),e._v(" is the application architecture that Facebook uses for building client-side web applications. It complements React's composable view components by utilizing a unidirectional data flow. It's more of a pattern rather than a formal framework, and you can start using Flux immediately without a lot of new code.")]),e._v(" "),a("p",[e._v("Flux applications have three major parts: "),a("strong",[e._v("the dispatcher")]),e._v(", "),a("strong",[e._v("the stores")]),e._v(", and "),a("strong",[e._v("the views")]),e._v(" (React components). These should not be confused with Model-View-Controller. Controllers do exist in a Flux application, but they are controller-views — views often found at the top of the hierarchy that retrieve data from the stores and pass this data down to their children. Additionally, action creators — dispatcher helper methods — are used to support a semantic API that describes all changes that are possible in the application. It can be useful to think of them as a fourth part of the Flux update cycle.")]),e._v(" "),a("p",[a("strong",[e._v("Flux eschews MVC")]),e._v(" in favor of a unidirectional data flow. When a user interacts with a React view, the view propagates an action through a central dispatcher, to the various stores that hold the application's data and business logic, which updates all of the views that are affected. This works especially well with React's declarative programming style, which allows the store to send updates without specifying how to transition views between states.")])])}),[],!1,null,null,null);t.default=n.exports}}]);