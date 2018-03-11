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
    },
    'DELETE_CHOSED_UNIT' (state, unitsToDelete) {
        if (unitsToDelete.length > 0) {
            for (let i = state.chosedUnits.length - 1; i >= 0; i--) {
                for (let j = unitsToDelete.length - 1; j >= 0; j--) {
                    if (state.chosedUnits[i] === unitsToDelete[j]) {
                        state.chosedUnits.splice(i, 1);
                        unitsToDelete.splice(j, 1);
                    }
                }
            }
        }
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
    setChosedUnits({
        commit
    }, choosen) {

        commit('SET_CHOSED_UNITS', choosen);
    },
    deleteSelectedUnit({
        commit
    }, unitsToDelete) {

        commit('DELETE_CHOSED_UNIT', unitsToDelete);
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