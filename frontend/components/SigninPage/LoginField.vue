<template>
    <div class="p-3">
        <form class="login-form p-3 border m-auto">
            <div v-if="!$store.state.authenticated">
                <h4 class="text-center p-2">Iniciar Sessão</h4>
                <div class="my-3">
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input 
                    type="email" 
                    class="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp"
                    name="login"
                    v-model="auth.email"
                >
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Senha</label>
                    <input 
                        type="password" 
                        class="form-control" 
                        id="exampleInputPassword1"
                        name="password"
                        v-model="auth.password"
                        >
                </div>
                <div class="w-100 d-md-flex justify-content-md-end">
                        <button 
                        type="button" 
                        class="btn btn-primary w-25 me-md-2"
                        @click="loginVerification"
                        >Entrar →
                        </button>
                </div>
                <div class="p text-center p-3">
                {{ errorText }}
                </div>
                <div class="p">Quer criar uma conta?<NuxtLink to="/"> Entre em contato.</NuxtLink></div>
            </div>
            <div v-else>
                <h4 class="text-center p-2">Você já está logado!</h4>
                <div class="p-3 d-flex justify-content-center">
                    <button type="button" class="btn btn-danger m-1">Sair</button>
                    <button type="button" class="btn btn-primary m-1">Página home</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'LoginField',
    data() {
       return {
           errorText: 'No error message',
           auth: {
               email: '',
               password: ''
            }
        }
    },
    methods: {
        async loginVerification(e) {
            e.preventDefault();
            const dataObject = {
                email: this.auth.email,
                password: this.auth.password
            }
            const jsonDataObject = JSON.stringify(dataObject)
            await fetch("http://localhost:6789/api/auth/login", {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: jsonDataObject
            })
            .then((resp) => resp.json())
            .then((data) => {
                if(data.error){
                    this.errorText = data.error;
                } else {
                    $nuxt.$router.push('/client/home')
                    console.log(data)
                    this.$store.commit("authenticate", {
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
    }
}
</script>

<style scoped>
    .login-form{
        width: 450px;
    }

</style>