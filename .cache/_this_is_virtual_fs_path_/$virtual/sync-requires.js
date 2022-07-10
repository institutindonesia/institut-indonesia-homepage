
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/coding/next-netlify-starter/.cache/dev-404-page.js")),
  "component---src-pages-404-jsx": preferDefault(require("/home/coding/next-netlify-starter/src/pages/404.jsx")),
  "component---src-pages-english-jsx": preferDefault(require("/home/coding/next-netlify-starter/src/pages/english.jsx")),
  "component---src-pages-index-jsx": preferDefault(require("/home/coding/next-netlify-starter/src/pages/index.jsx")),
  "component---src-pages-teknologi-jsx": preferDefault(require("/home/coding/next-netlify-starter/src/pages/teknologi.jsx"))
}

