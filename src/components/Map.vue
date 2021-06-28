<template>
  <div ref="mapDiv" style="width: 100%; height: 50vh" />  
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
  name: 'Map',

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

