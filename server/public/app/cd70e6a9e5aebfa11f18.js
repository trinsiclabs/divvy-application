(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{519:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));var r=n(542),a=n.n(r),o=function(e,t){return a.a.compile(e)(t)},i=function(e,t){return null!==a()(t).exec(e)}},520:function(e,t,n){"use strict";var r=n(668),a=n(12),o=n.n(a),i=n(1),c=n.n(i),l=n(73),u=n(684),s=n(655),f=n(656),m=n(657),p=n(658),b=n(653),g=n(533),d=n.n(g),h=n(534),y=n.n(h),O=n(513),v=Object(b.a)({list:{width:250}}),E=function(e,t){return function(){e(t)}},j=function(e){var t=v();return c.a.createElement(u.a,{open:e.isOpen,onClose:e.onClose},c.a.createElement("div",{className:t.list,onClick:e.onClose,onKeyDown:e.onClose,role:"presentation"},c.a.createElement(s.a,null,c.a.createElement(f.a,{button:!0,onClick:E(e.routeTo,O.a.HOME.PATH)},c.a.createElement(m.a,null,c.a.createElement(d.a,null)),c.a.createElement(p.a,{primary:e.orgName})),c.a.createElement(f.a,{button:!0,onClick:E(e.routeTo,O.a.WALLET.PATH)},c.a.createElement(m.a,null,c.a.createElement(y.a,null)),c.a.createElement(p.a,{primary:O.a.WALLET.TITLE})))))};j.propTypes={isOpen:o.a.bool.isRequired,onClose:o.a.func.isRequired,routeTo:o.a.func.isRequired};var w=j,k=n(664),C=n(661),P=n(680),T=n(663),S=n(660),L=n(585),A=n(662),H=n(659),M=n(536),N=n.n(M),q=n(535),R=n.n(q);var D=Object(b.a)((function(e){return{root:{position:"relative"},logo:{marginRight:e.spacing(1)},logoCenter:{position:"absolute",left:"50%",marginLeft:"-24px"},title:{flexGrow:1},login:{transform:"rotate(180deg)"},button:{marginLeft:e.spacing(1)}}})),B=function(e){var t,n,r,a=D();c.a.createElement(S.a,{className:R()(a.logo,(t={},n=a.logoCenter,r=null===e.onClickLogin,n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t)),color:"inherit",edge:"start",onClick:e.onClickLogo},c.a.createElement(L.a,null,c.a.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})));return c.a.createElement("div",{className:a.root},c.a.createElement(P.a,{mb:4,style:{position:"relative"}},c.a.createElement(C.a,{position:"static"},c.a.createElement(A.a,null,null!==e.onClickMenuButton&&c.a.createElement(S.a,{"aria-label":"Menu",className:a.menuButton,color:"inherit",edge:"start",onClick:e.onClickMenuButton},c.a.createElement(N.a,null)),c.a.createElement(H.a,{id:"page-title",className:a.title,variant:"h6"},e.title),null!==e.onClickSignup&&c.a.createElement(T.a,{className:a.button,variant:"outlined",color:"inherit",onClick:e.onClickSignup},"Signup"),null!==e.onClickLogin&&c.a.createElement(T.a,{className:a.button,variant:"outlined",color:"inherit",onClick:e.onClickLogin},"Login"),null!==e.onClickLogout&&c.a.createElement(T.a,{className:a.button,variant:"outlined",color:"inherit",onClick:e.onClickLogout},"Logout"))),e.showProgress&&c.a.createElement(k.a,{color:"secondary",style:{position:"absolute",width:"100%",bottom:"-4px"}})))};B.propTypes={title:o.a.string.isRequired,onClickLogin:o.a.func,onClickLogo:o.a.func,onClickLogout:o.a.func,onClickSignup:o.a.func,onClickMenuButton:o.a.func,showProgress:o.a.bool},B.defaultProps={onClickLogin:null,onClickLogo:null,onClickLogout:null,onClickSignup:null,onClickMenuButton:null,showProgress:!1};var x=B,I=n(116),z=n(665),W=n(686),V=n(667),G=n(537),U=n.n(G),_=n(541),F=n.n(_),J=n(539),$=n.n(J),K=n(540),X=n.n(K),Q=n(538),Y=n.n(Q),Z=n(117),ee=n(118);function te(){return(te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var ne={success:U.a,warning:Y.a,error:$.a,info:X.a},re=Object(b.a)((function(e){return{success:{backgroundColor:I.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.dark},warning:{backgroundColor:z.a[700]},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"}}})),ae=function(e){var t=function(t){var n=re(),r=ne[t.message.type],a=c.a.createElement(W.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:t.message.show,autoHideDuration:6e3,onClose:t.hideMessage},c.a.createElement(V.a,{className:Object(Z.a)(n[t.message.type]),"aria-describedby":"client-snackbar",message:c.a.createElement("span",{id:"client-snackbar",className:n.message},c.a.createElement(r,{className:Object(Z.a)(n.icon,n.iconVariant)}),t.message.content),action:[c.a.createElement(S.a,{key:"close","aria-label":"Close",color:"inherit",onClick:t.hideMessage},c.a.createElement(F.a,{className:n.icon}))]}));return c.a.createElement(e,te({},t,{message:a}))};t.propTypes={message:o.a.object.isRequired,showMessage:o.a.func.isRequired};return Object(l.c)((function(e){return{message:e.message}}),(function(e){return{hideMessage:function(){e({type:ee.a.HIDE})},showMessage:function(t,n){e(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"info";return{type:ee.a.SHOW,payload:{content:e,type:t}}}(t,n))}}}))(t)},oe=n(685),ie=n(544),ce=n(519),le=Object(b.a)((function(e){return{breadcrumbs:{marginBottom:e.spacing(5)}}})),ue=function(e){if(e.location.pathname===O.a.HOME.PATH)return null;var t=le(),n=location.pathname.split("/");return c.a.createElement(r.a,{fixed:!0},c.a.createElement(oe.a,{className:t.breadcrumbs,"aria-label":"Breadcrumb"},c.a.createElement(ie.a,{color:"inherit",to:O.a.HOME.PATH},"Home"),n.reduce((function(e,t,r){if(""===t)return e;var a,o,i="".concat(n.slice(0,r+1).join("/")),l=(a=i,void 0!==(o=Object.keys(O.a).find((function(e){return Object(ce.b)(a,O.a[e].PATH)})))?O.a[o].TITLE:"");if(""===l)return e;var u=r===n.length-1?c.a.createElement(H.a,{key:i,color:"textPrimary"},l):c.a.createElement(ie.a,{key:i,color:"inherit",to:i},l);return e.push(u),e}),[])))};ue.propTypes={location:o.a.object.isRequired};var se=ue;Object(b.a)((function(e){return{footer:{marginTop:"auto"},container:{marginTop:e.spacing(4),padding:e.spacing(2),backgroundColor:"white"}}}));function fe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.a=function(e){var t=function(t){var n=fe(Object(i.useState)(!1),2),a=n[0],o=n[1],l=t.siteConfig.data.readSiteConfig[0].AllowPublicSignup;return c.a.createElement(c.a.Fragment,null,t.Member?c.a.createElement(x,{title:t.headerTitle,onClickLogo:function(){return t.routeTo(O.a.HOME.PATH)},onClickLogout:function(){window.location=O.a.LOGOUT.PATH},onClickMenuButton:function(){return o(!a)}}):c.a.createElement(x,{title:t.headerTitle,onClickLogo:function(){return t.routeTo(O.a.HOME.PATH)},onClickLogin:function(){window.location=O.a.LOGIN.PATH},onClickSignup:l?function(){return t.routeTo(O.a.SIGNUP.PATH)}:null,showProgress:!1}),t.showBreadcrumbs&&c.a.createElement(se,{location:t.location}),t.Account&&t.Member&&c.a.createElement(w,{isOpen:a,onClose:function(){return o(!a)},orgName:t.Account.OrganisationName,routeTo:t.routeTo}),c.a.createElement(r.a,{fixed:!0,component:"main"},c.a.createElement(e,t)),t.message)};t.propTypes={headerTitle:o.a.string.isRequired,showBreadcrumbs:o.a.bool},t.defaultProps={showBreadcrumbs:!0},t=ae(t);return Object(l.c)((function(e){return{location:e.router.location}}),(function(){return{}}))(t)}},625:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(669),i=n(612),c=n(659),l=n(676),u=n(513),s=n(519),f=n(41);function m(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(['\n  query ReadChannels {\n    channels @rest(type: "Channel", path: "/channels") {\n      items\n    }\n  }\n']);return m=function(){return e},e}var p=Object(f.b)(m()),b=n(44),g=n(91),d=n(604),h=function(){return new b.a({link:new d.RestLink({uri:window.APP.REST_V1_URI}),cache:new g.a})};function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e){return function(t){var n=h();return a.a.createElement(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{readChannels:function(){return n.query({query:p})}}))}},E=n(520);function j(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(['\n  query ReadShares($channel: String!) {\n    shares(channel: "','") @rest(type: "Share", path: "/shares/{args.channel}") {\n      items\n    }\n  }\n']);return j=function(){return e},e}var w=function(e){return Object(f.b)(j(),e)};function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var P=function(e){return function(t){var n=h();return a.a.createElement(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){C(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{readShares:function(e){return n.query({query:w(e)})}}))}},T=n(653),S=n(673),L=n(675),A=n(671),H=n(674),M=n(672),N=n(12),q=n.n(N),R=Object(T.a)((function(e){return{root:{width:"100%",marginTop:e.spacing(3),overflowX:"auto"},table:{minWidth:650}}})),D=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return a.a.createElement(A.a,{key:t.toString()},e)},B=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return a.a.createElement(M.a,{key:t.toString()},e.map(D))},x=function(e){var t=R();return a.a.createElement(S.a,{id:e.id,className:t.table},a.a.createElement(H.a,null,B(e.head)),a.a.createElement(L.a,null,e.body.map(B)))};x.propTypes={id:q.a.string,head:q.a.array.isRequired,body:q.a.array.isRequired},x.defaultProps={id:null};var I=x;function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function V(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var G=function(e){var t=V(Object(r.useState)(!0),2),n=t[0],f=t[1],m=V(Object(r.useState)([]),2),p=m[0],b=m[1],g=V(Object(r.useState)({}),2),d=g[0],h=g[1];return Object(r.useEffect)((function(){e.readChannels().then((function(t){var n=t.data.channels.items;return b(n),Promise.all(n.map((function(t){var n=t.Slug;return e.readShares(n).then((function(e){h(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){W(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},d,W({},n,e.data.shares.items)))}))})))})).finally((function(){f(!1)}))}),[]),a.a.createElement(o.a,{container:!0,spacing:3},a.a.createElement(o.a,{item:!0,xs:12},a.a.createElement(c.a,{variant:"h2",component:"h1",gutterBottom:!0},"Wallet"),n?a.a.createElement(a.a.Fragment,null,a.a.createElement(l.a,{height:54}),a.a.createElement(l.a,{height:54}),a.a.createElement(l.a,{height:54})):a.a.createElement(I,{head:["Project","Equity","Value"],body:p.map((function(e){var t=e.Name,n=e.Slug,r=d[n]?"".concat(d[n].length,"%"):"",o=d[n]?"$".concat(d[n].reduce((function(e,t){return e+t.faceValue}),0)):"";return[a.a.createElement(i.a,{href:Object(s.a)(u.a.WALLET_ITEM.PATH,{slug:n}),variant:"body2"},t),r,o]}))})))};G=P(G=v(G)),G=Object(E.a)(G);t.default=G}}]);