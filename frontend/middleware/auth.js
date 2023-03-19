export default function ({store, route, redirect}){
    store.commit('RESET_MESSAGE_WARNING')
    if (route.path === '/') return
    if (route.path !== '/autenticacao/login') {
        //we are on a protected route
        if(!store.state.authenticated) {
            //take them to sign in page
            return redirect('/autenticacao/login')
        }
    } else if (route.path === '/autenticacao/login') {
        if(!store.state.authenticated) {
        //leave them on the sign in page
        } else {
            redirect('/cliente/home')
        }
    }
}