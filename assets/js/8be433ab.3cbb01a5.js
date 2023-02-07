"use strict";(self.webpackChunkfirezone_docs=self.webpackChunkfirezone_docs||[]).push([[4940],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6491:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={title:"Custom Reverse Proxy",sidebar_position:3},i=void 0,s={unversionedId:"deploy/advanced/reverse-proxy",id:"deploy/advanced/reverse-proxy",title:"Custom Reverse Proxy",description:"Using a custom reverse proxy is an advanced configuration. The default bundled",source:"@site/docs/deploy/advanced/reverse-proxy.mdx",sourceDirName:"deploy/advanced",slug:"/deploy/advanced/reverse-proxy",permalink:"/deploy/advanced/reverse-proxy",draft:!1,editUrl:"https://github.com/firezone/firezone/tree/master/docs/docs/deploy/advanced/reverse-proxy.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Custom Reverse Proxy",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Custom External Database",permalink:"/deploy/advanced/external-database"},next:{title:"Authenticate",permalink:"/authenticate/"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Firezone configuration requirements",id:"firezone-configuration-requirements",level:3},{value:"Proxy requirements",id:"proxy-requirements",level:3},{value:"Security considerations",id:"security-considerations",level:2},{value:"Example configurations",id:"example-configurations",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Using a custom reverse proxy is an advanced configuration. The default bundled\nNginx proxy (Omnibus-based deployments) and Caddy (Docker-based deployments) is\nsuitable for the vast majority of use cases and is recommended for most users.\nThere are important security risks if the reverse proxy is not set up correctly.")),(0,o.kt)("p",null,"For help deploying Firezone with a custom reverse proxy, consider ",(0,o.kt)("a",{parentName:"p",href:"https://www.firezone.dev/contact/sales?utm_source=docs.firezone.dev"},"contacting us\nfor support"),"."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Firezone comes with bundled ",(0,o.kt)("a",{parentName:"p",href:"https://www.nginx.com/"},"Nginx")," (Omnibus-based\ndeployments) or uses Caddy (Docker-based deployments) by default. However, in\nsome cases you might want to deploy your own server such as when using\nyour own load balancer."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Below you will find the requirements in order to setup Firezone with a custom\nreverse proxy."),(0,o.kt)("h3",{id:"firezone-configuration-requirements"},"Firezone configuration requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Disable the bundled Nginx by setting ",(0,o.kt)("inlineCode",{parentName:"li"},"default['firezone']['nginx']['enabled']"),"\nto ",(0,o.kt)("inlineCode",{parentName:"li"},"false")," in the config file."),(0,o.kt)("li",{parentName:"ul"},"If you have any immediate proxies between your primary reverse proxy and the\nFirezone web app, add their IPs to\n",(0,o.kt)("inlineCode",{parentName:"li"},"default['firezone']['phoenix']['external_trusted_proxies']"),". Because of the\nway the ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For"},"X-Forwarded-For header works"),",\nthis is needed to parse the actual client's IP address to prevent\nIP spoofing.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"external_trusted_proxies")," list automatically implicitly includes the\nfollowing private CIDR ranges, even if they're not specified in the\nconfiguration file:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"127.0.0.0/8")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"10.0.0.0/8")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"172.16.0.0/12")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"192.168.0.0/16")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"::1/128")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"fc00::/7"))),(0,o.kt)("p",{parentName:"admonition"},"This means any web requests originating from these IPs are automatically ignored\nfrom the ",(0,o.kt)("inlineCode",{parentName:"p"},"X-Forwarded-For")," headers. If you're accessing Firezone from any IPs in\nthis range (as seen by the Firezone web app), be sure to add them to the\n",(0,o.kt)("inlineCode",{parentName:"p"},"default['firezone']['phoenix']['clients']")," configuration option instead.")),(0,o.kt)("p",null,"Read more about the configuration options\n",(0,o.kt)("a",{parentName:"p",href:"/reference/configuration-file/"},"here"),"."),(0,o.kt)("h3",{id:"proxy-requirements"},"Proxy requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"All your proxies need to configure the ",(0,o.kt)("inlineCode",{parentName:"li"},"X-Forwarded-For")," header as explained\n",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For"},"here")),(0,o.kt)("li",{parentName:"ul"},"Your proxy should also set the ",(0,o.kt)("inlineCode",{parentName:"li"},"X-Forwarded-Proto")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"https"),"."),(0,o.kt)("li",{parentName:"ul"},"Your proxy (or another downstream proxy) ",(0,o.kt)("strong",{parentName:"li"},"must")," terminate SSL since we\nenforce ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#restrict_access_to_cookies"},"secure cookies"),"."),(0,o.kt)("li",{parentName:"ul"},"Firezone requires the use of WebSockets to establish realtime connections. We\nrecommend following your proxy's specific documentation for supporting\nWebSockets as each proxy varies. In general, your proxy needs to be able to\nproxy HTTP 1.1 connections, and the Firezone web app expects the following\nheaders to be set:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Connection: upgrade")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Upgrade: websocket"))))),(0,o.kt)("h2",{id:"security-considerations"},"Security considerations"),(0,o.kt)("p",null,"In addition to the headers above, we recommend adding the following headers for\nsecurity purposes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"X-XSS-Protection: 1; mode=block")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"X-Content-Type-Options nosniff")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Referrer-Policy no-referrer-when-downgrade")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Content-Security-Policy: default-src 'self' ws: wss: http: https: data: blob:\n'unsafe-inline'; frame-ancestors 'self';")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Permissions-Policy: interest-cohort=()"))),(0,o.kt)("p",null,"Since the upstream Firezone web app expects plain HTTP traffic, any requests the\nproxy forwards is sent over HTTP and thus is ",(0,o.kt)("strong",{parentName:"p"},"not encrypted"),". In most cases,\nthe reverse proxy is installed in a trusted network, and this is not an issue.\nBut the connection between your trusted proxy and the Firezone web app spans\nan untrusted network (such as the Internet), you may want to leave the bundled\n",(0,o.kt)("inlineCode",{parentName:"p"},"nginx")," proxy enabled for SSL termination, and set up your custom\nreverse proxy to proxy to that instead."),(0,o.kt)("h2",{id:"example-configurations"},"Example configurations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/reference/reverse-proxy-templates/apache/"},"Apache")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/reference/reverse-proxy-templates/traefik/"},"Traefik")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/reference/reverse-proxy-templates/haproxy/"},"HAProxy"))),(0,o.kt)("p",null,"These configurations are written to be as simple as possible. They're designed\nto function as a simple template which you can customize further to suit your\nneeds."),(0,o.kt)("p",null,"If you have a working configuration for a different reverse proxy or a different\nversion of an existing one we appreciate any\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/firezone/firezone/"},"contribution")," to expand the examples for\nthe community."))}c.isMDXComponent=!0}}]);