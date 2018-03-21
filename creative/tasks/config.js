
const source = 'dev/';
const dest = 'dist/';
const nodemodules = 'node_modules/'
const config = {
  dev: {
    path: source,
    html: `${source}html/`,
    sass: `${source}sass/`,
    js: `${source}js/`,
    img: `${source}img/`,
    fonts: `${source}fonts/`,
  },
  dist: { 
    path: dest,
    html: dest,
    css: `${dest}assets/css/`,
    js: `${dest}assets/js/`,
    img: `${dest}assets/img/`,    
    fonts: `${dest}assets/fonts/`,
  },
  nodemodules: {
    jquery: `${nodemodules}jquery/dist/jquery.min.js`,
    bootstrap: {
      js: `${nodemodules}bootstrap/dist/js/bootstrap.min.js`,
      scss: `${nodemodules}bootstrap/scss/`,
    },
    fontawesome: `${nodemodules}font-awesome/scss/`,
  }
};

module.exports = config;

