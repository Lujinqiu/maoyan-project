import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store =new vuex.storte({

    state:{
       
        currentView:Xpanel
    },
    
    mutaions:{
        increment(state){
            state.currentView=Xpanel2
        }
    }
})

// export default store