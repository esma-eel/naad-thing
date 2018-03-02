import studentDetails from '../../data/studentDetails';

const state = {
    stDetail : studentDetails[0],
};

const mutations = {
   
};

const actions = {
    

};

const getters = {
    stDetail: (state) => {
        return state.stDetail;
    },
};

export default {
    state,
    actions,
    mutations,
    getters,

}