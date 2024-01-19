<template>

    <v-main class="grey lighten-5">
        
      
      <v-app-bar  dense fixed>
          <v-btn class="button" icon to='/'>
           
            <v-icon class="material-icons-round">arrow_back</v-icon>
          </v-btn>
          <span>Minha Sacola</span>
        </v-app-bar>
    
        
      
        <v-container fluid>




            <v-card
    
    width="10000px"
  >
    
   
  </v-card>










          
      <v-row dense  v-for="(product,index) in this.$store.state.cart.product.values()" :key="index">
        <v-col class="cards">
        <CardCart  :id ="product.id" :nome="product.name"  :preco="product.price" :quantity="product.quantity" :estabelecimento="product.estabelecimento" @remove="remove($event)"/> 
       
        </v-col>
      </v-row>
    </v-container>

        

       
      
      <v-bottom-navigation app background-color="#32A852">
        <div class="d-flex align-center">
          <v-chip class="mx-4">R${{total}}</v-chip> 

        


        <v-dialog
        max-width="600"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on:click="send"
            v-on="on"
          >Finalizar pedido</v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="green"
              dark
            >Pedido finalizado!</v-toolbar>
            <v-card-text>
              <div class="text-h2 pt-12">Pedido feito com sucesso!</div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false; removeAll()"
                
                
              >Ok</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>








        
       
        </div>
        
      </v-bottom-navigation>









    </v-main>
</template> 

<script>
import CardCart from '../components/CardCart.vue'
import axios from 'axios';


export default {
    name: 'Cart',
    data () {
      return {
        total: 0,
        lista: '',
      }
    },
    components:{
        CardCart
    },
    methods:{
      count: function()
      {
        this.total = 0;
        for(let product of this.$store.state.cart.product.values())
        {
          this.total+=(product.price*product.quantity);
        }
      },
      remove: function(id)
      {
        this.$store.commit("removeProduct",id);
        this.count();
      },
      removeAll: function()
      {
        
        this.$store.commit('removeAll');
        this.$router.push({ path: '/' })  
      },
      send: function()
      {
        this.lista = '';
        this.lista+='[';
        for(let product of this.$store.state.cart.product.values())
        {
          this.lista+='{'
          this.lista+='"idproduto":'
          this.lista+=`"${product.id}"`
          this.lista+=','
          this.lista+='"quantidade":'
          this.lista+=`"${product.quantity}"`
          this.lista+='},'
          
        }
        this.lista = this.lista.substring(0, this.lista.length-1);
        this.lista+=']';

        
      
        const api = axios.create({
        baseURL:'https://192.168.0.112:8080'
        });
        api.post('/addPedido' ,{

      "pedido":{"idcliente":this.$store.state.user.userAtual, "idendereco":this.$store.state.user.endAtual,"data":new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString(),"formapagamento":"DN","frete":"0","precototal":this.total.toString()},"lista":JSON.parse(this.lista)




    },{headers: {
        'Authorization' : this.$store.state.user.token
      }
    }).then(response => {
            
            
             this.products = response.data;
            
             
        });
      }
    },
   
    mounted(){
        this.count();
        
    
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

