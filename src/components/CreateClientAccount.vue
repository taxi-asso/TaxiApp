<template>
    <div class="vue-tempalte">
        <form @submit.prevent="userRegistration">
            <h3>Sign Up</h3>

            <div class="form-group">
                    <label>Nom</label>
                    <input type="text" class="form-control" v-model="user.name" required>
                </div>
                <div class="form-group">
                    <label>Prenom</label>
                    <input type="text" class="form-control" v-model="user.prenom" required>
                </div>

                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="user.email" required>
                </div>

                <div class="form-group">
                    <label>N° Telephone</label>
                    <input type="text" class="form-control" v-model="user.phone">
                </div>

                <div class="form-group">
                    <label>Mot de passe</label>
                    <input type="text" class="form-control" v-model="user.password" required>
                </div>

             <div class="form-group">
                    <button class="btn btn-primary btn-block" type="submit">S'inscrire</button>
                </div>

            <p class="forgot-password text-right">
                Already registered 
                <router-link :to="{name: 'Connexion'}"> sign in? </router-link>
            </p>
        </form>
    </div>
</template>


<script>
import firebase from "firebase";

export default {
  data() {
    return {
      user: {
        name: '',
        prenom: '',
        email: '',
        password: '',
        phone: '',
      }
    };
  },
  methods: {
    userRegistration() {
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.user.email, this.user.password)
      .then((res) => {
        res.user
          .updateProfile({
            displayName: this.user.name
          })
          .then(() => {
            this.$router.push('/UserInterface')
          });
      })
      .catch((error) => {
         alert(error.message);
      });
    }
  }
};
</script>