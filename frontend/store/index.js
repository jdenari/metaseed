export default {
    state() {
        return {
            userLogin: false,
            authenticated: false,
            firstName: null,
            lastName: null,
            company: null,
            phone: null,
            email: null,
            token: null,
            userId: null,
            newPassword: null,
            confirmNewPasssword: null,
            homeClientContent: 'automatizationContent'
        }
    },
    mutations: {
        authenticate(state, data) {
            state.authenticated = true
            state.token = data.token
            state.userId = data.userId
            state.firstName = data.firstName
            state.lastName = data.lastName
            state.company = data.company
            state.email = data.email
            state.phone = data.phone
        },
        updatePassword(state, data) {
            state.token = data.token
            state.userId = data.userId
            state.email = data.email
            state.newPassword = data.newPassword
            state.confirmNewPassword = data.confirmNewPassword
        },
        changeContentToDashboard (state){
            state.homeClientContent = 'dashboardContent'
        },
        changeContentToProfile (state){
            state.homeClientContent = 'profileContent'
        },
        changeContentToAutomatization (state){
            state.homeClientContent = 'automatizationContent'
        },
    },
}
  
  
  
  
  
  