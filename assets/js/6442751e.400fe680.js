"use strict";(self.webpackChunknvchad_site=self.webpackChunknvchad_site||[]).push([[420],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(t),m=l,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return t?a.createElement(k,i(i({ref:n},p),{},{components:t})):a.createElement(k,i({ref:n},p))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8123:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=t(7462),l=(t(7294),t(3905));const r={id:"learn-lua",title:"Learn Lua"},i=void 0,o={unversionedId:"quickstart/learn-lua",id:"quickstart/learn-lua",title:"Learn Lua",description:"Print",source:"@site/docs/quickstart/learn-lua.md",sourceDirName:"quickstart",slug:"/quickstart/learn-lua",permalink:"/quickstart/learn-lua",tags:[],version:"current",frontMatter:{id:"learn-lua",title:"Learn Lua"},sidebar:"config",previous:{title:"Post Install",permalink:"/quickstart/post-install"},next:{title:"Nvim Lua",permalink:"/quickstart/Nvim lua"}},s={},u=[{value:"Print",id:"print",level:2},{value:"Comments",id:"comments",level:2},{value:"Variables",id:"variables",level:2},{value:"Conditional Statements",id:"conditional-statements",level:2},{value:"Functions",id:"functions",level:2},{value:"Scope",id:"scope",level:2},{value:"Loops",id:"loops",level:2},{value:"While",id:"while",level:3},{value:"For",id:"for",level:3},{value:"Tables",id:"tables",level:2},{value:"Arrays (lists)",id:"arrays-lists",level:3},{value:"Dictionaries",id:"dictionaries",level:3},{value:"<strong>Nested Tables</strong>",id:"nested-tables",level:3},{value:"Modules",id:"modules",level:2}],p={toc:u};function c(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"print"},"Print"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'print("Hi")\n')),(0,l.kt)("h2",{id:"comments"},"Comments"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'-- comment\nprint("Hi") -- comment\n\n--[[\n multi-line \n comment\n]]\n')),(0,l.kt)("h2",{id:"variables"},"Variables"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'-- Different types\n\nlocal x = 10 -- number\nlocal name = "sid" -- string\nlocal isAlive = true -- boolean\nlocal a = nil --no value or invalid value\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Numbers")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"local a = 1\nlocal b = 2\n\nprint(a + b) -- 3\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"-- increment\nlocal n = 1\nn = n + 1\nprint(n) -- 2\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Strings")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'-- Concatenate strings\nlocal phrase = "I am"\nlocal name = "Sid"\nprint(phrase .. " " .. name) -- I am Sid\n\n--or\nprint("I am " .. "Sid")\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Boolean")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"local isAlive = true\nprint(isAlive) -- true\n\nisAlive = false\nprint(isAlive) -- false\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Comparison Operators")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"== equality"),(0,l.kt)("li",{parentName:"ul"},"< less than"),(0,l.kt)("li",{parentName:"ul"},">"," greater than"),(0,l.kt)("li",{parentName:"ul"},"<= less than or equal to"),(0,l.kt)("li",{parentName:"ul"},">","= greater than or equal to"),(0,l.kt)("li",{parentName:"ul"},"~= inequality")),(0,l.kt)("h2",{id:"conditional-statements"},"Conditional Statements"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'-- Number comparisons\nlocal age = 10\n\nif age > 18 then\n  print("over 18") -- this will not be executed\nend\n\n-- elseif and else\nage = 20\n\nif age > 18 then\n  print("over 18")\nelseif age == 18 then\n  print("18 huh")\nelse\n  print("kiddo")\nend\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'-- Boolean comparison\nlocal isAlive = true\n\nif isAlive then\n    print("Be grateful!")\nend\n\n-- String comparisons\nlocal name = "sid"\n\nif name ~= "sid" then\n  print("not sid")\nend\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Combining Statements")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'local age = 22\n\nif age == 10 and x > 0 then -- both should be true\n  print("kiddo!")\nelseif x == 18 or x > 18 then -- 1 or more are true\n  print("over 18")\nend\n\n-- result: over 18\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Invert Value")),(0,l.kt)("p",null,"you can also invert a value with the ",(0,l.kt)("strong",{parentName:"p"},"not")," keyword"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'local x = 18\n\nif not x == 18 then\n  print("kiddo!") -- prints nothing as x is 18\nend\n')),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"local function print_num(a)\n  print(a)\nend\n\nor\n\nlocal print_num = function(a)\n  print(a)\nend\n\nprint_num(5) -- prints 5 \n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"-- multiple parameters\n\nfunction sum(a, b)\n  return a + b\nend\n")),(0,l.kt)("h2",{id:"scope"},"Scope"),(0,l.kt)("p",null,"Variables have different scopes. Once the end of the scope is reached the values in that scope are no longer accessable"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"function foo()\n  local n = 10\nend\n\nprint(n) -- nil , n isn't accessible outside foo()\n")),(0,l.kt)("h2",{id:"loops"},"Loops"),(0,l.kt)("p",null,"Different ways to make a loop"),(0,l.kt)("h3",{id:"while"},"While"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'local i = 1\n\nwhile i <= 3 do\n   print("hi")\n   i = i + 1\nend\n')),(0,l.kt)("h3",{id:"for"},"For"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'for i = 1, 3 do\n   print("hi")\n   i = i + 1\nend\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'-- Both print "hi" 3 times\nhi\nhi\nhi\n')),(0,l.kt)("h2",{id:"tables"},"Tables"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Tables can be used to store complex data."),(0,l.kt)("li",{parentName:"ul"},"Types of tables : ")),(0,l.kt)("h3",{id:"arrays-lists"},"Arrays (lists)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Items within these can be accessed by "index"')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'local colors = { "red", "green", "blue" }\n\nprint(colors[1]) -- red\nprint(colors[2]) -- green\nprint(colors[3]) -- blue\n\n-- Different ways to loop through lists\n-- #colors is the length of the table, #tablename is the syntax\n\nfor i = 1, #colors do\n  print(colors[i])\nend\n\n-- ipairs \nfor index, value in ipairs(colors) do\n   print(colors[index])\n   -- or\n   print(value)\nend\n\n-- If you dont use index or value here then you can replace it with _ \nfor _, value in ipairs(colors) do\n   print(value)\nend\n')),(0,l.kt)("h3",{id:"dictionaries"},"Dictionaries"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"These contain keys and values")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'local info = { \n   name = "sid",\n   age = 20,\n   isAlive = true\n}\n\n-- both print sid\nprrint(info["name"])\nprint(info.name)\n\n-- Loop by pairs\nfor key, value in pairs(info) do\n   print(key .. " " .. tostring(value))\nend\n\n-- prints name sid, age 20 etc\n')),(0,l.kt)("h3",{id:"nested-tables"},(0,l.kt)("strong",{parentName:"h3"},"Nested Tables")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'-- Nested lists\nlocal data = {\n    { "Sid", 20 },\n    { "Tim", 90 },\n}\n\nfor i = 1, #data do\n  print(data[i][1] .. " is " .. data[i][2] .. " years old")\nend\n\n-- Nested dictionaries\nlocal data = {\n    sid = { age = 20 },\n    time = { age = 90 },\n}\n')),(0,l.kt)("h2",{id:"modules"},"Modules"),(0,l.kt)("p",null,"Import code from other files"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'require("path")\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Credits - ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/pohka/Lua-Beginners-Guide"},"Lua-Beginners-Guide")),(0,l.kt)("li",{parentName:"ul"},"This tutorial is a modifed version of the above guide, shortened to teach lua stuff needed only to configure nvim in general")))}c.isMDXComponent=!0}}]);