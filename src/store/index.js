import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '@/api'


Vue.use(Vuex)

export default now Vuex.Store({
    state: {
        users: []
    },
    mutations: {
        saveUsers(state, users) {
            state.users = users
        }
    },
    actions: {
        async fetchUsers(context) {
            const users = await API.fetchUsers()
            context.commit('saveUsers', users)

        }
    },
    modules: {}
}
)