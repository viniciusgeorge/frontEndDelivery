<template>

    <v-main class="grey lighten-5">
        
      
      <v-app-bar  dense fixed>
          <v-btn class="button" icon to='/'>
           
            <v-icon class="material-icons-round">arrow_back</v-icon>
          </v-btn>
        </v-app-bar>
    
        
      
        <v-container fluid>




            <v-card
    
    width="10000px"
  >
    
   
  </v-card>










          
      <v-row dense  v-for="(product,index) in products" :key="index">
        <v-col class="cards">
        <CardProduct  :id ="product.id" :nome="product.nome" :descricao="product.descricao" :preco="product.preco" :caminho="product.caminhoimagem" :estabelecimento="estabelecimentoAtual" @add="count($event)" @sub="count($event)"/> 
       
        </v-col>
      </v-row>
    </v-container>

        

       
      
      <v-bottom-navigation app background-color="#32A852">
        <div class="d-flex align-center">
        <v-btn to="/cart"> Ver sacola </v-btn>
        <v-icon large class="material-icons-round">shopping_bag</v-icon>
        <v-chip>R${{total}}</v-chip>
        </div>
      </v-bottom-navigation>









    </v-main>
</template> 

<script>
import CardProduct from '../components/CardProduct.vue'

import axios from 'axios'
export default {
    name: 'Store',
    data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src:'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
        ],
        products: [],
        id: this.$route.params.id,
        total: 0,
        estabelecimentoAtual: this.$store.state.estabelecimentoAtual
      }
    },
    components:{
        CardProduct
    },
    methods:{
      count: function(order){
        this.$store.commit("addProduct",order);
        
        this.total = 0;
        for(let product of this.$store.state.cart.product.values())
        {
          this.total+=(product.price*product.quantity);
        }
        
      }
    },
   
    mounted(){
        
        //console.log(this.$store.state.estabelecimentoAtual)
        this.total = 0;
        for(let product of this.$store.state.cart.product.values())
        {
          this.total+=(product.price*product.quantity);
        }

        const api = axios.create({
        baseURL:'https://192.168.0.112:8080'
        });
        api.get(`/getProdutosDisponiveis/${this.id}` ,{headers: {
        'Authorization' : this.$store.state.user.token
      }
    },).then(response => {
            
            
             this.products = response.data;
            
             
        });

    
}
}
</script>

<style scoped>

main{
   
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: calc(100vh - 120px);
    display: flex;
    flex-direction: column;
}











</style>

