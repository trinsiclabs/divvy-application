(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{519:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));var a=n(542),r=n.n(a),o=function(e,t){return r.a.compile(e)(t)},i=function(e,t){return null!==r()(t).exec(e)}},520:function(e,t,n){"use strict";var a=n(667),r=n(12),o=n.n(r),i=n(1),c=n.n(i),l=n(73),u=n(682),s=n(654),m=n(655),f=n(656),g=n(657),d=n(652),p=n(533),b=n.n(p),h=n(534),v=n.n(h),y=n(513),E=Object(d.a)({list:{width:250}}),k=function(e,t){return function(){e(t)}},C=function(e){var t=E();return c.a.createElement(u.a,{open:e.isOpen,onClose:e.onClose},c.a.createElement("div",{className:t.list,onClick:e.onClose,onKeyDown:e.onClose,role:"presentation"},c.a.createElement(s.a,null,c.a.createElement(m.a,{button:!0,onClick:k(e.routeTo,y.a.HOME.PATH)},c.a.createElement(f.a,null,c.a.createElement(b.a,null)),c.a.createElement(g.a,{primary:e.orgName})),c.a.createElement(m.a,{button:!0,onClick:k(e.routeTo,y.a.WALLET.PATH)},c.a.createElement(f.a,null,c.a.createElement(v.a,null)),c.a.createElement(g.a,{primary:y.a.WALLET.TITLE})))))};C.propTypes={isOpen:o.a.bool.isRequired,onClose:o.a.func.isRequired,routeTo:o.a.func.isRequired};var w=C,O=n(663),T=n(660),j=n(678),S=n(662),L=n(659),P=n(585),A=n(661),M=n(658),N=n(536),H=n.n(N),x=n(535),R=n.n(x);var z=Object(d.a)((function(e){return{root:{position:"relative"},logo:{marginRight:e.spacing(1)},logoCenter:{position:"absolute",left:"50%",marginLeft:"-24px"},title:{flexGrow:1},login:{transform:"rotate(180deg)"},button:{marginLeft:e.spacing(1)}}})),B=function(e){var t,n,a,r=z();c.a.createElement(L.a,{className:R()(r.logo,(t={},n=r.logoCenter,a=null===e.onClickLogin,n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t)),color:"inherit",edge:"start",onClick:e.onClickLogo},c.a.createElement(P.a,null,c.a.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})));return c.a.createElement("div",{className:r.root},c.a.createElement(j.a,{mb:4,style:{position:"relative"}},c.a.createElement(T.a,{position:"static"},c.a.createElement(A.a,null,null!==e.onClickMenuButton&&c.a.createElement(L.a,{"aria-label":"Menu",className:r.menuButton,color:"inherit",edge:"start",onClick:e.onClickMenuButton},c.a.createElement(H.a,null)),c.a.createElement(M.a,{id:"page-title",className:r.title,variant:"h6"},e.title),null!==e.onClickSignup&&c.a.createElement(S.a,{className:r.button,variant:"outlined",color:"inherit",onClick:e.onClickSignup},"Signup"),null!==e.onClickLogin&&c.a.createElement(S.a,{className:r.button,variant:"outlined",color:"inherit",onClick:e.onClickLogin},"Login"),null!==e.onClickLogout&&c.a.createElement(S.a,{className:r.button,variant:"outlined",color:"inherit",onClick:e.onClickLogout},"Logout"))),e.showProgress&&c.a.createElement(O.a,{color:"secondary",style:{position:"absolute",width:"100%",bottom:"-4px"}})))};B.propTypes={title:o.a.string.isRequired,onClickLogin:o.a.func,onClickLogo:o.a.func,onClickLogout:o.a.func,onClickSignup:o.a.func,onClickMenuButton:o.a.func,showProgress:o.a.bool},B.defaultProps={onClickLogin:null,onClickLogo:null,onClickLogout:null,onClickSignup:null,onClickMenuButton:null,showProgress:!1};var I=B,q=n(116),D=n(664),F=n(684),V=n(666),W=n(537),G=n.n(W),J=n(541),U=n.n(J),_=n(539),K=n.n(_),Y=n(540),Q=n.n(Y),X=n(538),Z=n.n(X),$=n(117),ee=n(118);function te(){return(te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var ne={success:G.a,warning:Z.a,error:K.a,info:Q.a},ae=Object(d.a)((function(e){return{success:{backgroundColor:q.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.dark},warning:{backgroundColor:D.a[700]},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"}}})),re=function(e){var t=function(t){var n=ae(),a=ne[t.message.type],r=c.a.createElement(F.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:t.message.show,autoHideDuration:6e3,onClose:t.hideMessage},c.a.createElement(V.a,{className:Object($.a)(n[t.message.type]),"aria-describedby":"client-snackbar",message:c.a.createElement("span",{id:"client-snackbar",className:n.message},c.a.createElement(a,{className:Object($.a)(n.icon,n.iconVariant)}),t.message.content),action:[c.a.createElement(L.a,{key:"close","aria-label":"Close",color:"inherit",onClick:t.hideMessage},c.a.createElement(U.a,{className:n.icon}))]}));return c.a.createElement(e,te({},t,{message:r}))};t.propTypes={message:o.a.object.isRequired,showMessage:o.a.func.isRequired};return Object(l.c)((function(e){return{message:e.message}}),(function(e){return{hideMessage:function(){e({type:ee.a.HIDE})},showMessage:function(t,n){e(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"info";return{type:ee.a.SHOW,payload:{content:e,type:t}}}(t,n))}}}))(t)},oe=n(683),ie=n(544),ce=n(519),le=Object(d.a)((function(e){return{breadcrumbs:{marginBottom:e.spacing(5)}}})),ue=function(e){if(e.location.pathname===y.a.HOME.PATH)return null;var t=le(),n=location.pathname.split("/");return c.a.createElement(a.a,{fixed:!0},c.a.createElement(oe.a,{className:t.breadcrumbs,"aria-label":"Breadcrumb"},c.a.createElement(ie.a,{color:"inherit",to:y.a.HOME.PATH},"Home"),n.reduce((function(e,t,a){if(""===t)return e;var r,o,i="".concat(n.slice(0,a+1).join("/")),l=(r=i,void 0!==(o=Object.keys(y.a).find((function(e){return Object(ce.b)(r,y.a[e].PATH)})))?y.a[o].TITLE:"");if(""===l)return e;var u=a===n.length-1?c.a.createElement(M.a,{key:i,color:"textPrimary"},l):c.a.createElement(ie.a,{key:i,color:"inherit",to:i},l);return e.push(u),e}),[])))};ue.propTypes={location:o.a.object.isRequired};var se=ue;Object(d.a)((function(e){return{footer:{marginTop:"auto"},container:{marginTop:e.spacing(4),padding:e.spacing(2),backgroundColor:"white"}}}));function me(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.a=function(e){var t=function(t){var n=me(Object(i.useState)(!1),2),r=n[0],o=n[1],l=t.siteConfig.data.readSiteConfig[0].AllowPublicSignup;return c.a.createElement(c.a.Fragment,null,t.Member?c.a.createElement(I,{title:t.headerTitle,onClickLogo:function(){return t.routeTo(y.a.HOME.PATH)},onClickLogout:function(){window.location=y.a.LOGOUT.PATH},onClickMenuButton:function(){return o(!r)}}):c.a.createElement(I,{title:t.headerTitle,onClickLogo:function(){return t.routeTo(y.a.HOME.PATH)},onClickLogin:function(){window.location=y.a.LOGIN.PATH},onClickSignup:l?function(){return t.routeTo(y.a.SIGNUP.PATH)}:null,showProgress:!1}),t.showBreadcrumbs&&c.a.createElement(se,{location:t.location}),t.Account&&t.Member&&c.a.createElement(w,{isOpen:r,onClose:function(){return o(!r)},orgName:t.Account.OrganisationName,routeTo:t.routeTo}),c.a.createElement(a.a,{fixed:!0,component:"main"},c.a.createElement(e,t)),t.message)};t.propTypes={headerTitle:o.a.string.isRequired,showBreadcrumbs:o.a.bool},t.defaultProps={showBreadcrumbs:!0},t=re(t);return Object(l.c)((function(e){return{location:e.router.location}}),(function(){return{}}))(t)}},574:function(e,t,n){"use strict";var a=n(522);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(1)),o=(0,a(n(524)).default)(r.default.createElement("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"}),"Lock");t.default=o},622:function(e,t,n){"use strict";n.r(t);var a=n(626),r=n(667),o=n(668),i=n(658),c=n(574),l=n.n(c),u=n(12),s=n.n(u),m=n(1),f=n.n(m),g=n(520),d=n(154);function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var b=function(e){var t=p(Object(m.useState)(""),2),n=t[0],c=t[1],u=p(Object(m.useState)(""),2),s=u[0],g=u[1],b=p(Object(d.c)(),2),h=b[0],v=b[1].loading;return Object(m.useEffect)((function(){h({variables:{token:e.token}}).then((function(){c("Success"),g("You've successfuly verified your account and we're now issuing your shares. Check your email in a few minutes for your login link.")})).catch((function(){c("Failed to verify your account"),g("We were unable to verify your account. Please click the link in your email to try again.")}))}),[]),f.a.createElement(r.a,{maxWidth:"xs"},f.a.createElement(o.a,{container:!0,spacing:3},f.a.createElement(o.a,{item:!0,xs:12},f.a.createElement(a.a,null,f.a.createElement(l.a,null)),f.a.createElement(i.a,{component:"h1",variant:"h5",gutterBottom:!0},v?"Confirming your email address...":n),!v&&f.a.createElement(i.a,{component:"p"},s))))};b.propTypes={token:s.a.string.isRequired},b=Object(g.a)(b),t.default=b},626:function(e,t,n){"use strict";var a=n(4),r=n(18),o=n(1),i=(n(12),n(117)),c=n(92),l=n(543),u=Object(l.a)(o.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var s=o.forwardRef((function(e,t){var n=e.alt,c=e.children,l=e.classes,s=e.className,m=e.component,f=void 0===m?"div":m,g=e.imgProps,d=e.sizes,p=e.src,b=e.srcSet,h=e.variant,v=void 0===h?"circle":h,y=Object(r.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),E=null,k=function(e){var t=e.src,n=e.srcSet,a=o.useState(!1),r=a[0],i=a[1];return o.useEffect((function(){if(t||n){i(!1);var e=!0,a=new Image;return a.src=t,a.srcSet=n,a.onload=function(){e&&i("loaded")},a.onerror=function(){e&&i("error")},function(){e=!1}}}),[t,n]),r}({src:p,srcSet:b}),C=p||b,w=C&&"error"!==k;return E=w?o.createElement("img",Object(a.a)({alt:n,src:p,srcSet:b,sizes:d,className:l.img},g)):null!=c?c:C&&n?n[0]:o.createElement(u,{className:l.fallback}),o.createElement(f,Object(a.a)({className:Object(i.a)(l.root,l.system,l[v],s,!w&&l.colorDefault),ref:t},y),E)}));t.a=Object(c.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(s)}}]);