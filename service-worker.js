if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let c={};const l=e=>d(e,s),f={module:{uri:s},exports:c,require:l};i[s]=Promise.all(a.map((e=>f[e]||l(e)))).then((e=>(r(...e),c)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/11/25/lxw/index.html",revision:"8d599657ea8490952257a489f04dcc94"},{url:"2024/01/23/AS1/index.html",revision:"d29f43abf8b0a87282b141d3caa1b943"},{url:"2024/01/24/GAL1/index.html",revision:"b184ee9bc26cb429dafd6fcf6b8dc87e"},{url:"2024/03/09/ATRI/index.html",revision:"edc04030b3280e6e8949b54b1c0adb04"},{url:"2024/03/29/ME/index.html",revision:"abb25e8f3febc56ef499f10ec3cf3ebb"},{url:"2024/05/04/GIT/index.html",revision:"dc120d1e4896af15ba235df88e159897"},{url:"archives/2023/11/index.html",revision:"8dc8779f297c869a8bae6f7c501bcb4a"},{url:"archives/2023/index.html",revision:"8a53df62c76bd4ece6c73e89a217d559"},{url:"archives/2024/01/index.html",revision:"4d2e6fdc71da788d50ac8f07f6ac830b"},{url:"archives/2024/03/index.html",revision:"1c30793c05f878a74db96619ba72d552"},{url:"archives/2024/05/index.html",revision:"5ac4f634d1f6aa285da7e35c066fb2dd"},{url:"archives/2024/index.html",revision:"7974522a49696653d8c207d91c4173cd"},{url:"archives/index.html",revision:"684df5e13febc07df7dd392f1e15b70c"},{url:"categories/index.html",revision:"7320d2a2c669d088203a7d2829655da4"},{url:"css/hbe.style.css",revision:"f1245164f762ee83309fa797a63fb868"},{url:"css/index.css",revision:"dceae64dd6f58da51e0fbe9b677ffced"},{url:"css/transpancy.css",revision:"e8da50275c8af05dc5fdfd17b3197480"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/1.png",revision:"c9581cbc05d85184e36557616fe934c0"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/sanae.png",revision:"076bb7e4709842698e59dad53f3c406c"},{url:"img/test1.jpg",revision:"24bea4fa98d51c492d878268ae489baf"},{url:"index.html",revision:"3e961044118a5bf373dc46c9a9c67444"},{url:"js/main.js",revision:"960297fafacb19dff1246d71f6dfcf6f"},{url:"js/sakura.js",revision:"abdafbb0471a95535e5e703d174d387d"},{url:"js/search/algolia.js",revision:"4491ac1d470a1693a502a9d09034aa21"},{url:"js/search/local-search.js",revision:"9da6b76672a143c8c8449770a8d259f3"},{url:"js/tw_cn.js",revision:"fb4da68124bbafbd2d3da537c80e27ce"},{url:"js/utils.js",revision:"420a15cf446b5670244a9ea05b2bccf0"},{url:"lib/hbe.js",revision:"cb004426c9bd62ba16e200b048462887"},{url:"link/index.html",revision:"f23fdb23b1d20ed5d6e6927e6f2a2973"},{url:"live2d_api/model/histoire/histoire.1024/texture_00.png",revision:"45552f931019f59422e912d74277671d"},{url:"live2d_api/model/histoire/histoire.1024/texture_01.png",revision:"8a7ea0601f56314cabe3554b363ea193"},{url:"live2d_api/model/histoire/histoire.1024/texture_02.png",revision:"4d9ed0f240ae7242f70e8ca245f40610"},{url:"live2d_api/model/histoire/histoire.1024/texture_03.png",revision:"c56fe341422cd8f8e1b627d18881f156"},{url:"live2d_api/model/histoire/ico_histoire.png",revision:"a0826a790829a03835fcd14381dcbd01"},{url:"live2d_api/README.html",revision:"2173d7909fd75eb1627ebdb4579f9fdb"},{url:"live2d-widget-master/assets/screenshot-1.png",revision:"30b70e6cd9be9812adcb347536f0da85"},{url:"live2d-widget-master/assets/screenshot-2.png",revision:"1295844e29a6d6dc3a4aa0db8faa7da7"},{url:"live2d-widget-master/assets/screenshot-3.png",revision:"4aa1995daf77bc19803648fe6a65c33e"},{url:"live2d-widget-master/autoload.js",revision:"49360f4b7a2d2e09bc79d9eb3841ec3e"},{url:"live2d-widget-master/demo/demo.html",revision:"141482d5569a35aec669d6b111908c58"},{url:"live2d-widget-master/demo/login.html",revision:"a3786e750803a5e2d2b583c6f74e048c"},{url:"live2d-widget-master/live2d.min.js",revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7"},{url:"live2d-widget-master/README.html",revision:"cf97f9dcb4f5a59557bb99b2700ece6b"},{url:"live2d-widget-master/rollup.config.js",revision:"171b7912f3e5340c9fc61251ef193bd1"},{url:"live2d-widget-master/src/index.js",revision:"85aef69a57f70ca34b1da98da0a854c8"},{url:"live2d-widget-master/src/message.js",revision:"5f980402bfc065345253e6ce024dc1de"},{url:"live2d-widget-master/src/model.js",revision:"b5562a236eeda01308e5a4107e6ec80f"},{url:"live2d-widget-master/src/tools.js",revision:"fda693610457903a19c3861298fb416a"},{url:"live2d-widget-master/src/utils.js",revision:"2578501ad87a8d99ceec05d79fe2c64b"},{url:"live2d-widget-master/src/waifu-tips.js",revision:"e49236cc73dbcfda841588bba50dbfd3"},{url:"live2d-widget-master/waifu-tips.js",revision:"7ef813587dba0e4bc55c7ccafcaea531"},{url:"live2d-widget-master/waifu.css",revision:"f94695bee6f970fc0074ed75b1a03f22"},{url:"tags/♥/index.html",revision:"43e9e5594ad3bf76ae0e4c089937da2b"},{url:"tags/galgame/index.html",revision:"3e8821847c528d6a2bf513f59936d384"},{url:"tags/index.html",revision:"922bdade66971c4e2ebc82f2488bb792"},{url:"tags/KOTLIN/index.html",revision:"53c83d20b91dd104896f0949723a2b43"},{url:"tags/人性/index.html",revision:"14520bab723cd7e5b6acee2a24ae2219"},{url:"tags/技术开发/index.html",revision:"f455a22ae1eeccbc6a582b7ba8090414"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
