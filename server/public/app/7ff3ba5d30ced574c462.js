(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{511:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r={HOME:{PATH:"/"},LOGIN:{PATH:"/Security/login?BackURL=/"},LOGOUT:{TITLE:"Logout",PATH:"/Security/logout?BackURL=/"},NOT_FOUND:{TITLE:"Not Found",PATH:"/not-found"},SIGNUP:{TITLE:"Signup",PATH:"/signup"},SIGNUP_CONFIRM:{TITLE:"Confirm your email",PATH:"/signup/confirm/:token"},WALLET:{TITLE:"Wallet",PATH:"/wallet"}}},557:function(e,n,t){"use strict";var r=t(118),a=t(25),u=t(1),o=t.n(u),c=t(73),i=t(151);n.a=function(e){return Object(c.c)((function(e){return{router:e.router}}),(function(e){return{routeTo:function(n){e(Object(a.d)(n))}}}))((function(n){return o.a.createElement(r.a,{history:i.b},o.a.createElement(e,n))}))}},620:function(e,n,t){"use strict";t.r(n);var r=t(12),a=t.n(r),u=t(1),o=t.n(u),c=t(93),i=t(511),l=t(557);function T(){return(T=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var f=o.a.lazy((function(){return Promise.all([t.e(0),t.e(8)]).then(t.bind(null,587))})),E=o.a.lazy((function(){return Promise.all([t.e(0),t.e(11)]).then(t.bind(null,588))})),p=o.a.lazy((function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,575))})),s=function(e){return o.a.createElement(c.d,null,o.a.createElement(c.b,{exact:!0,path:i.a.HOME.PATH,render:function(){return o.a.createElement(f,T({},e,{headerTitle:"Dashboard"}))}}),o.a.createElement(c.b,{exact:!0,path:i.a.WALLET.PATH,render:function(){return o.a.createElement(E,T({},e,{headerTitle:i.a.WALLET.TITLE}))}}),e.AllowPublicSignup&&o.a.createElement(c.b,{path:i.a.SIGNUP.PATH,render:function(){return o.a.createElement(c.a,{to:i.a.HOME.PATH})}}),o.a.createElement(c.b,{path:i.a.NOT_FOUND.PATH,render:function(){return o.a.createElement(p,T({},e,{headerTitle:i.a.NOT_FOUND.TITLE}))}}),o.a.createElement(c.a,{to:i.a.NOT_FOUND.PATH}))};s.propTypes={AllowPublicSignup:a.a.bool.isRequired};var P=s;P=Object(l.a)(P),n.default=P}}]);