<template>
  <div id="nav">
    <router-link to="/CreateClient">Client X-press </router-link> |
    <router-link to="/CreateTaxi">Devenir un Taxi-Xpress </router-link> | 
    <router-link to="/TaxiInterface">une Tab </router-link> | 
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