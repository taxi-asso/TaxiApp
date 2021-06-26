<template>
  <NavBar></NavBar>
  <JumbotronAccueil></JumbotronAccueil>
  <Horaire></Horaire>
  <ReservationForm></ReservationForm>
  <Contact></Contact>
  <Footer></Footer> 
</template>

<script>
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import NavBar from './components/NavBar.vue'
import ReservationForm from './components/ReservationForm1.vue'
import JumbotronAccueil from './components/JumbotronAccueil.vue'
import Horaire from './components/Horaire.vue'
export default {
  name: 'App',
  components: {
    NavBar, JumbotronAccueil, ReservationForm, Contact, Footer, Horaire   
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