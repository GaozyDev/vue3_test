<template>
  <input type="text" v-model="keyWord">
  <h3>{{keyWord}}</h3>
</template>

<script>
import {ref,customRef} from 'vue'
export default {
  name: 'App',
  setup() {
    function myRef(value,delay) {
      let timer
      // console.log('---myRef---',value)
      return customRef((track,trigger)=>{
        return {
          get() {
            console.log(`有人从myRef这个容器中读取数据了，我把${value}给她了`)
            track()//通知vue追踪value的变化（提前和get商量一下，让他认为这个value是有用的）
            return value
          },
          set(newValue) {
            console.log(`有人把myRef容器中的数据改成了:${newValue}`)
            clearTimeout(timer)
            timer = setTimeout(()=>{
              value = newValue
              trigger()//通知vue去重新解析模板
            },delay)
          }
        }
      })
    }
    // let keyWord = ref('hello')//使用Vue提供的ref
    let keyWord = myRef('hello',500)//使用自定义的ref
    return {keyWord}
  }
}
</script>

