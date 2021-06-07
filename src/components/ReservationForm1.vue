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
                        La map : 
                        <iframe
                            width="400"
                            height="325"
                            style="border:0"
                            loading="lazy"
                            allowfullscreen
                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA6Hxn4iHuMrwsifiGBW84EGtpKNxJEqbQ &q=Space+Needle,Seattle+WA">
                        </iframe>  
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
</template>

<script>

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

</style> 