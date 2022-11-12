<template>
    <div>
       <form class="w-25 p-3">
           <div class="mb-3">
               <label for="exampleInputEmail1" class="form-label">Email address</label>
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
               <label for="exampleInputPassword1" class="form-label">Password</label>
               <input 
                   type="password" 
                   class="form-control" 
                   id="exampleInputPassword1"
                   name="password"
                   v-model="auth.password"
               >
           </div>
           <button 
               type="button" 
               class="btn btn-primary w-100"
               @click="loginVerification"
               >Submit
           </button>
           <p>
               {{ errorText }}
           </p>
           <NuxtLink to="/">GO TO LANDING PAGE</NuxtLink>
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
       loginVerification() {
           this.$fire.auth.signInWithEmailAndPassword(this.auth.email, this.auth.password)
           .catch((error) => {
               this.errorText = error
           }).then((user) => {
               //we are signed in
               $nuxt.$router.push('/client/home')
           })
        },
    }
}
</script>

<style>

</style>