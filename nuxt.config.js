export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'antoncourse',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // 'reset-css/reset.css',
    '~assets/styles/base.styl',
  ],
  styleResources: {
    stylus: [
      '@assets/styles/fonts.styl',
      '@assets/styles/vars.styl',
      '@assets/styles/base.styl',
    ],
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: '~plugins/vueSilentbox.js', mode: 'client', ssr: false }],

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
  ],

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
