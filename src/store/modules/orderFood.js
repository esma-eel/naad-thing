import mainFoodList from '../../data/mainFoodList.js';

const state = {
    mainFoods: [],
    orderedFood: [],
};

const mutations = {
    'INIT_FOODS' (state, foods) {
        state.mainFoods = foods;
    },
    'ORDER_FOOD' (state, orderFood) {
        state.orderedFood.push(orderFood);
    },
};

const actions = {
    initFoods({commit}) {
        commit('INIT_FOODS', mainFoodList);
    },

    reserveFood({commit}, food) {
        commit('ORDER_FOOD', food);
    },
};

const getters = {
    getFoodsList: (state) => {
        return state.mainFoods;
    },
    getOderedFood: (state) => {
        return state.orderedFood;
    },
};

export default {
    state,
    actions,
    mutations,
    getters,

}