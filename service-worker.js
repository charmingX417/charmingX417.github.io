if(!self.define){let e,i={};const d=(d,r)=>(d=new URL(d+".js",r).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(r,a)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let c={};const l=e=>d(e,s),f={module:{uri:s},exports:c,require:l};i[s]=Promise.all(r.map((e=>f[e]||l(e)))).then((e=>(a(...e),c)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/11/25/lxw/index.html",revision:"f242091c6c41ee5c024027d639b109e0"},{url:"archives/2023/11/index.html",revision:"ce3a98e94513f75782407bda6771a986"},{url:"archives/2023/index.html",revision:"91bad8745a300ad8eaaae169d9bfc7b6"},{url:"archives/index.html",revision:"fe55340bb1086232b0c7199137f64ff2"},{url:"categories/index.html",revision:"deef0307ade99b6eaa01dfc5acd9e818"},{url:"css/index.css",revision:"dceae64dd6f58da51e0fbe9b677ffced"},{url:"css/transpancy.css",revision:"e8da50275c8af05dc5fdfd17b3197480"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/1.png",revision:"c9581cbc05d85184e36557616fe934c0"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/sanae.png",revision:"076bb7e4709842698e59dad53f3c406c"},{url:"img/test1.jpg",revision:"24bea4fa98d51c492d878268ae489baf"},{url:"index.html",revision:"0f96c5d538b4f2709ef5ebee2bac0b4c"},{url:"js/main.js",revision:"960297fafacb19dff1246d71f6dfcf6f"},{url:"js/sakura.js",revision:"abdafbb0471a95535e5e703d174d387d"},{url:"js/search/algolia.js",revision:"4491ac1d470a1693a502a9d09034aa21"},{url:"js/search/local-search.js",revision:"9da6b76672a143c8c8449770a8d259f3"},{url:"js/tw_cn.js",revision:"fb4da68124bbafbd2d3da537c80e27ce"},{url:"js/utils.js",revision:"420a15cf446b5670244a9ea05b2bccf0"},{url:"link/index.html",revision:"5c7c369ef090187a20f5aeed02fc1c66"},{url:"live2d_api/model/histoire/histoire.1024/texture_00.png",revision:"45552f931019f59422e912d74277671d"},{url:"live2d_api/model/histoire/histoire.1024/texture_01.png",revision:"8a7ea0601f56314cabe3554b363ea193"},{url:"live2d_api/model/histoire/histoire.1024/texture_02.png",revision:"4d9ed0f240ae7242f70e8ca245f40610"},{url:"live2d_api/model/histoire/histoire.1024/texture_03.png",revision:"c56fe341422cd8f8e1b627d18881f156"},{url:"live2d_api/model/histoire/ico_histoire.png",revision:"a0826a790829a03835fcd14381dcbd01"},{url:"live2d_api/model/nepgearswim/ico_nepgearswim.png",revision:"d6fff6dfca7a6b82f3f9779842166a31"},{url:"live2d_api/model/nepgearswim/nepgearswim.1024/texture_00.png",revision:"9b7f9c129596ba92319a14196bebff81"},{url:"live2d_api/model/nepgearswim/nepgearswim.1024/texture_01.png",revision:"8b1d2336dd37cd8a8c3b760e73108c4a"},{url:"live2d_api/model/nepgearswim/nepgearswim.1024/texture_02.png",revision:"785652eb751b6c0fa72b160fee9b3791"},{url:"live2d_api/model/nepgearswim/nepgearswim.1024/texture_03.png",revision:"3e8267a0afd9101961d843bab1d5b705"},{url:"live2d_api/README.html",revision:"2173d7909fd75eb1627ebdb4579f9fdb"},{url:"live2d-widget-master/assets/screenshot-1.png",revision:"30b70e6cd9be9812adcb347536f0da85"},{url:"live2d-widget-master/assets/screenshot-2.png",revision:"1295844e29a6d6dc3a4aa0db8faa7da7"},{url:"live2d-widget-master/assets/screenshot-3.png",revision:"4aa1995daf77bc19803648fe6a65c33e"},{url:"live2d-widget-master/autoload.js",revision:"49360f4b7a2d2e09bc79d9eb3841ec3e"},{url:"live2d-widget-master/demo/demo.html",revision:"141482d5569a35aec669d6b111908c58"},{url:"live2d-widget-master/demo/login.html",revision:"a3786e750803a5e2d2b583c6f74e048c"},{url:"live2d-widget-master/live2d.min.js",revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7"},{url:"live2d-widget-master/README.html",revision:"cf97f9dcb4f5a59557bb99b2700ece6b"},{url:"live2d-widget-master/rollup.config.js",revision:"171b7912f3e5340c9fc61251ef193bd1"},{url:"live2d-widget-master/src/index.js",revision:"85aef69a57f70ca34b1da98da0a854c8"},{url:"live2d-widget-master/src/message.js",revision:"5f980402bfc065345253e6ce024dc1de"},{url:"live2d-widget-master/src/model.js",revision:"b5562a236eeda01308e5a4107e6ec80f"},{url:"live2d-widget-master/src/tools.js",revision:"fda693610457903a19c3861298fb416a"},{url:"live2d-widget-master/src/utils.js",revision:"2578501ad87a8d99ceec05d79fe2c64b"},{url:"live2d-widget-master/src/waifu-tips.js",revision:"e49236cc73dbcfda841588bba50dbfd3"},{url:"live2d-widget-master/waifu-tips.js",revision:"7ef813587dba0e4bc55c7ccafcaea531"},{url:"live2d-widget-master/waifu.css",revision:"730b7597be5927bdfbb92a6c2b2bba5f"},{url:"tags/index.html",revision:"d4f2229b32b1dc773407812c1a377c65"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
