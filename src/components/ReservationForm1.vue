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

            <div class="container px-4">
                <div class="row gx-5">
                    <div class="col">
                    <div class="p-3 border bg-light">
                        <form class="row g-3">
                            
                            <div class="col-12">
                                <label for="inputAddress" class="form-label">Départ</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                            </div>
                            <div class="col-12">
                                <label for="inputAddress2" class="form-label">Arrivée</label>
                                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
                            </div>
                            <div class="col-12">
                                <button type="button" class="btn btn-secondary btn-sm"> Programmer une réservation </button>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary"> Reserver maintenant </button>
                            </div>
                        </form>
                    </div>
                </div>
                
                <div class="col">
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

/* For the map */

/* eslint-disable no-undef */
import { computed, ref, onMounted, onUnmounted, watch } from 'vue'
import { useGeolocation } from '../useGeolocation'
import { Loader } from '@googlemaps/js-api-loader'
const GOOGLE_MAPS_API_KEY = 'AIzaSyDuV8SuOHsH8zMcBb4GOOcJSR1PVF3z6FE'

/* End import map */
export default {
  name: 'App',
 setup(){
    const { coords } = useGeolocation()
    const currPos = computed(() => ({
      lat: coords.value.latitude,
      lng: coords.value.longitude
    }))
    const otherPos = ref(null)
    const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY })
    const mapDiv = ref(null)
    let map = ref(null)
    let clickListener = null
    onMounted(async () => {
      await loader.load()
      map.value = new google.maps.Map(mapDiv.value, {
        center: currPos.value,
        zoom: 7
      })
      clickListener = map.value.addListener(
        'click',
        ({ latLng: { lat, lng } }) =>
          (otherPos.value = { lat: lat(), lng: lng() })
      )
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

</style> 