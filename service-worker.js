if(!self.define){let e,i={};const c=(c,d)=>(c=new URL(c+".js",d).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(d,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let a={};const n=e=>c(e,r),f={module:{uri:r},exports:a,require:n};i[r]=Promise.all(d.map((e=>f[e]||n(e)))).then((e=>(s(...e),a)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/11/25/lxw/index.html",revision:"adee24a51b7e02c1d5c22e9928d67276"},{url:"archives/2023/11/index.html",revision:"4ebd07e268d93305fe03687274f45025"},{url:"archives/2023/index.html",revision:"f49ad370ac4cec4266568a0fcd983441"},{url:"archives/index.html",revision:"d16444162676acd634307293a864c450"},{url:"categories/index.html",revision:"0141707528d19a05346ce3d22a5c99d5"},{url:"css/index.css",revision:"606ccd743a5d6b99b22ff2c65cb403dc"},{url:"css/transpancy.css",revision:"e8da50275c8af05dc5fdfd17b3197480"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/1.png",revision:"c9581cbc05d85184e36557616fe934c0"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/test1.jpg",revision:"24bea4fa98d51c492d878268ae489baf"},{url:"index.html",revision:"4f36a16aed1919ea325a5af7f3ad8aff"},{url:"js/main.js",revision:"960297fafacb19dff1246d71f6dfcf6f"},{url:"js/sakura.js",revision:"abdafbb0471a95535e5e703d174d387d"},{url:"js/search/algolia.js",revision:"4491ac1d470a1693a502a9d09034aa21"},{url:"js/search/local-search.js",revision:"9da6b76672a143c8c8449770a8d259f3"},{url:"js/tw_cn.js",revision:"fb4da68124bbafbd2d3da537c80e27ce"},{url:"js/utils.js",revision:"420a15cf446b5670244a9ea05b2bccf0"},{url:"link/index.html",revision:"eb387c6d0c1b793c8759fa1487ddef55"},{url:"tags/index.html",revision:"fd3d416846ac72036bfdf1dd16e256b3"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
