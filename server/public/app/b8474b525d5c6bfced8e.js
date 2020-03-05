(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{515:function(e,t,n){"use strict";var a=n(637),r=n(12),o=n.n(r),i=n(1),c=n.n(i),l=n(73),u=n(648),s=n(623),m=n(624),f=n(625),g=n(626),d=n(212),p=n(525),b=n.n(p),h=n(511),v=Object(d.a)({list:{width:250}}),y=function(e){var t,n,a=v();return c.a.createElement(u.a,{open:e.isOpen,onClose:e.onClose},c.a.createElement("div",{className:a.list,onClick:e.onClose,onKeyDown:e.onClose,role:"presentation"},c.a.createElement(s.a,null,c.a.createElement(m.a,{button:!0,onClick:(t=e.routeTo,n=h.a.HOME.PATH,function(){t(n)})},c.a.createElement(f.a,null,c.a.createElement(b.a,null)),c.a.createElement(g.a,{primary:"Dashboard"})))))};y.propTypes={isOpen:o.a.bool.isRequired,onClose:o.a.func.isRequired,routeTo:o.a.func.isRequired};var E=y,k=n(632),C=n(629),w=n(643),O=n(631),j=n(628),T=n(574),S=n(630),P=n(627),L=n(527),M=n.n(L),N=n(526),H=n.n(N);var x=Object(d.a)((function(e){return{root:{position:"relative"},logo:{marginRight:e.spacing(1)},logoCenter:{position:"absolute",left:"50%",marginLeft:"-24px"},title:{flexGrow:1},login:{transform:"rotate(180deg)"},button:{marginLeft:e.spacing(1)}}})),A=function(e){var t,n,a,r=x(),o=c.a.createElement(j.a,{className:H()(r.logo,(t={},n=r.logoCenter,a=null===e.onClickLogin,n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t)),color:"inherit",edge:"start",onClick:e.onClickLogo},c.a.createElement(T.a,null,c.a.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})));return c.a.createElement("div",{className:r.root},c.a.createElement(w.a,{mb:4,style:{position:"relative"}},c.a.createElement(C.a,{position:"static"},c.a.createElement(S.a,null,null!==e.onClickMenuButton&&c.a.createElement(j.a,{"aria-label":"Menu",className:r.menuButton,color:"inherit",edge:"start",onClick:e.onClickMenuButton},c.a.createElement(M.a,null)),o,c.a.createElement(P.a,{id:"page-title",className:r.title,variant:"h6"},e.title),null!==e.onClickSignup&&c.a.createElement(O.a,{className:r.button,variant:"outlined",color:"inherit",onClick:e.onClickSignup},"Signup"),null!==e.onClickLogin&&c.a.createElement(O.a,{className:r.button,variant:"outlined",color:"inherit",onClick:e.onClickLogin},"Login"),null!==e.onClickLogout&&c.a.createElement(O.a,{className:r.button,variant:"outlined",color:"inherit",onClick:e.onClickLogout},"Logout"))),e.showProgress&&c.a.createElement(k.a,{color:"secondary",style:{position:"absolute",width:"100%",bottom:"-4px"}})))};A.propTypes={title:o.a.string.isRequired,onClickLogin:o.a.func,onClickLogo:o.a.func,onClickLogout:o.a.func,onClickSignup:o.a.func,onClickMenuButton:o.a.func,showProgress:o.a.bool},A.defaultProps={onClickLogin:null,onClickLogo:null,onClickLogout:null,onClickSignup:null,onClickMenuButton:null,showProgress:!1};var R=A,z=n(633),B=n(634),q=n(650),I=n(636),D=n(528),F=n.n(D),V=n(532),G=n.n(V),W=n(530),J=n.n(W),U=n(531),_=n.n(U),K=n(529),Y=n.n(K),Q=n(115),X=n(116);function Z(){return(Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var $={success:F.a,warning:Y.a,error:J.a,info:_.a},ee=Object(d.a)((function(e){return{success:{backgroundColor:z.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.dark},warning:{backgroundColor:B.a[700]},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"}}})),te=function(e){var t=function(t){var n=ee(),a=$[t.message.type],r=c.a.createElement(q.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:t.message.show,autoHideDuration:6e3,onClose:t.hideMessage},c.a.createElement(I.a,{className:Object(Q.a)(n[t.message.type]),"aria-describedby":"client-snackbar",message:c.a.createElement("span",{id:"client-snackbar",className:n.message},c.a.createElement(a,{className:Object(Q.a)(n.icon,n.iconVariant)}),t.message.content),action:[c.a.createElement(j.a,{key:"close","aria-label":"Close",color:"inherit",onClick:t.hideMessage},c.a.createElement(G.a,{className:n.icon}))]}));return c.a.createElement(e,Z({},t,{message:r}))};t.propTypes={message:o.a.object.isRequired,showMessage:o.a.func.isRequired};return Object(l.c)((function(e){return{message:e.message}}),(function(e){return{hideMessage:function(){e({type:X.a.HIDE})},showMessage:function(t,n){e(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"info";return{type:X.a.SHOW,payload:{content:e,type:t}}}(t,n))}}}))(t)},ne=n(649),ae=n(535),re=n(533),oe=n.n(re),ie=Object(d.a)((function(e){return{breadcrumbs:{marginBottom:e.spacing(5)}}})),ce=function(e){var t=Object.keys(h.a).find((function(t){return function(e,t){return null!==oe()(t).exec(e)}(e,h.a[t].PATH)}));return void 0!==t?h.a[t].TITLE:""},le=function(e){if(e.location.pathname===h.a.HOME.PATH)return null;var t=ie(),n=location.pathname.split("/");return c.a.createElement(a.a,{fixed:!0},c.a.createElement(ne.a,{className:t.breadcrumbs,"aria-label":"Breadcrumb"},c.a.createElement(ae.a,{color:"inherit",to:h.a.HOME.PATH},"Home"),n.reduce((function(e,t,a){if(""===t)return e;var r="".concat(n.slice(0,a+1).join("/")),o=ce(r);if(""===o)return e;var i=a===n.length-1?c.a.createElement(P.a,{key:r,color:"textPrimary"},o):c.a.createElement(ae.a,{key:r,color:"inherit",to:r},o);return e.push(i),e}),[])))};le.propTypes={location:o.a.object.isRequired};var ue=le,se=Object(d.a)((function(e){return{footer:{marginTop:"auto"},container:{marginTop:e.spacing(4),padding:e.spacing(2),backgroundColor:"white"}}})),me=function(e){var t=se();return c.a.createElement("footer",{className:t.footer},c.a.createElement("div",{className:t.container},c.a.createElement(a.a,{fixed:!0},c.a.createElement(P.a,{variant:"body1"},"Copyright | Terms of use | Privacy"))))};function fe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.a=function(e){var t=function(t){var n=fe(Object(i.useState)(!1),2),r=n[0],o=n[1],l=t.siteConfig.data.readSiteConfig[0].AllowPublicSignup;return c.a.createElement(c.a.Fragment,null,t.Member?c.a.createElement(R,{title:t.headerTitle,onClickLogo:function(){return t.routeTo(h.a.HOME.PATH)},onClickLogout:function(){window.location=h.a.LOGOUT.PATH},onClickMenuButton:function(){return o(!r)}}):c.a.createElement(R,{title:t.headerTitle,onClickLogo:function(){return t.routeTo(h.a.HOME.PATH)},onClickLogin:function(){window.location=h.a.LOGIN.PATH},onClickSignup:l?function(){return t.routeTo(h.a.SIGNUP.PATH)}:null,showProgress:!1}),t.showBreadcrumbs&&c.a.createElement(ue,{location:t.location}),t.Member&&c.a.createElement(E,{isOpen:r,onClose:function(){return o(!r)},routeTo:t.routeTo}),c.a.createElement(a.a,{fixed:!0,component:"main"},c.a.createElement(e,t)),t.message,c.a.createElement(me,null))};t.propTypes={headerTitle:o.a.string.isRequired,showBreadcrumbs:o.a.bool},t.defaultProps={showBreadcrumbs:!0},t=te(t);return Object(l.c)((function(e){return{location:e.router.location}}),(function(){return{}}))(t)}},562:function(e,t,n){"use strict";var a=n(516);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(1)),o=(0,a(n(518)).default)(r.default.createElement("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"}),"Lock");t.default=o},597:function(e,t,n){"use strict";n.r(t);var a=n(600),r=n(637),o=n(638),i=n(627),c=n(562),l=n.n(c),u=n(12),s=n.n(u),m=n(1),f=n.n(m),g=n(515),d=n(150);function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var b=function(e){var t=p(Object(m.useState)(""),2),n=t[0],c=t[1],u=p(Object(m.useState)(""),2),s=u[0],g=u[1],b=p(Object(d.c)(),2),h=b[0],v=b[1].loading;return Object(m.useEffect)((function(){h({variables:{token:e.token}}).then((function(){c("Success"),g("You've successfuly verified your account and we're now issuing your shares. Check your email in a few minutes for your login link.")})).catch((function(){c("Failed to verify your account"),g("We were unable to verify your account. Please click the link in your email to try again.")}))}),[]),f.a.createElement(r.a,{maxWidth:"xs"},f.a.createElement(o.a,{container:!0,spacing:3},f.a.createElement(o.a,{item:!0,xs:12},f.a.createElement(a.a,null,f.a.createElement(l.a,null)),f.a.createElement(i.a,{component:"h1",variant:"h5",gutterBottom:!0},v?"Confirming your email address...":n),!v&&f.a.createElement(i.a,{component:"p"},s))))};b.propTypes={token:s.a.string.isRequired},b=Object(g.a)(b),t.default=b},600:function(e,t,n){"use strict";var a=n(4),r=n(18),o=n(1),i=n.n(o),c=(n(12),n(115)),l=n(146),u=n(534),s=Object(u.a)(i.a.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var m=i.a.forwardRef((function(e,t){var n=e.alt,o=e.children,l=e.classes,u=e.className,m=e.component,f=void 0===m?"div":m,g=e.imgProps,d=e.sizes,p=e.src,b=e.srcSet,h=e.variant,v=void 0===h?"circle":h,y=Object(r.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),E=null,k=function(e){var t=e.src,n=e.srcSet,a=i.a.useState(!1),r=a[0],o=a[1];return i.a.useEffect((function(){if(t||n){o(!1);var e=!0,a=new Image;return a.src=t,a.srcSet=n,a.onload=function(){e&&o("loaded")},a.onerror=function(){e&&o("error")},function(){e=!1}}}),[t,n]),r}({src:p,srcSet:b}),C=p||b,w=C&&"error"!==k;return E=w?i.a.createElement("img",Object(a.a)({alt:n,src:p,srcSet:b,sizes:d,className:l.img},g)):null!=o?o:C&&n?n[0]:i.a.createElement(s,{className:l.fallback}),i.a.createElement(f,Object(a.a)({className:Object(c.a)(l.root,l.system,l[v],u,!w&&l.colorDefault),ref:t},y),E)}));t.a=Object(l.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",backgroundColor:e.palette.action.hover,textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(m)}}]);