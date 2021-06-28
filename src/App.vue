<template>
  <NavBar></NavBar>
<!-- 
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> | 
    <router-link to="/AppConnexion">Log</router-link>
  </div>
  -->
  <router-view/>

  <Footer></Footer> 
</template>

<script>
import Footer from './components/Footer.vue'
import NavBar from './components/NavBar.vue'


export default {
  name: 'App',
  components: {
    Footer, NavBar  
  },
  data() {
    return { };
  },
};
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