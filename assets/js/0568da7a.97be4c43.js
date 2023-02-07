"use strict";(self.webpackChunkfirezone_docs=self.webpackChunkfirezone_docs||[]).push([[8144],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(r),f=s,h=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,i=new Array(a);i[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:s,i[1]=o;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5255:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=r(7462),s=(r(7294),r(3905));const a={title:"NAT Gateway",sidebar_position:3,description:"Set a static IP for egress traffic with Firezone's WireGuard\xae-based secure access platform."},i="Static egress IP with a NAT gateway",o={unversionedId:"user-guides/use-cases/nat-gateway/README",id:"user-guides/use-cases/nat-gateway/README",title:"NAT Gateway",description:"Set a static IP for egress traffic with Firezone's WireGuard\xae-based secure access platform.",source:"@site/docs/user-guides/use-cases/nat-gateway/README.mdx",sourceDirName:"user-guides/use-cases/nat-gateway",slug:"/user-guides/use-cases/nat-gateway/",permalink:"/user-guides/use-cases/nat-gateway/",draft:!1,editUrl:"https://github.com/firezone/firezone/tree/master/docs/docs/user-guides/use-cases/nat-gateway/README.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"NAT Gateway",sidebar_position:3,description:"Set a static IP for egress traffic with Firezone's WireGuard\xae-based secure access platform."},sidebar:"tutorialSidebar",previous:{title:"Reverse Tunnel",permalink:"/user-guides/use-cases/reverse-tunnel"},next:{title:"Reference",permalink:"/reference/"}},c={},l=[{value:"AWS example",id:"aws-example",level:2},{value:"Step 1: Deploy Firezone server",id:"step-1-deploy-firezone-server",level:3},{value:"Step 2: Restrict access to the protected resource",id:"step-2-restrict-access-to-the-protected-resource",level:3},{value:"Step 3: Route traffic to the protected resource through the VPN server",id:"step-3-route-traffic-to-the-protected-resource-through-the-vpn-server",level:3}],u={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,s.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"static-egress-ip-with-a-nat-gateway"},"Static egress IP with a NAT gateway"),(0,s.kt)("p",null,"Firezone can be used as NAT gateway in order to provide a single,\nstatic egress IP for all of your team's traffic to flow out of.\nThis is commonly used in the following scenarios:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Consulting engagements: Ask your client to whitelist a single static\nIP address associated with your engagement instead of your employees'\nindividual device IPs."),(0,s.kt)("li",{parentName:"ul"},"Masking your device IP or proxying your source IP for privacy or\nsecurity reasons.")),(0,s.kt)("p",null,"This guide will walk through a simple example restricting access for a\nself-hosted web app to a single whitelisted static IP running Firezone."),(0,s.kt)("p",null,"This is commonly done in place of maintaining an IP whitelist for\nmultiple team members, which becomes impossible to manage as the\naccess list grows and team members' IP addresses change."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/52545545/154868328-688067dd-deca-4548-ac9d-f6ffe7eacf86.png",alt:"Architecture"})),(0,s.kt)("h2",{id:"aws-example"},"AWS example"),(0,s.kt)("p",null,"Our goal is to configure VPN traffic to the restricted resource to be routed\nthrough a Firezone server on an EC2 instance. In this case Firezone is acting as\na network proxy or NAT gateway to provide a single public egress IP for all the\ndevices connected to it."),(0,s.kt)("p",null,"In this example the protected resource and Firezone are in separate VPC regions."),(0,s.kt)("h3",{id:"step-1-deploy-firezone-server"},"Step 1: Deploy Firezone server"),(0,s.kt)("p",null,"In this example, a Firezone instance has been set up on a ",(0,s.kt)("inlineCode",{parentName:"p"},"tc2.micro"),"\nEC2 instance. See the\n",(0,s.kt)("a",{parentName:"p",href:"/deploy/"},"Deployment Guide"),"\nfor details on deploying Firezone. Specific to AWS, ensure:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"The security group of the Firezone EC2 instance allows outbound traffic to the\nIP of the protected resource."),(0,s.kt)("li",{parentName:"ol"},"An Elastic IP is associated with the Firezone instance. This will be the\nsource IP address of traffic routed through the Firezone instance to external destinations.\nIn this case, the IP is ",(0,s.kt)("inlineCode",{parentName:"li"},"52.202.88.54"),".")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/52545545/154821256-9335703b-a120-4a9d-b9f5-bbca673cef63.png",alt:"Allocate Elastic IP"})),(0,s.kt)("h3",{id:"step-2-restrict-access-to-the-protected-resource"},"Step 2: Restrict access to the protected resource"),(0,s.kt)("p",null,"In this example, the protected resource is a self-hosted web app. Access to the\nweb app is restricted to only requests from ",(0,s.kt)("inlineCode",{parentName:"p"},"52.202.88.54"),".\nDepending on the resource, inbound traffic on different ports and traffic types\nmay need to be allowed. This is outside the scope of this guide."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/52545545/154821653-160f91d4-44d1-4b6c-b453-31604be930dc.png",alt:"Configure Security Group"})),(0,s.kt)("p",null,"If the protected resource is controlled by a 3rd party, please inform the 3rd\nparty to allow traffic from the static IP set in Step 1 (in this case ",(0,s.kt)("inlineCode",{parentName:"p"},"52.202.88.54"),")."),(0,s.kt)("h3",{id:"step-3-route-traffic-to-the-protected-resource-through-the-vpn-server"},"Step 3: Route traffic to the protected resource through the VPN server"),(0,s.kt)("p",null,"By default, all traffic from team members will be routed through Firezone\nand will originate from the static IP set in Step 1 (in this case ",(0,s.kt)("inlineCode",{parentName:"p"},"52.202.88.54"),").\nHowever, if\n",(0,s.kt)("a",{parentName:"p",href:"/user-guides/use-cases/split-tunnel/"},"split tunneling"),"\nhas been enabled, configuration may be required to ensure the destination IP of\nthe protected resource is included in the ",(0,s.kt)("inlineCode",{parentName:"p"},"Allowed IPs"),"."))}d.isMDXComponent=!0}}]);