"use strict";var precacheConfig=[["/flamingo-app/index.html","51c14e3c8b8b9238c0e636d7f96a1269"],["/flamingo-app/static/css/main.1bdbcc12.css","24466db1ef223fd3c9c5ff366f0ef967"],["/flamingo-app/static/js/main.818e3748.js","69df877802b1d2eb3ccea5a4f0eb27b8"],["/flamingo-app/static/media/babyFlamigo.35408ec2.svg","35408ec22ec834e3f160126500108e97"],["/flamingo-app/static/media/beachy.03e274c5.svg","03e274c57bd914dd33719207b17cae02"],["/flamingo-app/static/media/bossFlamingo.edcb726a.svg","edcb726afdcc72e39dad3f34f0eed7a9"],["/flamingo-app/static/media/chair.28c19f84.svg","28c19f8486d3f098cbf5b81f827f34d5"],["/flamingo-app/static/media/cloud1.73306f6f.svg","73306f6f13f56dcc8b0ff39e95e314fa"],["/flamingo-app/static/media/cloud2.ea82c2cf.svg","ea82c2cff6b8b7f2b7f1fb4209536d60"],["/flamingo-app/static/media/cloud3.825364e7.svg","825364e79c39fecfbe18b0376b62b50c"],["/flamingo-app/static/media/egg.ed0a7ecc.svg","ed0a7eccf8a5f82e30366e13a347fe08"],["/flamingo-app/static/media/fire.b292d46f.svg","b292d46f5f7db07281b419b4c3b72e3a"],["/flamingo-app/static/media/flamingo.23632531.svg","23632531b259c13319a52303a159e418"],["/flamingo-app/static/media/flyingFlamingo.18993ffa.svg","18993ffa2731c3367f71fda9754b5b8e"],["/flamingo-app/static/media/greaterFlamingo.49d5357c.svg","49d5357c5fb413eb9d1018a50b3e15e3"],["/flamingo-app/static/media/leftLeaf.a0938a9f.svg","a0938a9f1b2bf3c8d49543d199c9014d"],["/flamingo-app/static/media/leftLeafDown.ed18df8a.svg","ed18df8a7f34b4f678500317182cfcea"],["/flamingo-app/static/media/leftUmbrella.9262aafc.svg","9262aafc250ef834fac60511fe34ba2f"],["/flamingo-app/static/media/leftUmbrella_2.8f136c90.svg","8f136c908b022de7c38a5eaf74ed2516"],["/flamingo-app/static/media/legs.c122e5be.svg","c122e5be194784b92a6682fd75993a09"],["/flamingo-app/static/media/life.aa943dea.svg","aa943dea0552d4a2b62e4566680e2fce"],["/flamingo-app/static/media/middleUmbrella.a2875e53.svg","a2875e53ba9cedaef8ced3fb94e47f3b"],["/flamingo-app/static/media/neverAlone.7a6e002f.svg","7a6e002f11db9c83fea092a6ecdb2f7e"],["/flamingo-app/static/media/rightLeaf.0544c20a.svg","0544c20a1ecd8958eaad40dc7c660a2a"],["/flamingo-app/static/media/sand.042d9121.svg","042d91217a5999783f1fdb9272c5b35f"],["/flamingo-app/static/media/shrimp.f0f189b7.svg","f0f189b7dba6e3929c3b9d0bfd44099e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/flamingo-app/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});