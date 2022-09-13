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
      { rel: 'apple-touch-startup-image', media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)', href: '/iphone5_splash.png' },
      { rel: 'apple-touch-startup-image', media: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)', href: '/iphone6_splash.png' },
      { rel: 'apple-touch-startup-image', media: '(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)', href: '/iphoneplus_splash.png' },
      { rel: 'apple-touch-startup-image', media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)', href: '/iphonex_splash.png' },
      { rel: 'apple-touch-startup-image', media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)', href: '/iphonexr_splash.png' },
      { rel: 'apple-touch-startup-image', media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)', href: '/iphonexsmax_splash.png' },
      { rel: 'apple-touch-startup-image', media: '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)', href: '/ipad_splash.png' },
      { rel: 'apple-touch-startup-image', media: '(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)', href: '/ipadpro1_splash.png' },
      { rel: 'apple-touch-startup-image', media: '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)', href: '/ipadpro3_splash.png' },
      { rel: 'apple-touch-startup-image', media: '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)', href: '/ipadpro2_splash.png' }
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
      background_color: '#c54ea0',
      orientation: 'portrait',
      scope: '/',
      start_url: '/',
      icons: [
        {
          src: '/icon_pwa.png',
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
      source: '/icon_pwa.png',
      fileName: 'icon_pwa.png'
    }
  },

}
