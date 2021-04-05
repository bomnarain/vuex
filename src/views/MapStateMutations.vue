<template>
  <div class="check">
    {{ $store.state.count }}
    <div>
      <h1>Todo List</h1>
      <button v-on:click="onBtnClick">{{getBtnText}}</button>
      <ul>
        <li v-for="item in todoList" v-bind:key="item.id"> 
          {{item.text}}
          <button v-on:click="onMutationClick(item)">
            <span v-if="item.done">완료</span>
            <span v-if="!item.done">미완료</span>
          </button>          
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'MapStateMutations',
  data: function() {
    return {
      isFilter: false,
      todoId: 1
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
      message = self.isFilter ? '전체 목록 보기' : '검색된 목록만 보기'
      return message
    }
  }),
  methods: {
    onBtnClick: function () {
      this.isFilter = !this.isFilter
    },
    onMutationClick: function (item) {
      this.$store.commit('changeDoneState', item)
    }
  }
}
</script>
