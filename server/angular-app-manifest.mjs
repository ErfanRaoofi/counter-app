
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
    'index.csr.html': {size: 523, hash: 'd33a8274a5567a72b2fe95e598dbe329cde99c8cfe06fb28989e9ed5daf45b27', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1040, hash: '8c1d6a3da7d2c025e538f042b2bee42c39689575ed4d6327113250fe44e15977', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 19707, hash: 'cd614358f223e61342a00b55848e980ea22ffb69507af8c09fd4ff9fa9bdc285', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
