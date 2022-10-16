"use strict";(self.webpackChunkfirezone_docs=self.webpackChunkfirezone_docs||[]).push([[3775],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=a,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||r;return n?i.createElement(m,o(o({ref:t},p),{},{components:n})):i.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},33895:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const r={title:"Auth0",sidebar_position:1},o=void 0,s={unversionedId:"authenticate/oidc/auth0",id:"authenticate/oidc/auth0",title:"Auth0",description:"Firezone supports Single Sign-On (SSO) using Auth0",source:"@site/docs/authenticate/oidc/auth0.mdx",sourceDirName:"authenticate/oidc",slug:"/authenticate/oidc/auth0",permalink:"/authenticate/oidc/auth0",draft:!1,editUrl:"https://github.com/firezone/firezone/tree/master/docs/authenticate/oidc/auth0.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Auth0",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"OpenID Connect",permalink:"/authenticate/oidc/"},next:{title:"Azure Active Directory",permalink:"/authenticate/oidc/azuread"}},l={},c=[{value:"Obtain Config Settings",id:"obtain-config-settings",level:2},{value:"Step 1 - Create and set up an application",id:"step-1---create-and-set-up-an-application",level:3},{value:"Integrate With Firezone",id:"integrate-with-firezone",level:2},{value:"Restricting Access to Certain Users",id:"restricting-access-to-certain-users",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Firezone supports Single Sign-On (SSO) using Auth0\nthrough the generic OIDC connector. This guide will walk you through how to\nobtain the following config settings required for the integration:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Config ID"),": The provider's config ID. (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"auth0"),")"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Label"),": The button label text that shows up on your Firezone login screen. (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"Auth0"),")"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Scope"),": ",(0,a.kt)("a",{parentName:"li",href:"https://openid.net/specs/openid-connect-basic-1_0.html#Scopes"},"OIDC scopes"),"\nto obtain from your OIDC provider. This should be set to ",(0,a.kt)("inlineCode",{parentName:"li"},"openid email profile"),"\nto provide Firezone with the user's email in the returned claims."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Response type"),": Set to ",(0,a.kt)("inlineCode",{parentName:"li"},"code"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Client ID"),": The client ID of the application."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Client secret"),": The client secret of the application."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Discovery Document URI"),": The\n",(0,a.kt)("a",{parentName:"li",href:"https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfig"},"OpenID Connect provider configuration URI"),"\nwhich returns a JSON document used to construct subsequent requests to this OIDC\nprovider.")),(0,a.kt)("h2",{id:"obtain-config-settings"},"Obtain Config Settings"),(0,a.kt)("h3",{id:"step-1---create-and-set-up-an-application"},"Step 1 - Create and set up an application"),(0,a.kt)("p",null,"In the Auth0 dashboard, create an application.\nSelect ",(0,a.kt)("strong",{parentName:"p"},"Regular Web Application")," as the application type."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/52545545/193337715-f8cb49e7-17b3-4c9c-bc75-9fdc51b66835.png",alt:"Auth0 Configuration"})),(0,a.kt)("p",null,"Next, visit the settings tab on the application details page. Take note and\nmodify the following parameters:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Name"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"Firezone")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Domain"),": The domain will be used to construct\nthe url to retreive the OIDC discovery document -\n",(0,a.kt)("inlineCode",{parentName:"li"},"https://<AUTH0_DOMAIN>/.well-known/openid-configuration")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Icon"),":\n",(0,a.kt)("a",{parentName:"li",href:"https://user-images.githubusercontent.com/52545545/156854754-da66a9e1-33d5-47f5-877f-eff8b330ab2b.png"},"Firezone icon"),"\n(save link as)."),(0,a.kt)("li",{parentName:"ol"},"Set ",(0,a.kt)("strong",{parentName:"li"},"Allowed Callback URLs")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"EXTERNAL_URL + /auth/oidc/<Config ID>/callback/"),"\n(e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"https://firezone.example.com/auth/oidc/auth0/callback/"),").")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/52545545/193341643-1aeb620a-85a6-4778-a425-2d092cf13bdc.png",alt:"Auth0 settings 1"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/52545545/193341638-710de54a-b988-4f5e-8c18-78639695efac.png",alt:"Auth0 settings 2"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/52545545/193341641-f94f0ecf-b16e-4831-af5b-5981d6634525.png",alt:"Auth0 settings 3"})),(0,a.kt)("h2",{id:"integrate-with-firezone"},"Integrate With Firezone"),(0,a.kt)("p",null,"Navigate to the ",(0,a.kt)("inlineCode",{parentName:"p"},"/settings/security"),' page in the admin portal, click\n"Add OpenID Connect Provider" and enter the details you obtained in the steps\nabove.'),(0,a.kt)("p",null,"Enable or disable the ",(0,a.kt)("strong",{parentName:"p"},"Auto create users")," option to automatically create\nan unprivileged user when signing in via this authentication mechanism."),(0,a.kt)("p",null,"And that's it! The configuration should be updated immediately.\nYou should now see a ",(0,a.kt)("inlineCode",{parentName:"p"},"Sign in with Auth0")," button on the sign in page."),(0,a.kt)("h2",{id:"restricting-access-to-certain-users"},"Restricting Access to Certain Users"),(0,a.kt)("p",null,"Auth0 supports setting access policies to control which users\ncan access the Firezone application. See Auth0's\n",(0,a.kt)("a",{parentName:"p",href:"https://auth0.com/docs/manage-users/user-accounts/manage-user-access-to-applications"},"Documentation"),"\nfor details."))}u.isMDXComponent=!0}}]);