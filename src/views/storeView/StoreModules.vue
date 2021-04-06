<template>
  <div>
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
// vuex 라이브러리에서 mapActions, mapGetters 함수를 가져옵니다.
import { mapActions, mapGetters } from 'vuex'
/*
  namespaced: true를 사용했기 때문에 선언해줍니다.
  index.js 에서 modules 객체의 '키' 이름입니다.

  modules: {
    키: 값
    reservationStore: reservationStore
  }  
*/
const reservationStore = 'reservationStore'

export default {
  name: 'StoreModules',
  data: function() {
    return {
      isFilter: false,
      counter: 10
    }
  },
  components: {},
  computed: {
    ...mapGetters(reservationStore, {
      getToodoList: 'GET_LIST'
    }),
    todoList() {
      return this.getToodoList
    },
    getBtnText: function() { 
      var message = this 
      var self = this 
      message = self.isFilter ? '전체 목록 보기' : '완료된 목록만 보기' 
      return message 
    }    
  },
  methods: {
    ...mapActions(reservationStore, {
      setTodoList: 'ACT_CHANGE_STATE'
    }),      
    onBtnClick: function () {
      this.isFilter = !this.isFilter
    },
    onMutationClick: function (payload) {
      console.log(payload)
      this.setTodoList(payload)
    },
  
    onGetListClick: function() {

    }
  }
}
</script>
