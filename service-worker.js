"use strict";var precacheConfig=[["/portfolio/index.html","d5cbb791a66a6a07f9e83c137815597a"],["/portfolio/static/css/main.9de12956.css","cc81fb862a584eaf0f8a53bbb466e843"],["/portfolio/static/js/main.d901457a.js","6237883da66901e42fe2b4ed7c7de1ca"],["/portfolio/static/media/action.72edcfbc.png","72edcfbcd4dfbecbee35266eeb01015c"],["/portfolio/static/media/basecamp.27b1eb7c.jpg","27b1eb7cf619936f30488c91daf55fad"],["/portfolio/static/media/chaos.c3e4124a.png","c3e4124a16cc3b1bf3eb81f54245d490"],["/portfolio/static/media/drawloop.8b77ab0d.png","8b77ab0de91cb15f5d01273546d5fb16"],["/portfolio/static/media/elTopo.0b7f399a.jpg","0b7f399a9d8d9b808204212f5522e0ad"],["/portfolio/static/media/facemajikbig.b32667db.png","b32667db1c1b78a7bab46c6150386b8d"],["/portfolio/static/media/nation.f44714e5.png","f44714e5de8c0fcee4c5e05ed84ba08a"],["/portfolio/static/media/paramore.44a17d04.jpg","44a17d042c74fb6f1e25d6841e5a272d"],["/portfolio/static/media/profile.cc6d58b8.jpg","cc6d58b88d514be3d029b1522eca4918"],["/portfolio/static/media/soren.d9caa004.png","d9caa00418cf2e8c83cf212cf37b7471"],["/portfolio/static/media/thera.25f8d222.png","25f8d222d813172e775d5cdf8a2f6a26"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});