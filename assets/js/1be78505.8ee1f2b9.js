(self.webpackChunkreact_math_editor_website=self.webpackChunkreact_math_editor_website||[]).push([[514],{4511:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ne}});var a=n(7378),r=n(5318),o=n(6028),l=n(2731),i=n(8944),c=n(2551),s=n(8245),u=n(5135),d=n(3059),m=n(5773),p=function(e){return a.createElement("svg",(0,m.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},h=n(1787),f=n(808),v=n(4142),g=n(5626),y=n(1554),b="menuLinkText_qtXE",k=["items"],E=["item"],C=["item","onItemClick","activePath"],_=["item","onItemClick","activePath"],Z=function e(t,n){return"link"===t.type?(0,c.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},T=(0,a.memo)((function(e){var t=e.items,n=(0,f.Z)(e,k);return a.createElement(a.Fragment,null,t.map((function(e,t){return a.createElement(N,(0,m.Z)({key:t,item:e},n))})))}));function N(e){var t=e.item,n=(0,f.Z)(e,E);switch(t.type){case"category":return 0===t.items.length?null:a.createElement(S,(0,m.Z)({item:t},n));case"link":default:return a.createElement(x,(0,m.Z)({item:t},n))}}function S(e){var t,n=e.item,r=e.onItemClick,o=e.activePath,l=(0,f.Z)(e,C),s=n.items,u=n.label,d=n.collapsible,p=Z(n,o),h=(0,c.uR)({initialState:function(){return!!d&&(!p&&n.collapsed)}}),v=h.collapsed,g=h.setCollapsed,y=h.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,r=e.setCollapsed,o=(0,c.D9)(t);(0,a.useEffect)((function(){t&&!o&&n&&r(!1)}),[t,o,n])}({isActive:p,collapsed:v,setCollapsed:g}),a.createElement("li",{className:(0,i.Z)("menu__list-item",{"menu__list-item--collapsed":v})},a.createElement("a",(0,m.Z)({className:(0,i.Z)("menu__link",(t={"menu__link--sublist":d,"menu__link--active":d&&p},t[b]=!d,t)),onClick:d?function(e){e.preventDefault(),y()}:void 0,href:d?"#":void 0},l),u),a.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:v},a.createElement(T,{items:s,tabIndex:v?-1:0,onItemClick:r,activePath:o})))}function x(e){var t=e.item,n=e.onItemClick,r=e.activePath,o=(0,f.Z)(e,_),l=t.href,c=t.label,s=Z(t,r);return a.createElement("li",{className:"menu__list-item",key:c},a.createElement(v.Z,(0,m.Z)({className:(0,i.Z)("menu__link",{"menu__link--active":s}),"aria-current":s?"page":void 0,to:l},(0,g.Z)(l)&&{onClick:n},o),(0,g.Z)(l)?c:a.createElement("span",null,c,a.createElement(y.Z,null))))}var j="sidebar_2j-V",I="sidebarWithHideableNavbar_2fMR",B="sidebarHidden_1sUd",P="sidebarLogo_1OGv",L="menu_1Xkn",w="menuWithAnnouncementBar_1DU9",A="collapseSidebarButton_2Hma",M="collapseSidebarButtonIcon_1Kc0";function D(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,h.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,h.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",A),onClick:t},a.createElement(p,{className:M}))}function O(e){var t,n,r=e.path,o=e.sidebar,l=e.onCollapse,s=e.isHidden,m=function(){var e=(0,c.nT)().isClosed,t=(0,a.useState)(!e),n=t[0],r=t[1];return(0,u.Z)((function(t){var n=t.scrollY;e||r(0===n)})),n}(),p=(0,c.LU)(),h=p.navbar.hideOnScroll,f=p.hideableSidebar,v=(0,c.nT)().isClosed;return a.createElement("div",{className:(0,i.Z)(j,(t={},t[I]=h,t[B]=s,t))},h&&a.createElement(d.Z,{tabIndex:-1,className:P}),a.createElement("nav",{className:(0,i.Z)("menu thin-scrollbar",L,(n={},n[w]=!v&&m,n))},a.createElement("ul",{className:"menu__list"},a.createElement(T,{items:o,activePath:r}))),f&&a.createElement(D,{onClick:l}))}var R=function(e){var t=e.toggleSidebar,n=e.sidebar,r=e.path;return a.createElement("ul",{className:"menu__list"},a.createElement(T,{items:n,activePath:r,onItemClick:function(){return t()}}))};function z(e){return a.createElement(c.Cv,{component:R,props:e})}var H=a.memo(O),F=a.memo(z);function W(e){var t=(0,s.Z)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(H,e),r&&a.createElement(F,e))}var V=n(5361),Y={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},$={Prism:n(2349).Z,theme:Y};function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var X=/\r\n|\r|\n/,K=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},G=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},Q=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=U({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=U({},n,{backgroundColor:null}),r};function J(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var ee=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),q(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?Q(e.theme,e.language):void 0;return t.themeDict=n})),q(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=U({},J(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==r&&(o.style=void 0!==o.style?U({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),q(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var l=a?{display:"inline-block"}:{},i=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(i))}})),q(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,l=U({},J(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?U({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),q(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,l=0,i=[],c=[i];l>-1;){for(;(o=a[l]++)<r[l];){var s=void 0,u=t[l],d=n[l][o];if("string"==typeof d?(u=l>0?u:["plain"],s=d):(u=G(u,d.type),d.alias&&(u=G(u,d.alias)),s=d.content),"string"==typeof s){var m=s.split(X),p=m.length;i.push({types:u,content:m[0]});for(var h=1;h<p;h++)K(i),c.push(i=[]),i.push({types:u,content:m[h]})}else l++,t.push(u),n.push(s),a.push(0),r.push(s.length)}l--,t.pop(),n.pop(),a.pop(),r.pop()}return K(i),c}(void 0!==l?this.tokenize(t,a,l,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);var te=n(6324),ne=n.n(te),ae=n(3538),re="codeBlockContainer_1ukp",oe="codeBlockContent_3Y8q",le="codeBlockTitle_befg",ie="codeBlock_2Xgr",ce="copyButton_1mju",se="codeBlockLines_3Zfi",ue=/{([\d,-]+)}/,de=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")};function me(e){var t=e.children,n=e.className,r=e.metastring,o=e.title,l=(0,c.LU)().prism,s=(0,a.useState)(!1),u=s[0],d=s[1],p=(0,a.useState)(!1),f=p[0],v=p[1];(0,a.useEffect)((function(){v(!0)}),[]);var g=(0,c.bc)(r)||o,y=(0,a.useRef)(null),b=[],k=(0,ae.Z)(),E=Array.isArray(t)?t.join(""):t;if(r&&ue.test(r)){var C=r.match(ue)[1];b=ne()(C).filter((function(e){return e>0}))}var _=null==n?void 0:n.replace(/language-/,"");!_&&l.defaultLanguage&&(_=l.defaultLanguage);var Z=E.replace(/\n$/,"");if(0===b.length&&void 0!==_){for(var T,N="",S=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return de(["js","jsBlock"]);case"jsx":case"tsx":return de(["js","jsBlock","jsx"]);case"html":return de(["js","jsBlock","html"]);case"python":case"py":return de(["python"]);default:return de()}}(_),x=E.replace(/\n$/,"").split("\n"),j=0;j<x.length;){var I=j+1,B=x[j].match(S);if(null!==B){switch(B.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":N+=I+",";break;case"highlight-start":T=I;break;case"highlight-end":N+=T+"-"+(I-1)+","}x.splice(j,1)}else j+=1}b=ne()(N),Z=x.join("\n")}var P=function(){!function(e,t){var n=(void 0===t?{}:t).target,a=void 0===n?document.body:n,r=document.createElement("textarea"),o=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";var l=document.getSelection(),i=!1;l.rangeCount>0&&(i=l.getRangeAt(0)),a.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;var c=!1;try{c=document.execCommand("copy")}catch(s){}r.remove(),i&&(l.removeAllRanges(),l.addRange(i)),o&&o.focus()}(Z),d(!0),setTimeout((function(){return d(!1)}),2e3)};return a.createElement(ee,(0,m.Z)({},$,{key:String(f),theme:k,code:Z,language:_}),(function(e){var t=e.className,n=e.style,r=e.tokens,o=e.getLineProps,l=e.getTokenProps;return a.createElement("div",{className:re},g&&a.createElement("div",{style:n,className:le},g),a.createElement("div",{className:(0,i.Z)(oe,_)},a.createElement("pre",{tabIndex:0,className:(0,i.Z)(t,ie,"thin-scrollbar"),style:n},a.createElement("code",{className:se},r.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=o({line:e,key:t});return b.includes(t+1)&&(n.className+=" docusaurus-highlight-code-line"),a.createElement("span",(0,m.Z)({key:t},n),e.map((function(e,t){return a.createElement("span",(0,m.Z)({key:t},l({token:e,key:t})))})))})))),a.createElement("button",{ref:y,type:"button","aria-label":(0,h.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,i.Z)(ce,"clean-btn"),onClick:P},u?a.createElement(h.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.createElement(h.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var pe=n(2332),he="details_SL1Q";function fe(e){var t=Object.assign({},e);return a.createElement(c.PO,(0,m.Z)({},t,{className:(0,i.Z)("alert alert--info",he,t.className)}))}var ve=["mdxType","originalType"];var ge={head:function(e){var t=a.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var r=e.props,o=(r.mdxType,r.originalType,(0,f.Z)(r,ve));return a.createElement(e.props.originalType,o)}return e}(e)}));return a.createElement(V.Z,e,t)},code:function(e){var t=e.children;return(0,a.isValidElement)(t)?t:t.includes("\n")?a.createElement(me,e):a.createElement("code",e)},a:function(e){return a.createElement(v.Z,e)},pre:function(e){var t,n=e.children;return(0,a.isValidElement)(n)&&(0,a.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:a.createElement(me,(0,a.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=a.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),r=a.createElement(a.Fragment,null,t.filter((function(e){return e!==n})));return a.createElement(fe,(0,m.Z)({},e,{summary:n}),r)},h1:(0,pe.Z)("h1"),h2:(0,pe.Z)("h2"),h3:(0,pe.Z)("h3"),h4:(0,pe.Z)("h4"),h5:(0,pe.Z)("h5"),h6:(0,pe.Z)("h6")},ye=n(6119),be="backToTopButton_2PbN",ke="backToTopButtonShow_7uc0";function Ee(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var Ce=function(){var e,t=Ee(),n=t.smoothScrollTop,r=t.cancelScrollToTop,o=(0,a.useState)(!1),l=o[0],c=o[1];return(0,u.Z)((function(e,t){var n=e.scrollY;if(t){var a=n<t.scrollY;if(a||r(),n<300)c(!1);else if(a){var o=document.documentElement.scrollHeight;n+window.innerHeight<o&&c(!0)}else c(!1)}}),[]),a.createElement("button",{className:(0,i.Z)("clean-btn",be,(e={},e[ke]=l,e)),type:"button",title:"Scroll to top",onClick:function(){return n()}},a.createElement("svg",{viewBox:"0 0 24 24",width:"28"},a.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",fill:"currentColor"})))},_e=n(9635),Ze={docPage:"docPage_3jyA",docMainContainer:"docMainContainer_28SP",docSidebarContainer:"docSidebarContainer_3jRz",docMainContainerEnhanced:"docMainContainerEnhanced_YA74",docSidebarContainerHidden:"docSidebarContainerHidden_2b_F",collapsedDocSidebar:"collapsedDocSidebar_KeEu",expandSidebarButtonIcon:"expandSidebarButtonIcon_1pq6",docItemWrapperEnhanced:"docItemWrapperEnhanced_2IZb"};function Te(e){var t,n,o,s=e.currentDocRoute,u=e.versionMetadata,d=e.children,m=u.pluginId,f=u.version,v=s.sidebar,g=v?u.docsSidebars[v]:void 0,y=(0,a.useState)(!1),b=y[0],k=y[1],E=(0,a.useState)(!1),C=E[0],_=E[1],Z=(0,a.useCallback)((function(){C&&_(!1),k(!b)}),[C]);return a.createElement(l.Z,{wrapperClassName:c.kM.wrapper.docPages,pageClassName:c.kM.page.docPage,searchMetadatas:{version:f,tag:(0,c.os)(m,f)}},a.createElement("div",{className:Ze.docPage},a.createElement(Ce,null),g&&a.createElement("aside",{className:(0,i.Z)(Ze.docSidebarContainer,(t={},t[Ze.docSidebarContainerHidden]=b,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(Ze.docSidebarContainer)&&b&&_(!0)}},a.createElement(W,{key:v,sidebar:g,path:s.path,onCollapse:Z,isHidden:C}),C&&a.createElement("div",{className:Ze.collapsedDocSidebar,title:(0,h.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,h.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:Z,onClick:Z},a.createElement(p,{className:Ze.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,i.Z)(Ze.docMainContainer,(n={},n[Ze.docMainContainerEnhanced]=b||!g,n))},a.createElement("div",{className:(0,i.Z)("container padding-top--md padding-bottom--lg",Ze.docItemWrapper,(o={},o[Ze.docItemWrapperEnhanced]=b,o))},a.createElement(r.Zo,{components:ge},d)))))}var Ne=function(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,l=t.find((function(e){return(0,_e.LX)(r.pathname,e)}));return l?a.createElement(Te,{currentDocRoute:l,versionMetadata:n},(0,o.Z)(t,{versionMetadata:n})):a.createElement(ye.default,e)}},6324:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,r,o]=t;if(a&&o){a=parseInt(a),o=parseInt(o);const e=a<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=a;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);