<template>
<v-main>
<v-toolbar dense>
      <v-btn icon>
        <v-icon class="material-icons-round">account_circle</v-icon>
      </v-btn>
    <span>{{nome}}</span>
     
    </v-toolbar>

    <v-container fluid>
        <v-row class="d-flex flex-column ">
            <div v-for="(option,index) in options" :key="index">
            <v-col>
                <div class="d-flex">
                    <v-btn text v-on:click="navigate(option.text)">
                <v-icon class="material-icons-round">{{option.icon}}</v-icon>
               <span class = "ml-2"> {{option.text}} </span>
                    </v-btn>
               </div>
                <v-divider></v-divider>
            </v-col>
            </div>
        
        </v-row>
    </v-container>
    </v-main>
</template> 

<script>

import axios from 'axios'

export default {
    
    name: 'Profile',
    data(){
        return{
            options: [{icon:"payment", text:"Forma de Pagamento"},
                      {icon:"person_pin_circle  ", text:"Endereços"},
                      {icon:"help", text:"Ajuda"},
                      {icon:"settings", text:"Configurações"},
                      {icon:"exit_to_app", text:"Sair"}
                      
                    ],
            nome:''
        }
    },
    methods:
    {
      navigate: function(text)
      {
        if(text === 'Endereços')
       this.$router.push({ path: '/addresses' })  
       else if(text === 'Sair')
       {
         this.$store.commit("logOut");
         this.$router.push({ path: '/' })  
       }
      }
    },
    mounted(){
        const api = axios.create({
        baseURL:'https://192.168.0.112:8080'
        });
        api.get('/getCliente',{headers: {
        'Authorization' : this.$store.state.user.token
      }
    },).then(response => {
            
            console.log(response.data)
             this.nome = response.data.nome;
            
             
        });

    
}

}
</script>

<style scoped>



</style>