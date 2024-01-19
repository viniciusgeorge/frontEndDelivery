import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})


export default new Vuex.Store({
  state: {
    cart:{
      product: new Map()
    },
    user:{
      enderecos: new Map(),
      endAtual:-1,
      userAtual:'',
      token:'',
     
    },
    estabelecimentoAtual:''
  },
  mutations: {
    setEstabelecimentoAtual(state,nome)
    {
      state.estabelecimentoAtual = nome;
    },
    addProduct(state,product)
    {
      state.cart.product.set(product.id,product)
    },

    removeProduct(state,id)
    {
      state.cart.product.delete(id);
    },
    removeAll(state)
    {
      
      state.cart.product.clear();
    },
    addEnderecos(state, enderecos)
    {
      for(let addr of enderecos)
      {
        state.user.enderecos.set(addr.id,addr);
      }
     
      if(state.user.endAtual === -1){
        
        state.user.endAtual = enderecos.values().next().value.id;
      }
    },
    setEndAtual(state, endereco)
    {
      state.user.endAtual=endereco;
    },

    setUserAtual(state, userAtual)
    {
      state.user.userAtual=userAtual;
    },

    setToken(state, token)
    {
      state.user.token = token;
    },
    logOut(state)
    {
      state.user.token='';
      state.user.endAtual = -1,
      state.user.userAtual='',
      state.user.enderecos.clear();
      

    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
