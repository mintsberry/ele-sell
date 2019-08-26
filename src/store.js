import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    carts: [
      { 
        price: 10,
        count: 5 
      },
      { 
        price: 10,
        count: 6
      }
    ]
  },
  mutations: {

  },
  getters: {
      getTotalCount(state){    
        let count = 0;
        state.carts.forEach(element => {
          count += element.count;
        });
        return count;
      }
  }
})