const state = {
    selectThemeOptions: [{
            name: 'آسمانی',
            class: 'my-info',
            id: 1,
            selected: true,
        },
        {
            name: 'مشکی - پیشفرض',
            class: 'is-dark',
            id: 2,
            selected: false,
        },
    ],
    theme: {
        name: 'مشکی - پیشفرض',
        class: 'is-dark',
        id: 2,
        selected: false,
    },
};

const mutations = {
    'SET_THEME' (state, themeName) {
        state.theme = themeName;
    }
};

const actions = {
    setTheme({
        commit
    }, themeName) {
        commit('SET_THEME', themeName);
    }

};

const getters = {
    theme: (state) => {
        return state.theme;
    },
    selectThemeOptions(state) {
        return state.selectThemeOptions;
    }
};

export default {
    state,
    actions,
    mutations,
    getters,

}