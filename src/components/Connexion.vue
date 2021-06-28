<template>
    <div class="vue-tempalte">
        <form @submit.prevent="userLogin">
            <h3>Sign In</h3>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" v-model="user.email" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" v-model="user.password" />
            </div>
           
            <div class="form-group">
                    <button class="btn btn-primary btn-block" type="submit">Se connecter</button>
                </div>
        </form>
        <p class="forgot-password text-right">
                Pas encore de compte ? 
                <router-link :to="{name: 'UserConnexion'}"> s'inscrire? </router-link>
            </p>
    </div>
</template>


<script>
import firebase from "firebase";

export default {
  data() {
    return {
      user: {   
        email: '',
        password: ''
      }
    };
  },
  methods: {
    userLogin() {
        firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(() => {
            this.$router.push('/TaxiInterface')
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  }
};
</script>
