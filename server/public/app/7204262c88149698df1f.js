(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{519:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return i}));var a=t(542),r=t.n(a),o=function(e,n){return r.a.compile(e)(n)},i=function(e,n){return null!==r()(n).exec(e)}},520:function(e,n,t){"use strict";var a=t(667),r=t(12),o=t.n(r),i=t(1),c=t.n(i),l=t(73),u=t(682),s=t(654),m=t(655),f=t(656),g=t(657),p=t(652),b=t(533),d=t.n(b),h=t(534),y=t.n(h),E=t(513),v=Object(p.a)({list:{width:250}}),O=function(e,n){return function(){e(n)}},k=function(e){var n=v();return c.a.createElement(u.a,{open:e.isOpen,onClose:e.onClose},c.a.createElement("div",{className:n.list,onClick:e.onClose,onKeyDown:e.onClose,role:"presentation"},c.a.createElement(s.a,null,c.a.createElement(m.a,{button:!0,onClick:O(e.routeTo,E.a.HOME.PATH)},c.a.createElement(f.a,null,c.a.createElement(d.a,null)),c.a.createElement(g.a,{primary:e.orgName})),c.a.createElement(m.a,{button:!0,onClick:O(e.routeTo,E.a.WALLET.PATH)},c.a.createElement(f.a,null,c.a.createElement(y.a,null)),c.a.createElement(g.a,{primary:E.a.WALLET.TITLE})))))};k.propTypes={isOpen:o.a.bool.isRequired,onClose:o.a.func.isRequired,routeTo:o.a.func.isRequired};var C=k,w=t(663),j=t(660),T=t(678),P=t(662),L=t(659),A=t(585),S=t(661),N=t(658),H=t(536),M=t.n(H),R=t(535),q=t.n(R);var B=Object(p.a)((function(e){return{root:{position:"relative"},logo:{marginRight:e.spacing(1)},logoCenter:{position:"absolute",left:"50%",marginLeft:"-24px"},title:{flexGrow:1},login:{transform:"rotate(180deg)"},button:{marginLeft:e.spacing(1)}}})),x=function(e){var n,t,a,r=B();c.a.createElement(L.a,{className:q()(r.logo,(n={},t=r.logoCenter,a=null===e.onClickLogin,t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n)),color:"inherit",edge:"start",onClick:e.onClickLogo},c.a.createElement(A.a,null,c.a.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})));return c.a.createElement("div",{className:r.root},c.a.createElement(T.a,{mb:4,style:{position:"relative"}},c.a.createElement(j.a,{position:"static"},c.a.createElement(S.a,null,null!==e.onClickMenuButton&&c.a.createElement(L.a,{"aria-label":"Menu",className:r.menuButton,color:"inherit",edge:"start",onClick:e.onClickMenuButton},c.a.createElement(M.a,null)),c.a.createElement(N.a,{id:"page-title",className:r.title,variant:"h6"},e.title),null!==e.onClickSignup&&c.a.createElement(P.a,{className:r.button,variant:"outlined",color:"inherit",onClick:e.onClickSignup},"Signup"),null!==e.onClickLogin&&c.a.createElement(P.a,{className:r.button,variant:"outlined",color:"inherit",onClick:e.onClickLogin},"Login"),null!==e.onClickLogout&&c.a.createElement(P.a,{className:r.button,variant:"outlined",color:"inherit",onClick:e.onClickLogout},"Logout"))),e.showProgress&&c.a.createElement(w.a,{color:"secondary",style:{position:"absolute",width:"100%",bottom:"-4px"}})))};x.propTypes={title:o.a.string.isRequired,onClickLogin:o.a.func,onClickLogo:o.a.func,onClickLogout:o.a.func,onClickSignup:o.a.func,onClickMenuButton:o.a.func,showProgress:o.a.bool},x.defaultProps={onClickLogin:null,onClickLogo:null,onClickLogout:null,onClickSignup:null,onClickMenuButton:null,showProgress:!1};var I=x,D=t(116),W=t(664),z=t(684),G=t(666),V=t(537),U=t.n(V),_=t(541),J=t.n(_),F=t(539),K=t.n(F),X=t(540),Q=t.n(X),Y=t(538),Z=t.n(Y),$=t(117),ee=t(118);function ne(){return(ne=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var te={success:U.a,warning:Z.a,error:K.a,info:Q.a},ae=Object(p.a)((function(e){return{success:{backgroundColor:D.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.dark},warning:{backgroundColor:W.a[700]},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"}}})),re=function(e){var n=function(n){var t=ae(),a=te[n.message.type],r=c.a.createElement(z.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:n.message.show,autoHideDuration:6e3,onClose:n.hideMessage},c.a.createElement(G.a,{className:Object($.a)(t[n.message.type]),"aria-describedby":"client-snackbar",message:c.a.createElement("span",{id:"client-snackbar",className:t.message},c.a.createElement(a,{className:Object($.a)(t.icon,t.iconVariant)}),n.message.content),action:[c.a.createElement(L.a,{key:"close","aria-label":"Close",color:"inherit",onClick:n.hideMessage},c.a.createElement(J.a,{className:t.icon}))]}));return c.a.createElement(e,ne({},n,{message:r}))};n.propTypes={message:o.a.object.isRequired,showMessage:o.a.func.isRequired};return Object(l.c)((function(e){return{message:e.message}}),(function(e){return{hideMessage:function(){e({type:ee.a.HIDE})},showMessage:function(n,t){e(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"info";return{type:ee.a.SHOW,payload:{content:e,type:n}}}(n,t))}}}))(n)},oe=t(683),ie=t(544),ce=t(519),le=Object(p.a)((function(e){return{breadcrumbs:{marginBottom:e.spacing(5)}}})),ue=function(e){if(e.location.pathname===E.a.HOME.PATH)return null;var n=le(),t=location.pathname.split("/");return c.a.createElement(a.a,{fixed:!0},c.a.createElement(oe.a,{className:n.breadcrumbs,"aria-label":"Breadcrumb"},c.a.createElement(ie.a,{color:"inherit",to:E.a.HOME.PATH},"Home"),t.reduce((function(e,n,a){if(""===n)return e;var r,o,i="".concat(t.slice(0,a+1).join("/")),l=(r=i,void 0!==(o=Object.keys(E.a).find((function(e){return Object(ce.b)(r,E.a[e].PATH)})))?E.a[o].TITLE:"");if(""===l)return e;var u=a===t.length-1?c.a.createElement(N.a,{key:i,color:"textPrimary"},l):c.a.createElement(ie.a,{key:i,color:"inherit",to:i},l);return e.push(u),e}),[])))};ue.propTypes={location:o.a.object.isRequired};var se=ue;Object(p.a)((function(e){return{footer:{marginTop:"auto"},container:{marginTop:e.spacing(4),padding:e.spacing(2),backgroundColor:"white"}}}));function me(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],a=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(t.push(i.value),!n||t.length!==n);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.a=function(e){var n=function(n){var t=me(Object(i.useState)(!1),2),r=t[0],o=t[1],l=n.siteConfig.data.readSiteConfig[0].AllowPublicSignup;return c.a.createElement(c.a.Fragment,null,n.Member?c.a.createElement(I,{title:n.headerTitle,onClickLogo:function(){return n.routeTo(E.a.HOME.PATH)},onClickLogout:function(){window.location=E.a.LOGOUT.PATH},onClickMenuButton:function(){return o(!r)}}):c.a.createElement(I,{title:n.headerTitle,onClickLogo:function(){return n.routeTo(E.a.HOME.PATH)},onClickLogin:function(){window.location=E.a.LOGIN.PATH},onClickSignup:l?function(){return n.routeTo(E.a.SIGNUP.PATH)}:null,showProgress:!1}),n.showBreadcrumbs&&c.a.createElement(se,{location:n.location}),n.Account&&n.Member&&c.a.createElement(C,{isOpen:r,onClose:function(){return o(!r)},orgName:n.Account.OrganisationName,routeTo:n.routeTo}),c.a.createElement(a.a,{fixed:!0,component:"main"},c.a.createElement(e,n)),n.message)};n.propTypes={headerTitle:o.a.string.isRequired,showBreadcrumbs:o.a.bool},n.defaultProps={showBreadcrumbs:!0},n=re(n);return Object(l.c)((function(e){return{location:e.router.location}}),(function(){return{}}))(n)}},625:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),o=t(668),i=t(612),c=t(658),l=t(513),u=t(519),s=t(41);function m(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(['\n  query ReadChannels {\n    channels @rest(type: "Channel", path: "/channels") {\n      items\n    }\n  }\n']);return m=function(){return e},e}var f=Object(s.b)(m()),g=t(44),p=t(91),b=t(604),d=function(){return new g.a({link:new b.RestLink({uri:window.APP.REST_V1_URI}),cache:new p.a})};function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function y(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var E=function(e){return function(n){var t=d().query({query:f});return r.a.createElement(e,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){y(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},n,{channels:t}))}},v=t(520),O=t(652),k=t(672),C=t(674),w=t(670),j=t(673),T=t(671),P=t(12),L=t.n(P),A=Object(O.a)((function(e){return{root:{width:"100%",marginTop:e.spacing(3),overflowX:"auto"},table:{minWidth:650}}})),S=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return r.a.createElement(w.a,{key:n.toString()},e)},N=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return r.a.createElement(T.a,{key:n.toString()},e.map(S))},H=function(e){var n=A();return r.a.createElement(k.a,{id:e.id,className:n.table},r.a.createElement(j.a,null,N(e.head)),r.a.createElement(C.a,null,e.body.map(N)))};H.propTypes={id:L.a.string,head:L.a.array.isRequired,body:L.a.array.isRequired},H.defaultProps={id:null};var M=H;function R(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],a=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(t.push(i.value),!n||t.length!==n);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var q=function(e){var n=R(Object(a.useState)([]),2),t=n[0],s=n[1];return e.channels.then((function(e){s(e.data.channels.items)})),r.a.createElement(o.a,{container:!0,spacing:3},r.a.createElement(o.a,{item:!0,xs:12},r.a.createElement(c.a,{variant:"h2",component:"h1",gutterBottom:!0},"Wallet"),t.length>0&&r.a.createElement(M,{head:["Project","Equity","Value"],body:t.map((function(e){return[r.a.createElement(i.a,{href:Object(u.a)(l.a.WALLET_ITEM.PATH,{slug:e.Slug}),variant:"body2"},e.Name),"N/A","N/A"]}))})))};q=E(q),q=Object(v.a)(q);n.default=q}}]);