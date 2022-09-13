export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode


  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'portfolio',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },

      { hid: 'og:title', property: 'og:title', content: 'My_Portfolio-site'},
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:locale', property: 'og:locale', content: 'ja_JP' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Portfolio-site' },
      { hid: 'og:description', property: 'og:description', content: '僕個人のポートフォリオになります。学生時に実習で制作したもので拙いものですが、クリックエフェクトやアニメーションを入れてます。micro bitのゲームのlinkがありますが、これはbluetoothの加速度サービスを入れたmicro bitが無いと、プレイすることが出来ません。ご了承ください。' },
      { hid: 'og:image', property: 'og:image', content: '/samune.jpg' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },

      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { name: 'apple-mobile-web-app-title', content: 'APP_TITLE' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/main.ico' },
      { rel: 'apple-touch-startup-image',  href: '/icon_pwa.png' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/pwa',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  pwa: {
    manifest: {
      lang: 'ja',
      name: 'Shoma_Portfolio',
      short_name: 'SN_PorT',
      description: '学生時に制作した個人のポートフォリオ',
      display: 'standalone',
      theme_color: '#000',
      background_color: '#fff',
      orientation: 'portrait',
      scope: '/',
      start_url: '/',
      icons: [
        {
          src: 'SRC_DIR/static/*****/icon_pwa.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    workbox: {
      runtimeCaching: [
        {
          urlPattern: '^https://polyfill.io/.*',
          handler: 'cacheFirst'
        },
        {
          handler: 'staleWhileRevalidate',
          strategyOptions: {
            cacheName: 'site-cache',
          },
          strategyPlugins: [
            {
              use: 'Expiration',
              config: {
                maxAgeSeconds: 24 * 60 * 60 * 30
              }
            }
          ]
        }
      ]
    },
    icon: {
      source: 'SRC_DIR/static/*****/icon_pwa.png',
      fileName: 'icon_pwa.png'
    }
  },

}
