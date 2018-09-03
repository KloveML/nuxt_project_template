import Vue from 'vue';

export default () => {
  Vue.use({
    install(Vue) {
      Vue.mixin({
        http
      });
    }
  });
};
