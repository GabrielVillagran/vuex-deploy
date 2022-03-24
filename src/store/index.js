import { createStore } from 'vuex'

export default createStore({
    state: {
        counter: 0
    },
    getters: {
        sqr(state) {
            return state.counter * state.counter;
        }
    },
    // Las mutaciones modifican el codigo
    mutations: {
        subCont(state, random) {
            state.counter += random;
        },
        bajaCont(state, random) {
            state.counter -= random;
        }
    },
    // se utiliza para consumir
    actions: {
        async subCont({ commit }) {
            const res = await fetch('https://www.random.org/integers/?num=1&min=0&max=100&col=1&base=10&format=plain&rnd=new');
            const results = await res.json();
            commit("subCont", results);
        },
        async bajaCont({ commit }) {
            const res = await fetch('https://www.random.org/integers/?num=1&min=0&max=100&col=1&base=10&format=plain&rnd=new');
            const results = await res.json();
            commit("bajaCont", results);
        }
    },
    modules: {

    }
})