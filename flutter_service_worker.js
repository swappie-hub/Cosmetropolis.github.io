'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "b82259cd5998b3a5ef1fe4b773398483",
"index.html": "385b384866554b98525490e30e2f703e",
"/": "385b384866554b98525490e30e2f703e",
"main.dart.js": "3ef7dedd33947b372c0571459530b5cf",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "baf5d79b8ea2bd424ae5e566c8e9e0ef",
"assets/AssetManifest.json": "a7de316fd9827c16200577e55eae2af6",
"assets/NOTICES": "c08b5b23e9306dd0becfbf84b3e8307e",
"assets/FontManifest.json": "afa4ef039219e1099ebfe03b11bc5057",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/fonts/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/assets/dummy/banner_1.png": "e1633c0da58e4b9f1816617eea5b2fd9",
"assets/assets/dummy/dummy_banner_1.jpeg": "db0a9f6d4e60dd253ff2c2036dcab230",
"assets/assets/dummy/dummy_salon.jpeg": "995aacb7ca061740d4a1fe90b6b914cb",
"assets/assets/dummy/dummy_talk.png": "65b0272996ad83e398ba6102cbb79531",
"assets/assets/dummy/dummy_hairstyle.jpeg": "49bca862b869df628075eb25657a5ec1",
"assets/assets/dummy/dummy_banner_2.jpeg": "7d3e7786de2b2e214d573e5d49fa9c99",
"assets/assets/dummy/nail_arts.jpeg": "46cd6b444781cb8629c6916ba2b99323",
"assets/assets/images/login_background.png": "1c40afc210d827ebe98c15401a499ae5",
"assets/assets/images/onboarding_4.png": "c7a0bdfa138c4559737e2f704a404f90",
"assets/assets/images/onboarding_1.png": "5ce6ec738325ac6b51262d9ae85e6188",
"assets/assets/images/onboarding_3.png": "ea3209ea3628e0fc7a1c7d08622fa8a0",
"assets/assets/images/onboarding_2.png": "f5c73f2dfc6697c6494eee86dd9aea10",
"assets/assets/images/logo_dark.png": "7311ea5a1acbeb672a9493913f6c0daa",
"assets/assets/images/twitter.png": "5ba7172d155fda64a60283f9a83f5ee7",
"assets/assets/images/insta.png": "d668cbf028464feacc5c6398adec8249",
"assets/assets/images/glitz-logo.png": "f4e99a0b73c03bf1b351b5b9af123aae",
"assets/assets/images/web.png": "5545438147306d673d88ac931ad0f770",
"assets/assets/images/logo_small.png": "69f30a617d21a8c2ff73293b7eb1a30f",
"assets/assets/images/logo_light.jpg": "2af3d1aa96e8a309b80b072b911a99c8",
"assets/assets/images/facebook.png": "0d6be5e2bcb00c213aa8c2e7c0a2b36e",
"assets/assets/images/playButton.png": "bc1a6340d21b5d7f599f4ecbf1842416",
"assets/assets/languages/en.json": "3de19a1d495cdf730e546bd177e69556",
"assets/assets/languages/hi.json": "5eb66983113e36a208b651d11f3a942f",
"assets/assets/icons/gift_icon.png": "d9015c911b6fe29373bcf4cedbe72009",
"assets/assets/icons/instagram.png": "4a8c23476a7c20c5bee2a752a6f96e9e",
"assets/assets/icons/twitter.png": "8f35a40403a84631c4125c4f1859c7a6",
"assets/assets/icons/pinterest.png": "863c194054e4325f4c3d5ad3bd93a075",
"assets/assets/icons/facebook.png": "ad56565a45e2dc6b77cfff4e48176666",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
