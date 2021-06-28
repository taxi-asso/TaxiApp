<template>
  <JumbotronAccueil></JumbotronAccueil>
  <Horaire></Horaire>
  <FormReservation></FormReservation>
  <Contact></Contact> 
</template>

<script>

import FormReservation from '../components/FormReservation1.vue';
import JumbotronAccueil from '../components/JumbotronAccueil.vue';
import Horaire from '../components/Horaire.vue';
import Contact from '../components/FormContact.vue';

export default {
  name: 'App',
  components: {
     FormReservation, JumbotronAccueil, Horaire, Contact, 
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