const actions = {
    async onAuthStateChangedAction(state, { authUser, claims }) {
        if (!authUser) {
            // remove state
            state.commit('SET_USER', null)
  
            //redirect from here
            this.$router.push({
            path: '/auth/signin',
            })
        } else {
            const { uid, email } = authUser
            state.commit('SET_USER', {
                uid,
                email,
            })
        }
    },
}
  
const mutations = {
    SET_USER(state, user) {
      state.user = user
    },
}
  
const state = () => ({
    user: null,
})
  
const getters = {
    getUser(state) {
      return state.user
    },
}
  
export default {
    state() {
        return {
            userLogin: false,
            authenticated: false,
            userName: null,
            token: null,
            userId: null
        }
    },
    actions,
    mutations: {
        loginIn (state) {
            state.userLogin = true
        },
        LoginOut (state) {
            state.userLogin = false
        },
        authenticate(state, data) {
            state.authenticated = true
            state.token = data.token
            state.userId = data.userId
            state.userName = data.userName
        }
    },
    getters,
}
  
  
  
  
  
  