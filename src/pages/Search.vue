<template>
<v-main>
<v-toolbar dense>
      
      <v-text-field single-line placeholder="Buscar" v-model="searchInput"></v-text-field>
     <v-btn icon v-on:click="searchAction">
        <v-icon class="material-icons-round">search</v-icon>
      </v-btn>
    </v-toolbar>
   


    <div >
        <v-container fluid v-if="stores.lenght !== 0">
      <v-row dense v-for="(store,index) in stores" :key="index">
        <v-col class="cards">
        <Card  :nome="store.nome" :descricao="store.descricao" :id="store.id"/> 
       
        </v-col>
      </v-row>
    </v-container>

        </div>


    </v-main>

    


</template> 

<script>
import Card from '../components/Card.vue'
import axios from 'axios'


export default {
    name: 'Search',
    data(){
        return{
            searchInput:'',
            stores: []
        }
    },
    components:{
        Card,
    },
    methods:{
      searchAction: function()
    {
      if(this.searchInput !== '')
      {
        const api = axios.create({
        baseURL:'https://192.168.0.112:8080'
        });
        api.get(`/searchEstabelecimentos/${this.searchInput}`,{headers: {
        'Authorization' : this.$store.state.user.token
      }
    },).then(response => {
            
            
             this.stores = response.data;
            
             
        });
      }
      else{
        this.stores = [];
      }
      
    }
    }

}
</script>

<style scoped>



</style>