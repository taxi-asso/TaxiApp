<template>
  <NavBar></NavBar>

    <H1> Re Bonjour DRIVER </H1>
    <H1> Bienvenue Driver </H1>

    <button class="logout" @click="Logout"> deconnection </button>
    
  <Footer></Footer> 

</template>

<script>
import {ref,  onBeforeMount} from 'vue';
import firebase from 'firebase'

import Footer from '../components/Footer.vue'
import NavBar from '../components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar, Footer  
  },

  setup() {
      const name = ref("");
      
      onBeforeMount(() => {
          const user = firebase.auth().currentUser;
          if(user){
              name.value = user.email.split('@')[0];
        }
        const Logout = () => {
            firebase
                .auth()
                .signOut()
                .then(() => console.log("signed out"))
                .catch(err => alert(err.message));
        }
        return {name, Logout}
      });     
  }
}
</script>


<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>