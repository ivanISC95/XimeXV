if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const f=e=>n(e,t),l={module:{uri:t},exports:o,require:f};i[t]=Promise.all(s.map((e=>l[e]||f(e)))).then((e=>(r(...e),o)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BpCAkarD.css",revision:null},{url:"assets/index-t7Ap49in.js",revision:null},{url:"index.html",revision:"bbce55a59fa92a631641a89a1b231296"},{url:"registerSW.js",revision:"820dda9614be0d77c3927172da258fa2"},{url:"corona.png",revision:"11c118919fcbfe367c3a699bd20f7cf8"},{url:"manifest.webmanifest",revision:"3d91a0e14d6eb7f6f021f07c0a6fc17e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
