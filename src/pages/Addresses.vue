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










          
      <v-row dense  v-for="(address,index) in this.addresses" :key="index">
        <v-col class="cards">
        <CardAddresses  :id ="address.id" :rua="address.rua"  :numero="address.numero" :cep="address.cep" :bairro="address.bairro" :cidade="address.cidade" :estado="address.estado" :referencia="address.referencia"/> 
       
        </v-col>
      </v-row>

        

       <v-dialog
        
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            class=~mt-10
            v-on="on"
            color="green"
          >Adicionar Endereço</v-btn>
        </template>
        <template v-slot:default="dialog"  >
          <v-card  class="pr-3">
            <v-toolbar  
          color="green"
              dark
               
            >Adicionar Endereço</v-toolbar>
            

           <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field class="mx-4"
            v-model="address.rua"
            
            label="Rua"
            required
          ></v-text-field>
        </v-col>
 
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field class="mx-4"
            v-model="address.numero"
            
            label="Numero"
           
            required
          ></v-text-field>
        </v-col>
 
 
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field class="mx-4"
            v-model="address.cep"
            
            label="CEP"
            required
          ></v-text-field>
        </v-col>
        
      </v-row>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field class="mx-4"
            v-model="address.bairro"
            
            label="Bairro"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-select class="mx-4"
            
          :items="estados.data"
          item-value="Uf"
          v-model="address.estado"
          solo
          v-on:change="selectUF"
          label="Estado"
          
        >
        
        
        <template v-slot:item="{item}">
          
          
          {{item.Uf}}
          
        </template> 
 
        <template v-slot:selection="{item}">
           
           
          {{item.Uf}}
        </template>
 
        </v-select>
        </v-col>
 
        <v-col
          cols="12"
          md="4"
        >
          
 
 
 
        <v-select class="mx-4"
            
          :items="cidadesUF"
          item-value="Nome"
          v-model="address.cidade"
          solo
          label="Cidade"
          
          
        >
        
        
        <template v-slot:item="{item}">
          
          
          {{item.Nome}}
          
        </template> 
 
        <template v-slot:selection="{item}">
           
           
          {{item.Nome}}
        </template>
 
        </v-select>
 
          
 
 
 
        </v-col>
      </v-row>
 
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field class="mx-4"
            v-model="address.referencia"
            
            label="Referência"
            required
          ></v-text-field>
        </v-col>
      </v-row>



            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false; add()"
                
                
              >Ok</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>

    </v-container>

        

       
      
      <v-bottom-navigation app background-color="#32A852">
        
        
      </v-bottom-navigation>









    </v-main>
</template> 

<script>
import CardAddresses from '../components/CardAddresses.vue'
import axios from 'axios';


export default {
    name: 'Addressses',
    data () {
      return {
        addresses: [],
        address:{
          rua:'',
          numero:'',
          cep:'',
          bairro:'',
          cidade:'',
          estado:'',
          referencia:''

        },
        estados: require('../assets/estados.json'),
        cidades: require('../assets/cidades.json'),
        cidadesUF: []
      }
    },
    components:{
        CardAddresses
    },
    methods:
    
    {
      selectUF: function()
      {
        this.cidadesUF = [];
        for (let cidade of this.cidades.data)
        {
          if(cidade.Uf === this.address.estado)
          {
            this.cidadesUF.push(cidade);
          }
        }
      },
      add: function()
      {
        

        
      
        const api = axios.create({
        baseURL:'https://192.168.0.112:8080'
        });
        api.post('/addEndereco' ,{

      "idcliente":this.$store.state.user.userAtual, "cep":this.address.cep, "rua":this.address.rua, "bairro":this.address.bairro, "cidade":this.address.cidade, "estado":this.address.estado, "referencia":this.address.referencia, "numero":this.address.numero
      



    },{headers: {
        'Authorization' : this.$store.state.user.token
      }
    }).then(response => {
            
            
             console.log(response)
              const api = axios.create({
        baseURL:'https://192.168.0.112:8080'
        });
        api.get('/getEnderecos',{headers: {
        'Authorization' : this.$store.state.user.token
      }
    },).then(response => {
            
            
             this.addresses = response.data;
             
            
             
        });
            
             
        });
      }
    },
 
    
   
    mounted(){
        
        const api = axios.create({
        baseURL:'https://192.168.0.112:8080'
        });
        api.get('/getEnderecos',{headers: {
        'Authorization' : this.$store.state.user.token
      }
    },).then(response => {
            
            
             this.addresses = response.data;
             
            
             
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

