<template>
  <div class="check">
    {{ $store.state.count }}
    <div>
      <h1>Todo List</h1>
      <button v-on:click="onBtnClick">{{getBtnText}}</button>
      <ul>
        <li v-for="item in todoList" v-bind:key="item.id"> 
          {{item.text}} 
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Store',
  components: {},
  computed: mapState({ 
    todoList: function(state) { 
      return this.$store.state.todos 
    }
  }),
  methods: {
    onBtnClick: function () {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
      return false
    }
  }
}
</script>
