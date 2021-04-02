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
  name: 'MapState',
  data: function() {
    return {
      isFilter: false
    }
  },
  components: {},
  computed: mapState({ 
    todoList: function(state, getters) { 
      var list = this
      var self = this
      if (self.isFilter) {
        list = getters.doneTodos
      } else {
        list = state.todos
      }
      return list      
    },
    getBtnText: function() {
      var message = this
      var self = this
      message = self.isFilter ? '전체 목록 보기' : '완료된 목록만 보기'
      return message
    }
  }),
  methods: {
    onBtnClick: function () {
      this.isFilter = !this.isFilter
    }
  }
}
</script>
