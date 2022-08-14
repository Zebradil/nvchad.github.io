"use strict";(self.webpackChunknvchad_site=self.webpackChunknvchad_site||[]).push([[784],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=i.createContext({}),s=function(e){var n=i.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=s(e.components);return i.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(t),g=a,m=d["".concat(u,".").concat(g)]||d[g]||c[g]||l;return t?i.createElement(m,r(r({ref:n},p),{},{components:t})):i.createElement(m,r({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=d;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var s=2;s<l;s++)r[s]=t[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7539:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var i=t(7462),a=(t(7294),t(3905));const l={id:"plugins",title:"Plugins"},r=void 0,o={unversionedId:"config/plugins",id:"config/plugins",title:"Plugins",description:"Plugin Definition",source:"@site/docs/config/plugins.md",sourceDirName:"config",slug:"/config/plugins",permalink:"/config/plugins",tags:[],version:"current",frontMatter:{id:"plugins",title:"Plugins"},sidebar:"config",previous:{title:"Options",permalink:"/config/options"},next:{title:"Mappings",permalink:"/config/Mappings"}},u={},s=[{value:"Plugin Definition",id:"plugin-definition",level:3},{value:"Packer&#39;s way to define plugins",id:"packers-way-to-define-plugins",level:4},{value:"NvChad&#39;s way to define plugins",id:"nvchads-way-to-define-plugins",level:4},{value:"Add plugins",id:"add-plugins",level:3},{value:"Override default config of a plugin",id:"override-default-config-of-a-plugin",level:3},{value:"Modify plugin definition options",id:"modify-plugin-definition-options",level:3},{value:"Enable dashboard",id:"enable-dashboard",level:3},{value:"Remove plugins",id:"remove-plugins",level:3}],p={toc:s};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"plugin-definition"},"Plugin Definition"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Nvchad uses packer.nvim underhood but the syntax is different & better"),(0,a.kt)("li",{parentName:"ul"},"This shows how a plugin definition syntax looks like in packer.nvim and nvchad, below are some examples")),(0,a.kt)("h4",{id:"packers-way-to-define-plugins"},"Packer's way to define plugins"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'   use { "NvChad/nvterm" }, -- without any options\n\n   -- with more options\n   use {\n      "NvChad/nvterm"\n      module = "nvterm",\n      config = function()\n         require "plugins.configs.nvterm"\n      end,\n   },\n')),(0,a.kt)("h4",{id:"nvchads-way-to-define-plugins"},"NvChad's way to define plugins"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'   ["NvChad/nvterm"] = {}, -- without any options\n\n   -- with more options\n   ["NvChad/nvterm"] = {\n      module = "nvterm",\n      config = function()\n         require "plugins.configs.nvterm"\n      end,\n   },\n')),(0,a.kt)("h3",{id:"add-plugins"},"Add plugins"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install new plugins")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'-- chadrc.lua\n\nM.plugins = {\n   user = require "custom.plugins"\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can use a table too or just link the path of your table to organize config clean!")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'-- custom/plugins/init.lua has to return a table\n-- THe plugin name is github user or organization name/reponame\n\nreturn {\n\n   ["elkowar/yuck.vim"] = { ft = "yuck" },\n\n   ["max397574/better-escape.nvim"] = {\n      event = "InsertEnter",\n      config = function()\n         require("better_escape").setup()\n      end,\n   },\n}\n')),(0,a.kt)("h3",{id:"override-default-config-of-a-plugin"},"Override default config of a plugin"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This feature comes useful when you want to change one thing from default config's options of a plugin but not copy paste the whole config!")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'M.plugins = {\n   override = {\n      ["nvim-treesitter/nvim-treesitter"] = {\n        ensure_installed = {\n          "html",\n          "css",\n       },\n     }\n   }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Take the exact plugin name from ",(0,a.kt)("inlineCode",{parentName:"li"},"plugins/init.lua")),(0,a.kt)("li",{parentName:"ul"},"The above method might get messy if you override many plugin configs, so below is a basic example to keep it clean :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local pluginConfs = require "custom.plugins.configs"\n\nM.plugins = {\n   override = {\n      ["nvim-treesitter/nvim-treesitter"] = pluginConfs.treesitter,\n      ["kyazdani42/nvim-tree.lua"] = pluginConfs.nvimtree,\n   },\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'-- custom/plugins/configs.lua file\n\nlocal M = {}\n\nM.treesitter = {\n   ensure_installed = {\n      "lua",\n      "html",\n      "css",\n   },\n}\n\nM.nvimtree = {\n   git = {\n      enable = true,\n   },\n   view = {\n      side = "right",\n      width = 20,\n   },\n}\n\n-- you cant directly call a module in chadrc thats related to the default config \n-- Thats because most probably that module is lazyloaded\n-- In this case its \'cmp\', we have lazyloaded it by default\n-- So you need to make this override field a function, instead of a table \n-- And the function needs to return a table!\n\nM.cmp = function()\n   local cmp = require \'cmp\' \n\n   return {\n      mapping = {\n         ["<C-d>"] = cmp.mapping.scroll_docs(-8),\n      }\n    }\nend\n\nreturn M\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Do :PackerSync")),(0,a.kt)("h3",{id:"modify-plugin-definition-options"},"Modify plugin definition options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For example this is nvimtree's definition")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},' ["kyazdani42/nvim-tree.lua"] = {\n      cmd = { "NvimTreeToggle", "NvimTreeFocus" },\n\n      setup = function()\n         require("core.mappings").nvimtree()\n      end,\n\n      config = function()\n         require "plugins.configs.nvimtree"\n      end,\n }\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"And we want to change the values in config, setup , cmd etc"),(0,a.kt)("li",{parentName:"ul"},"So put that plugin definition in the custom plugins section ( the place where you define new plugins to install them)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'\nM.plugins = {\n  user = {\n      ["kyazdani42/nvim-tree.lua"] = {\n      cmd = { "abc" },\n      config = function()\n          require "custom.plugins.nvimtree"\n      end,\n   }\n} \n\n-- This will change cmd, config values from default plugin definition\n-- So the setup value isnt changed, look close!\n')),(0,a.kt)("h3",{id:"enable-dashboard"},"Enable dashboard"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can enable alpha.nvim i.e dashboard plugin the same way.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'M.plugins = {\n   user = {\n      ["goolord/alpha-nvim"] = {\n         disable = false,\n      },\n   },\n}\n\n-- now run :PackerSync\n')),(0,a.kt)("h3",{id:"remove-plugins"},"Remove plugins"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'M.plugins = {\n  remove = {\n      "andymass/vim-matchup",\n      "NvChad/nvterm",\n   },\n}\n\n-- now run :PackerSync\n')))}c.isMDXComponent=!0}}]);