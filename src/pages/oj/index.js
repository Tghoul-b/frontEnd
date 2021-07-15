import Echarts from 'vue-echarts/components/Echarts.vue'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/title'
import 'echarts/lib/component/grid'
import 'echarts/lib/component/dataZoom'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/toolbox'
import 'echarts/lib/component/markPoint'
import Vue from 'vue'
//注册全局的filter
Object.keys(filters).forEach(key=>{
    Vue.filter(key,filters[key])
})
Vue.use(VueClipboard)
Vue.use(highlight)
Vue.use(katex)
Vue.use(VueAnalytics, {
    id: GOOGLE_ANALYTICS_ID,
    router
  })
Vue.component('Echarts',Echarts)
Vue.component(VerticalMenu.name,VerticalMenu)
Vue.component(VerticalMenuItem.name,VerticalMenuItem)
Vue.component(Panel.name,Panel)

Vue.prototype.$Message.config({
    duration:2
})

Vue.prototype.$error=(s)=>Vue.prototype.$Message.error(s)
Vue.prototype.$info=(s)=>Vue.prototype.$Message.info(s)
Vue.prototype.$success=(s)=>Vue.prototype.$Message.success(s)
new Vue(Vue.util.extend({router,store,i18n},App)).$mount("#app")  //将router,store,i18n的属性复制到App