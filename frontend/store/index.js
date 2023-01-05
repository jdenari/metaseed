export default {
    state() {
        return {
            // user info
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

            // messages alert
            messageWarning: null,

            // components
            homeClientContent: 'automatizationContent',

            lead: {
                name: null,
                email: null,
                phone: null,
                comment: null,
            },
        }
    },
    mutations: {
        // auth mutations
        AUTHENTICATE(state, data) {
            state.authenticated = true
            state.token = data.token
            state.userId = data.userId
            state.firstName = data.firstName
            state.lastName = data.lastName
            state.company = data.company
            state.email = data.email
            state.phone = data.phone
        },
        DEAUTHENTICATE(state) {
            state.authenticated = false
            state.token = null
            state.userId = null
            state.firstName = null
            state.lastName = null
            state.company = null
            state.email = null
            state.phone = null
            state.homeClientContent = 'automatizationContent'
            $nuxt.$router.push('/')
        },
        // user mutations
        UPDATE_PROFILE_DATA(state, data){
            state.firstName = data.firstName
            state.lastName = data.lastName
            state.company = data.company
            state.email = data.email
            state.phone = data.phone
        },
        UPDATE_PASSWORD(state, data){
            state.newPassword = data.newPassword
            state.confirmNewPassword = data.confirmNewPassword
        },
        // options user mutations
        CHANGE_CONTENT_TO_DASHBOARD(state){
            state.homeClientContent = 'dashboardContent'
        },
        CHANGE_CONTENT_TO_PROFILE(state){
            state.homeClientContent = 'profileContent'
        },
        CHANGE_CONTENT_TO_AUTOMATIZATION(state){
            state.homeClientContent = 'automatizationContent'
        },
        // message mutations
        MESSAGE_LEAD_RESPONSE(state, data){
            state.messageWarning = data
        },
        RESET_MESSAGE_WARNING(state){
            state.messageWarning = null
        },
        RESET_LEAD_RESPONSE(state){
            state.lead = {
                name: null,
                email: null,
                phone: null,
                comment: null,
            }
        },
    },
    actions: {
        async sendLeadResponse({commit}, dataLeadObject){
            const jsonDataObject = JSON.stringify(dataLeadObject)
            await fetch("https://metaseed.online/api/lead/leadResponse", {
            // await fetch("http://localhost:5000/api/lead/leadResponse", {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: jsonDataObject
            })
            .then((resp) => resp.json())
            .then((data) => {
                if (data.error) { 
                    commit('MESSAGE_LEAD_RESPONSE', data.error)
                }
                else {
                    commit('RESET_LEAD_RESPONSE')
                    this.$refs['modalSuccess'].show()
                }
            })
        },
        async hideMessageWarning({commit}){
            setTimeout(() => { 
                commit('RESET_MESSAGE_WARNING')
            }, 5000)
        }
    }
}
  
  
  
  
  
  