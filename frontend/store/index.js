export default {
    state() {
        return {
            userLogin: false,
            authenticated: false,
            userName: null,
            userLastName: null,
            userPhone: null,
            userEmail: null,
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
            state.userLastName = data.lastName
            state.userPhone = data.userPhone
            state.userEmail = data.userEmail
        }
    },
}
  
  
  
  
  
  