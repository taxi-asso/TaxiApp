<template>

  
  
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead>
                    <tr>
                        
                        <th>Lieu de depart</th>
                        <th>Lieu d'arrivée </th>
                        
                        
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="reservations in Reservations" :key="reservations.key">
                        <!-- <td>{{ reservation.name }}</td> -->
                        <td>{{ reservations.adresse_Depart }}</td>
                        <td>{{ reservations.adresse_Arrive }}</td>
                        <!-- <td>{{ reservation.phone }}</td> -->
                        <td>
                            <router-link :to="{name: 'edit', params: { id: reservations.key }}" class="btn btn-primary">Accepter
                            </router-link>
                            <button @click.prevent="deleteUser(reservations.key)" class="btn btn-danger">Decliner</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import { db } from '../firebaseDatabase';
    
    export default {
        data() {
            return {
                Reservations: []
            }
        },
        created() {
            db.collection('reservations').onSnapshot((snapshotChange) => {
                this.Reservations = [];
                snapshotChange.forEach((doc) => {
                    this.Reservations.push({
                        key: doc.id,
                        // name: doc.data().name,
                        adresse_Depart: doc.data().adresse_Depart,
                        adresse_Arrive: doc.data().adresse_Arrive
                    })
                });
            })
        },
        methods: {
            deleteUser(id){
              if (window.confirm("Do you really want to delete?")) {
                db.collection("reservations").doc(id).delete().then(() => {
                    console.log("Document deleted!");
                })
                .catch((error) => {
                    console.error(error);
                })
              }
            }
        }
    }
</script>

<style>
    .btn-primary {
        margin-right: 12px;
    }
</style>