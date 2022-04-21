<template>
  <h2>当前求和为：{{sum}}</h2>
  <button @click="sum++">点我+1</button>
  <hr>
  <h2>当前信息为：{{msg}}</h2>
  <button @click="msg+='!'">修改信息</button>
</template>

<script>
import {ref,watch} from 'vue'
export default {
  name: 'Demo',

  //vue2里的watch写法
  // watch:{
  //   //简单写法
  //   // sum(newValue,oldValue) {
  //   //   console.log('sum的值变化了',newValue,oldValue)
  //   // }
  //
  //    //完整写法
  //   sum:{
  //     immediate:true,
  //     deep:true,
  //     handler(newValue,oldValue) {
  //       console.log('sum的值变化了',newValue,oldValue)
  //     }
  //   }
  // },

  setup() {
    //数据
    let sum = ref(0)
    let msg = ref('你好啊')

    //vue3中的watch，情况一：监视ref所定义的一个响应式数据
    watch(sum,(newValue,oldValue)=>{
      console.log('sum变了！',newValue,oldValue)
    },{immediate:true})

    //vue3中的watch，情况二：监视ref所定义的多个响应式数据
    //   watch([sum,msg],(newValue,oldValue)=>{
    //     console.log('sum或msg变了！',newValue,oldValue)
    //   },{immediate:true})

    //返回一个对象（常用）
    return {
      sum,
      msg
    }
  }
}
</script>

