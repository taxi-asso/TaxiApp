<template>
  <form @submit.prevent="userRegistration">
    <div class="form-group row">
      <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputEmail4">Nom</label>
        <input type="text" class="form-control" id="inputEmail4" placeholder="Nom" v-model="user.nom" required/>
      </div>
      <div class="form-group col-md-6">
        <label for="inputPassword4">Prenom</label>
        <input type="text" class="form-control" id="inputPassword4" placeholder="Prenom" v-model="user.prenom" required/>
      </div>
    </div>
      <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-8">
        <input type="email" class="form-control" id="inputEmail3" placeholder="Email" v-model="user.email" required/>
      </div>
    </div>
    <div class="form-group row">
      <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
      <div class="col-sm-8">
        <input type="password" class="form-control" id="inputPassword3" placeholder="Password" v-model="user.mdp" required/>
      </div>
    </div>
    
    <div class="form-group row">
      <div class="col-sm-2">Checkbox</div>
      <div class="col-sm-10">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck1">
          <label class="form-check-label" for="gridCheck1">
            Example checkbox
          </label>
        </div>
      </div>
    </div>
    <div class="form-group row">
      <div class="col-sm-10">
        <button type="submit" class="btn btn-primary"> S'inscrire </button>
      </div>
    </div>
  </form>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      user: {
        nom: '',
        prenom: '',
        email: '',
        mdp: '',
      }
    };
  },
  methods: {
    userRegistration() {
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.user.email, this.user.mdp)
      .then((res) => {
        res.user
          .updateProfile({
            displayName: this.user.nom
          })
          .then(() => {
            this.$router.push('/TaxiInterface')
          });
      })
      .catch((error) => {
         alert(error.message);
      });
    }
  }
};
</script>