  <template>
     <v-card class="my-10"   >
  

    

        <v-card-title>{{nome}}</v-card-title>

      <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        $ • Verdes
      </div>

      <div>{{descricao}}</div>
     </v-card-text>

   

     <v-card-actions>
      <v-btn
        color="green"
        text
        v-on:click="navigate"
      >
        Entrar
      </v-btn>
     </v-card-actions>
     </v-card>
     </template>


<script>

  export default {
    name: 'Card',
    props:{
      nome:{
        type: String,
      },
      descricao:{
        type: String
      },
      id:{
        type: Number
      }
    },
    methods:
    {
      navigate: function()
      {
        this.$store.commit("setEstabelecimentoAtual", this.nome);
        this.$router.push({ path: `/store/${this.id}` })  
      }
    }


}
</script>

<style scoped>



</style>
  