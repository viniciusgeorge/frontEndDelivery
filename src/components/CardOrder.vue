  <template>
    
     <v-card class="my-10"   >
  

    

        <v-card-title>Pedido</v-card-title>

      <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-divider></v-divider>
      </v-row>

      <div class="my-4 text-subtitle-1"  v-for="(product,index) in lista" :key="index">
         {{product.nomeproduto}}  • x{{product.lista.quantidade}}
      </div>

      <div>{{new Date(data)}} • R${{preco}} • Concluído.</div>
     </v-card-text>

   

     
     </v-card>
     
     </template>


<script>

  export default {
    name: 'CardOrder',
    props:{
      data:{
        type: String,
      },
      lista:{
        type: Array
      },
      preco:{
        type: Number
      }
    },
   
   
   

}
</script>

<style scoped>



</style>
  