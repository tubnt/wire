"use strict";(self.webpackChunkfirezone_docs=self.webpackChunkfirezone_docs||[]).push([[3775],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,m=u["".concat(c,".").concat(d)]||u[d]||h[d]||a;return n?i.createElement(m,o(o({ref:t},p),{},{components:n})):i.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3895:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=n(7462),r=(n(7294),n(3905));const a={title:"Auth0",sidebar_position:1,description:"Enforce 2FA/MFA for users of Firezone's WireGuard\xae-based secure access platform. This guide walks through integrating Auth0 for single sign-on using OpenID Connect (OIDC)."},o="Enable SSO with Auth0 (OIDC)",s={unversionedId:"authenticate/oidc/auth0",id:"authenticate/oidc/auth0",title:"Auth0",description:"Enforce 2FA/MFA for users of Firezone's WireGuard\xae-based secure access platform. This guide walks through integrating Auth0 for single sign-on using OpenID Connect (OIDC).",source:"@site/docs/authenticate/oidc/auth0.mdx",sourceDirName:"authenticate/oidc",slug:"/authenticate/oidc/auth0",permalink:"/authenticate/oidc/auth0",draft:!1,editUrl:"https://github.com/firezone/firezone/tree/master/docs/docs/authenticate/oidc/auth0.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Auth0",sidebar_position:1,description:"Enforce 2FA/MFA for users of Firezone's WireGuard\xae-based secure access platform. This guide walks through integrating Auth0 for single sign-on using OpenID Connect (OIDC)."},sidebar:"tutorialSidebar",previous:{title:"OpenID Connect",permalink:"/authenticate/oidc/"},next:{title:"Azure Active Directory",permalink:"/authenticate/oidc/azuread"}},c={},l=[{value:"Step 1: Obtain OIDC configuration parameters",id:"step-1-obtain-oidc-configuration-parameters",level:2},{value:"Step 2: Integrate with Firezone",id:"step-2-integrate-with-firezone",level:2},{value:"Step 3 (optional): Restrict access to specific users",id:"step-3-optional-restrict-access-to-specific-users",level:2}],p={toc:l},u="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"enable-sso-with-auth0-oidc"},"Enable SSO with Auth0 (OIDC)"),(0,r.kt)("p",null,"Firezone supports Single Sign-On (SSO) using Auth0\nthrough the generic OIDC connector. This guide will walk you through how to\nobtain the following config settings required for the integration:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Config ID"),": The provider's config ID. (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"auth0"),")"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Label"),": The button label text that shows up on your Firezone login screen. (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"Auth0"),")"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Scope"),": ",(0,r.kt)("a",{parentName:"li",href:"https://openid.net/specs/openid-connect-basic-1_0.html#Scopes"},"OIDC scopes"),"\nto obtain from your OIDC provider. This should be set to ",(0,r.kt)("inlineCode",{parentName:"li"},"openid email profile"),"\nto provide Firezone with the user's email in the returned claims."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Response type"),": Set to ",(0,r.kt)("inlineCode",{parentName:"li"},"code"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Client ID"),": The client ID of the application."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Client secret"),": The client secret of the application."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Discovery Document URI"),": The\n",(0,r.kt)("a",{parentName:"li",href:"https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfig"},"OpenID Connect provider configuration URI"),"\nwhich returns a JSON document used to construct subsequent requests to this OIDC\nprovider.")),(0,r.kt)("h2",{id:"step-1-obtain-oidc-configuration-parameters"},"Step 1: Obtain OIDC configuration parameters"),(0,r.kt)("p",null,"In the Auth0 dashboard, create an application.\nSelect ",(0,r.kt)("strong",{parentName:"p"},"Regular Web Application")," as the application type."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/52545545/193337715-f8cb49e7-17b3-4c9c-bc75-9fdc51b66835.png",alt:"Auth0 Configuration"})),(0,r.kt)("p",null,"Next, visit the settings tab on the application details page. Take note and\nmodify the following parameters:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Name"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Firezone")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Domain"),": The domain will be used to construct\nthe url to retrieve the OIDC discovery document - ",(0,r.kt)("inlineCode",{parentName:"li"},"https://<AUTH0_DOMAIN>/.well-known/openid-configuration")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Icon"),":\n",(0,r.kt)("a",{parentName:"li",href:"https://user-images.githubusercontent.com/52545545/156854754-da66a9e1-33d5-47f5-877f-eff8b330ab2b.png"},"Firezone icon"),"\n(save link as)."),(0,r.kt)("li",{parentName:"ol"},"Set ",(0,r.kt)("strong",{parentName:"li"},"Allowed Callback URLs")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"EXTERNAL_URL + /auth/oidc/<Config ID>/callback/"),"\n(e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"https://firezone.example.com/auth/oidc/auth0/callback/"),").")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/52545545/193341643-1aeb620a-85a6-4778-a425-2d092cf13bdc.png",alt:"Auth0 settings 1"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/52545545/193341638-710de54a-b988-4f5e-8c18-78639695efac.png",alt:"Auth0 settings 2"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/52545545/193341641-f94f0ecf-b16e-4831-af5b-5981d6634525.png",alt:"Auth0 settings 3"})),(0,r.kt)("h2",{id:"step-2-integrate-with-firezone"},"Step 2: Integrate with Firezone"),(0,r.kt)("p",null,"Navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/settings/security"),' page in the admin portal, click\n"Add OpenID Connect Provider" and enter the details you obtained in the steps\nabove.'),(0,r.kt)("p",null,"Enable or disable the ",(0,r.kt)("strong",{parentName:"p"},"Auto create users")," option to automatically create\nan unprivileged user when signing in via this authentication mechanism."),(0,r.kt)("p",null,"And that's it! The configuration should be updated immediately.\nYou should now see a ",(0,r.kt)("inlineCode",{parentName:"p"},"Sign in with Auth0")," button on the sign in page."),(0,r.kt)("h2",{id:"step-3-optional-restrict-access-to-specific-users"},"Step 3 (optional): Restrict access to specific users"),(0,r.kt)("p",null,"Auth0 supports setting access policies to control which users\ncan access the Firezone application. See Auth0's\n",(0,r.kt)("a",{parentName:"p",href:"https://auth0.com/docs/manage-users/user-accounts/manage-user-access-to-applications"},"Documentation"),"\nfor details."))}h.isMDXComponent=!0}}]);