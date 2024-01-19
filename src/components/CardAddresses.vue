  <template>
     <v-card class="my-10"   >
  

    

        <v-card-title>Rua {{this.ruaVar}}, {{this.numeroVar}}</v-card-title>

      <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <div class="text-subtitle-1">
          {{this.bairroVar}}, {{this.cidadeVar}}, {{this.estadoVar}}
        </div>

        <div class="grey--text ms-4">
          CEP: {{this.cepVar}}
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        {{this.referenciaVar}}
      </div>

      
     </v-card-text>

   

     <v-card-actions>
      




     <v-dialog
        
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
           
            v-on="on"
            color="green"
            text
          >Editar</v-btn>
        </template>
        <template v-slot:default="dialog"  >
          <v-card  class="pr-3">
            <v-toolbar  
          color="green"
              dark
               
            >Editar Endereço</v-toolbar>
            

            <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field class="mx-4"
            v-model="ruaVar"
            
            label="Rua"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="numeroVar"
            
            label="Numero"
            required
          ></v-text-field>
        </v-col>


        <v-col
          cols="12"
          md="4"
        >
          <v-text-field class="mx-4"
            v-model="cepVar"
            
            label="CEP"
            required
          ></v-text-field>
        </v-col>
        
      </v-row>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field class="mx-4"
            v-model="bairroVar"
            
            label="Bairro"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="cidadeVar"
            
            label="Cidade"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field class="mx-4"
            v-model="estadoVar"
            
            label="Estado"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field class="mx-4"
            v-model="referenciaVar"
            
            label="Referência"
            required
          ></v-text-field>
        </v-col>
      </v-row>



            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false; edit()"
                
                
              >Ok</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>








      <v-btn
        color="red"
        text
        
      >
        Remover
      </v-btn>
     </v-card-actions>
     </v-card>
     </template>


<script>
import axios from 'axios'
  export default {
    name: 'CardAddresses',
    props:{
      rua:{
        type: String
      },
      id:{
        type: Number
      },
      numero:{
        type: String
      },
      cep:{
        type: String
      },
      bairro:{
        type: String
      },
      cidade:{
        type: String
      },
      estado:{
        type: String
      },
      referencia:{
        type: String
      }

    },
     data(){
        return{
            idVar: this.id,
            ruaVar: this.rua,
            numeroVar: this.numero,
            cepVar: this.cep,
            bairroVar: this.bairro,
            cidadeVar: this.cidade,
            estadoVar: this.estado,
            referenciaVar: this.referencia
           
        }
    },
    methods:
    {
      edit:function()
      {
        

        
      
        const api = axios.create({
        baseURL:'http://192.168.0.112:8080'
        });
        api.put('/updateEndereco' ,{

      "id":this.idVar,"idcliente":this.$store.state.user.userAtual, "cep":this.cepVar, "rua":this.ruaVar, "bairro":this.bairroVar, "cidade":this.cidadeVar, "estado":this.estadoVar, "referencia":this.referenciaVar, "numero":this.numero
      



    },{headers: {
        'Authorization' : this.$store.state.user.token
      }
    }).then(response => {
            
            
             this.products = response.data;
            
             
        });
      }
    }


}
</script>

<style scoped>



</style>
  