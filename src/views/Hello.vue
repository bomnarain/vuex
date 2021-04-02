<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button v-on:click="onBtnClick">클릭</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    onBtnClick: function () {
      this.$store.commit('increment');
      console.log(this.$store.state.count);
      return false;
    }
  }
};
</script>
