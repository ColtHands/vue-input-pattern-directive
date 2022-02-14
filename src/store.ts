import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    actions: {
        test({}, payload) {
            console.log('test store', payload)
        }
    }
})