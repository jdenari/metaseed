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
    mutations: {
        authenticate(state, data) {
            state.authenticated = true
            state.token = data.token
            state.userId = data.userId
            state.userName = data.userName
        }
    },
}
  
  
  
  
  
  