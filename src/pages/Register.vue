 <template>
 
    <v-main class="grey lighten-5">
        
     
    
        
      
        <v-container fluid>
 
 
 
 
            <v-card
    
    width="10000px"
  >
    
   
  </v-card>
 
 
 
 
 
 
 
 
 
 
          
     
 
        
 
          <v-card>
            <v-toolbar  v-if='start'
          color="green"
              dark
               
            >Registrar</v-toolbar>
            
          <v-toolbar  v-else
          color="green"
              dark
               
            >Registrar Endereço</v-toolbar>
        <div v-if="start">
            <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field class="mx-4"
            v-model="cliente.nome"
            
            label="Nome"
            required
          ></v-text-field>
        </v-col>
 
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field class="mx-4"
            v-model="cliente.email"
            
            label="email"
            required
          ></v-text-field>
        </v-col>
        
      </v-row>
        </div>
 
        <div v-else>
 
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
 
 
            
 
 
          </div>
          
 
            <v-card-actions class="justify-end">
              <v-btn v-if=start
                text
                @click="addUser()"
                
                
              >Registrar</v-btn>
 
              <v-btn v-else
                text
                @click="addAddress()"
                
                
              >Registrar Endereço</v-btn>
            </v-card-actions>
          </v-card>
        
 
    </v-container>
 
        
 
       
      
      
 
 
 
 
 
 
 
 
 
    </v-main>
</template> 
 
<script>
 
import axios from 'axios';
 
 
export default {
    name: 'Register',
    data () {
      return {
       
        cliente:{
          nome:'',
          email:''
 
        },
         start: true,
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
      addUser: function()
      {
        
 
        
      
        const api = axios.create({
        baseURL:'https://192.168.0.112:8080'
        });
        api.post('/addCliente' ,{
 
      "nome":this.cliente.nome, "email":this.cliente.email, "vendedor":0
      
 
 
 
    },{headers: {
        'Authorization' : this.$store.state.user.token
      }
    }).then(response => {
            
            console.log((response))
             this.start = false;
            
             
        });
      },
      addAddress: function()
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
            
            console.log(response);
             this.$router.push({ path: '/home' })
            
             
        });
      }
    },
 
    
   
  
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
 
 

