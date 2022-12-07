"use strict";(self.webpackChunkfirezone_docs=self.webpackChunkfirezone_docs||[]).push([[4886],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),p=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,u=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),s=p(n),c=r,g=s["".concat(u,".").concat(c)]||s[c]||m[c]||i;return n?a.createElement(g,o(o({ref:e},d),{},{components:n})):a.createElement(g,o({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},13465:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"JumpCloud",sidebar_position:4,description:"Firezone's WireGuard\xae-based remote access platform supports using JumpCloud as a single sign-on provider using a SAML 2.0 connector."},o=void 0,l={unversionedId:"authenticate/saml/jumpcloud",id:"authenticate/saml/jumpcloud",title:"JumpCloud",description:"Firezone's WireGuard\xae-based remote access platform supports using JumpCloud as a single sign-on provider using a SAML 2.0 connector.",source:"@site/docs/authenticate/saml/jumpcloud.mdx",sourceDirName:"authenticate/saml",slug:"/authenticate/saml/jumpcloud",permalink:"/authenticate/saml/jumpcloud",draft:!1,editUrl:"https://github.com/firezone/firezone/tree/master/docs/docs/authenticate/saml/jumpcloud.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"JumpCloud",sidebar_position:4,description:"Firezone's WireGuard\xae-based remote access platform supports using JumpCloud as a single sign-on provider using a SAML 2.0 connector."},sidebar:"tutorialSidebar",previous:{title:"OneLogin",permalink:"/authenticate/saml/onelogin"},next:{title:"Administer",permalink:"/administer/"}},u={},p=[{value:"Create a SAML connector",id:"create-a-saml-connector",level:2},{value:"Add SAML identity provider to Firezone",id:"add-saml-identity-provider-to-firezone",level:2}],d={toc:p};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This guide assumes you have completed the prerequisite steps\n(e.g. generate self-signed X.509 certificates) outlined ",(0,r.kt)("a",{parentName:"p",href:"/authenticate/saml#prerequisites"},"here"),".")),(0,r.kt)("p",null,"Firezone supports Single Sign-On (SSO) using JumpCloud through the generic SAML 2.0 connector.\nThis guide will walk you through how to configure the integration."),(0,r.kt)("h2",{id:"create-a-saml-connector"},"Create a SAML connector"),(0,r.kt)("p",null,"In the JumpCloud admin portal, create a new App under\nthe SSO tab. At the bottom of the popup window, click ",(0,r.kt)("inlineCode",{parentName:"p"},"Custom SAML App"),"."),(0,r.kt)("p",null,"After entering your desired value for ",(0,r.kt)("inlineCode",{parentName:"p"},"Display Label"),", click the ",(0,r.kt)("inlineCode",{parentName:"p"},"SSO")," tab,\nthen use the following configuration values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Setting"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IdP Entity ID"),(0,r.kt)("td",{parentName:"tr",align:null},"Any unique string will work, e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"firezone-jumpcloud"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SP Entity ID"),(0,r.kt)("td",{parentName:"tr",align:null},"This should be the same as your Firezone ",(0,r.kt)("inlineCode",{parentName:"td"},"SAML_ENTITY_ID"),", defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"urn:firezone.dev:firezone-app"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ACS URL"),(0,r.kt)("td",{parentName:"tr",align:null},"This is your Firezone ",(0,r.kt)("inlineCode",{parentName:"td"},"EXTERNAL_URL/auth/saml/sp/consume/:config_id"),", e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"https://firezone.company.com/auth/saml/sp/consume/jumpcloud"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SAMLSubject NameID"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"email"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SAMLSubject NameID Format"),(0,r.kt)("td",{parentName:"tr",align:null},"Leave at the default.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Signature Algorithm"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RSA-SHA256"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sign Assertion"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Checked"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Login URL"),(0,r.kt)("td",{parentName:"tr",align:null},"This is your Firezone ",(0,r.kt)("inlineCode",{parentName:"td"},"EXTERNAL_URL/auth/saml/auth/signin/:config_id"),", e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"https://firezone.company.com/auth/saml/auth/signin/jumpcloud"))))),(0,r.kt)("p",null,"Leave the rest of the settings unchanged, then click the ",(0,r.kt)("inlineCode",{parentName:"p"},"activate")," button at the bottom-right."),(0,r.kt)("p",null,"Your JumpCloud configuration should now resemble the following:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/52545545/202558446-128e7484-eda6-429f-b6c1-dbabbf5dc7e3.png",alt:"JumpCloud SAML"})),(0,r.kt)("p",null,"Now, download the IdP Metadata document by selecting the App you just created\nand then clicking the ",(0,r.kt)("inlineCode",{parentName:"p"},"export metadata")," button in the upper-right. You'll need\nto copy-paste the contents of this document into the Firezone portal in the next step."),(0,r.kt)("h2",{id:"add-saml-identity-provider-to-firezone"},"Add SAML identity provider to Firezone"),(0,r.kt)("p",null,"In the Firezone portal, add a SAML identity provider under the Security tab\nby filling out the following information:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Setting"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Config ID"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"jumpcloud")),(0,r.kt)("td",{parentName:"tr",align:null},"Firezone uses this value to construct endpoints required in the SAML authentication flow (e.g., receiving assertions, login requests).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Label"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"JumpCloud")),(0,r.kt)("td",{parentName:"tr",align:null},"Appears on the sign in button for authentication.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Base URL"),(0,r.kt)("td",{parentName:"tr",align:null},"Leave unchanged."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Metadata"),(0,r.kt)("td",{parentName:"tr",align:null},"see note"),(0,r.kt)("td",{parentName:"tr",align:null},"Copy-paste the contents of the SAML metadata document you downloaded in the previous step from JumpCloud.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sign assertions"),(0,r.kt)("td",{parentName:"tr",align:null},"Checked."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sign metadata"),(0,r.kt)("td",{parentName:"tr",align:null},"Checked."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Require signed assertions"),(0,r.kt)("td",{parentName:"tr",align:null},"Checked."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Required signed envelopes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Unchecked.")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"Your Firezone configuration should now resemble the following:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/52545545/202557853-95246d0e-074c-4d31-ab89-26a3a3a7deda.png",alt:"Firezone SAML"})),(0,r.kt)("p",null,"After saving the SAML config, you should see a ",(0,r.kt)("inlineCode",{parentName:"p"},"Sign in with JumpCloud")," button\non your Firezone portal sign-in page."))}m.isMDXComponent=!0}}]);