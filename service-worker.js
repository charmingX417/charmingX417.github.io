if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let c={};const f=e=>d(e,s),l={module:{uri:s},exports:c,require:f};i[s]=Promise.all(a.map((e=>l[e]||f(e)))).then((e=>(r(...e),c)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/11/25/lxw/index.html",revision:"7480713b935c5fa7fc4f45c54bc3f1a8"},{url:"2024/01/23/AS1/index.html",revision:"f6c549a0c89b0afc0b95c33ae4c9f787"},{url:"2024/01/24/GAL1/index.html",revision:"99cc7b017a46938f93fa2675bee093a6"},{url:"2024/03/09/ATRI/index.html",revision:"df4df79881d6ae9bab1026738107c6d9"},{url:"archives/2023/11/index.html",revision:"e7030f97b1fe48e370f964a9abcb0534"},{url:"archives/2023/index.html",revision:"7fdbf691380827dd14187659b594b2ed"},{url:"archives/2024/01/index.html",revision:"2131ce431202dac52a7e211d1711b46c"},{url:"archives/2024/03/index.html",revision:"8ef8b33e50121d3aa7830005f6df6667"},{url:"archives/2024/index.html",revision:"adf9a0e49b5bacffc460addcbfe7251b"},{url:"archives/index.html",revision:"e83782e8d267be5d31161ea75e77eb03"},{url:"categories/index.html",revision:"926bf3f6c21cda2a553c4c18feb1259c"},{url:"css/index.css",revision:"dceae64dd6f58da51e0fbe9b677ffced"},{url:"css/transpancy.css",revision:"e8da50275c8af05dc5fdfd17b3197480"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/1.png",revision:"c9581cbc05d85184e36557616fe934c0"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/sanae.png",revision:"076bb7e4709842698e59dad53f3c406c"},{url:"img/test1.jpg",revision:"24bea4fa98d51c492d878268ae489baf"},{url:"index.html",revision:"49d471f115a1a83da1febdf2b430d368"},{url:"js/main.js",revision:"960297fafacb19dff1246d71f6dfcf6f"},{url:"js/sakura.js",revision:"abdafbb0471a95535e5e703d174d387d"},{url:"js/search/algolia.js",revision:"4491ac1d470a1693a502a9d09034aa21"},{url:"js/search/local-search.js",revision:"9da6b76672a143c8c8449770a8d259f3"},{url:"js/tw_cn.js",revision:"fb4da68124bbafbd2d3da537c80e27ce"},{url:"js/utils.js",revision:"420a15cf446b5670244a9ea05b2bccf0"},{url:"link/index.html",revision:"dfd1edaed21fa8c1d5bef8fefb8e5853"},{url:"live2d_api/model/histoire/histoire.1024/texture_00.png",revision:"45552f931019f59422e912d74277671d"},{url:"live2d_api/model/histoire/histoire.1024/texture_01.png",revision:"8a7ea0601f56314cabe3554b363ea193"},{url:"live2d_api/model/histoire/histoire.1024/texture_02.png",revision:"4d9ed0f240ae7242f70e8ca245f40610"},{url:"live2d_api/model/histoire/histoire.1024/texture_03.png",revision:"c56fe341422cd8f8e1b627d18881f156"},{url:"live2d_api/model/histoire/ico_histoire.png",revision:"a0826a790829a03835fcd14381dcbd01"},{url:"live2d_api/README.html",revision:"2173d7909fd75eb1627ebdb4579f9fdb"},{url:"live2d-widget-master/assets/screenshot-1.png",revision:"30b70e6cd9be9812adcb347536f0da85"},{url:"live2d-widget-master/assets/screenshot-2.png",revision:"1295844e29a6d6dc3a4aa0db8faa7da7"},{url:"live2d-widget-master/assets/screenshot-3.png",revision:"4aa1995daf77bc19803648fe6a65c33e"},{url:"live2d-widget-master/autoload.js",revision:"49360f4b7a2d2e09bc79d9eb3841ec3e"},{url:"live2d-widget-master/demo/demo.html",revision:"141482d5569a35aec669d6b111908c58"},{url:"live2d-widget-master/demo/login.html",revision:"a3786e750803a5e2d2b583c6f74e048c"},{url:"live2d-widget-master/live2d.min.js",revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7"},{url:"live2d-widget-master/README.html",revision:"cf97f9dcb4f5a59557bb99b2700ece6b"},{url:"live2d-widget-master/rollup.config.js",revision:"171b7912f3e5340c9fc61251ef193bd1"},{url:"live2d-widget-master/src/index.js",revision:"85aef69a57f70ca34b1da98da0a854c8"},{url:"live2d-widget-master/src/message.js",revision:"5f980402bfc065345253e6ce024dc1de"},{url:"live2d-widget-master/src/model.js",revision:"b5562a236eeda01308e5a4107e6ec80f"},{url:"live2d-widget-master/src/tools.js",revision:"fda693610457903a19c3861298fb416a"},{url:"live2d-widget-master/src/utils.js",revision:"2578501ad87a8d99ceec05d79fe2c64b"},{url:"live2d-widget-master/src/waifu-tips.js",revision:"e49236cc73dbcfda841588bba50dbfd3"},{url:"live2d-widget-master/waifu-tips.js",revision:"7ef813587dba0e4bc55c7ccafcaea531"},{url:"live2d-widget-master/waifu.css",revision:"f94695bee6f970fc0074ed75b1a03f22"},{url:"tags/galgame/index.html",revision:"e8684f7f9f1ef864f3434280292245a7"},{url:"tags/index.html",revision:"401b2bd07917b1af21c75cefaf3f2a15"},{url:"tags/KOTLIN/index.html",revision:"a32b7c6856202db757fe2906e34a93b9"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
