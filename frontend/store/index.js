export default {
    state() {
        return {
            // dev env: http://localhost:5000
            // pro env: https://metaseed.online
            url: 'http://localhost:5000',

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
            modalShow: false,

            // components
            homeClientContent: 'automatizationContent',

            lead: {
                name: '',
                email: '',
                phone: '',
                comment: '',
            },

            // automatizations
            scriptFunction: 'script-01',
            emailContact: '',

            // faceads
            dataFaceAds: {
            }
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
        CHANGE_CONTENT_TO_FACEBOOKADDS(state){
            state.homeClientContent = 'facebookAddsContent'
        },
        // message mutations
        MESSAGE_RESPONSE(state, data){
            state.messageWarning = data
        },
        RESET_MESSAGE_WARNING(state){
            state.messageWarning = null
        },
        RESET_LEAD_RESPONSE(state){
            state.lead = {
                name: '',
                email: '',
                phone: '',
                comment: '',
            }
        },
        ACTIVATE_MODAL(state){
            state.modalShow = true
        },
        // automatization
        CHANGE_SCRIPT_FUNCTION(state, data){
            state.scriptFunction = data
        },
        CHANGE_EMAIL_CONTACT(state, data){
            state.emailContact = data
        },
        UPDATE_DATA_FACEADS(state, data){
            // spliting the campaign name into three new columns into (cycle, class, type)
            data.data.forEach((item) => {
                const [cycle, campaignClass, campaignType] = item.campaign_name.split('|').map((value) => value.trim());
                item.cycle = cycle;
                item.class = campaignClass;
                item.type = campaignType;
                delete item.campaign_name;
            });
            // creating numbers to represents the week number
            for (const item of data.data) {
                const currentDate = new Date(item.date_start);
                const year = new Date(currentDate.getFullYear(), 0, 1);
                const days = Math.floor((currentDate - year) / (24 * 60 * 60 * 1000));
                const week = Math.ceil((currentDate.getDay() + 1 + days) / 7);
                item.week_number = week;
            }
            // commiting final data
            state.dataFaceAds = data;
        }
    },
    actions: {
        async sendLeadResponse({commit, state, dispatch}, dataLeadObject){
            return new Promise((resolve) => {
                const jsonDataObject = JSON.stringify(dataLeadObject)
                fetch(`${state.url}/api/lead/leadResponse`, {
                    method: "POST",
                    headers: {"Content-type": "application/json"},
                    body: jsonDataObject
                })
                .then((resp) => resp.json())
                .then((data) => {
                    if (data.error) { 
                        commit('MESSAGE_RESPONSE', data.error)
                        dispatch('hideMessageWarning')
                    }
                    else {
                        return resolve('true');
                    }
                });
            });
        },
        async loginVerification({commit, state, dispatch}, data){
            const jsonDataObject = JSON.stringify(data)
            await fetch(`${state.url}/api/auth/login`, {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: jsonDataObject
            })
            .then((resp) => resp.json())

            // it access the api to update the profile data using token and the object
            .then((data) => {
                if (data.error) { 
                    commit('MESSAGE_RESPONSE', data.error)
                    dispatch('hideMessageWarning')
                }
                else {
                    // it takes to the dashboard page and commit all the page with the user info
                    $nuxt.$router.push('/client/home')
                    commit("AUTHENTICATE", {
                        token: data.token, 
                        userId: data.userId, 
                        firstName: data.firstName, 
                        lastName: data.lastName,
                        company: data.company, 
                        email: data.email,
                        phone: data.phone
                    })
                }
            })
        },
        async updateProfileData({commit, state, dispatch}, data){
            const jsonDataObject = JSON.stringify(data)

            // it access the api to update the profile data using token and the object
            await fetch(`${state.url}/api/user/profile`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                    "auth-token": state.token
                },
                body: jsonDataObject
            })
            .then((resp) => resp.json())
            .then((data) => {
                // it prints the message from the backend and it commits all changes made
                commit('MESSAGE_RESPONSE', data.error)
                dispatch('hideMessageWarning')
                commit("UPDATE_PROFILE_DATA", { 
                    firstName: data.data.firstName, 
                    lastName: data.data.lastName,
                    company: data.data.company, 
                    email: data.data.email,
                    phone: data.data.phone
                })
            })
        },
        async updatePassword({commit, state, dispatch}, data){
            const jsonDataObject = JSON.stringify(data)
            // it access the api to update the password using token and the object
            await fetch(`${state.url}/api/user/password`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                    "auth-token": state.token
                },
                body: jsonDataObject
            })
            .then((resp) => resp.json())
            .then((data) => {
                // it prints the message from the backend
                commit('MESSAGE_RESPONSE', data.error)
                dispatch('hideMessageWarning')
            })
        },
        async sendFile({commit, state, dispatch}, data){
            const file = JSON.stringify(data)
            await fetch(`${state.url}/api/automatization/uploads/script-01`, {
                method: "PUT",
                headers: {"Content-type": "application/json",},
                body: file
            })
            .then((resp) => resp.json())
            .then((data) => {
                // it prints the message from the backend
                commit('MESSAGE_RESPONSE', data)
                dispatch('hideMessageWarning')
            })
        },
        async sendEmail({commit, state, dispatch}, email){
            const emailObject = {email: email}
            const data = JSON.stringify(emailObject)
            await fetch(`${state.url}/api/automatization/uploads/script-02`, {
                method: "PUT",
                headers: {"Content-type": "application/json",},
                body: data
            })
            .then((resp) => resp.json())
            .then((data) => {
                // it prints the message from the backend
                commit('MESSAGE_RESPONSE', data)
                dispatch('hideMessageWarning')
            })
        },
        async createNumbersNumpy({commit, state, dispatch}){
            await fetch(`${state.url}/api/automatization/uploads/script-03`, {
            method: "PUT",
            })
            .then((resp) => resp.json())
            .then((data) => {
                // it prints the message from the backend
                commit('MESSAGE_RESPONSE', data)
                dispatch('hideMessageWarning')
            })
        },
        async openPageSelenium({commit, state, dispatch}){
            await fetch(`${state.url}/api/automatization/uploads/script-05`, {
            method: "PUT",
            })
            .then((resp) => resp.json())
            .then((data) => {
                // it prints the message from the backend
                commit('MESSAGE_RESPONSE', data)
                dispatch('hideMessageWarning')
            })
        },
        async getDataFromFacebookAdd({state, dispatch}, payload){
            await fetch(`${state.url}/api/automatization/uploads/script-06`, {
                method: "PUT",
                headers: {"Content-type": "application/json",},
                body: JSON.stringify(payload)
            })
            .then((resp) => resp.json())
            .then((data) => { 
                dispatch('updateDataDatabase', data)
            })
        },
        async updateDataDatabase({commit, state, dispatch}, payload){
            await fetch(`${state.url}/api/faceads/updateDataDatabase`, {
                method: "POST",
                headers: {"Content-type": "application/json",},
                body: JSON.stringify(payload)
            })
            .then((resp) => resp.json())
            .then((data) => { 
                commit('MESSAGE_RESPONSE', data)
                dispatch('hideMessageWarning')
            })
            commit('UPDATE_DATA_FACEADS', payload)
        },

        async getDataDatabase({commit, state, dispatch}){
            await fetch(`${state.url}/api/faceads/getDataDatabase`, {
                method: "GET",
                headers: {"Content-type": "application/json",},
            })
            .then((resp) => resp.json())
            .then((data) => { 
                commit('MESSAGE_RESPONSE', data)
                dispatch('hideMessageWarning')
                commit('UPDATE_DATA_FACEADS', data)
            })
        },

        async hideMessageWarning({commit}){
            setTimeout(() => { 
                commit('RESET_MESSAGE_WARNING')
            }, 5000)
        }
    }
}