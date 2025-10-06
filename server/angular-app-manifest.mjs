
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/counter-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/counter-app"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 523, hash: '2c38816f4c7fd71985833e47a5b38fcb8fbdeb929a5e1bb78bd3cb4e042cbf32', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1040, hash: 'f85c76e5c1df02a10212646d8be7d06e3db6ac4785719a7ddd7cea530dc24bb4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 19707, hash: 'cd614358f223e61342a00b55848e980ea22ffb69507af8c09fd4ff9fa9bdc285', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
