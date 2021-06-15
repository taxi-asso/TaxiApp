<template>
  <div class="login">
      <h1> Connection </h1>
      <form @submit.prevent="Login">
        <div class="form-group">
            <label for="exampleInputEmail1">Numero telephone </label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>     
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" value="Login" class="btn btn-primary"> Se connecter </button>
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

        const Login = () => {
            firebase
                .auth()
                .signInWithPhoneNumber(numTel.value, appVerifier)
                .then(((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                // ...
                }))
                .catch((error) => {});
        }
    }
}
</script>

<style>

</style>