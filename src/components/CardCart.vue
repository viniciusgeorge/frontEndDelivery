  <template>
     <v-card class="mt-12"   >
  

    

        <v-card-title>{{quantity}}x {{nome}}</v-card-title>

      <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        
      ({{estabelecimento}})
        
      </v-row>

      <div class="my-4 text-subtitle-1">
        R$ • {{preco}}
      </div>

     
     </v-card-text>
     <v-card-actions>
    <v-btn color="red" text v-on:click="remove">
      Remover
    </v-btn>
     </v-card-actions>
   

     
     </v-card>
     </template>


<script>

  export default {
    
    name: 'CardProduct',
    props:{
      nome:{
        type: String,
      },
      quantity:{
        type: Number
      },
      preco:{
        type: Number
      },
      id:{
        type: Number
      },
      estabelecimento:{
        type: String
      }
    },
    methods:{
      remove:function()
      {
        this.$emit("remove",this.id)
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
