<template>
 
  <div id="nav">
    <router-link to="/Connexion">Connexion </router-link> |
    <router-link to="/CreateAccount">Créer un compte</router-link> | 
  </div>
  <router-view/> 
  
</template>

<script>
export default {
  name: 'App',
  components: {
   
  },
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 1px; 
}
</style>