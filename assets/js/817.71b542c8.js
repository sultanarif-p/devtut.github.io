(window.webpackJsonp=window.webpackJsonp||[]).push([[817],{1164:function(t,e,s){"use strict";s.r(e);var a=s(19),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"garbage-collector-in-net"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#garbage-collector-in-net"}},[t._v("#")]),t._v(" Garbage Collector in .Net")]),t._v(" "),s("h2",{attrs:{id:"weak-references"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#weak-references"}},[t._v("#")]),t._v(" Weak References")]),t._v(" "),s("p",[t._v("In .NET, the GC allocates objects when there are no references left to them.  Therefore, while an object can still be reached from code (there is a strong reference to it), the GC will not allocate this object. This can become a problem if there are a lot of large objects.")]),t._v(" "),s("p",[t._v("A weak reference is a reference, that allows the GC to collect the object while still allowing to access the object. A weak reference is valid only during the indeterminate amount of time until the object is collected when no strong references exist. When you use a weak reference, the application can still obtain a strong reference to the object, which prevents it from being collected. So weak references can be useful for holding on to large objects that are expensive to initialize, but should be available for garbage collection if they are not actively in use.")]),t._v(" "),s("p",[t._v("Simple usage:")]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WeakReference")]),t._v(" reference "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("WeakReference")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("object")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nGC"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Collect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("object")])]),t._v(" target "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" reference"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("DoSomething")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("So weak references could be used to maintain, for example, a cache of objects. However, it is important to remember that there is always the risk that the garbage collector will get to the object before a strong reference is reestablished.")]),t._v(" "),s("p",[t._v("Weak references are also handy for avoiding memory leaks. A typical use case is with events.")]),t._v(" "),s("p",[t._v("Suppose we have some handler to an event on a source:")]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[t._v("Source"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Event "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("EventHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Handler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[t._v("This code registers an event handler and creates a strong reference from the event source to the listening object. If the source object has a longer lifetime than the listener, and the listener doesn't need the event anymore when there are no other references to it, using normal .NET events causes a memory leak: the source object holds listener objects in memory that should be garbage collected.")]),t._v(" "),s("p",[t._v("In this case, it may be a good idea is to use the "),s("a",{attrs:{href:"https://msdn.microsoft.com/en-us/library/aa970850(v=vs.110).aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("Weak Event Pattern"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("Something like:")]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WeakEventManager")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetHandler")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("S"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" TArgs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("EventHandler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("TArgs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("EventHandler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("TArgs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("remove")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("S")]),t._v(" subscriber"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("S"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" TArgs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TArgs")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token type-list"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EventArgs")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("S")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token type-list"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" subscrWeakRef "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("WeakReference")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("subscriber"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EventHandler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("TArgs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" handler "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            handler "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" subscrStrongRef "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" subscrWeakRef"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Target "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("S")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("subscrStrongRef "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("action")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("subscrStrongRef"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("remove")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("handler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    handler "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("handler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("and used like this:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\nEventSource s = new EventSource();\n Subscriber subscriber = new Subscriber();\n WeakEventManager.SetHandler<Subscriber, SomeEventArgs>(a => s.Event += a, r => s.Event -= r, subscriber, (s,e) => { s.HandleEvent(e); });\n\n")])])]),s("p",[t._v("In this case of course we have some restrictions - the event must be a")]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("event")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EventHandler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("SomeEventArgs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" Event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("As "),s("a",{attrs:{href:"https://msdn.microsoft.com/en-us/library/ms404247(v=vs.110).aspx#Anchor_1",target:"_blank",rel:"noopener noreferrer"}},[t._v("MSDN"),s("OutboundLink")],1),t._v(" suggests:")]),t._v(" "),s("li",[t._v("Use long weak references only when necessary as the state of the\nobject is unpredictable after finalization.")]),t._v(" "),s("li",[t._v("Avoid using weak references to small objects because the pointer\nitself may be as large or larger.")]),t._v(" "),s("li",[t._v("Avoid using weak references as an automatic solution to memory\nmanagement problems. Instead, develop an effective caching policy for\nhandling your application's objects.")]),t._v(" "),s("h2",{attrs:{id:"large-object-heap-compaction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#large-object-heap-compaction"}},[t._v("#")]),t._v(" Large Object Heap compaction")]),t._v(" "),s("p",[t._v("By default the Large Object Heap is not compacted unlike the classic Object Heap which "),s("a",{attrs:{href:"https://www.simple-talk.com/dotnet/.net-framework/the-dangers-of-the-large-object-heap/",target:"_blank",rel:"noopener noreferrer"}},[t._v("can lead to memory fragmentation"),s("OutboundLink")],1),t._v(" and further, can lead to "),s("code",[t._v("OutOfMemoryException")]),t._v("s")]),t._v(" "),s("p",[t._v("Starting with .NET 4.5.1 there is "),s("a",{attrs:{href:"https://msdn.microsoft.com/en-us/library/system.runtime.gcsettings.largeobjectheapcompactionmode(v=vs.110).aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("an option"),s("OutboundLink")],1),t._v(" to explicitly compact the Large Object Heap (along with a garbage collection):")]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[t._v("GCSettings"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LargeObjectHeapCompactionMode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" GCLargeObjectHeapCompactionMode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CompactOnce"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nGC"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Collect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   \n\n")])])]),s("p",[t._v("Just as any explicit garbage collection request (it's called request because the CLR is not forced to conduct it) use with care and by default avoid it if you can since it can de-calibrate "),s("code",[t._v("GC")]),t._v("s statistics, decreasing its performance.")])])}),[],!1,null,null,null);e.default=n.exports}}]);