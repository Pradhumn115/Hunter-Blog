"use strict";(()=>{var e={};e.id=935,e.ids=[935],e.modules={517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},7147:e=>{e.exports=require("fs")},2728:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>f,originalPathname:()=>b,patchFetch:()=>m,requestAsyncStorage:()=>c,routeModule:()=>p,serverHooks:()=>g,staticGenerationAsyncStorage:()=>d,staticGenerationBailout:()=>h});var o={};r.r(o),r.d(o,{GET:()=>l});var n=r(5419),a=r(9108),u=r(9678),i=r(7147),s=r(8070);async function l(e){let t=new URL(e.url).href.split("=")[1];try{let e=i.readFileSync(`blogdata/${t}.json`);return s.Z.json(JSON.parse(e))}catch(e){return console.log(t),s.Z.json({error:"Blog data not found"})}}let p=new n.AppRouteRouteModule({definition:{kind:a.x.APP_ROUTE,page:"/api/getblog/route",pathname:"/api/getblog",filename:"route",bundlePath:"app/api/getblog/route"},resolvedPagePath:"/Users/pradhumngupta/Desktop/CODING ALL/Code Javascript/Nextjs/Next JS TUTs/hunter coder 2/app/api/getblog/route.jsx",nextConfigOutput:"",userland:o}),{requestAsyncStorage:c,staticGenerationAsyncStorage:d,serverHooks:g,headerHooks:f,staticGenerationBailout:h}=p,b="/api/getblog/route";function m(){return(0,u.patchFetch)({serverHooks:g,staticGenerationAsyncStorage:d})}},5419:(e,t,r)=>{e.exports=r(517)},3935:(e,t)=>{function r(e,t){let r;let o=e.split("/");return(t||[]).some(t=>!!o[1]&&o[1].toLowerCase()===t.toLowerCase()&&(r=t,o.splice(1,1),e=o.join("/")||"/",!0)),{pathname:e,detectedLocale:r}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"normalizeLocalePath",{enumerable:!0,get:function(){return r}})},5545:(e,t)=>{function r(e){return e.replace(/\/$/,"")||"/"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"removeTrailingSlash",{enumerable:!0,get:function(){return r}})}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[638,70],()=>r(2728));module.exports=o})();