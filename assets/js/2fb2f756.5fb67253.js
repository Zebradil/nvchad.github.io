"use strict";(self.webpackChunknvchad_site=self.webpackChunknvchad_site||[]).push([[228],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=r,m=d["".concat(u,".").concat(f)]||d[f]||c[f]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2394:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const a={id:"options",title:"Options"},i=void 0,l={unversionedId:"config/options",id:"config/options",title:"Options",description:"(Note: You should add these in chadrc )",source:"@site/docs/config/options.md",sourceDirName:"config",slug:"/config/options",permalink:"/config/options",tags:[],version:"current",frontMatter:{id:"options",title:"Options"},sidebar:"config",previous:{title:"Walkthrough",permalink:"/config/Walkthrough"},next:{title:"Plugins",permalink:"/config/plugins"}},u={},s=[{value:"Override default options",id:"override-default-options",level:3},{value:"Autocmds &amp; Globals",id:"autocmds--globals",level:3},{value:"Lazy loading",id:"lazy-loading",level:3}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"(Note: You should add these in chadrc )"),(0,r.kt)("h3",{id:"override-default-options"},"Override default options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Note : The same method can be used to add new options")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'M.options = {\n   user = function()\n      vim.opt.number = false\n   end,\n}\n\n-- or just load the module with your options\n\nM.options = {\n   user = function()\n       require("custom.myoptions")\n   end,\n}\n')),(0,r.kt)("h3",{id:"autocmds--globals"},"Autocmds & Globals"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Load these in ",(0,r.kt)("inlineCode",{parentName:"li"},"custom/init.lua")," file")),(0,r.kt)("h3",{id:"lazy-loading"},"Lazy loading"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We lazy load almost 95% of the plugins, so we expect you to lazy load the plugins you've added to reduce startuptime. We don't want users making NvChad slow just because they didn't lazy load plugins they've added!")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Check ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wbthomason/packer.nvim#specifying-plugins"},"packer's readme")," for more info!"))))}c.isMDXComponent=!0}}]);