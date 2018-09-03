module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'erpd-projects',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /**
   * Css
   */
  css: [
    // 全部引用的时候需要用到
    'element-ui/lib/theme-chalk/index.css'
  ],
  /**
   * Plugins
   */
  plugins: ['~/plugins/element-ui'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /**
   * Middleware
   */
  router: {
    middleware: ['auth']
  },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['~/plugins/element-ui', 'axios'],
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
};
