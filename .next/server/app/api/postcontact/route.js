"use strict";(()=>{var e={};e.id=977,e.ids=[977],e.modules={517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},7147:e=>{e.exports=require("fs")},5236:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>f,originalPathname:()=>h,patchFetch:()=>v,requestAsyncStorage:()=>c,routeModule:()=>p,serverHooks:()=>d,staticGenerationAsyncStorage:()=>l,staticGenerationBailout:()=>m});var o={};r.r(o),r.d(o,{POST:()=>u});var n=r(5419),a=r(9108),s=r(9678);r(8070);var i=r(7147);async function u(e,t){let r=await e.json(),o=JSON.stringify(r);return console.log(r),i.appendFileSync("contactdata/1.json",`
${o}`),Response.json({res:r})}let p=new n.AppRouteRouteModule({definition:{kind:a.x.APP_ROUTE,page:"/api/postcontact/route",pathname:"/api/postcontact",filename:"route",bundlePath:"app/api/postcontact/route"},resolvedPagePath:"/Users/pradhumngupta/Desktop/CODING ALL/Code Javascript/Nextjs/Next JS TUTs/hunter coder 2/app/api/postcontact/route.jsx",nextConfigOutput:"",userland:o}),{requestAsyncStorage:c,staticGenerationAsyncStorage:l,serverHooks:d,headerHooks:f,staticGenerationBailout:m}=p,h="/api/postcontact/route";function v(){return(0,s.patchFetch)({serverHooks:d,staticGenerationAsyncStorage:l})}},5419:(e,t,r)=>{e.exports=r(517)},3935:(e,t)=>{function r(e,t){let r;let o=e.split("/");return(t||[]).some(t=>!!o[1]&&o[1].toLowerCase()===t.toLowerCase()&&(r=t,o.splice(1,1),e=o.join("/")||"/",!0)),{pathname:e,detectedLocale:r}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"normalizeLocalePath",{enumerable:!0,get:function(){return r}})},5545:(e,t)=>{function r(e){return e.replace(/\/$/,"")||"/"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"removeTrailingSlash",{enumerable:!0,get:function(){return r}})}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[638,70],()=>r(5236));module.exports=o})();