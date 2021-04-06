// store module 사용
const reservationStore = {
    namespaced: true,
        state: {
            todos: [
                { id: 1, text: '예약', done: true },
                { id: 2, text: '예약취소', done: false },
                { id: 3, text: '이용완료', done: false },
                { id: 4, text: '실패', done: false }
            ]
    },
    getters: {
        GET_LIST: state => state.todos,
        GET_DONE_LIST: state => state.todos.filter( todos => todos.done ),
        GET_FIND_ID: (state) => (id) => state.todos.find(todo => todo.id === id)
    },
    mutations: {
        // mutations는 반드시 "동기"환경에서만 사용
        MU_CHANGE_STATE: ( state, payload ) => {
            console.log(payload)
            payload.done = !payload.done
        },
        MU_ADD_DATA: ( state, list ) => {
            state.todos = list
        },
        MU_LIST: ( state, list ) => {
            state.todoLists = list
        }
    },
    actions: {
        ACT_DO_LIST: ({ commit }, payload ) => {
            commit('MU_LIST', payload)
        },
        ACT_CHANGE_STATE: ({ commit }, payload ) => {
            commit('MU_CHANGE_STATE', payload)
        }
    }
}

export default reservationStore