(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{513:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r={HOME:{PATH:"/"},LOGIN:{PATH:"/Security/login?BackURL=/"},LOGOUT:{TITLE:"Logout",PATH:"/Security/logout?BackURL=/"},NOT_FOUND:{TITLE:"Not Found",PATH:"/not-found"},SIGNUP:{TITLE:"Signup",PATH:"/signup"},SIGNUP_CONFIRM:{TITLE:"Confirm your email",PATH:"/signup/confirm/:token"},WALLET:{TITLE:"Wallet",PATH:"/wallet"},WALLET_ITEM:{PATH:"/wallet/:slug"}}},567:function(e,n,t){"use strict";var r=t(120),a=t(25),u=t(1),l=t.n(u),o=t(73),i=t(155);n.a=function(e){return Object(o.c)((function(e){return{router:e.router}}),(function(e){return{routeTo:function(n){e(Object(a.d)(n))}}}))((function(n){return l.a.createElement(r.a,{history:i.b},l.a.createElement(e,n))}))}},670:function(e,n,t){"use strict";t.r(n);var r=t(12),a=t.n(r),u=t(1),l=t.n(u),o=t(95),i=t(513),c=t(567);function T(){return(T=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var s=l.a.lazy((function(){return Promise.all([t.e(0),t.e(10)]).then(t.bind(null,613))})),P=l.a.lazy((function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,589))})),f=l.a.lazy((function(){return Promise.all([t.e(0),t.e(4),t.e(11)]).then(t.bind(null,614))})),E=l.a.lazy((function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,622))})),p=function(e){return l.a.createElement(o.d,null,l.a.createElement(o.b,{exact:!0,path:i.a.HOME.PATH,render:function(){return l.a.createElement(s,T({},e,{headerTitle:"Divvy"}))}}),e.AllowPublicSignup&&l.a.createElement(o.b,{exact:!0,path:i.a.SIGNUP.PATH,render:function(){return l.a.createElement(f,T({},e,{headerTitle:i.a.SIGNUP.TITLE,showBreadcrumbs:!1}))}}),e.AllowPublicSignup&&l.a.createElement(o.b,{path:i.a.SIGNUP_CONFIRM.PATH,render:function(n){return l.a.createElement(E,T({},e,{headerTitle:i.a.SIGNUP_CONFIRM.TITLE,showBreadcrumbs:!1,token:n.match.params.token}))}}),l.a.createElement(o.b,{path:i.a.NOT_FOUND.PATH,render:function(){return l.a.createElement(P,T({},e,{headerTitle:i.a.NOT_FOUND.TITLE}))}}),l.a.createElement(o.a,{to:i.a.NOT_FOUND.PATH}))};p.propTypes={AllowPublicSignup:a.a.bool.isRequired};var d=p;d=Object(c.a)(d),n.default=d}}]);