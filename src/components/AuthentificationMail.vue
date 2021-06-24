<template>
  <div class="login"> Authentification </div>
  <form @submit.prevent="Login">
      <input type="text" placeholder="Email" v-model="email" /> 
      <input type="password" placeholder="Password" v-model="password"/> 
      <input type="submit" value="Login" /> 

      <p> pas de compte ? <router-link to="/Connexion"> Crée ton compte en 2 min ! </router-link> </p>
  </form>
</template>

<script>
import {ref} from 'vue';
import firebase from "firebase"; 

export default {
    setup() {
        const email = ref("");
        const password = ref("");

        const Login = () => {
            firebase
            .auth()
            .signInWithEmailAndPassword(email.value, password.value)
            .then(data => console.log(data))
            .catch(err => alert(err.message));
        }
        return {
            Login, email, password
        }
    }
}
</script>

<style>

</style>