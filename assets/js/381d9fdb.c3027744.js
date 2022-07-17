"use strict";(self.webpackChunknvchad_site=self.webpackChunknvchad_site||[]).push([[302],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3895:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={id:"install",title:"Install",sidebar_position:1},l=void 0,o={unversionedId:"quickstart/install",id:"quickstart/install",title:"Install",description:"Try in docker container",source:"@site/docs/quickstart/install.md",sourceDirName:"quickstart",slug:"/quickstart/install",permalink:"/quickstart/install",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"install",title:"Install",sidebar_position:1},sidebar:"config",next:{title:"Post Install",permalink:"/quickstart/post-install"}},s={},p=[{value:"Try in docker container",id:"try-in-docker-container",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Semi-optional",id:"semi-optional",level:3},{value:"Install",id:"install",level:2},{value:"Linux / Macos (UNIX)",id:"linux--macos-unix",level:3},{value:"Windows",id:"windows",level:3},{value:"Update",id:"update",level:2},{value:"Uninstall",id:"uninstall",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"try-in-docker-container"},"Try in docker container"),(0,a.kt)("p",null,"This will leave your current Neovim configuration untouched. Once you exit Neovim, the image is deleted."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-zsh"},"  docker run -w /root -it --rm alpine:edge sh -uelic '\n    apk add git nodejs neovim ripgrep alpine-sdk --update\n    git clone https://github.com/NvChad/NvChad ~/.config/nvim\n    nvim\n    '\n")),(0,a.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You should be an existing vim user or keen to learn nvim + nvchad (through these docs)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/neovim/neovim/releases/tag/v0.7.2"},"Neovim 0.7.2")),(0,a.kt)("li",{parentName:"ul"},"If neovim's very old for your OS then consider trying this ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/MordechaiHadad/bob"},"neovim version manager")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.nerdfonts.com/"},"Use a Nerd Font")," in your terminal emulator.")),(0,a.kt)("h3",{id:"semi-optional"},"Semi-optional"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/BurntSushi/ripgrep"},(0,a.kt)("inlineCode",{parentName:"a"},"ripgrep"))," is required for grep searching with ",(0,a.kt)("em",{parentName:"li"},"Telescope"))),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("h3",{id:"linux--macos-unix"},"Linux / Macos (UNIX)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/NvChad/NvChad ~/.config/nvim --depth 1 && nvim\n")),(0,a.kt)("h3",{id:"windows"},"Windows"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/NvChad/NvChad $HOME\\AppData\\Local\\nvim --depth 1 && nvim\n")),(0,a.kt)("p",null,"(Note: windows users must have  ",(0,a.kt)("a",{parentName:"p",href:"http://mingw-w64.org/doku.php"},(0,a.kt)("inlineCode",{parentName:"a"},"mingw"))," installed & set on path)"),(0,a.kt)("h2",{id:"update"},"Update"),(0,a.kt)("p",null,"NvChad has an update mechanism built-in, which will pull any new updates to the git repository."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Update nvchad by pressing ",(0,a.kt)("inlineCode",{parentName:"p"},"<leader> + uu"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Note"),": by NvChad default, ",(0,a.kt)("inlineCode",{parentName:"p"},"<leader>")," is the ",(0,a.kt)("inlineCode",{parentName:"p"},"<space>")," key"))),(0,a.kt)("p",null,"This will open a prompt in NeoVim warning you that it is about to do a ",(0,a.kt)("inlineCode",{parentName:"p"},"git reset --hard")," and ",(0,a.kt)("strong",{parentName:"p"},"you will lose any customisations")," you've made to NvChad outside the custom folder"),(0,a.kt)("h2",{id:"uninstall"},"Uninstall"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# linux/macos (unix)\nrm -rf ~/.config/nvim\nrm -rf ~/.local/share/nvim\nrm -rf ~/.cache/nvim\n\n# windows\nrd -r ~\\AppData\\Local\\nvim\nrd -r ~\\AppData\\Local\\nvim-data\n")))}c.isMDXComponent=!0}}]);