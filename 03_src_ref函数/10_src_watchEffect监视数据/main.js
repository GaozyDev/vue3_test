//引入的不再是Vue构造函数了，引入的是一个名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')

//创建实例应用对象-app(类似于Vue2中的vm，但app比vm更"轻")
const app = createApp(App)
//挂载
app.mount('#app')

// setTimeout(() =>{
//     app.unmount('#app')
// },1000)



// new Vue({
//     render:(h)=>{return h(App)}
// }).$mount('#app')

// new Vue({
//     render:h => h(App)
// }).$mount('#app')

// const vm = new Vue({
//     render:(h)=>{return h(App)}
// })
// vm.$mount('#app')