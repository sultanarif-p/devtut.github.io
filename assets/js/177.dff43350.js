(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{524:function(a,e,t){"use strict";t.r(e);var s=t(19),r=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"firebase-crash-reporting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#firebase-crash-reporting"}},[a._v("#")]),a._v(" Firebase Crash Reporting")]),a._v(" "),t("h2",{attrs:{id:"how-to-report-an-error"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-report-an-error"}},[a._v("#")]),a._v(" How to report an error")]),a._v(" "),t("p",[t("a",{attrs:{href:"http://stackoverflow.com/documentation/android/3843/firebase/13605/how-to-add-firebase-crash-reporting-to-your-app#t=201608090640190791722",target:"_blank",rel:"noopener noreferrer"}},[a._v("Firebase Crash Reporting"),t("OutboundLink")],1),a._v(" automatically generates reports for fatal errors (or uncaught exceptions).")]),a._v(" "),t("p",[a._v("You can create your custom report using:")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FirebaseCrash")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("report")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Exception")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"My first Android non-fatal error"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n")])])]),t("p",[a._v("You can check in the log when FirebaseCrash initialized the module:")]),a._v(" "),t("blockquote"),a._v(" "),t("p",[a._v("07–20 08:57:24.442 D/FirebaseCrashApiImpl: **FirebaseCrash reporting API initialized**\n07–20 08:57:24.442 I/FirebaseCrash: **FirebaseCrash reporting initialize**d com.google.firebase.crash.internal.zzg@3333d325\n07–20 08:57:24.442 D/FirebaseApp: **Initialized class com.google.firebase.crash.FirebaseCrash.**")]),a._v(" "),t("p",[a._v("And then when it sent the exception:")]),a._v(" "),t("blockquote"),a._v(" "),t("p",[a._v("07–20 08:57:47.052 D/FirebaseCrashApiImpl: **throwable java.lang.Exception: My first Android non-fatal error**\n07–20 08:58:18.822 D/FirebaseCrashSenderServiceImpl: **Response code: 200**\n07–20 08:58:18.822 D/FirebaseCrashSenderServiceImpl: **Report sent**")]),a._v(" "),t("p",[a._v("You can add custom logs to your report with")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FirebaseCrash")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Activity created"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n")])])]),t("h2",{attrs:{id:"how-to-add-firebase-crash-reporting-to-your-app"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-add-firebase-crash-reporting-to-your-app"}},[a._v("#")]),a._v(" How to add Firebase Crash Reporting to your app")]),a._v(" "),t("p",[a._v("In order to add "),t("strong",[a._v("Firebase Crash Reporting")]),a._v(" to your app, perform the following steps:")]),a._v(" "),t("li",[a._v("\nCreate an app on the **Firebase Console** [here](https://console.firebase.google.com/).\n")]),a._v(" "),t("li",[a._v("\nCopy the `google-services.json` file from your project into your in `app/` directory.\n")]),a._v(" "),t("li",[a._v("\nAdd the following rules to your root-level **build.gradle** file in order to include the `google-services` plugin:\n"),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("buildscript "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// ...")]),a._v("\n    dependencies "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// ...")]),a._v("\n        classpath "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'com.google.gms:google-services:3.0.0'")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n")])])])]),a._v(" "),t("li",[a._v("\nIn your module Gradle file, add the `apply plugin` line at the bottom of the file to enable the Gradle plugin:\n"),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("apply plugin"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'com.google.gms.google-services'")]),a._v("\n\n")])])])]),a._v(" "),t("li",[a._v("\nAdd the dependency for **Crash Reporting** to your app-level **build.gradle** file:\n"),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("compile "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'com.google.firebase:firebase-crash:10.2.1'")]),a._v("\n\n")])])])]),a._v(" "),t("li",[a._v("\nYou can then fire a custom exception from your application by using the following line:\n"),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FirebaseCrash")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("report")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Exception")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Non Fatal Error logging"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n")])])]),t("p",[a._v("All your fatal exceptions will be reported to your "),t("strong",[a._v("Firebase Console")]),a._v(".\n")])]),a._v(" "),t("li",[a._v("\nIf you want to add custom logs to a console, you can use the following code:"),t("p"),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FirebaseCrash")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Level 2 completed."')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n")])])])]),a._v(" "),t("p",[a._v("For more information, please visit:")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://firebase.google.com/docs/crash/android",target:"_blank",rel:"noopener noreferrer"}},[a._v("Official documentation"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"http://stackoverflow.com/documentation/firebase/4669/crash-reporting#t=201608090639072764156",target:"_blank",rel:"noopener noreferrer"}},[a._v("Stack Overflow dedicated topic"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=r.exports}}]);