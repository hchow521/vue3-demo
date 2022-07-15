<!--
 * @Author: hchow521 hchow521@gmail.com
 * @Date: 2022-04-07 17:13:55
 * @LastEditors: hchow521 hchow521@gmail.com
 * @LastEditTime: 2022-05-20 14:30:38
 * @FilePath: /vue3-test/src/views/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <!-- 新特性，不再要求template仅包含一个父元素 -->
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <input v-model="routeName" @keydown.enter="routePush" />
  <button @click="routePush">点击跳转</button>
</template>

<script>
import HelloWorld from "@/components/HelloWorld";
import { round, hellow as test } from '@/utils'
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      routeName: "",
      num: null,
    };
  },
  created() {
    this.num = this.test()
    console.log(round(15.455, -1), test)
  },
  methods: {
    handleClick() {
      const num = this.num.next()
      if (num.done) {
        console.log('完了')
      } else {
        console.log(num.value);
      }
    },
    *test() {
      let i = 0
      while(i < 10) {
        i++
        yield i
      }
    },
    routePush() {
      if (this.routeName) {
        const routeName = encodeURIComponent(this.routeName);
        this.$store.commit("ADD_PAGE", {
          title: this.routeName,
          path: "/diy/" + routeName,
        });
        this.$router.push("/diy/" + routeName);
        this.routeName = "";
      } else {
        alert("请输入页面名称, 可以是任意字符哦");
      }
    },
  },
};
</script>