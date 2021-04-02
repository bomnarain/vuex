<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p> {{ count }} </p>
    <p> {{ myCount }} </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: mapState(['count', 'myCount'])// computed: { count () { return this.$store.state.count } }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
