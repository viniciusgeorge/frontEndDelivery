<template>
<v-main>
<v-app-bar dense app class="d-flex justify-center">
      <span >Meus Pedidos</span>
    
    </v-app-bar>






     <v-container fluid>




            <v-card
    
    width="10000px"
  >
    
   
  </v-card>










          
      <v-row dense  v-for="(order,index) in orders" :key="index">
        <v-col class="cards">
        <CardOrder  :data="order.pedido.data" :preco="order.pedido.precototal" :lista="order.lista"/> 
        
        </v-col>
      </v-row>
    </v-container>





     
    </v-main>
</template> 

<script>

import CardOrder from '@/components/CardOrder'
import axios from 'axios'

export default {
    name: 'Orders',
    components:{
        CardOrder,
    },
    methods:
    {
         getName: function(id){
        
        const api = axios.create({
        baseURL:'https://192.168.0.112:8080'
        });
        api.get(`/produto/${id}`,{headers: {
        'Authorization' : this.$store.state.user.token
      }
    },).then(response => {
            
            
             this.name = response.data.nome;
            console.log(this.name);
            
             
            
             
        });
         }
    },
     data () {
      return {
        
        orders: []
      }
    },
    mounted(){
        
        const api = axios.create({
        baseURL:'https://192.168.0.112:8080'
        });
        api.get('/getPedidos',{headers: {
        'Authorization' : this.$store.state.user.token
      }
    },).then(response => {
            
            
             this.orders = response.data;
            
             
             
        });

    
}

}
</script>

<style scoped>



</style>