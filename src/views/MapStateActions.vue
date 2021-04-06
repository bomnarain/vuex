<template>
  <div class="check">
    {{ $store.state.count }}
    <div>      
      <h1>Todo List</h1>
      <p> 카운터 : {{ counter }} </p>
      <button v-on:click="onGetListClick">목록 가져오기</button>
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
  name: 'MapStateActions',
  data: function() {
    return {
      isFilter: false,
      counter: 10,
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
    /* // payload 방식 
    onMutationClick: function ( state, payload ) {
      payload.item.done = !payload.item.done
    }
    */
    onMutationClick: function (item) {
      this.$store.commit('changeDoneState', item)
    },
    /* // commit 보기 좋게 
    onMutationClick: function (item) {
      this.$store.commit({
        type: 'changeDoneState',
        item: item
      })
    } 
    */
    onGetListClick: function() {
      var self = this
      var counterInterval
      self.$store.dispatch('getTodoList')

      counterInterval = setInterval( function() {
        self.counter--;

        if ( self.counter === 0) {
          clearInterval( counterInterval )
          self.counter = 10
        }
      }, 1000)
    }
  }
}
</script>
