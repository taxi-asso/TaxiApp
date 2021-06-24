<template>
  <div class="connexion"> creer compte de Connexion </div>
  <form @submit.prevent="Login">
      <input type="text" placeholder="Email" v-model="email" /> 
      <input type="password" placeholder="Password" v-model="password"/> 
      <input type="submit" value="Login" /> 

      <p> Vous possedez un compte ? <router-link to="/Authentification"> Connectez-vous ! </router-link> </p>
  </form>
</template>

<script>
import firebase from 'firebase';
import { ref } from 'vue';


export default {
    setup() {
        const email = ref("");
        const password = ref("");

        const CreationCompte = () => {
            firebase
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value)
                .then(user => {
                    alert(user);
                })
                .catch(err => alert(err.message));
        }

        return {
            email, password, CreationCompte
        }
        
    }

}
</script>

