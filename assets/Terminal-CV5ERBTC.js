import{r as o,u as S,j as c}from"./index-CfyzJxtI.js";function T(){const h=o.useRef(null),i=o.useRef(null),[p,n]=o.useState("text-green-500"),[f,s]=o.useState(`Welcome To My Portfolio Terminal. Dont Panic :)
Just Type "help" for Available Commands

you@AmirOS:-$ `),[r,_]=o.useState(""),[b,w]=o.useState(!1),{setTabState:y}=S(),l=b?"you@GodOS:-$ ":"you@AmirOS:-$ ",d=e=>{if(e=e.toLowerCase(),e==="help")s(t=>t+r+`
 help -Show This Menu
 cd [path] -Go To Tabs
 clear -Clear The Terminal
 ls -Show Available Paths
 cowsay [word] -Cow Want To Say Something
 color -Change Font Color [white|green|blue|yellow|pink]
 hiddenCommands -You Must Find it Your self
`+l);else if(e==="ls")s(t=>t+r+`
 terminal
 about
 skills
 contact
`+l);else if(e.startsWith("sudo")){w(!0),n("text-red-600");const t=`
███████╗██╗   ██╗██████╗  ██████╗ 
██╔════╝██║   ██║██╔══██╗██╔═══██╗
███████╗██║   ██║██║  ██║██║   ██║
╚════██║██║   ██║██║  ██║██║   ██║
███████║╚██████╔╝██████╔╝╚██████╔╝
╚══════╝ ╚═════╝ ╚═════╝  ╚═════╝ 
         POWER UNLOCKED ⚡
`;let a=0;s("");const x=setInterval(()=>{s(u=>u+t[a]),a++,a>=t.length-1&&(clearInterval(x),s(u=>u+`
You are Root. So what?

you@GodOS:-$ `))},10)}else if(e==="clear"||e==="cls")s(l);else if(e.startsWith("cowsay")){const t=e.split(" ")[1];s(`_______________
< ${t} >
---------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w||
                ||     ||

`+l)}else if(e.startsWith("cd")){const t=e.split(" ")[1];["terminal","about","skills","contact"].includes(t)?y(t):s(a=>a+e+`
bash: cd: /${t}: No such file or directory
`+l)}else if(e.includes("color ")){switch(e.split(" ")[1]){case"white":n("text-white");break;case"green":n("text-green-500");break;case"blue":n("text-blue-500");break;case"yellow":n("text-yellow-500");break;case"pink":n("text-pink-500");break;default:n("text-green-500");break}s(a=>a+r+`
`+l)}else s(t=>t+e+`
bash: ${e}: command not found
`+l)};return o.useEffect(()=>{h.current?.focus()},[]),o.useEffect(()=>{i.current?.scrollTo({top:i.current.scrollHeight})},[f]),c.jsxs("div",{ref:i,className:"pl-4 py-4 bg-slate-900 overflow-y-auto h-[60dvh]",children:[c.jsx("span",{className:p,style:{whiteSpace:"pre-wrap"},children:f}),c.jsx("input",{ref:h,value:r,onKeyDown:e=>{e.key=="Enter"&&(d(r),_(""))},onInput:e=>_(e.target.value),className:`bg-transparent outline-0 ${p}`})]})}export{T as default};
