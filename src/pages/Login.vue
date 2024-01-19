<template>

    <v-main class="grey lighten-5">
        
      
      
    
        
      
        <v-container fluid>




            <v-card
    
    width="10000px"
  >
    
   
  </v-card>










          
      

        

      
          <v-card  >
            <v-toolbar  
          color="green"
              dark
               
            >Login</v-toolbar>
            

            <v-row>
        <v-col v-if="start"
          cols="12"
          md="4"
        >
          <v-text-field class="mx-4"
            v-model="numero"
            counter="11"
            placeholder="(XX)XXXXX-XXXX"
            label="Digite seu Número de telefone"
            required
          ></v-text-field>
        </v-col>

        <v-col v-else
          cols="12"
          md="4"
        >
          <v-text-field class="mx-4"
            v-model="codigo"
            
            :label="message"
            required
          ></v-text-field>
        </v-col>


      </v-row>
      

      



            <v-card-actions class="justify-end">
              <v-btn v-if="start"
                text color="green "
                @click="getCode(), snackbar = true, start = false"
                
                
              >Solicitar código</v-btn>
              <div v-else>

              <v-btn 
                text color="blue " 
                @click="start = true"
                
                
              >voltar</v-btn>

              <v-btn 
                text color="green "
                @click="login()"
                
                
              >Entrar</v-btn>



              </div>
            </v-card-actions>
          </v-card>
     

        </v-container>

        

       
      








    <v-snackbar
      v-model="snackbar"
    >
    Seu código de verificação é: {{ this.codigo }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="green"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          OK
        </v-btn>
      </template>
    </v-snackbar>

    </v-main>



  

</template> 

<script>

import axios from 'axios';


export default {
    name: 'Login',
    data () {
      return {
        numero:'',
        codigo:'',
        snackbar: false,
        start: true,
        numCodigo:''
        
      }
    },
    computed:{
        message: function() {
          return "Digite o código de verificação para o número " + this.numCodigo
        } 
    },
    methods:
    {
      getCode: function()
      {
        this.numCodigo = this.numero;
        this.numero=''
        






      
        const api = axios.create({
        baseURL:'https://192.168.0.112:8080'
        });
        api.post('/getCode' ,{ "code":this.numCodigo }).then(response => {
            
            
             this.codigo = response.data;
             this.codigo = this.codigo.toString();
             
            
             
        });
      },

      login: function()
      {
        
          
        console.log(this.numCodigo);
             console.log(this.codigo);
      
        const api = axios.create({
        baseURL:'https://192.168.0.112:8080'
        });
        api.post('/login' ,{ "username":this.numCodigo, "password":this.codigo
      



    }).then(response => {
            
            var token = response.headers.authorization.toString().split(' ')[1];
            console.log(token.length);
             if(token.length === 159)
             {
               this.$store.commit("setToken", token);
               console.log(this.$store.state.user.token);
               
             }
            

            api.get('/getCliente',{headers: {
        'Authorization' : this.$store.state.user.token
      }
    },).then(response => {
            
            console.log(response);
            if(response.data === '')
            {
              this.register();
            }
            else{
              this.isLogged();
            }
            
             
        });
            
             
        });
      },

      isLogged: function()
      {
        if(this.$store.state.user.token !== '')
           this.$router.push({ path: '/home' })
       
           
      },
      register: function()
      {
        this.$router.push({ path: '/register' })
      }
    },
   
      mounted()
      {
        if(this.$store.state.user.token !== '')
           this.$router.push({ path: '/home' })
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

