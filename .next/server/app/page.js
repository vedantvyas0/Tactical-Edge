(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},6739:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GlobalError:()=>r.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>u,routeModule:()=>m,tree:()=>c});var s=n(482),o=n(9108),a=n(2563),r=n.n(a),i=n(8300),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);n.d(t,l);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(n.bind(n,4161)),"/home/zibtek/Projects/tactical-edge/Tactical-Edge/app/page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(n.bind(n,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(n.bind(n,4244)),"/home/zibtek/Projects/tactical-edge/Tactical-Edge/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(n.t.bind(n,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(n.bind(n,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["/home/zibtek/Projects/tactical-edge/Tactical-Edge/app/page.tsx"],d="/page",p={require:n,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},6575:()=>{},777:(e,t,n)=>{Promise.resolve().then(n.bind(n,9525))},7151:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,2583,23)),Promise.resolve().then(n.t.bind(n,6840,23)),Promise.resolve().then(n.t.bind(n,8771,23)),Promise.resolve().then(n.t.bind(n,3225,23)),Promise.resolve().then(n.t.bind(n,9295,23)),Promise.resolve().then(n.t.bind(n,3982,23))},6137:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var s=n(2295);n(3729);var o=n(708),a=n(3049),r=n.n(a);let i=({placeholder:e,control:t,setValue:n,reset:a,name:i,defaultValue:l})=>s.jsx("div",{children:s.jsx(o.Qr,{control:t,name:i,render:({field:t})=>s.jsx("input",{className:"publishingDate"===i?`${r().input} ${r().inputDate}`:"title"===i?`${r().input} ${r().inputTitle}`:r().input,...t,onChange:e=>{n&&n(i,e.target.value),t.onChange(e)},placeholder:e,name:i})})})},9525:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>G});var s=n(2295),o=n(3729),a=n(708),r=n(9709),i=n(5453),l=n(6137),c=n(735),u=n.n(c),d=n(9882),p=n.n(d);let m=({title:e,onClick:t})=>s.jsx("button",{type:"button",onClick:t,className:p().submitBtn,children:e});var f=n(2254);let g=function(){for(var e,t,n=0,s="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,s,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(s=e(t[n]))&&(o&&(o+=" "),o+=s);else for(n in t)t[n]&&(o&&(o+=" "),o+=n)}return o}(e))&&(s&&(s+=" "),s+=t);return s},h=e=>"number"==typeof e&&!isNaN(e),v=e=>"string"==typeof e,y=e=>"function"==typeof e,x=e=>v(e)||y(e)?e:null,E=e=>(0,o.isValidElement)(e)||v(e)||y(e)||h(e);function T(e){let{enter:t,exit:n,appendPosition:s=!1,collapse:a=!0,collapseDuration:r=300}=e;return function(e){let{children:i,position:l,preventExitTransition:c,done:u,nodeRef:d,isIn:p}=e,m=s?`${t}--${l}`:t,f=s?`${n}--${l}`:n,g=(0,o.useRef)(0);return(0,o.useLayoutEffect)(()=>{let e=d.current,t=m.split(" "),n=s=>{s.target===d.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===g.current&&"animationcancel"!==s.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)},[]),(0,o.useEffect)(()=>{let e=d.current,t=()=>{e.removeEventListener("animationend",t),a?function(e,t,n){void 0===n&&(n=300);let{scrollHeight:s,style:o}=e;requestAnimationFrame(()=>{o.minHeight="initial",o.height=s+"px",o.transition=`all ${n}ms`,requestAnimationFrame(()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)})})}(e,u,r):u()};p||(c?t():(g.current=1,e.className+=` ${f}`,e.addEventListener("animationend",t)))},[p]),o.createElement(o.Fragment,null,i)}}function b(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}let _={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){let n=this.list.get(e).filter(e=>e!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){let t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{let n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},I=e=>{let{theme:t,type:n,...s}=e;return o.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${n})`,...s})},C={info:function(e){return o.createElement(I,{...e},o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return o.createElement(I,{...e},o.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return o.createElement(I,{...e},o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return o.createElement(I,{...e},o.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return o.createElement("div",{className:"Toastify__spinner"})}};function P(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function N(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function L(e){let{closeToast:t,theme:n,ariaLabel:s="close"}=e;return o.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:e=>{e.stopPropagation(),t(e)},"aria-label":s},o.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function O(e){let{delay:t,isRunning:n,closeToast:s,type:a="default",hide:r,className:i,style:l,controlledProgress:c,progress:u,rtl:d,isIn:p,theme:m}=e,f=r||c&&0===u,h={...l,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:f?0:1};c&&(h.transform=`scaleX(${u})`);let v=g("Toastify__progress-bar",c?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${m}`,`Toastify__progress-bar--${a}`,{"Toastify__progress-bar--rtl":d}),x=y(i)?i({rtl:d,type:a,defaultClassName:v}):g(v,i);return o.createElement("div",{role:"progressbar","aria-hidden":f?"true":"false","aria-label":"notification timer",className:x,style:h,[c&&u>=1?"onTransitionEnd":"onAnimationEnd"]:c&&u<1?null:()=>{p&&s()}})}let j=e=>{let{isRunning:t,preventExitTransition:n,toastRef:s,eventHandlers:a}=function(e){let[t,n]=(0,o.useState)(!1),[s,a]=(0,o.useState)(!1),r=(0,o.useRef)(null),i=(0,o.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,l=(0,o.useRef)(e),{autoClose:c,pauseOnHover:u,closeToast:d,onClick:p,closeOnClick:m}=e;function f(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),i.didMove=!1,document.addEventListener("mousemove",x),document.addEventListener("mouseup",E),document.addEventListener("touchmove",x),document.addEventListener("touchend",E);let n=r.current;i.canCloseOnClick=!0,i.canDrag=!0,i.boundingRect=n.getBoundingClientRect(),n.style.transition="",i.x=P(t.nativeEvent),i.y=N(t.nativeEvent),"x"===e.draggableDirection?(i.start=i.x,i.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(i.start=i.y,i.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function g(t){if(i.boundingRect){let{top:n,bottom:s,left:o,right:a}=i.boundingRect;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&i.x>=o&&i.x<=a&&i.y>=n&&i.y<=s?v():h()}}function h(){n(!0)}function v(){n(!1)}function x(n){let s=r.current;i.canDrag&&s&&(i.didMove=!0,t&&v(),i.x=P(n),i.y=N(n),i.delta="x"===e.draggableDirection?i.x-i.start:i.y-i.start,i.start!==i.x&&(i.canCloseOnClick=!1),s.style.transform=`translate${e.draggableDirection}(${i.delta}px)`,s.style.opacity=""+(1-Math.abs(i.delta/i.removalDistance)))}function E(){document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",E),document.removeEventListener("touchmove",x),document.removeEventListener("touchend",E);let t=r.current;if(i.canDrag&&i.didMove&&t){if(i.canDrag=!1,Math.abs(i.delta)>i.removalDistance)return a(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform=`translate${e.draggableDirection}(0)`,t.style.opacity="1"}}(0,o.useEffect)(()=>{l.current=e}),(0,o.useEffect)(()=>(r.current&&r.current.addEventListener("d",h,{once:!0}),y(e.onOpen)&&e.onOpen((0,o.isValidElement)(e.children)&&e.children.props),()=>{let e=l.current;y(e.onClose)&&e.onClose((0,o.isValidElement)(e.children)&&e.children.props)}),[]),(0,o.useEffect)(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||v(),window.addEventListener("focus",h),window.addEventListener("blur",v)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",h),window.removeEventListener("blur",v))}),[e.pauseOnFocusLoss]);let T={onMouseDown:f,onTouchStart:f,onMouseUp:g,onTouchEnd:g};return c&&u&&(T.onMouseEnter=v,T.onMouseLeave=h),m&&(T.onClick=e=>{p&&p(e),i.canCloseOnClick&&d()}),{playToast:h,pauseToast:v,isRunning:t,preventExitTransition:s,toastRef:r,eventHandlers:T}}(e),{closeButton:r,children:i,autoClose:l,onClick:c,type:u,hideProgressBar:d,closeToast:p,transition:m,position:f,className:h,style:v,bodyClassName:x,bodyStyle:E,progressClassName:T,progressStyle:b,updateId:_,role:I,progress:C,rtl:j,toastId:w,deleteToast:k,isIn:R,isLoading:M,iconOut:q,closeOnClick:B,theme:$}=e,z=g("Toastify__toast",`Toastify__toast-theme--${$}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":j},{"Toastify__toast--close-on-click":B}),S=y(h)?h({rtl:j,position:f,type:u,defaultClassName:z}):g(z,h),A=!!C||!l,D={closeToast:p,type:u,theme:$},F=null;return!1===r||(F=y(r)?r(D):(0,o.isValidElement)(r)?(0,o.cloneElement)(r,D):L(D)),o.createElement(m,{isIn:R,done:k,position:f,preventExitTransition:n,nodeRef:s},o.createElement("div",{id:w,onClick:c,className:S,...a,style:v,ref:s},o.createElement("div",{...R&&{role:I},className:y(x)?x({type:u}):g("Toastify__toast-body",x),style:E},null!=q&&o.createElement("div",{className:g("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!M})},q),o.createElement("div",null,i)),F,o.createElement(O,{..._&&!A?{key:`pb-${_}`}:{},rtl:j,theme:$,delay:l,isRunning:t,isIn:R,closeToast:p,hide:d,type:u,style:b,className:T,controlledProgress:A,progress:C||0})))},w=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},k=T(w("bounce",!0)),R=(T(w("slide",!0)),T(w("zoom")),T(w("flip")),(0,o.forwardRef)((e,t)=>{let{getToastToRender:n,containerRef:s,isToastActive:a}=function(e){let[,t]=(0,o.useReducer)(e=>e+1,0),[n,s]=(0,o.useState)([]),a=(0,o.useRef)(null),r=(0,o.useRef)(new Map).current,i=e=>-1!==n.indexOf(e),l=(0,o.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:i,getToast:e=>r.get(e)}).current;function c(e){let{containerId:t}=e,{limit:n}=l.props;!n||t&&l.containerId!==t||(l.count-=l.queue.length,l.queue=[])}function u(e){s(t=>null==e?[]:t.filter(t=>t!==e))}function d(){let{toastContent:e,toastProps:t,staleId:n}=l.queue.shift();m(e,t,n)}function p(e,n){var s,i;let{delay:c,staleId:p,...f}=n;if(!E(e)||!a.current||l.props.enableMultiContainer&&f.containerId!==l.props.containerId||r.has(f.toastId)&&null==f.updateId)return;let{toastId:g,updateId:T,data:I}=f,{props:P}=l,N=()=>u(g),L=null==T;L&&l.count++;let O={...P,style:P.toastStyle,key:l.toastKey++,...Object.fromEntries(Object.entries(f).filter(e=>{let[t,n]=e;return null!=n})),toastId:g,updateId:T,data:I,closeToast:N,isIn:!1,className:x(f.className||P.toastClassName),bodyClassName:x(f.bodyClassName||P.bodyClassName),progressClassName:x(f.progressClassName||P.progressClassName),autoClose:!f.isLoading&&(s=f.autoClose,i=P.autoClose,!1===s||h(s)&&s>0?s:i),deleteToast(){let e=b(r.get(g),"removed");r.delete(g),_.emit(4,e);let n=l.queue.length;if(l.count=null==g?l.count-l.displayedToast:l.count-1,l.count<0&&(l.count=0),n>0){let e=null==g?l.props.limit:1;if(1===n||1===e)l.displayedToast++,d();else{let t=e>n?n:e;l.displayedToast=t;for(let e=0;e<t;e++)d()}}else t()}};O.iconOut=function(e){let{theme:t,type:n,isLoading:s,icon:a}=e,r=null,i={theme:t,type:n};return!1===a||(y(a)?r=a(i):(0,o.isValidElement)(a)?r=(0,o.cloneElement)(a,i):v(a)||h(a)?r=a:s?r=C.spinner():n in C&&(r=C[n](i))),r}(O),y(f.onOpen)&&(O.onOpen=f.onOpen),y(f.onClose)&&(O.onClose=f.onClose),O.closeButton=P.closeButton,!1===f.closeButton||E(f.closeButton)?O.closeButton=f.closeButton:!0===f.closeButton&&(O.closeButton=!E(P.closeButton)||P.closeButton);let j=e;(0,o.isValidElement)(e)&&!v(e.type)?j=(0,o.cloneElement)(e,{closeToast:N,toastProps:O,data:I}):y(e)&&(j=e({closeToast:N,toastProps:O,data:I})),P.limit&&P.limit>0&&l.count>P.limit&&L?l.queue.push({toastContent:j,toastProps:O,staleId:p}):h(c)?setTimeout(()=>{m(j,O,p)},c):m(j,O,p)}function m(e,t,n){let{toastId:o}=t;n&&r.delete(n);let a={content:e,props:t};r.set(o,a),s(e=>[...e,o].filter(e=>e!==n)),_.emit(4,b(a,null==a.props.updateId?"added":"updated"))}return(0,o.useEffect)(()=>(l.containerId=e.containerId,_.cancelEmit(3).on(0,p).on(1,e=>a.current&&u(e)).on(5,c).emit(2,l),()=>{r.clear(),_.emit(3,l)}),[]),(0,o.useEffect)(()=>{l.props=e,l.isToastActive=i,l.displayedToast=n.length}),{getToastToRender:function(t){let n=new Map,s=Array.from(r.values());return e.newestOnTop&&s.reverse(),s.forEach(e=>{let{position:t}=e.props;n.has(t)||n.set(t,[]),n.get(t).push(e)}),Array.from(n,e=>t(e[0],e[1]))},containerRef:a,isToastActive:i}}(e),{className:r,style:i,rtl:l,containerId:c}=e;return(0,o.useEffect)(()=>{t&&(t.current=s.current)},[]),o.createElement("div",{ref:s,className:"Toastify",id:c},n((e,t)=>{let n=t.length?{...i}:{...i,pointerEvents:"none"};return o.createElement("div",{className:function(e){let t=g("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":l});return y(r)?r({position:e,rtl:l,defaultClassName:t}):g(t,x(r))}(e),style:n,key:`container-${e}`},t.map((e,n)=>{let{content:s,props:r}=e;return o.createElement(j,{...r,isIn:a(r.toastId),style:{...r.style,"--nth":n+1,"--len":t.length},key:`toast-${r.key}`},s)}))}))}));R.displayName="ToastContainer",R.defaultProps={position:"top-right",transition:k,autoClose:5e3,closeButton:L,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let M,q=new Map,B=[],$=1;function z(e,t){return q.size>0?_.emit(0,e,t):B.push({content:e,options:t}),t.toastId}function S(e,t){return{...t,type:t&&t.type||e,toastId:t&&(v(t.toastId)||h(t.toastId))?t.toastId:""+$++}}function A(e){return(t,n)=>z(t,S(e,n))}function D(e,t){return z(e,S("default",t))}D.loading=(e,t)=>z(e,S("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),D.promise=function(e,t,n){let s,{pending:o,error:a,success:r}=t;o&&(s=v(o)?D.loading(o,n):D.loading(o.render,{...n,...o}));let i={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(e,t,o)=>{if(null==t)return void D.dismiss(s);let a={type:e,...i,...n,data:o},r=v(t)?{render:t}:t;return s?D.update(s,{...a,...r}):D(r.render,{...a,...r}),o},c=y(e)?e():e;return c.then(e=>l("success",r,e)).catch(e=>l("error",a,e)),c},D.success=A("success"),D.info=A("info"),D.error=A("error"),D.warning=A("warning"),D.warn=D.warning,D.dark=(e,t)=>z(e,S("default",{theme:"dark",...t})),D.dismiss=e=>{q.size>0?_.emit(1,e):B=B.filter(t=>null!=e&&t.options.toastId!==e)},D.clearWaitingQueue=function(e){return void 0===e&&(e={}),_.emit(5,e)},D.isActive=e=>{let t=!1;return q.forEach(n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)}),t},D.update=function(e,t){void 0===t&&(t={}),setTimeout(()=>{let n=function(e,t){let{containerId:n}=t,s=q.get(n||M);return s&&s.getToast(e)}(e,t);if(n){let{props:s,content:o}=n,a={delay:100,...s,...t,toastId:t.toastId||e,updateId:""+$++};a.toastId!==e&&(a.staleId=e);let r=a.render||o;delete a.render,z(r,a)}},0)},D.done=e=>{D.update(e,{progress:1})},D.onChange=e=>(_.on(4,e),()=>{_.off(4,e)}),D.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},D.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},_.on(2,e=>{M=e.containerId||e,q.set(M,e),B.forEach(e=>{_.emit(0,e.content,e.options)}),B=[]}).on(3,e=>{q.delete(e.containerId||e),0===q.size&&_.off(0).off(1).off(5)});var F=n(3608);n(5996);let H=r.z.object({email:r.z.string().min(1,{message:"Email is required"}).email("Invalid email"),password:r.z.string().min(1,{message:"Password is required"}).min(6,{message:"Password must be at least 6 characters"}),rememberme:r.z.boolean()}),G=()=>{let{control:e,handleSubmit:t,setValue:n,register:o,formState:{errors:r}}=(0,a.cI)({mode:"onSubmit",resolver:(0,i.F)(H)}),c=(0,f.useRouter)(),d=async e=>{console.log(e);try{let t=await F.Z.post("http://3.144.22.101/api/auth/login",e);200===t.status?(console.log("Login successful:",t.data),localStorage.setItem("token",t.data.token),c.push("/MovieList")):(console.log("Login failed:",t.data),D.error(`Login failed. ${t.data.message}`))}catch(e){console.log("Login failed:"),D.error("Login failed")}};return s.jsx(s.Fragment,{children:s.jsx("div",{className:"container mx-auto my-auto",children:(0,s.jsxs)("div",{className:u().signInForm,children:[s.jsx("h1",{className:`${u().signIn} my-5`,children:"Sign in"}),s.jsx(R,{toastClassName:u().toast,autoClose:5e3,hideProgressBar:!1}),s.jsx("form",{onSubmit:t(d),children:(0,s.jsxs)("div",{className:"flex flex-col gap-y-3",children:[s.jsx(l.Z,{placeholder:"Email",control:e,setValue:n,name:"email"}),s.jsx("span",{className:u().errorMsg,children:r.email?.message}),s.jsx(l.Z,{placeholder:"Password",control:e,setValue:n,name:"password"}),s.jsx("span",{className:u().errorMsg,children:r.password?.message}),(0,s.jsxs)("label",{className:u().checkboxContainer,children:[s.jsx("input",{type:"checkbox",...o("rememberme"),className:u().checkbox}),"Remember me"]}),s.jsx(m,{title:"Login",onClick:()=>t(d)()})]})})]})})})}},868:e=>{e.exports={footerBg:"FooterDesign_footerBg__NTOIj"}},3049:e=>{e.exports={input:"Input_input__7ueAE",inputDate:"Input_inputDate__FtPKH",inputTitle:"Input_inputTitle__NUTIe",inputError:"Input_inputError__Gy9Rj"}},9882:e=>{e.exports={submitBtn:"SubmitButton_submitBtn__CxL_A"}},735:e=>{e.exports={signInForm:"SignIn_signInForm__egEIF",checkbox:"SignIn_checkbox__vHq2g",toast:"SignIn_toast__xb4Pn",errorMsg:"SignIn_errorMsg__Yes36",signIn:"SignIn_signIn__gMNVL"}},4244:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>p,metadata:()=>d});var s=n(5036),o=n(8211),a=n.n(o);n(7272);var r=n(342),i=n.n(r),l=n(868),c=n.n(l);function u(){return s.jsx("div",{className:c().footerBg})}let d={title:"Tactical Edge",description:"Generated by create next app"};function p({children:e}){return(0,s.jsxs)("html",{lang:"en",children:[s.jsx(i(),{children:s.jsx("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",as:"style",rel:"stylesheet preload prefetch",type:"text/css",crossOrigin:"anonymous"})}),(0,s.jsxs)("body",{className:a().className,children:[e,s.jsx(u,{})]})]})}},4161:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var s=n(5036);let o=(0,n(6843).createProxy)(String.raw`/home/zibtek/Projects/tactical-edge/Tactical-Edge/components/other/SignIn/SignIn.tsx`),{__esModule:a,$$typeof:r}=o,i=o.default;function l(){return s.jsx(s.Fragment,{children:s.jsx(i,{})})}n(5256)},7481:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});var s=n(337);let o=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},7272:()=>{},5996:()=>{},5256:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),s=t.X(0,[638,859,67,608,967],()=>n(6739));module.exports=s})();