/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "175-4540fc21a3b4d29762bd.js"
  },
  {
    "url": "175-4540fc21a3b4d29762bd.js.br",
    "revision": "a82b434ff95d3d31239a89eb79c83b0c"
  },
  {
    "url": "175-4540fc21a3b4d29762bd.js.map",
    "revision": "4caa6387eb98f8df4b473172c8ce18e7"
  },
  {
    "url": "3e899f8195f0b15c9bac71ccc2115fe3504bf546-ca22318bd06423b4a79f.js"
  },
  {
    "url": "3e899f8195f0b15c9bac71ccc2115fe3504bf546-ca22318bd06423b4a79f.js.br",
    "revision": "43ff4ec8ce76a4cd4a201959a5181626"
  },
  {
    "url": "3e899f8195f0b15c9bac71ccc2115fe3504bf546-ca22318bd06423b4a79f.js.LICENSE.txt",
    "revision": "6fce53c7c7713ebf61712cc2929746fa"
  },
  {
    "url": "3e899f8195f0b15c9bac71ccc2115fe3504bf546-ca22318bd06423b4a79f.js.map",
    "revision": "1ac83ae13cb3dccf86ff6e995ebf62ca"
  },
  {
    "url": "404.html",
    "revision": "8a218ddd48247019398c654db44d32d7"
  },
  {
    "url": "404.html.br",
    "revision": "7d8c934edceced4c76804fa12e37bfa9"
  },
  {
    "url": "404/index.html",
    "revision": "6577d6f0260cabfca48ac244f6db6994"
  },
  {
    "url": "404/index.html.br",
    "revision": "fadec69db6cd12e931793100ddd65695"
  },
  {
    "url": "503-baca275053479e336e79.js"
  },
  {
    "url": "503-baca275053479e336e79.js.br",
    "revision": "6dfdb9d2ff626a54d8db7f7c6fb55b77"
  },
  {
    "url": "503-baca275053479e336e79.js.map",
    "revision": "d91c9fad4ea9c4f8f4c5c3dd5c4da8da"
  },
  {
    "url": "932-587d9695dbab2ceedd65.js"
  },
  {
    "url": "932-587d9695dbab2ceedd65.js.br",
    "revision": "1690336d437256c48d428760e8eeb91f"
  },
  {
    "url": "932-587d9695dbab2ceedd65.js.map",
    "revision": "b650088fe9a1411c0c1f42da512c17d6"
  },
  {
    "url": "a9a7754c-e838c8bffa5d8bac0874.js"
  },
  {
    "url": "a9a7754c-e838c8bffa5d8bac0874.js.br",
    "revision": "19b652d5664e14a1b626a3d0aff9599c"
  },
  {
    "url": "a9a7754c-e838c8bffa5d8bac0874.js.LICENSE.txt",
    "revision": "29c0dc5695466ff613ba65f5bf835499"
  },
  {
    "url": "a9a7754c-e838c8bffa5d8bac0874.js.map",
    "revision": "02c84950fa1f9d25749d7722c59c3339"
  },
  {
    "url": "app-564bd8eab4db222db15d.js"
  },
  {
    "url": "app-564bd8eab4db222db15d.js.br",
    "revision": "35933e2758c7b7d5f0b771690bc2ac0a"
  },
  {
    "url": "app-564bd8eab4db222db15d.js.LICENSE.txt",
    "revision": "29c0dc5695466ff613ba65f5bf835499"
  },
  {
    "url": "app-564bd8eab4db222db15d.js.map",
    "revision": "e01679fdcc9ea930c2954b4296a95631"
  },
  {
    "url": "b64f6ab7-708bf2cc17084f73695c.js"
  },
  {
    "url": "b64f6ab7-708bf2cc17084f73695c.js.br",
    "revision": "3748cb62ec37cbbe1d76bb6ac21c9572"
  },
  {
    "url": "b64f6ab7-708bf2cc17084f73695c.js.map",
    "revision": "f462c282cb13005761b62e053a6e0363"
  },
  {
    "url": "cb1608f2-e1d411f356cf48577169.js"
  },
  {
    "url": "cb1608f2-e1d411f356cf48577169.js.br",
    "revision": "cabcc490a99a35ebc7453eba56e9aeec"
  },
  {
    "url": "cb1608f2-e1d411f356cf48577169.js.LICENSE.txt",
    "revision": "29c0dc5695466ff613ba65f5bf835499"
  },
  {
    "url": "cb1608f2-e1d411f356cf48577169.js.map",
    "revision": "2547fa232430d7edddcc2613d3538981"
  },
  {
    "url": "chunk-map.json",
    "revision": "8d5a0b7fd3235b9eca9cdf249cd4a365"
  },
  {
    "url": "chunk-map.json.br",
    "revision": "02526ea422f21d6d1be72f61d00f972b"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-995ebabb81d5565d3599.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-995ebabb81d5565d3599.js.br",
    "revision": "ae73e5ae418150602db0bc8f9f2ff8de"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-995ebabb81d5565d3599.js.map",
    "revision": "0640c7dec22298e5606f8770cdfc0e59"
  },
  {
    "url": "component---src-pages-404-jsx-09806a4cb1743fd1df17.js"
  },
  {
    "url": "component---src-pages-404-jsx-09806a4cb1743fd1df17.js.br",
    "revision": "2691179e72524357808a6f8dd73c6091"
  },
  {
    "url": "component---src-pages-404-jsx-09806a4cb1743fd1df17.js.map",
    "revision": "ddefa5be3ce94b3c06cfa97a0599915d"
  },
  {
    "url": "component---src-pages-english-jsx-f31c2dc41ceedfe740c5.js"
  },
  {
    "url": "component---src-pages-english-jsx-f31c2dc41ceedfe740c5.js.br",
    "revision": "d7442b30c6bb676f238f132f4581f8bf"
  },
  {
    "url": "component---src-pages-english-jsx-f31c2dc41ceedfe740c5.js.map",
    "revision": "1b05b3c8ed94f61a41fea9d9edebd889"
  },
  {
    "url": "component---src-pages-index-jsx-afe02e5e0111557cac6a.js"
  },
  {
    "url": "component---src-pages-index-jsx-afe02e5e0111557cac6a.js.br",
    "revision": "fbfe7e5c81565bee620089077aba8941"
  },
  {
    "url": "component---src-pages-index-jsx-afe02e5e0111557cac6a.js.map",
    "revision": "ebe39d3dc35f7d617172f683dc05fcc8"
  },
  {
    "url": "component---src-pages-teknologi-jsx-e18411f793159cedc412.js"
  },
  {
    "url": "component---src-pages-teknologi-jsx-e18411f793159cedc412.js.br",
    "revision": "8cd6a2fc75825d93c4809edc6ffae050"
  },
  {
    "url": "component---src-pages-teknologi-jsx-e18411f793159cedc412.js.map",
    "revision": "f749b85dfdbfacaa7bb21a792a11f9f6"
  },
  {
    "url": "english/index.html",
    "revision": "80e14c6a0d39a6c13229e01a65a0a2f1"
  },
  {
    "url": "english/index.html.br",
    "revision": "8c6b5a5f63212b539104d0672d7f2336"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "d90fb1685e753fe27e804c8be0f82db5"
  },
  {
    "url": "framework-198c8a82e6169d060a73.js"
  },
  {
    "url": "framework-198c8a82e6169d060a73.js.br",
    "revision": "fd560ef66629a7d5f6db72512f4377d0"
  },
  {
    "url": "framework-198c8a82e6169d060a73.js.LICENSE.txt",
    "revision": "9bc6ceddb3027d2a01fc56b38180d414"
  },
  {
    "url": "framework-198c8a82e6169d060a73.js.map",
    "revision": "d83c12c041563b9d94b0393ce9613ffe"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "e156cd4f78e07c95906bcc9e6cc99509"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "4be8f77c22b830144b0729e30f5b3bbb"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "3a333cdcd3dbaaa61ef724daab15d6ec"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "52f46048932a7893f9efd9875a443ed8"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "b63a5238233a0e928d7291c31b0ab932"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "11f1727e8619c1db1cecb2060f6f4fd4"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "26c69a856b7a845d1a93b7f1ad10be1f"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "41907825fd422b283f778c552b83dee4"
  },
  {
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "d564ebfb3209756056da8ce87a493a22"
  },
  {
    "url": "index.html.br",
    "revision": "6f7687fe49fe6346f17263f42c4331b1"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "6e5225e1f55d83aab7c868bd5f9e62a1"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "cb7407a1ddeaad7ae07c8f5ce38df484"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html.br",
    "revision": "202582e7891eb85ccfe44f8713183546"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "171dbd7715a9e8a895d7a36888770c1c"
  },
  {
    "url": "page-data/404.html/page-data.json.br",
    "revision": "be1dbd8b0647d9bc883dbb1a7c7c0b46"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "db4523ee118a4df37d9ae53cca625f83"
  },
  {
    "url": "page-data/404/page-data.json.br",
    "revision": "7b72e91d48c613ed52a9f074ac5be9d7"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "357d9ceb5ff74ca661b905d762a1d408"
  },
  {
    "url": "page-data/app-data.json.br",
    "revision": "3c9d9a438536348850f4f51f2b48a9f5"
  },
  {
    "url": "page-data/english/page-data.json",
    "revision": "06cdd7551501a4b8bc339700500372c9"
  },
  {
    "url": "page-data/english/page-data.json.br",
    "revision": "1f3786f0e6133fa06a8aeaf2af023c92"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "569028f607486871edd9622dde6b54e9"
  },
  {
    "url": "page-data/index/page-data.json.br",
    "revision": "3100d81b46ad88257903407a59457ed2"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f2c002077289a7e1ac538802bc7f5314"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json.br",
    "revision": "ccbc1e51311ff5626be044501b91bbac"
  },
  {
    "url": "page-data/sq/d/2423831399.json",
    "revision": "156abc5ecba12ee4c397c6515ce030c5"
  },
  {
    "url": "page-data/sq/d/2423831399.json.br",
    "revision": "ff1e4c9c05c36e19673288ea23913314"
  },
  {
    "url": "page-data/sq/d/3084560700.json",
    "revision": "38a879548efc5486dfeee45f62f29580"
  },
  {
    "url": "page-data/sq/d/3084560700.json.br",
    "revision": "8af0688736269a427522d3085683446d"
  },
  {
    "url": "page-data/sq/d/3230710986.json",
    "revision": "478fb96bf18d2ecbed1a099184a8f09b"
  },
  {
    "url": "page-data/sq/d/3230710986.json.br",
    "revision": "3c0e86c0cd9e9f745658f4e1f1772b65"
  },
  {
    "url": "page-data/sq/d/3649515864.json",
    "revision": "a196ccc5a0b027014d96ebf8f00ae5df"
  },
  {
    "url": "page-data/sq/d/3649515864.json.br",
    "revision": "103948461613bd4d6bd07b01dabe2556"
  },
  {
    "url": "page-data/teknologi/page-data.json",
    "revision": "53c48fb15bda620d857e3569c8611cd0"
  },
  {
    "url": "page-data/teknologi/page-data.json.br",
    "revision": "9a5830514d74cbcaa1d34d1f60416eaa"
  },
  {
    "url": "polyfill-3f41862614c8bf7171eb.js"
  },
  {
    "url": "polyfill-3f41862614c8bf7171eb.js.br",
    "revision": "f3a9a24b26e6ea7032f508d03efaeb6d"
  },
  {
    "url": "polyfill-3f41862614c8bf7171eb.js.map",
    "revision": "fcee757f152389c416d2461ee5b1abf3"
  },
  {
    "url": "sitemap/sitemap-0.xml",
    "revision": "62d065bd777d72f3462718ad62357447"
  },
  {
    "url": "sitemap/sitemap-index.xml",
    "revision": "b5f6771add49ada8772019dcacdbaf9d"
  },
  {
    "url": "static/logoBlue-c7cd168ffa19e69ebd99e114003ee10c.jpg"
  },
  {
    "url": "static/logoFull-2757b1dc67677f53fd241e126174433d.svg"
  },
  {
    "url": "static/logoFull-2757b1dc67677f53fd241e126174433d.svg.br"
  },
  {
    "url": "styles.c353e2418346cff53b99.css"
  },
  {
    "url": "styles.c353e2418346cff53b99.css.br",
    "revision": "55e67430bb7fa501ca2a46501cce5910"
  },
  {
    "url": "teknologi/index.html",
    "revision": "823df4b934412dd6c7e5a77474412c19"
  },
  {
    "url": "teknologi/index.html.br",
    "revision": "19c8dccf9a525937f8360443f4ecc515"
  },
  {
    "url": "webpack-runtime-178b5bf1344124700430.js"
  },
  {
    "url": "webpack-runtime-178b5bf1344124700430.js.br",
    "revision": "6b113d055b10a82bf7a1397c38511477"
  },
  {
    "url": "webpack-runtime-178b5bf1344124700430.js.map",
    "revision": "a782ae714cbac082f2d7478adcbbe84f"
  },
  {
    "url": "webpack.stats.json",
    "revision": "d36442d16d9be73257a16276e45ef1f7"
  },
  {
    "url": "webpack.stats.json.br",
    "revision": "34affafca437d9263707310d4a40ce94"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|avif|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())

    // We detected compilation hash mismatch
    // we should clear runtime cache as data
    // files might be out of sync and we should
    // do fresh fetches for them
    event.waitUntil(
      caches.keys().then(function (keyList) {
        return Promise.all(
          keyList.map(function (key) {
            if (key && key.includes(`runtime`)) {
              return caches.delete(key)
            }

            return Promise.resolve()
          })
        )
      })
    )
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-564bd8eab4db222db15d.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
