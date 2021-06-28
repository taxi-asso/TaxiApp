<template>

<div class="nav-scroller py-1 mb-2">
    <nav class="nav d-flex justify-content-between" style="background-color: #24262b" >
        <a class="p-2 link-secondary" href="#" id="navbarItem">  
            <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top">
            ExpressTaxi
            <router-link to="/">Home</router-link>
        </a>
        <a class="p-2 link-secondary" href="#" id="navbarItem">
            <router-link to="/Reservation"> Reserver un Taxi </router-link>
        </a>
        <a class="p-2 link-secondary" href="#" id="navbarItem">
            <router-link to="/Services"> Nos Services</router-link>
        </a>
        <a class="p-2 link-secondary" href="#" id="navbarItem">
            <router-link to="/Contact">Nous Contacter</router-link>
        </a>
        <a class="p-2 link-secondary" href="#" id="navbarItem">
            <router-link to="/UserConnexion">Se Connecter</router-link>
        </a>
    </nav>
</div>
 
</template>

<script>
</script>

<style scoped>
    a {
        color: whitesmoke;
        text-decoration: none;
        margin: 1% 4%;
    }
   
   h5{
       color: whitesmoke;
   }
</style> 