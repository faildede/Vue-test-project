import axios from "axios";
export default {
    actions: {
        async fetchinfo(result){
            const res = await axios.get('http://localhost:3001/information');
            const NewInfo = res.data;
            result.commit('AddInfo',NewInfo )
        }
    },
    mutations: {
        AddInfo(state,NewInfo){
            state.information = NewInfo
        }
    },
    state: {
        information:[]
    },
    getters: {
        NInfo(state){
            return state.information
        }
    },

}