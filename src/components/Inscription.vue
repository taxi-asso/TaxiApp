<template>
  <div class="login">
      <h1> Inscription </h1>
      <form @submit.prevent="Register">
        <div class="form-group">
            <label for="exampleInputEmail1">Numero telephone </label>
            <input type="number" v-model="numTel" class="form-control" id="numTelUser" aria-describedby="numTel" placeholder="Enter your phone number">
            <small id="emailHelp" class="form-text text-muted">We'll never share your phone number with anyone else.</small>
        </div>     
    
        <button type="submit" value="Register" class="btn btn-primary"> Se connecter </button>
        </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import firebase from 'firebase';
export default {
    setup() {
        const numTel = ref("");
        const appVerifier = window.recaptchaVerifier;

        const Register = () => {
            firebase
                .auth()
                .createUser
                .then(((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                // ...
                }))
                .catch((error => alert(error.message)));
        }
    }
}
</script>

<style>

</style>