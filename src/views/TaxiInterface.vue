<template>
  <Horaire></Horaire> 
  
</template>

<script>

import Horaire from '../components/Horaire.vue'
//import UserList from '../components/UserList.vue'

export default {
  name: 'App',
  components: {
     Horaire, //UserList,
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
  margin-top: 60px;
}
</style>
