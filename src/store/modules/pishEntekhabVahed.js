import vahedHaBarayePishEntekhabVahed from '../../data/pishEntekhabVahed.js';

const state = {
    pishVahedHa: [],
    chosedPishVahedHa: [],
};

const mutations = {
    'INIT_PISHVAHEDHA' (state, pv) {
        state.pishVahedHa = pv;
    },
    'ADD_CHOSEDPISHVAHED' (state, pva) {
        state.chosedPishVahedHa.push(pva);
    },
    'DELL_CHOSEDPISHVAHED' (state, pvd) {
        if (pvd.length > 0) {
            for (let i = state.chosedPishVahedHa.length - 1; i >= 0; i--) {
                for (let j = pvd.length - 1; j >= 0; j--) {
                    if (state.chosedPishVahedHa[i] === pvd[j]) {
                        state.chosedPishVahedHa.splice(i, 1);
                        pvd.splice(j, 1);
                    }
                }
            }
        }
    },
};

const actions = {
    initPishVahedha({commit}) {
        commit('INIT_PISHVAHEDHA', vahedHaBarayePishEntekhabVahed);
    },

    addChosedPish({commit}, pva) {
        commit('ADD_CHOSEDPISHVAHED', pva);
    },
    dellChosedPish({commit}, pvd) {
        commit('DELL_CHOSEDPISHVAHED', pvd);
    }
};

const getters = {
    getPishVahedha: (state) => {
        return state.pishVahedHa;
    },
    getChosedPishVahedha: (state) => {
        return state.chosedPishVahedHa;
    },
};

export default {
    state,
    actions,
    mutations,
    getters,

}