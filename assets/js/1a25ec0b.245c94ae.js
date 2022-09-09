"use strict";(self.webpackChunknvchad_site=self.webpackChunknvchad_site||[]).push([[19],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return n?i.createElement(h,l(l({ref:t},c),{},{components:n})):i.createElement(h,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2672:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var i=n(7462),a=(n(7294),n(3905));const r={id:"features",title:"Features"},l=void 0,o={unversionedId:"features",id:"features",title:"Features",description:"NvChad comes with many comforts of a modern IDE. All lazy-loaded and built on top of NeoVim's fantastic lua integration while still looking very beautiful!",source:"@site/docs/features.md",sourceDirName:".",slug:"/features",permalink:"/features",tags:[],version:"current",frontMatter:{id:"features",title:"Features"},sidebar:"config",previous:{title:"Highlight groups",permalink:"/config/theming"},next:{title:"Debugging config",permalink:"/debugging-config"}},s={},u=[{value:"Plugins",id:"plugins",level:2},{value:"Core plugins",id:"core-plugins",level:3},{value:"<code>packer.nvim</code>",id:"packernvim",level:4},{value:"<code>telescope.nvim</code>",id:"telescopenvim",level:4},{value:"UI plugins",id:"ui-plugins",level:3},{value:"Tabufline - NvChad&#39;s tab+bufferline",id:"tabufline---nvchads-tabbufferline",level:4},{value:"<code>NvChad&#39;s statusline written from scratch</code>",id:"nvchads-statusline-written-from-scratch",level:4},{value:"<code>nvim-tree.lua</code>",id:"nvim-treelua",level:4},{value:"<code>blankline</code>",id:"blankline",level:4},{value:"<code>alpha-nvim</code>",id:"alpha-nvim",level:4},{value:"<code>base46</code>",id:"base46",level:4},{value:"<code>nvim-colorizer.lua</code>",id:"nvim-colorizerlua",level:4},{value:"<code>nvim-web-devicons</code>",id:"nvim-web-devicons",level:4},{value:"<code>nvim-treesitter</code>",id:"nvim-treesitter",level:3},{value:"Other plugins",id:"other-plugins",level:3}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"NvChad comes with many comforts of a modern IDE. All lazy-loaded and built on top of NeoVim's fantastic lua integration while still looking very beautiful!"),(0,a.kt)("h2",{id:"plugins"},"Plugins"),(0,a.kt)("h3",{id:"core-plugins"},"Core plugins"),(0,a.kt)("h4",{id:"packernvim"},(0,a.kt)("a",{parentName:"h4",href:"https://github.com/wbthomason/packer.nvim"},(0,a.kt)("inlineCode",{parentName:"a"},"packer.nvim"))),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"use-package")," inspired plugin manager for Neovim. Uses native packages, supports Luarocks dependencies, written in Lua, allows for expressive config, lazy loading etc."),(0,a.kt)("h4",{id:"telescopenvim"},(0,a.kt)("a",{parentName:"h4",href:"https://github.com/nvim-telescope/telescope.nvim"},(0,a.kt)("inlineCode",{parentName:"a"},"telescope.nvim"))),(0,a.kt)("p",null,"Fuzzy finding select menu with text."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/siduck/dotfiles/all/rice%20flex/tel.png",alt:"Telescope"})),(0,a.kt)("h3",{id:"ui-plugins"},"UI plugins"),(0,a.kt)("h4",{id:"tabufline---nvchads-tabbufferline"},(0,a.kt)("a",{parentName:"h4",href:"https://github.com/NvChad/ui"},"Tabufline - NvChad's tab+bufferline")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"tabufline1",src:n(4793).Z,width:"1920",height:"63"}),"\n",(0,a.kt)("img",{alt:"tabufline2",src:n(4793).Z,width:"1920",height:"63"}),"\n",(0,a.kt)("img",{alt:"tabufline3",src:n(4793).Z,width:"1920",height:"63"})),(0,a.kt)("p",null,"Top bar tab+buffer line for neovim (can be used for managing buffers and tabs, closing them). It also creates custom clickable buttons on the bufferline."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/siduck/dotfiles/all/rice%20flex/bufferline.png",alt:"bufferline"})),(0,a.kt)("h4",{id:"nvchads-statusline-written-from-scratch"},(0,a.kt)("a",{parentName:"h4",href:"https://github.com/NvChad/ui"},(0,a.kt)("inlineCode",{parentName:"a"},"NvChad's statusline written from scratch"))),(0,a.kt)("p",null,"Fast NeoVim statusline plugin written in lua."),(0,a.kt)("p",null,"Separator styles: ",(0,a.kt)("inlineCode",{parentName:"p"},"slant"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"round"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"default"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"block"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"arrow"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"statusline ",src:n(9281).Z,width:"1920",height:"162"}),"\n",(0,a.kt)("img",{alt:"statusline modes",src:n(3488).Z,width:"1920",height:"169"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"NOTE : (statusline looks different based on the themes, the above screenshot is from the onedark theme)")),(0,a.kt)("h4",{id:"nvim-treelua"},(0,a.kt)("a",{parentName:"h4",href:"https://github.com/kyazdani42/nvim-tree.lua"},(0,a.kt)("inlineCode",{parentName:"a"},"nvim-tree.lua"))),(0,a.kt)("p",null,"A file explorer tree for NeoVim written in lua."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/siduck/dotfiles/all/rice%20flex/nvimtree.png",alt:"nvim tree"})),(0,a.kt)("h4",{id:"blankline"},(0,a.kt)("a",{parentName:"h4",href:"https://github.com/lukas-reineke/indent-blankline.nvim"},(0,a.kt)("inlineCode",{parentName:"a"},"blankline"))),(0,a.kt)("p",null,"Indentline plugin."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/siduck/dotfiles/all/rice%20flex/blanklineNvim.png",alt:"blankline screenshot"})),(0,a.kt)("h4",{id:"alpha-nvim"},(0,a.kt)("a",{parentName:"h4",href:"https://github.com/goolord/alpha-nvim"},(0,a.kt)("inlineCode",{parentName:"a"},"alpha-nvim"))),(0,a.kt)("p",null,"Dashboard plugin for NeoVim."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dashboard",src:n(4949).Z,width:"1920",height:"1080"})),(0,a.kt)("h4",{id:"base46"},(0,a.kt)("a",{parentName:"h4",href:"https://github.com/NvChad/base46"},(0,a.kt)("inlineCode",{parentName:"a"},"base46"))),(0,a.kt)("p",null,"Manages syntax colorscheme in NvChad."),(0,a.kt)("h4",{id:"nvim-colorizerlua"},(0,a.kt)("a",{parentName:"h4",href:"https://github.com/norcalli/nvim-colorizer.lua"},(0,a.kt)("inlineCode",{parentName:"a"},"nvim-colorizer.lua"))),(0,a.kt)("p",null,"Fastest NeoVim colorizer, colors hex colors, hsl codes and much more!"),(0,a.kt)("h4",{id:"nvim-web-devicons"},(0,a.kt)("a",{parentName:"h4",href:"https://github.com/kyazdani42/nvim-web-devicons"},(0,a.kt)("inlineCode",{parentName:"a"},"nvim-web-devicons"))),(0,a.kt)("p",null,"Lua fork of vim devicons which lets you change colors and edit icons of filetypes."),(0,a.kt)("h3",{id:"nvim-treesitter"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/nvim-treesitter/nvim-treesitter"},(0,a.kt)("inlineCode",{parentName:"a"},"nvim-treesitter"))),(0,a.kt)("p",null,"NeoVim Treesitter configurations and abstraction layer. We mostly use this for syntax highlighting. The pretty syntax highlighting you see in all of our screenshots has gotten possible due to treesitter"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/hrsh7th/nvim-cmp"},(0,a.kt)("inlineCode",{parentName:"a"},"nvim-cmp"))," - completion menu")),(0,a.kt)("h3",{id:"other-plugins"},"Other plugins"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/lewis6991/gitsigns.nvim"},(0,a.kt)("inlineCode",{parentName:"a"},"gitsigns.nvim"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/windwp/nvim-autopairs"},(0,a.kt)("inlineCode",{parentName:"a"},"nvim-autopairs"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/numToStr/Comment.nvim"},(0,a.kt)("inlineCode",{parentName:"a"},"comment.nvim"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/neovim/nvim-lspconfig"},(0,a.kt)("inlineCode",{parentName:"a"},"nvim-lspconfig"))," - Used for configuring lsp servers etc")))}p.isMDXComponent=!0},9281:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/statusline-6171af31d06ff7be6518b8aea62c3d2c.png"},3488:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/statusline_modes-76f12a7c1d9100b21305af347060b51a.png"},4793:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/tabufline1-562b16aaebed3a41b410865f90e4f438.png"},4949:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/dashboard-422fd87ff42879ac0db491cc30448e4f.png"}}]);