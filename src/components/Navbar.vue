<template>


<v-bottom-navigation grow app class="bottom-bar" background-color="#32A852">
    
    <v-btn class="button" icon to="/">
        
        <span>Home</span>
        <v-icon large class="material-icons-round" >home</v-icon>
        
    </v-btn>
    
    
    <v-btn class="button" icon to="/search">
        
        <span>Busca</span>
        <v-icon large class="material-icons-round">search</v-icon>
        
    </v-btn>
  
    <v-btn class="button" icon to='/orders'>
        <span>Pedidos</span>
        <v-icon large class="material-icons-round">receipt_long</v-icon>
    </v-btn>
    <v-btn class="button" icon to="/profile">
        <span>Perfil</span>
        <v-icon large class="material-icons-round">person</v-icon>
    </v-btn>
    
    
    
   
</v-bottom-navigation>


</template> 

<script>




export default {
    name: 'Navbar',

}
</script>

<style scoped>

.bottom-bar
{
    width:100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    
}

.bottom-bar .button span{
    margin-top: 3px;
}



</style>