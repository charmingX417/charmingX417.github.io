if(!self.define){let e,i={};const c=(c,d)=>(c=new URL(c+".js",d).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(d,s)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let r={};const n=e=>c(e,a),f={module:{uri:a},exports:r,require:n};i[a]=Promise.all(d.map((e=>f[e]||n(e)))).then((e=>(s(...e),r)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/11/25/lxw/index.html",revision:"fe39f5ea49a94e9067fd02e86228bcc5"},{url:"archives/2023/11/index.html",revision:"6af0f90ecd5b09a5a3d9fd826ab256c8"},{url:"archives/2023/index.html",revision:"be84adf1c80365d36866157d84314ac2"},{url:"archives/index.html",revision:"0aedf4693ed71d38511fc479c576cb0e"},{url:"categories/index.html",revision:"465f361d820d5e884a3fdda32cfc71a0"},{url:"css/index.css",revision:"f391ae4c945eaf1600f9a69619f094f6"},{url:"css/transpancy.css",revision:"e8da50275c8af05dc5fdfd17b3197480"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/1.png",revision:"c9581cbc05d85184e36557616fe934c0"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/sanae.png",revision:"076bb7e4709842698e59dad53f3c406c"},{url:"img/test1.jpg",revision:"24bea4fa98d51c492d878268ae489baf"},{url:"index.html",revision:"69dc12c11a02a38804d910117da5e4d4"},{url:"js/main.js",revision:"960297fafacb19dff1246d71f6dfcf6f"},{url:"js/sakura.js",revision:"abdafbb0471a95535e5e703d174d387d"},{url:"js/search/algolia.js",revision:"4491ac1d470a1693a502a9d09034aa21"},{url:"js/search/local-search.js",revision:"9da6b76672a143c8c8449770a8d259f3"},{url:"js/tw_cn.js",revision:"fb4da68124bbafbd2d3da537c80e27ce"},{url:"js/utils.js",revision:"420a15cf446b5670244a9ea05b2bccf0"},{url:"link/index.html",revision:"30b9185542e75bc552de562d454538c4"},{url:"tags/index.html",revision:"d995dea3f3b522ec93595ca6d1d9534d"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
