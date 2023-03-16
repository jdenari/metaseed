export default function ({store, route, redirect}){
    store.commit('RESET_MESSAGE_WARNING')
    if (route.path === '/') return
    if (route.path !== '/auth/signin') {
        //we are on a protected route
        if(!store.state.authenticated) {
            //take them to sign in page
            return redirect('/auth/signin')
        }
    } else if (route.path === '/auth/signin') {
        if(!store.state.authenticated) {
        //leave them on the sign in page
        } else {
            redirect('/client/home')
        }
    }
}