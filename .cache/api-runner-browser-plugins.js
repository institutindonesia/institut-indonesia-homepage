module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"institutindonesia","short_name":"institutindonesia","start_url":"/","background_color":"#EAE8DC","theme_color":"#BE2623","display":"standalone","icon":"src/images/icon.png","cache_busting_mode":"none","crossOrigin":"use-credentials","legacy":true,"theme_color_in_head":true,"include_favicon":true,"cacheDigest":null},
    },{
      plugin: require('../node_modules/gatsby-plugin-image/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[],"workboxConfig":{"globPatterns":["**/*"]}},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
