const fs = require('fs')

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pwa: {
    name: 'Organicos',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: './src/service-worker.js'
    }
  },
  devServer: {
    open: process.platform === 'win32',
    host: '0.0.0.0',
    port: 443,// CHANGE YOUR PORT HERE!
    https: true,
    key: fs.readFileSync('./src/assets/private.key'),
    cert: fs.readFileSync('./src/assets/certificate.crt'),
    hotOnly: false,
  },
}
