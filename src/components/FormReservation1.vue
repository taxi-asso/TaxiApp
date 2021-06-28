<template>
   <!--Réservation-->
    <section class="sections réservation">
        <div class="overplay">
            <div class="container-3">
                <div class="section-header" id="espaceReservation">
                    <h2 class="section-title">Réservation</h2>
                    <div class="line"><span></span></div>
                    <p class ="lead home-desc">
                        Réservez votre taxi en moins d'une minute.
                    </p>
                </div>
            </div>
        </div>
        <div class="container px-4">
                <div class="row gx-5">
                    <div class="col">
                    <div class="p-3 border bg-light">
                        <form class="row g-3" @submit.prevent="onFormSubmit">   
                            <div class="col-12">
                                <label for="inputAddress" class="form-label">Départ</label>
                                <input type="text" class="form-control" id="search_input" placeholder="Type address..."  v-model="reservations.adresse_Arrive" required/>
                            </div>
                            <div class="col-12">
                                <label for="inputAddress2" class="form-label">Arrivée</label>
                                <input type="text" class="form-control" id="search_input" placeholder="Type destination..." v-model="reservations.adresse_Depart" required/>
                                
                            </div>
                            <div class="col-12">
                                <button type="button" class="btn btn-secondary btn-sm"> Programmer une réservation </button>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary"> Reserver maintenant </button>
                            </div>
                        </form>
                    </div>
                    <div class="col-sm-3">
                      <div class="p-3 border bg-light">
                          <div ref="mapDiv" style="width: 100%; height: 50vh" /> 
                      </div>
                    </div>
                </div>
                </div>
              </div>        
    </section>
</template>


<script>
import { db } from '../firebaseDatabase';
/* For the map */
/* eslint-disable no-undef */
import { computed, ref, onMounted, onUnmounted, watch } from 'vue'
import { useGeolocation } from '../useGeolocation'
import { Loader } from '@googlemaps/js-api-loader'
const GOOGLE_MAPS_API_KEY = 'AIzaSyDuV8SuOHsH8zMcBb4GOOcJSR1PVF3z6FE'
/* End import map */


export default {
  
  data() {
    return {
      reservations: {
      }
    }
  },
  methods: {
    onFormSubmit(event) {
      event.preventDefault()
      db.collection('reservations').add(this.reservations).then(() => {
        alert("Reservation successfully created!");
        this.reservations.adresse_Arrive = '';
        this.reservations.adresse_Depart = '';
        const d = new Date();
        this.reservations.date_Depart = d;
        this.reservations.etat_reservation='enCours';
        alert("Reservation successfully created for the :"+ d);
      }).catch((error) => {
        console.log(error);
      });
    }
  },
  setup(){
    //  On stock la position de l'utilisateur
    const { coords } = useGeolocation()
    const currPos = computed(() => ({
      lat: coords.value.latitude,
      lng: coords.value.longitude
    }))

    //On definit une variable qui vas prendre les coordonnées du point cliquer sur la map
    const otherPos = ref(null)

    const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY })
    const mapDiv = ref(mapDiv)
    let map = ref(null)
    let clickListener = null


    onMounted(async () => {
      await loader.load()
      map.value = new google.maps.Map(mapDiv.value, {
        center: currPos.value,
        zoom: 6
      })
    })


    onUnmounted(async () => {
      if (clickListener) clickListener.remove()
    })

    let line = null


    watch([map, currPos, otherPos], () => {
      if (line) line.setMap(null)
      if (map.value && otherPos.value != null)
        line = new google.maps.Polyline({
          path: [currPos.value, otherPos.value],
          map: map.value
        })
    })

//Avoir la distance entre deux point : 

    const haversineDistance = (pos1, pos2) => {
      const R = 3958.8 // Radius of the Earth in miles
      const rlat1 = pos1.lat * (Math.PI / 180) // Convert degrees to radians
      const rlat2 = pos2.lat * (Math.PI / 180) // Convert degrees to radians
      const difflat = rlat2 - rlat1 // Radian difference (latitudes)
      const difflon = (pos2.lng - pos1.lng) * (Math.PI / 180) // Radian difference (longitudes)
      const d =
        2 *
        R *
        Math.asin(
          Math.sqrt(
            Math.sin(difflat / 2) * Math.sin(difflat / 2) +
              Math.cos(rlat1) *
                Math.cos(rlat2) *
                Math.sin(difflon / 2) *
                Math.sin(difflon / 2)
          )
        )
      return d
    }

    const distance = computed(() =>
      otherPos.value === null
        ? 0
        : haversineDistance(currPos.value, otherPos.value)
    )

   // Fin depot
    return { currPos, otherPos, distance, mapDiv }
  }
}

</script>


<style scoped>

#mapid { height: 180px; }

body{
    font-family: lucida Sans;
}

.sections{
    padding: 20px 0;
}
.réservation{
    height: 600px;
    background-image:url('../assets/Accueil/ville.jpg');
    background-size: cover;
    background-position: center;
    position: relative;
}

button {
    padding-top: 1%;
    margin-top: 2%;
   
}

input[type='number'] {
  width: 200px;
  margin-top: 20px;
  margin-left: 10px;
}

@media only screen and (max-width: 600px) {
  
  .réservation{
    height: 850px;
    background-image:url('../assets/Accueil/ville.jpg');
    background-size: cover;
    background-position: center;
    position: relative;
}
}
</style> 
