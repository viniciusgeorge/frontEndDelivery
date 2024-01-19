<template>
<header>
<v-app-bar  dense fixed>
          <v-btn class="button" icon to='/'>
           
            <v-icon class="material-icons-round">arrow_back</v-icon>
          </v-btn>
        </v-app-bar>
          
</header>
</template> 

<script>



export default {
    name: 'Topbar',

}
</script>

<style scoped>
header{
    
    width:100%;
    height:60px;
    display: flex;
    justify-content: center;
    align-items: center;
}


</style>