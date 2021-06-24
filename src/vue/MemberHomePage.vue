<template>
  <NavBar></NavBar>

    <H1> Re Bonjour client </H1>
    <H1> Bienvenue client </H1>

    <ReservationForm> </ReservationForm>
    
  <Footer> </Footer> 

</template>

<script>

import Footer from '../components/Footer.vue'
import NavBar from '../components/NavBar.vue'
import ReservationForm from '../components/ReservationForm1.vue'

export default {
  name: 'App',
  components: {
    NavBar, Footer, ReservationForm 
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