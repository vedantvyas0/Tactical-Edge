(()=>{var e={};e.id=238,e.ids=[238],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},2856:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>m,originalPathname:()=>d,pages:()=>u,routeModule:()=>p,tree:()=>c});var s=r(482),i=r(9108),a=r(2563),n=r.n(a),o=r(8300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let c=["",{children:["CreateMovie",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,616)),"/home/zibtek/Projects/tactical-edge/Tactical-Edge/app/CreateMovie/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,4244)),"/home/zibtek/Projects/tactical-edge/Tactical-Edge/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["/home/zibtek/Projects/tactical-edge/Tactical-Edge/app/CreateMovie/page.tsx"],d="/CreateMovie/page",m={require:r,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/CreateMovie/page",pathname:"/CreateMovie",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},2121:(e,t,r)=>{Promise.resolve().then(r.bind(r,6156)),Promise.resolve().then(r.bind(r,9757))},7151:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,6840,23)),Promise.resolve().then(r.t.bind(r,8771,23)),Promise.resolve().then(r.t.bind(r,3225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,3982,23))},6755:()=>{},6137:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var s=r(2295);r(3729);var i=r(708),a=r(3049),n=r.n(a);let o=({placeholder:e,control:t,setValue:r,reset:a,name:o,defaultValue:l})=>s.jsx("div",{children:s.jsx(i.Qr,{control:t,name:o,render:({field:t})=>s.jsx("input",{className:"publishingDate"===o?`${n().input} ${n().inputDate}`:"title"===o?`${n().input} ${n().inputTitle}`:n().input,...t,onChange:e=>{r&&r(o,e.target.value),t.onChange(e)},placeholder:e,name:o})})})},6156:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(2295),i=r(3729),a=r(2254);let n=({children:e})=>{let t=(0,a.useRouter)();return(0,i.useEffect)(()=>{localStorage.getItem("token")||t.replace("/")},[]),s.jsx(s.Fragment,{children:e})}},9757:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x});var s=r(2295),i=r(3729),a=r(6104),n=r.n(a),o=r(708),l=r(9709),c=r(5453),u=r(6137),d=r(3608),m=r(2254);let p=l.z.object({title:l.z.string().min(1,{message:"Title is required"}).min(3,{message:"Title of minimum 3 letters required"}),publishing_year:l.z.string().min(1,{message:"Publishing Date is required"}).min(4,{message:"Publishing Date must at least 4 characters"}),image:l.z.any()});function x(){let{control:e,handleSubmit:t,setValue:r,register:a,formState:{errors:l}}=(0,o.cI)({resolver:(0,c.F)(p)}),x=(0,i.useRef)(null),h=(0,i.useRef)(null),[g,v]=(0,i.useState)(null),_=(0,m.useRouter)();console.log(l);let b=()=>{_.push("/MovieList")},f=async e=>{let t=new FormData;t.append("title",e.title),t.append("publishing_year",e.publishing_year),t.append("image",g);try{let e=localStorage.getItem("token");d.Z.defaults.headers.post.Authorization=e,d.Z.defaults.headers.common["Content-Type"]="multipart/form-data";let r=await d.Z.post("http://3.17.6.121/api/movies",t),s=await r.data;console.log("dd",s),_.push("/MovieList")}catch(e){console.error("Error in sending movies:",e)}finally{}};return s.jsx(s.Fragment,{children:(0,s.jsxs)("form",{onSubmit:t(f),className:n().form,children:[(0,s.jsxs)("div",{className:n().flexContainer,children:[(0,s.jsxs)("div",{className:`${n().uploadDiv} mt-10 mx-5`,children:[s.jsx("p",{className:`${n().uploadText}`,onClick:()=>{x.current?.click()},children:"Click to Upload Image"}),s.jsx("input",{type:"file",className:n().fileUpload,...a("image"),ref:x,onChange:e=>{let t=e.target.files?.[0];if(console.log("Selected file:",t),v(t),t){let e=new FileReader;e.onload=e=>{let t=e.target?.result;h.current?.setAttribute("src",t)},e.readAsDataURL(t)}},onClick:e=>{e.stopPropagation()}}),!g&&s.jsx("span",{className:n().errorMsg,children:l.image?.message}),g&&s.jsx("img",{ref:h,className:n().thumbnail,alt:"Thumbnail"})]}),(0,s.jsxs)("div",{className:`${n().sideForm}`,children:[s.jsx(u.Z,{placeholder:"Title",control:e,setValue:r,name:"title"}),s.jsx("span",{className:n().errorMsg,children:l.title?.message}),s.jsx(u.Z,{placeholder:"Publishing year",control:e,setValue:r,name:"publishing_year"}),s.jsx("span",{className:n().errorMsg,children:l.publishing_year?.message}),(0,s.jsxs)("div",{className:`${n().buttons} flex gap-x-2 mt-8`,children:[s.jsx("button",{className:n().cancelBtn,type:"button",onClick:()=>b(),children:"Cancel"}),s.jsx("button",{className:n().submitBtn,type:"submit",children:"Submit"})]})]})]}),(0,s.jsxs)("div",{className:`${n().buttonsMobile} flex gap-x-2 mt-8`,children:[s.jsx("button",{className:n().cancelBtn,type:"button",onClick:()=>b(),children:"Cancel"}),s.jsx("button",{className:n().submitBtn,type:"submit",children:"Submit"})]})]})})}},3609:e=>{e.exports={CreateMovie:"CreateMovie_CreateMovie__sZiDc"}},868:e=>{e.exports={footerBg:"FooterDesign_footerBg__NTOIj"}},3049:e=>{e.exports={input:"Input_input__7ueAE",inputDate:"Input_inputDate__FtPKH",inputTitle:"Input_inputTitle__NUTIe",inputError:"Input_inputError__Gy9Rj"}},6104:e=>{e.exports={uploadDiv:"CreateMovieForm_uploadDiv___0_HP",form:"CreateMovieForm_form__Afk_O",errorMsg:"CreateMovieForm_errorMsg__hU7jy",fileUpload:"CreateMovieForm_fileUpload__vq7Pv",cancelBtn:"CreateMovieForm_cancelBtn__PFQ9j",submitBtn:"CreateMovieForm_submitBtn__vhPc7",flexContainer:"CreateMovieForm_flexContainer__rSMZb",sideForm:"CreateMovieForm_sideForm__9cQuU",thumbnail:"CreateMovieForm_thumbnail__ydtrF",buttonsMobile:"CreateMovieForm_buttonsMobile__oF_r_",buttons:"CreateMovieForm_buttons__NJa2D"}},616:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var s=r(5036);let i=(0,r(6843).createProxy)(String.raw`/home/zibtek/Projects/tactical-edge/Tactical-Edge/components/other/CreateMovieForm/CreateMovieForm.tsx`),{__esModule:a,$$typeof:n}=i,o=i.default;var l=r(3609),c=r.n(l),u=r(9364);function d(){return s.jsx(s.Fragment,{children:s.jsx(u.ZP,{children:(0,s.jsxs)("div",{className:"container mx-auto",children:[(0,s.jsxs)("h2",{className:`${c().CreateMovie} mt-10`,children:["Create a new movie"," "]}),s.jsx(o,{})]})})})}},4244:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m,metadata:()=>d});var s=r(5036),i=r(8211),a=r.n(i);r(7272);var n=r(342),o=r.n(n),l=r(868),c=r.n(l);function u(){return s.jsx("div",{className:c().footerBg})}let d={title:"Tactical Edge",description:"Generated by create next app"};function m({children:e}){return(0,s.jsxs)("html",{lang:"en",children:[s.jsx(o(),{children:s.jsx("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",as:"style",rel:"stylesheet preload prefetch",type:"text/css",crossOrigin:"anonymous"})}),(0,s.jsxs)("body",{className:a().className,children:[s.jsx("div",{className:"children",children:e}),s.jsx(u,{})]})]})}},9364:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>n});let s=(0,r(6843).createProxy)(String.raw`/home/zibtek/Projects/tactical-edge/Tactical-Edge/components/auth/ProtectedRoute.tsx`),{__esModule:i,$$typeof:a}=s,n=s.default},7481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var s=r(337);let i=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},7272:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,859,67,608,967],()=>r(2856));module.exports=s})();