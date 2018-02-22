import lessonDateOriginal from '../../data/vaheds';
import lessonColumnsOriginal from '../../data/lesseonColumns';

const state = {
    lessonDate: [],
    lessonColumns: [],
    chosedUnits: [],
};

const mutations = {
    'SET_LESSON_DATA' (state, lessonDate) {
        state.lessonDate = lessonDate;
    },

    'SET_LESSON_COLUMNS' (state, lessonColumns) {
        state.lessonColumns = lessonColumns;
    },
    'SET_CHOSED_UNITS' (state, chosedUnits) {
        chosedUnits.forEach(element => {
            state.chosedUnits.push(element)
        });
        //state.chosedUnits = chosedUnits;
    }
};

const actions = {
    initLessonData({
        commit
    }) {
        commit('SET_LESSON_DATA', lessonDateOriginal);
    },
    initlessonColumns({
        commit
    }) {
        commit('SET_LESSON_COLUMNS', lessonColumnsOriginal);
    },
    setChosedUnits({commit}, choosen) {
        
        commit('SET_CHOSED_UNITS', choosen);
    }

};

const getters = {
    lessonData: (state) => {
        return state.lessonDate;
    },
    lessonColumns: (state) => {
        return state.lessonColumns;
    },
    chosedUnits(state) {
        return state.chosedUnits;
    }
};

export default {
    state,
    actions,
    mutations,
    getters,

}