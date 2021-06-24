app.component()
<template>

<div class="nav-scroller py-1 mb-2">
    <nav class="nav d-flex justify-content-between" style="background-color: #24262b" >
        <a class="p-2 link-secondary" href="#" id="navbarItem">  <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top">ExpressTaxi</a>
        <a class="p-2 link-secondary" href="#" id="navbarItem">Reserver un Taxi</a>
        <a class="p-2 link-secondary" href="#" id="navbarItem">Nos Services</a>
        <a class="p-2 link-secondary" href="#" id="navbarItem">Nous Contacter</a>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button class="btn btn-primary me-md-2" type="button"> Se Connecter</button>
        </div>
    </nav>
</div>
 
</template>

<script>
export default {
    
}
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