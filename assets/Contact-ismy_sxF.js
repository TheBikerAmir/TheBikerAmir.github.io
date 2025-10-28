import{r,j as s}from"./index-CQ_23WzV.js";/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),g=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,a,n)=>n?n.toUpperCase():a.toLowerCase()),h=t=>{const e=g(t);return e.charAt(0).toUpperCase()+e.slice(1)},d=(...t)=>t.filter((e,a,n)=>!!e&&e.trim()!==""&&n.indexOf(e)===a).join(" ").trim(),b=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var j={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=r.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:a=2,absoluteStrokeWidth:n,className:l="",children:o,iconNode:x,...m},p)=>r.createElement("svg",{ref:p,...j,width:e,height:e,stroke:t,strokeWidth:n?Number(a)*24/Number(e):a,className:d("lucide",l),...!o&&!b(m)&&{"aria-hidden":"true"},...m},[...x.map(([u,k])=>r.createElement(u,k)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=(t,e)=>{const a=r.forwardRef(({className:n,...l},o)=>r.createElement(v,{ref:o,iconNode:e,className:d(`lucide-${f(h(t))}`,`lucide-${t}`,n),...l}));return a.displayName=h(t),a};/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8",key:"7n84p3"}]],C=c("at-sign",w);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],A=c("github",y);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],_=c("linkedin",N);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],L=c("phone",E);function i({name:t,value:e,icon:a}){return e.includes(".com")&&t!=="Email"&&(e="https://"+e),s.jsxs("div",{className:"flex flex-col sm:flex-row gap-2 sm:gap-3 items-start sm:items-center p-5 sm:p-4 bg-slate-800 rounded-lg shadow-md hover:shadow-xl hover:bg-slate-700 transition duration-300 ease-in-out",children:[s.jsxs("div",{className:"flex gap-2 sm:gap-3 items-center shrink-0",children:[s.jsx("span",{className:"text-red-600 text-xl sm:text-2xl",children:a}),s.jsxs("span",{className:"text-white font-semibold",children:[t,":"]})]}),e.includes("https")?s.jsx("a",{href:e,target:"_blank",className:"text-white text-base sm:text-xl hover:text-blue-400 transition duration-300 break-all sm:break-normal",children:e}):s.jsx("span",{className:"text-white text-base sm:text-xl break-all sm:break-normal",children:e})]})}function M(){return s.jsxs("div",{className:"flex flex-col gap-6",children:[s.jsx(i,{name:"Phone",value:"+989226839455",icon:s.jsx(L,{})}),s.jsx(i,{name:"Email",value:"Amirhoseinsadeghian2017@gmail.com",icon:s.jsx(C,{})}),s.jsx(i,{name:"Github",value:"Github.com/TheBikerAmir",icon:s.jsx(A,{})}),s.jsx(i,{name:"Linkedin",value:"linkedin.com/in/amirhosein-sadeqian-bike",icon:s.jsx(_,{})})]})}export{M as default};
