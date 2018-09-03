import Vue from 'vue';
// 全局配置
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';
export default () => {
  Vue.use(ElementUI, { locale });
};
