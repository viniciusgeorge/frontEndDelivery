  <template>
     <v-card class="mt-12"   >
  

    

        <v-card-title>{{nome}}</v-card-title>


      <v-img
      height="250"
      width="250"
      :src="src"
    ></v-img>
    
      <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
       

        <div class="grey--text ms-4">
          
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        R$ • {{preco}}
      </div>

      <div>{{descricao}}</div>
     </v-card-text>

   

     <v-card-actions>
       <v-chip label outlined class="chip">
         {{this.order.quantity}}
       </v-chip>
       <v-btn icon v-on:click="add">
         <v-icon class="material-icons-round">add</v-icon>
       </v-btn>
       <v-btn icon v-on:click="sub">
         <v-icon class="material-icons-round">remove</v-icon>
       </v-btn>
       
     
     </v-card-actions>
     </v-card>
     </template>


<script>

  export default {
    data () {
      return {
        
        order: {id:this.id,quantity:0,price:this.preco,name:this.nome, estabelecimento:this.estabelecimento},
        src: "https://192.168.0.112:8081/" + this.caminho,
      }
    },
    name: 'CardProduct',
    props:{
      nome:{
        type: String
      },
      descricao:{
        type: String
      },
      preco:{
        type: Number
      },
      id:{
        type: Number
      },
      caminho:{
        type: String
      },
      estabelecimento:{
        type: String
      }
    },
    methods:
    {
      add: function(){
        if(this.order.quantity!== 99)
        {
          this.order.quantity++;
          
          this.$emit("add",this.order)
        }
          
      },
      sub: function(){
        if(this.order.quantity!== 0)
        {
           this.order.quantity--;
           this.$emit("sub",this.order)
        }
         
      }
      
    }


}
</script>

<style scoped>



.entrada{
  width:25px;
}

.entrada >>> input{
  text-align:center;
}

::v-deep input::-webkit-outer-spin-button,
::v-deep input::-webkit-inner-spin-button {
-webkit-appearance: none;
margin: 0;
}

</style>
