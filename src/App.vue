<template>
  <div id="app">
    
    <v-app>
    
    
    <router-view />
 


   
    <div v-if="(!this.$route.path.includes('store') && !this.$route.path.includes('cart') && !this.$route.path.includes('login') && !this.$route.path.includes('register') && this.$store.state.user.token !=='' ) ">
     
     
      
       <Navbar />
       
        
    </div>
<v-btn v-if="(this.$route.path.includes('/'))"
                  class="button"
                  
                  fab
                  dark
                  right
                  absolute
                  fixed
                  to="/cart"
                  
                >
                  <v-icon large class="material-icons-round">shopping_bag</v-icon>
                </v-btn>







  <v-snackbar  :value="updateExists" :timeout="-1" >
   Uma atualização está disponível
  <v-btn text color=" green" @click="refreshApp">
    Atualizar
  </v-btn>
</v-snackbar>



    </v-app>
    
  </div>
</template>

<script>

import './styles/global.css';
import Navbar from './components/Navbar.vue'
import update from './mixins/update'


export default {
  name: 'App',
  components: {
    Navbar,
    
   
    
  },
 mixins: [update],
data(){
  return{
    dialog:false
  }
}
}
</script>


<style scoped>

.button{
   margin-top: 620px;
    
}











</style>