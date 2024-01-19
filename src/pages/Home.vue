<template>
    <v-main class="grey lighten-5">
        
            <v-container fluid >
            <v-sheet class= "d-flex flex-column align-center" elevation="2"   >
                
            <span>
                Seu endereço
            </span>
         
            <v-select
            
          :items="Array.from(this.$store.state.user.enderecos.values())"
          item-value="id"
          v-model="endAtual"
          solo
          v-on:change="binding"
          
        >
        
        
        <template v-slot:item="{item}">
          
          
          {{item.rua}}, {{item.numero}}
          
        </template> 

         <template v-slot:selection="{item}">
           
           
          {{item.rua}}, {{item.numero}}
        </template>

        </v-select>
       
        
       
                
            </v-sheet>
           </v-container>
       
   
        <v-container  fluid>
        
            <v-card
    
    width="10000px"
  >
    
   
  </v-card>
        <div >
        <v-container fluid>
   
      <v-row dense v-for="(store,index) in stores" :key="index">
        <v-col class="cards">
        <Card  :nome="store.nome" :descricao="store.descricao" :id="store.id" /> 
       
        </v-col>
      </v-row>
    </v-container>

        </div>

        </v-container>
      

        








    </v-main>
    
</template> 

<script>
import Card from '../components/Card.vue'
import axios from 'axios'


export default {
    name: 'Home',
    data () {
      return {
        items: [
          {
            src: 'https://192.168.0.112:8081/veduras1.jpg',
          },
          {
            src:'https://192.168.0.112:8081/verduras2.jpg',
          },
        ],
        stores: [],
        endAtual:-1,
        

        
        
      }
    },
    components:{
        Card,
    },
    methods:
    {
      binding:function()
      {
        this.$store.commit("setEndAtual",this.endAtual);
      }
    },
    mounted(){
      console.log("teste");
       if(this.$store.state.user.token === '')
           this.$router.push({ path: '/' })
        const api = axios.create({
        baseURL:'https://192.168.0.112:8080'
        }


        );
        api.get('/getEstabelecimentos',{headers: {
        'Authorization' : this.$store.state.user.token
      }
    },).then(response => {
            
            
             this.stores = response.data;
             
            
             
        });

        api.get('/getEnderecos',{headers: {
        'Authorization' : this.$store.state.user.token
      }
    },).then(response => {
            
           
            
             if(response.data.length !== 0)
             {
                this.$store.commit("addEnderecos",response.data);
                this.endAtual = this.$store.state.user.endAtual;
             }
            
             
             
        });

        api.get('/getCliente',{headers: {
        'Authorization' : this.$store.state.user.token
      }
    },).then(response => {
            
            
             if(response.data !== '')
             {
                this.$store.commit("setUserAtual",response.data.id);
             }
            
            
            
             
        });

    
}

}
</script>

