<template>
  <FormReservation></FormReservation> 
</template>

<script>

import FormReservation from '../components/FormReservation1.vue'


export default {
  name: 'App',
  components: {
     FormReservation, 
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