(()=>{var e={};e.id=404,e.ids=[404],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},7147:e=>{"use strict";e.exports=require("fs")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},194:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>o.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>d,routeModule:()=>x,tree:()=>c});var r=s(482),n=s(9108),a=s(2563),o=s.n(a),i=s(8300),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);s.d(t,l);let c=["",{children:["blog",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,4955)),"/Users/pradhumngupta/Desktop/CODING ALL/Code Javascript/Nextjs/Next JS TUTs/hunter coder 2/app/blog/page.jsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,3049)),"/Users/pradhumngupta/Desktop/CODING ALL/Code Javascript/Nextjs/Next JS TUTs/hunter coder 2/app/layout.jsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/pradhumngupta/Desktop/CODING ALL/Code Javascript/Nextjs/Next JS TUTs/hunter coder 2/app/blog/page.jsx"],p="/blog/page",u={require:s,loadChunk:()=>Promise.resolve()},x=new r.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/blog/page",pathname:"/blog",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},1472:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,1476,23))},682:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2583,23)),Promise.resolve().then(s.t.bind(s,6840,23)),Promise.resolve().then(s.t.bind(s,8771,23)),Promise.resolve().then(s.t.bind(s,3225,23)),Promise.resolve().then(s.t.bind(s,9295,23)),Promise.resolve().then(s.t.bind(s,3982,23))},1877:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,1476,23))},4955:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});var r=s(5036);s(2);var n=s(646),a=s.n(n),o=s(7147);let i=async()=>{let e,t=o.readdirSync("blogdata"),s=[];for(let r of t)e=JSON.parse(o.readFileSync(`blogdata/${r}`)),s.push(e);return s},l=async()=>{let e=await i();return(0,r.jsxs)("div",{className:"w-screen flex flex-col justify-center items-center my-24",children:[r.jsx("div",{children:r.jsx("h1",{className:"text-6xl pb-16 font-Comfortaa",children:"Blogs"})}),r.jsx("div",{className:"blogslist w-3/6 flex flex-col justify-center items-center",children:e.map(e=>(0,r.jsxs)("div",{className:"blog1 pb-10",children:[r.jsx(a(),{href:`/blogpost/${e.slug}`,children:r.jsx("h2",{className:" text-3xl font-bold py-4 font-Deserta",children:e.title})}),(0,r.jsxs)("p",{className:"font-Comfortaa",children:[e.content.substr(0,140),"..."]})]},e.slug))})]})}},3049:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d,metadata:()=>c});var r=s(5036),n=s(4883),a=s.n(n);s(7272),s(7262);var o=s(646),i=s.n(o);s(2);let l=()=>r.jsx("nav",{className:" w-screen h-24 flex items-center justify-center font-Comfortaa",children:(0,r.jsxs)("ul",{className:"flex sm:flex-row  justify-center sm:gap-24 font-extrabold gap-8",children:[r.jsx(i(),{href:"/",children:r.jsx("li",{className:"home cursor-pointer",children:"Home"})}),r.jsx(i(),{href:"/about",children:r.jsx("li",{className:"about cursor-pointer",children:"About"})}),r.jsx(i(),{href:"/blog",children:r.jsx("li",{className:"blog cursor-pointer",children:"Blog"})}),r.jsx(i(),{href:"/contact",children:r.jsx("li",{className:"contact cursor-pointer",children:"Contact"})})]})}),c={title:"Hunter Blog",description:"Generated by create next app"};function d({children:e}){return r.jsx("html",{lang:"en",children:(0,r.jsxs)("body",{className:a().className,children:[r.jsx(l,{}),e]})})}},7481:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var r=s(337);let n=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},7272:()=>{},7262:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[638,914,337],()=>s(194));module.exports=r})();