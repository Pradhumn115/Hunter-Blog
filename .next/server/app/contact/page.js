(()=>{var e={};e.id=327,e.ids=[327],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},6327:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>n.a,__next_app__:()=>b,originalPathname:()=>p,pages:()=>c,routeModule:()=>f,tree:()=>d});var a=t(482),o=t(9108),s=t(2563),n=t.n(s),l=t(8300),i={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>l[e]);t.d(r,i);let d=["",{children:["contact",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,5521)),"/Users/pradhumngupta/Desktop/CODING ALL/Code Javascript/Nextjs/Next JS TUTs/hunter coder 2/app/contact/page.jsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,3049)),"/Users/pradhumngupta/Desktop/CODING ALL/Code Javascript/Nextjs/Next JS TUTs/hunter coder 2/app/layout.jsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/pradhumngupta/Desktop/CODING ALL/Code Javascript/Nextjs/Next JS TUTs/hunter coder 2/app/contact/page.jsx"],p="/contact/page",b={require:t,loadChunk:()=>Promise.resolve()},f=new a.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/contact/page",pathname:"/contact",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},8907:(e,r,t)=>{Promise.resolve().then(t.bind(t,7684))},1472:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,1476,23))},682:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,2583,23)),Promise.resolve().then(t.t.bind(t,6840,23)),Promise.resolve().then(t.t.bind(t,8771,23)),Promise.resolve().then(t.t.bind(t,3225,23)),Promise.resolve().then(t.t.bind(t,9295,23)),Promise.resolve().then(t.t.bind(t,3982,23))},7684:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>s});var a=t(2295),o=t(3729);let s=()=>{let[e,r]=(0,o.useState)(""),[t,s]=(0,o.useState)(""),[n,l]=(0,o.useState)(""),i=e=>{"name"==e.target.name&&r(e.target.value),"email"==e.target.name&&s(e.target.value),"message"==e.target.name&&l(e.target.value)};return a.jsx("div",{className:"m-",children:(0,a.jsxs)("div",{className:"flex min-h-screen items-center justify-center",children:[(0,a.jsxs)("div",{className:"relative flex -translate-y-24  flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none",children:[a.jsx("h4",{className:"block font-sans text-2xl font-semibold leading-snug tracking-normal text-white antialiased",children:"Contact Us"}),a.jsx("p",{className:"mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased",children:"Enter your details to ask."}),(0,a.jsxs)("form",{className:"mt-8 mb-2 w-80 max-w-screen-lg sm:w-96",onSubmit:a=>{(async function(e){try{let r=await fetch("http://localhost:3000/api/postcontact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),t=await r.json();console.log("Success:",t)}catch(e){console.error("Error:",e)}})({name:e,email:t,message:n}),alert("Success Form Submitted Successfully"),r(""),s(""),l(""),a.preventDefault()},children:[(0,a.jsxs)("div",{className:"mb-4 flex flex-col gap-6",children:[(0,a.jsxs)("div",{className:"relative h-11 w-full min-w-[200px]",children:[a.jsx("input",{className:"peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50",placeholder:" ",name:"name",id:"name",onChange:i,value:e,type:"text"}),a.jsx("label",{className:"before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500",children:"Name"})]}),(0,a.jsxs)("div",{className:"relative h-11 w-full min-w-[200px]",children:[a.jsx("input",{className:"peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50",placeholder:" ",name:"email",id:"email",type:"email",onChange:i,value:t}),a.jsx("label",{className:"before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500",children:"Email"})]}),(0,a.jsxs)("div",{className:"relative h-11 w-full min-w-[200px]",children:[a.jsx("textarea",{className:"peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50",placeholder:" ",name:"message",id:"message",onChange:i,value:n}),a.jsx("label",{className:"before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500",children:"Message"})]})]}),(0,a.jsxs)("div",{className:"inline-flex items-center",children:[(0,a.jsxs)("label",{className:"relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3",htmlFor:"checkbox","data-ripple-dark":"true",children:[a.jsx("input",{type:"checkbox",className:"before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10",id:"checkbox"}),a.jsx("span",{className:"pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100",children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-3.5 w-3.5",viewBox:"0 0 20 20",fill:"currentColor",stroke:"currentColor",strokeWidth:"1",children:a.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})})]}),a.jsx("label",{className:"mt-px cursor-pointer select-none font-light text-gray-700",htmlFor:"checkbox",children:(0,a.jsxs)("p",{className:"flex items-center font-sans text-sm font-normal leading-normal text-gray-700 antialiased",children:["I agree the",a.jsx("a",{className:"font-semibold transition-colors hover:text-pink-500",href:"#",children:"\xa0Terms and Conditions"})]})})]}),a.jsx("button",{className:"mt-6 block w-full select-none rounded-lg bg-pink-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none",type:"submit","data-ripple-light":"true",children:"Query Us"}),(0,a.jsxs)("p",{className:"mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased",children:["Already have an account?",a.jsx("a",{className:"font-semibold text-pink-400 transition-colors hover:text-blue-700",href:"#",children:"Sign In"})]})]}),a.jsx("div",{className:"w-full pt-5 px-4 mb-8 items-center "})]}),a.jsx("link",{rel:"stylesheet",href:"https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"}),a.jsx("script",{src:"https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"})]})})}},2295:(e,r,t)=>{"use strict";e.exports=t(6372).vendored["react-ssr"].ReactJsxRuntime},5521:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>s,__esModule:()=>o,default:()=>n});let a=(0,t(6843).createProxy)(String.raw`/Users/pradhumngupta/Desktop/CODING ALL/Code Javascript/Nextjs/Next JS TUTs/hunter coder 2/app/contact/page.jsx`),{__esModule:o,$$typeof:s}=a,n=a.default},3049:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>c,metadata:()=>d});var a=t(5036),o=t(4883),s=t.n(o);t(7272),t(7262);var n=t(646),l=t.n(n);t(2);let i=()=>a.jsx("nav",{className:" w-screen h-24 flex items-center justify-center font-Comfortaa",children:(0,a.jsxs)("ul",{className:"flex sm:flex-row  justify-center sm:gap-24 font-extrabold gap-8",children:[a.jsx(l(),{href:"/",children:a.jsx("li",{className:"home cursor-pointer",children:"Home"})}),a.jsx(l(),{href:"/about",children:a.jsx("li",{className:"about cursor-pointer",children:"About"})}),a.jsx(l(),{href:"/blog",children:a.jsx("li",{className:"blog cursor-pointer",children:"Blog"})}),a.jsx(l(),{href:"/contact",children:a.jsx("li",{className:"contact cursor-pointer",children:"Contact"})})]})}),d={title:"Hunter Blog",description:"Generated by create next app"};function c({children:e}){return a.jsx("html",{lang:"en",children:(0,a.jsxs)("body",{className:s().className,children:[a.jsx(i,{}),e]})})}},7481:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>o});var a=t(337);let o=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,a.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},7272:()=>{},7262:()=>{}};var r=require("../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[638,914,337],()=>t(6327));module.exports=a})();