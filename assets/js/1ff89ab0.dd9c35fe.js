"use strict";(self.webpackChunkfirezone_docs=self.webpackChunkfirezone_docs||[]).push([[7678],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19838:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={title:"Zitadel",sidebar_position:7},o=void 0,l={unversionedId:"authenticate/oidc/zitadel",id:"authenticate/oidc/zitadel",title:"Zitadel",description:"Firezone supports Single Sign-On (SSO) using Zitadel",source:"@site/docs/authenticate/oidc/zitadel.mdx",sourceDirName:"authenticate/oidc",slug:"/authenticate/oidc/zitadel",permalink:"/authenticate/oidc/zitadel",draft:!1,editUrl:"https://github.com/firezone/firezone/tree/master/docs/docs/authenticate/oidc/zitadel.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Zitadel",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"OneLogin",permalink:"/authenticate/oidc/onelogin"},next:{title:"SAML 2.0",permalink:"/authenticate/saml/"}},p={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Create Zitadel Application",id:"create-zitadel-application",level:2},{value:"Integrate With Firezone",id:"integrate-with-firezone",level:2},{value:"Restricting Access to Certain Users in Zitadel",id:"restricting-access-to-certain-users-in-zitadel",level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Firezone supports Single Sign-On (SSO) using Zitadel\nthrough the generic OIDC connector. This guide will walk you through how to\nobtain the following config settings required for the integration:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Config ID"),": The provider's config ID. (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"zitadel"),")"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Label"),": The button label text that shows up on your Firezone login screen. (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"Zitadel"),")"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Scope"),": ",(0,i.kt)("a",{parentName:"li",href:"https://openid.net/specs/openid-connect-basic-1_0.html#Scopes"},"OIDC scopes"),"\nto obtain from your OIDC provider. This should be set to ",(0,i.kt)("inlineCode",{parentName:"li"},"openid email profile offline_access"),"\nto provide Firezone with the user's email in the returned claims."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Response type"),": Set to ",(0,i.kt)("inlineCode",{parentName:"li"},"code"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Client ID"),": The client ID of the application."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Client secret"),": The client secret of the application."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Discovery Document URI"),": The\n",(0,i.kt)("a",{parentName:"li",href:"https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfig"},"OpenID Connect provider configuration URI"),"\nwhich returns a JSON document used to construct subsequent requests to this\nOIDC provider.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42775578/190861910-2a16881d-1a04-4515-9ed4-d6768db9efc0.gif",alt:"Firezone Zitadel SSO Login"})),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Setup your own ",(0,i.kt)("a",{parentName:"li",href:"https://zitadel.cloud/"},"Zitadel Cloud")," account."),(0,i.kt)("li",{parentName:"ul"},"Create your first Zitadel instance in the\n",(0,i.kt)("a",{parentName:"li",href:"https://zitadel.cloud/admin/instances"},"Zitadel Customer portal")),(0,i.kt)("li",{parentName:"ul"},'Login to your Zitadel instance and create a project (i.e. "Internal")')),(0,i.kt)("p",null,"More information about these steps can be found in\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.zitadel.com/docs/guides/start/quickstart#try-out-zitadel-cloud"},"Zitadel's documentation"),"."),(0,i.kt)("h2",{id:"create-zitadel-application"},"Create Zitadel Application"),(0,i.kt)("p",null,"In the Instance Console, go to ",(0,i.kt)("strong",{parentName:"p"},"Projects")," and select the project you want,\nthen click ",(0,i.kt)("strong",{parentName:"p"},"New"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42775578/190860229-66dc21e3-96f0-46d3-bcf1-3d6ea6b99db2.png",alt:"Start adding a new application in the project site"})),(0,i.kt)("p",null,'Give the application a name (e.g. "Firezone") and select ',(0,i.kt)("strong",{parentName:"p"},"WEB"),"\nfor the application type."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42775578/190860326-cb6998a1-035a-4324-89f8-3c31fb2dfeea.png",alt:"Name the application and select type WEB"})),(0,i.kt)("p",null,"Select ",(0,i.kt)("strong",{parentName:"p"},"CODE")," for the authentication method."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42775578/190860399-28c134d6-bd45-4da3-a433-4ae0b1e4ffca.png",alt:"Select authentication method CODE"})),(0,i.kt)("p",null,"Specify the redirect URI and post logout URI."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Redirect URIs"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"EXTERNAL_URL + /auth/oidc/<Config ID>/callback/"),"\n(e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"https://vpn.example.com/auth/oidc/zitadel/callback/"),")"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Post Logout URIs"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"EXTERNAL_URL")," (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"https://vpn.example.com"),")")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42775578/190860569-6eec899e-5753-40a6-8535-2e32a6a882a9.png",alt:"Specify the redirect URI and post logout URI"})),(0,i.kt)("p",null,"Double-check the configuration, then click ",(0,i.kt)("strong",{parentName:"p"},"Create"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42775578/190860669-f478d930-24a0-4854-8631-bc3b1025e3db.png",alt:"Configuration Overview"})),(0,i.kt)("p",null,"Copy the ",(0,i.kt)("strong",{parentName:"p"},"ClientId")," and ",(0,i.kt)("strong",{parentName:"p"},"ClientSecret")," as it will be used for the Firezone\nconfiguration."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42775578/190860714-c3f38cd9-1a25-4044-ae3b-dd172be3d878.png",alt:"image"})),(0,i.kt)("p",null,"In the application ",(0,i.kt)("strong",{parentName:"p"},"Configuration")," click ",(0,i.kt)("strong",{parentName:"p"},"Refresh Token")," and then on\n",(0,i.kt)("strong",{parentName:"p"},"Save"),". The refresh token is optional for some features of Firezone."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42775578/190860810-9eb2cf47-d7f9-4c70-b562-fcd04c08e9e8.png",alt:"Application Configuration"})),(0,i.kt)("p",null,"In the application ",(0,i.kt)("strong",{parentName:"p"},"Token Settings")," select ",(0,i.kt)("strong",{parentName:"p"},"User roles inside ID Token")," and\n",(0,i.kt)("strong",{parentName:"p"},"User Info inside ID Token"),". Save it with a click on ",(0,i.kt)("strong",{parentName:"p"},"Save"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42775578/190860899-caee8ed8-b43c-47fa-8519-868d37ce0eb5.png",alt:"Application Token Settings"})),(0,i.kt)("h2",{id:"integrate-with-firezone"},"Integrate With Firezone"),(0,i.kt)("p",null,"Navigate to the ",(0,i.kt)("inlineCode",{parentName:"p"},"/settings/security"),' page in the admin portal, click\n"Add OpenID Connect Provider" and enter the details you obtained in the steps\nabove.'),(0,i.kt)("p",null,"Enable or disable the ",(0,i.kt)("strong",{parentName:"p"},"Auto create users")," option to automatically create\nan unprivileged user when signing in via this authentication mechanism."),(0,i.kt)("p",null,"And that's it! The configuration should be updated immediately.\nYou should now see a ",(0,i.kt)("inlineCode",{parentName:"p"},"Sign in with Zitadel")," button on the sign in page."),(0,i.kt)("h2",{id:"restricting-access-to-certain-users-in-zitadel"},"Restricting Access to Certain Users in Zitadel"),(0,i.kt)("p",null,"Zitadel can limit which users have access to Firezone. To do this,\ngo to the project where your created your application. In ",(0,i.kt)("strong",{parentName:"p"},"General")," you can\nfind ",(0,i.kt)("strong",{parentName:"p"},"Check Authorization on Authentication")," which allows only users with at\nleast one role to login to Firezone."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42775578/190861300-68dad91d-1859-4dc5-8beb-16858bda5880.png",alt:"Zitadel check authorization on authentication"})))}u.isMDXComponent=!0}}]);