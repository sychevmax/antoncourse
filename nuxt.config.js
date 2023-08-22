export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'server',
  loading: false,
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: '' }, { hid: 'img', property: 'og:image', content: '/img/facebook.png' }],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap',
      },
    ],
    script: [
      {
        src: '/script/utm_forwarder.js',
      },
    ],
  },
  pageTransition: {
    name: 'overlay-right-full',
    mode: 'out-in',
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['reset-css/reset.css', '~assets/styles/base.styl'],
  styleResources: {
    stylus: ['@assets/styles/vars.styl', '@assets/styles/base.styl'],
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '@/plugins/vue-final-modal', mode: 'client' },
    { src: '~plugins/vueSilentbox.js', mode: 'client', ssr: false },
    { src: '~plugins/route.js', mode: 'client', ssr: false },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/svg-sprite',
    '@nuxtjs/google-analytics',
    [
      '@nuxtjs/yandex-metrika',
      {
        id: '86760117',
        webvisor: true,
      },
    ],
    [
      'nuxt-facebook-pixel-module',
      {
        pixelId: '430622055667255',
      },
    ],
    ['vue-scrollto/nuxt', { duration: 300 }],
    [
      'nuxt-i18n',
      {
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
          alwaysRedirect: false,
          onlyOnRoot: true,
        },
        locales: [
          {
            name: 'Russian',
            code: 'ru',
            iso: 'ru-RU',
            file: 'ru-RU.js',
          },
          {
            name: 'English',
            code: 'en',
            iso: 'en-US',
            file: 'en-US.js',
          },
        ],
        lazy: true,
        langDir: 'lang/',
        defaultLocale: 'ru',
      },
    ],
  ],
  googleAnalytics: {
    id: 'G-4G1WC45KVF',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  // build: {
  //   postcss: {
  //     useConfigFile: false,
  //     plugins: [
  //       require('autoprefixer')({
  //         overrideBrowserslist: ['last 2 versions'],
  //       }),
  //       require('postcss-preset-env')(),
  //       require('cssnano')(),
  //     ],
  //   }
  // },
}
