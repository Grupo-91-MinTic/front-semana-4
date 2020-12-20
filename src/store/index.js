import Vue from "vue";
import Vuex from "vuex";
import decode from "jwt-decode";
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: null,
        user: null
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        setUser(state, user) {
            state.user = user;
        },
    },
    actions: {
        keepToken({ commit }, token) {
            commit("setToken", token)
            commit("setUser", decode(token))
            localStorage.setItem("token", token)
        },
        autoLogin({ commit }) {
            //console.log("autologin");
            let token = localStorage.getItem("token");
            if (token) {
                commit("setToken", token);
                commit("setUser", decode(token));
            }
            router.push({ name: 'home' }).catch(() => {});
        },
        close({ commit }) {
            commit("setUser", null);
            commit("setToken", null);
            localStorage.removeItem("token");
            router.push({ path: '/principal' });
        }
    },
    modules: {}
});