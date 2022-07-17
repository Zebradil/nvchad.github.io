"use strict";(self.webpackChunknvchad_site=self.webpackChunknvchad_site||[]).push([[990],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=s(n),m=a,g=f["".concat(u,".").concat(m)]||f[m]||p[m]||l;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=f;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8178:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={},i=void 0,o={unversionedId:"config/Walkthrough",id:"config/Walkthrough",title:"Walkthrough",description:"- NOTE : Make sure you know basic lua , if not then check.",source:"@site/docs/config/Walkthrough.md",sourceDirName:"config",slug:"/config/Walkthrough",permalink:"/config/Walkthrough",tags:[],version:"current",frontMatter:{},sidebar:"config",previous:{title:"Nvim Lua stuff",permalink:"/quickstart/Nvim lua"},next:{title:"Options",permalink:"/config/options"}},u={},s=[{value:"Structure",id:"structure",level:2},{value:"Walkthrough",id:"walkthrough",level:2},{value:"Themes",id:"themes",level:2},{value:"Mappings",id:"mappings",level:2},{value:"Default settings",id:"default-settings",level:2}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"NOTE : Make sure you know basic lua , if not then ",(0,a.kt)("a",{parentName:"li",href:"/quickstart/learn-lua"},"check"),"."),(0,a.kt)("li",{parentName:"ul"},"Make sure that you read sections in config (in the sidebar of this site) orderwise.")),(0,a.kt)("h2",{id:"structure"},"Structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"\n\u251c\u2500\u2500 init.lua\n\u2502\n\u251c\u2500\u2500 lua\n\u2502   \u2502\n\u2502   \u251c\u2500\u2500 core\n\u2502   \u2502   \u251c\u2500\u2500 default_config.lua\n\u2502   \u2502   \u251c\u2500\u2500 mappings.lua\n\u2502   \u2502   \u251c\u2500\u2500 options.lua\n\u2502   \u2502   \u251c\u2500\u2500 packer.lua  -- (bootstrap packer & installs plugins)\n\u2502   \u2502   \u251c\u2500\u2500 utils.lua  -- (core util functions) (i)\n\u2502   \u2502   \u2514\u2500\u2500 init.lua  -- (autocmds)\n\u2502   \u2502\n\u2502   \u251c\u2500\u2500 plugins\n\u2502   \u2502    \u251c\u2500\u2500 init.lua -- (default plugin list)\n\u2502   \u2502    \u2514\u2500\u2500 configs\n\u2502   \u2502        \u251c\u2500\u2500 cmp.lua\n\u2502   \u2502        \u251c\u2500\u2500 others.lu -- (list of small configs of plugins)\n\u2502   \u2502        \u2514\u2500\u2500 many more plugin configs\n|   |\n\u2502   \u251c\u2500\u2500 custom *\n\u2502   \u2502   \u251c\u2500\u2500 chadrc.lua -- (overrides default_config)\n\u2502   \u2502   \u251c\u2500\u2500 init.lua -- (runs after main init.lua file)\n\u2502   \u2502   \u251c\u2500\u2500 more files, dirs\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Note : custom dir is created by user")),(0,a.kt)("h2",{id:"walkthrough"},"Walkthrough"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Letss goooo!")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://media.discordapp.net/attachments/610012463907209227/891016498733256774/869951078962196571.png",alt:"chad"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/610012463907209227/891011437810577480/863483056531046450.png",alt:"lessgooo"})),(0,a.kt)("h2",{id:"themes"},"Themes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<leader> + th"),"   (",(0,a.kt)("inlineCode",{parentName:"li"},"<leader>")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"<space>")," in our config)")),(0,a.kt)("h2",{id:"mappings"},"Mappings"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},":Telescope keymaps")," ")),(0,a.kt)("h2",{id:"default-settings"},"Default settings"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This file is lua/core/default_config.lua")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"-- Table fields in default_config.lua\nM.options = {} \nM.ui = {}\nM.plugins = {}\nM.mappings = {} \n")))}p.isMDXComponent=!0}}]);