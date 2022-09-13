import { createStore } from 'vuex'

const state = {
    form: {
        name: '',
        last_name: '',
        phone: '',
        document_type: 'dni',
        document_number: null,
        email: ''
    }
}

const getters = {
    getForm: state => state.form
}

const actions = {
    setForm: ({ commit }, payload) => {
        commit('SET_FORM', payload)
    },
}

const mutations = {
    SET_FORM: (state, payload) => {
        state.form = payload
    },
}



export default createStore({
    state,
    getters,
    actions,
    mutations
})