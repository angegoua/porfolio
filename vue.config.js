module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "@/sass/mixins.scss";`, 
        }
      }
    }
  };