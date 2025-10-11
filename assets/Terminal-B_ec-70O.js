import{r as o,u as x,j as h}from"./index-CAJTeQB-.js";function T(){const p=o.useRef(null),i=o.useRef(null),[f,l]=o.useState("text-green-500"),[_,s]=o.useState(`Welcome To My Portfolio Terminal. Dont Panic :)
Just Type "help" for Available Commands

you@AmirOS:-$ `),[r,c]=o.useState(""),[y,b]=o.useState(!1),{setTabState:w}=x(),d=e=>{e.key.length===1?c(t=>t+e.key):e.key==="Backspace"?c(t=>t.slice(0,-1)):e.key==="Enter"&&(g(r),c(""))},n=y?"you@GodOS:-$ ":"you@AmirOS:-$ ",g=e=>{if(e=e.toLowerCase(),e==="help")s(t=>t+r+`
 help -Show This Menu
 cd [path] -Go To Tabs
 clear -Clear The Terminal
 ls -Show Available Paths
 cowsay [word] -Cow Want To Say Something
 color -Change Font Color [white|green|blue|yellow|pink]
 hiddenCommands -You Must Find it Your self
`+n);else if(e==="ls")s(t=>t+r+`
 terminal
 about
 skills
 contact
`+n);else if(e.startsWith("sudo")){b(!0),l("text-red-600");const t=`
███████╗██╗   ██╗██████╗  ██████╗ 
██╔════╝██║   ██║██╔══██╗██╔═══██╗
███████╗██║   ██║██║  ██║██║   ██║
╚════██║██║   ██║██║  ██║██║   ██║
███████║╚██████╔╝██████╔╝╚██████╔╝
╚══════╝ ╚═════╝ ╚═════╝  ╚═════╝ 
         POWER UNLOCKED ⚡
`;let a=0;s("");const k=setInterval(()=>{s(u=>u+t[a]),a++,a>=t.length-1&&(clearInterval(k),s(u=>u+`
You are Root. So what?

you@GodOS:-$ `))},10)}else if(e==="clear"||e==="cls")s(n);else if(e.startsWith("cowsay")){const t=e.split(" ")[1];s(`_______________
< ${t} >
---------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w||
                ||     ||

`+n)}else if(e.startsWith("cd")){const t=e.split(" ")[1];["terminal","about","skills","contact"].includes(t)?w(t):s(a=>a+e+`
bash: cd: /${t}: No such file or directory
`+n)}else if(e.includes("color ")){switch(e.split(" ")[1]){case"white":l("text-white");break;case"green":l("text-green-500");break;case"blue":l("text-blue-500");break;case"yellow":l("text-yellow-500");break;case"pink":l("text-pink-500");break;default:l("text-green-500");break}s(a=>a+r+`
`+n)}else s(t=>t+e+`
bash: ${e}: command not found
`+n)};return o.useEffect(()=>{p.current?.focus()},[]),o.useEffect(()=>{i.current?.scrollTo({top:i.current.scrollHeight})},[_]),h.jsxs("div",{ref:i,className:"h-100 pl-4 py-4 bg-slate-900 overflow-y-auto",children:[h.jsx("span",{className:f,style:{whiteSpace:"pre-wrap"},children:_}),h.jsx("input",{ref:p,value:r,onKeyDown:d,className:`bg-transparent outline-0 ${f}`})]})}export{T as default};
