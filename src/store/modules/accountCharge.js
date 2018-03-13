
const state = {
    accountCharge: 3000,
};

const mutations = {
    'CHARGE_ACCOUNT'(state, price) {
        state.accountCharge += price;
    },
    'DECHARGE_ACCOUNT'(state, price) {
        state.accountCharge -= price;
    }
};

const actions = {
   chargeAcc({commit}, price) {
    commit('CHARGE_ACCOUNT', price);
   },
   dechargeAcc({commit}, price) {
    commit('DECHARGE_ACCOUNT', price);
   }
};

const getters = {
   getCharge(state) {
       return state.accountCharge;
   }
};

export default {
    state,
    actions,
    mutations,
    getters,

}