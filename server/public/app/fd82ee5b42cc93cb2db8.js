(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{511:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var a={HOME:{PATH:"/"},LOGIN:{PATH:"/Security/login?BackURL=/"},LOGOUT:{TITLE:"Logout",PATH:"/Security/logout?BackURL=/"},NOT_FOUND:{TITLE:"Not Found",PATH:"/not-found"},SIGNUP:{TITLE:"Signup",PATH:"/signup"},SIGNUP_CONFIRM:{TITLE:"Confirm your email",PATH:"/signup/confirm/:token"},WALLET:{TITLE:"Wallet",PATH:"/wallet"}}},515:function(e,n,t){"use strict";var a=t(637),o=t(12),r=t.n(o),i=t(1),l=t.n(i),c=t(73),u=t(648),s=t(623),m=t(624),g=t(625),f=t(626),p=t(212),d=t(525),E=t.n(d),b=t(526),T=t.n(b),h=t(511),C=Object(p.a)({list:{width:250}}),k=function(e,n){return function(){e(n)}},v=function(e){var n=C();return l.a.createElement(u.a,{open:e.isOpen,onClose:e.onClose},l.a.createElement("div",{className:n.list,onClick:e.onClose,onKeyDown:e.onClose,role:"presentation"},l.a.createElement(s.a,null,l.a.createElement(m.a,{button:!0,onClick:k(e.routeTo,h.a.HOME.PATH)},l.a.createElement(g.a,null,l.a.createElement(E.a,null)),l.a.createElement(f.a,{primary:"Dashboard"})),l.a.createElement(m.a,{button:!0,onClick:k(e.routeTo,h.a.WALLET.PATH)},l.a.createElement(g.a,null,l.a.createElement(T.a,null)),l.a.createElement(f.a,{primary:h.a.WALLET.TITLE})))))};v.propTypes={isOpen:r.a.bool.isRequired,onClose:r.a.func.isRequired,routeTo:r.a.func.isRequired};var y=v,L=t(632),O=t(629),w=t(643),P=t(631),H=t(628),A=t(574),N=t(630),j=t(627),M=t(528),S=t.n(M),I=t(527),B=t.n(I);var R=Object(p.a)((function(e){return{root:{position:"relative"},logo:{marginRight:e.spacing(1)},logoCenter:{position:"absolute",left:"50%",marginLeft:"-24px"},title:{flexGrow:1},login:{transform:"rotate(180deg)"},button:{marginLeft:e.spacing(1)}}})),x=function(e){var n,t,a,o=R(),r=l.a.createElement(H.a,{className:B()(o.logo,(n={},t=o.logoCenter,a=null===e.onClickLogin,t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n)),color:"inherit",edge:"start",onClick:e.onClickLogo},l.a.createElement(A.a,null,l.a.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})));return l.a.createElement("div",{className:o.root},l.a.createElement(w.a,{mb:4,style:{position:"relative"}},l.a.createElement(O.a,{position:"static"},l.a.createElement(N.a,null,null!==e.onClickMenuButton&&l.a.createElement(H.a,{"aria-label":"Menu",className:o.menuButton,color:"inherit",edge:"start",onClick:e.onClickMenuButton},l.a.createElement(S.a,null)),r,l.a.createElement(j.a,{id:"page-title",className:o.title,variant:"h6"},e.title),null!==e.onClickSignup&&l.a.createElement(P.a,{className:o.button,variant:"outlined",color:"inherit",onClick:e.onClickSignup},"Signup"),null!==e.onClickLogin&&l.a.createElement(P.a,{className:o.button,variant:"outlined",color:"inherit",onClick:e.onClickLogin},"Login"),null!==e.onClickLogout&&l.a.createElement(P.a,{className:o.button,variant:"outlined",color:"inherit",onClick:e.onClickLogout},"Logout"))),e.showProgress&&l.a.createElement(L.a,{color:"secondary",style:{position:"absolute",width:"100%",bottom:"-4px"}})))};x.propTypes={title:r.a.string.isRequired,onClickLogin:r.a.func,onClickLogo:r.a.func,onClickLogout:r.a.func,onClickSignup:r.a.func,onClickMenuButton:r.a.func,showProgress:r.a.bool},x.defaultProps={onClickLogin:null,onClickLogo:null,onClickLogout:null,onClickSignup:null,onClickMenuButton:null,showProgress:!1};var q=x,G=t(633),U=t(634),D=t(650),W=t(636),F=t(529),z=t.n(F),J=t(533),V=t.n(J),_=t(531),K=t.n(_),Q=t(532),X=t.n(Q),Y=t(530),Z=t.n(Y),$=t(115),ee=t(116);function ne(){return(ne=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var te={success:z.a,warning:Z.a,error:K.a,info:X.a},ae=Object(p.a)((function(e){return{success:{backgroundColor:G.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.dark},warning:{backgroundColor:U.a[700]},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"}}})),oe=function(e){var n=function(n){var t=ae(),a=te[n.message.type],o=l.a.createElement(D.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:n.message.show,autoHideDuration:6e3,onClose:n.hideMessage},l.a.createElement(W.a,{className:Object($.a)(t[n.message.type]),"aria-describedby":"client-snackbar",message:l.a.createElement("span",{id:"client-snackbar",className:t.message},l.a.createElement(a,{className:Object($.a)(t.icon,t.iconVariant)}),n.message.content),action:[l.a.createElement(H.a,{key:"close","aria-label":"Close",color:"inherit",onClick:n.hideMessage},l.a.createElement(V.a,{className:t.icon}))]}));return l.a.createElement(e,ne({},n,{message:o}))};n.propTypes={message:r.a.object.isRequired,showMessage:r.a.func.isRequired};return Object(c.c)((function(e){return{message:e.message}}),(function(e){return{hideMessage:function(){e({type:ee.a.HIDE})},showMessage:function(n,t){e(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"info";return{type:ee.a.SHOW,payload:{content:e,type:n}}}(n,t))}}}))(n)},re=t(649),ie=t(536),le=t(534),ce=t.n(le),ue=Object(p.a)((function(e){return{breadcrumbs:{marginBottom:e.spacing(5)}}})),se=function(e){var n=Object.keys(h.a).find((function(n){return function(e,n){return null!==ce()(n).exec(e)}(e,h.a[n].PATH)}));return void 0!==n?h.a[n].TITLE:""},me=function(e){if(e.location.pathname===h.a.HOME.PATH)return null;var n=ue(),t=location.pathname.split("/");return l.a.createElement(a.a,{fixed:!0},l.a.createElement(re.a,{className:n.breadcrumbs,"aria-label":"Breadcrumb"},l.a.createElement(ie.a,{color:"inherit",to:h.a.HOME.PATH},"Home"),t.reduce((function(e,n,a){if(""===n)return e;var o="".concat(t.slice(0,a+1).join("/")),r=se(o);if(""===r)return e;var i=a===t.length-1?l.a.createElement(j.a,{key:o,color:"textPrimary"},r):l.a.createElement(ie.a,{key:o,color:"inherit",to:o},r);return e.push(i),e}),[])))};me.propTypes={location:r.a.object.isRequired};var ge=me,fe=Object(p.a)((function(e){return{footer:{marginTop:"auto"},container:{marginTop:e.spacing(4),padding:e.spacing(2),backgroundColor:"white"}}})),pe=function(e){var n=fe();return l.a.createElement("footer",{className:n.footer},l.a.createElement("div",{className:n.container},l.a.createElement(a.a,{fixed:!0},l.a.createElement(j.a,{variant:"body1"},"Copyright | Terms of use | Privacy"))))};function de(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],a=!0,o=!1,r=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(t.push(i.value),!n||t.length!==n);a=!0);}catch(e){o=!0,r=e}finally{try{a||null==l.return||l.return()}finally{if(o)throw r}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.a=function(e){var n=function(n){var t=de(Object(i.useState)(!1),2),o=t[0],r=t[1],c=n.siteConfig.data.readSiteConfig[0].AllowPublicSignup;return l.a.createElement(l.a.Fragment,null,n.Member?l.a.createElement(q,{title:n.headerTitle,onClickLogo:function(){return n.routeTo(h.a.HOME.PATH)},onClickLogout:function(){window.location=h.a.LOGOUT.PATH},onClickMenuButton:function(){return r(!o)}}):l.a.createElement(q,{title:n.headerTitle,onClickLogo:function(){return n.routeTo(h.a.HOME.PATH)},onClickLogin:function(){window.location=h.a.LOGIN.PATH},onClickSignup:c?function(){return n.routeTo(h.a.SIGNUP.PATH)}:null,showProgress:!1}),n.showBreadcrumbs&&l.a.createElement(ge,{location:n.location}),n.Member&&l.a.createElement(y,{isOpen:o,onClose:function(){return r(!o)},routeTo:n.routeTo}),l.a.createElement(a.a,{fixed:!0,component:"main"},l.a.createElement(e,n)),n.message,l.a.createElement(pe,null))};n.propTypes={headerTitle:r.a.string.isRequired,showBreadcrumbs:r.a.bool},n.defaultProps={showBreadcrumbs:!0},n=oe(n);return Object(c.c)((function(e){return{location:e.router.location}}),(function(){return{}}))(n)}},621:function(e,n,t){"use strict";t.r(n);var a=t(638),o=t(627),r=t(1),i=t.n(r),l=t(515),c=function(){return i.a.createElement(a.a,{container:!0,spacing:3},i.a.createElement(a.a,{item:!0,xs:12},i.a.createElement(o.a,{variant:"h2",component:"h1"},"Oops - something went wrong.")))};c=Object(l.a)(c),n.default=c}}]);