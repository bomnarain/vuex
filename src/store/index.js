import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    myCount: 100,
    todos: [
      { id: 1, text: '출근하기', done: true },
      { id: 2, text: '아침밥 몰래 먹기', done: false },
      { id: 3, text: '점심시간까지 시간 보내기', done: false }
    ]    
  },
  getters: {
    doneTodos: function ( state ) {
      return state.todos.filter( function( todo ){
        return todo.done
      })
    },
    findById: (state) => (id) => state.todos.find(todo => todo.id === id)
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {},
  modules: {}
});
