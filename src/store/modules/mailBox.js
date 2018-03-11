import mailBoxMails from '../../data/mailBoxMails.js';

const state = {
    Mails: [],
};

const mutations = {
    'INIT_MESSAGES' (state, mails) {
        state.Mails = mails;
    },

    'SEND_MAIL' (state, newMail) {
        state.Mails.push(newMail);
    },
    'DELETE_MAIL' (state, deleteMail) {
        if (deleteMail) {
            state.Mails.forEach((element, indix) => {
                if (element === deleteMail) {
                    state.Mails.splice(indix, 1);
                }
            })

        }
    },
};

const actions = {
    initMessages({commit}, ) {
        commit('INIT_MESSAGES', mailBoxMails);
    },
    sendMail({commit}, newMail) {
        commit('SEND_MAIL', newMail);
    },
    deleteMail({commit}, deleteMail) {
        commit('DELETE_MAIL', deleteMail);
    }

};

const getters = {
    getMails: (state) => {
        return state.Mails;
    }
};

export default {
    state,
    actions,
    mutations,
    getters,

}