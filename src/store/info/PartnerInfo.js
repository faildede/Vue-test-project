import axios from "axios"
export default {
    actions:{
        async fetchPartner(result){
            const res = await axios.get("http://localhost:3001/ImageInfo");
            const NewPartner = res.data;
            result.commit('AddPartner',NewPartner )
        }
    },
    mutations:{
        AddPartner(state, NewPartner){
            state.ImageInfo = NewPartner
        }
    },
    state:{
        ImageInfo:[]
    },
    getters:{
        Pinfo(state){
            return state.ImageInfo
        }
    }
}