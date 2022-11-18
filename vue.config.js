const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions:{
    mock:{entry:'./mock/mock.js',debug:true}
  }
})
