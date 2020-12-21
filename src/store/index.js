import Vue from "vue";
import Vuex from "vuex";
import decode from "jwt-decode";
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: null,
        user: null,
        rol: null,
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        setUser(state, user) {
            state.user = user;
        },
        setRol(state, rol) {
            state.rol = rol;
        },
    },
    actions: {
        keepToken({ commit }, token) {
            commit("setToken", token);
            commit("setUser", decode(token));
            commit("setRol", this.state.user.rol);
            console.log(this.state.rol);

            localStorage.setItem("token", token);
            localStorage.setItem("rol", this.state.user.rol);
        },
        autoLogin({ commit }) {
            //console.log("autologin");
            let token = localStorage.getItem("token");
            if (token) {
                commit("setToken", token);
                commit("setUser", decode(token));
                commit("setRol", this.state.user.rol);
            }
            if (this.state.user.rol === "Administrador") {
                router.push({ path: 'home' }).catch(() => { });
            } else {
                router.push({ path: 'principal' }).catch(() => { });
            }
        },
        close({ commit }) {
            commit("setRol", null);
            commit("setUser", null);
            commit("setToken", null);
            localStorage.removeItem("rol");
            localStorage.removeItem("token");
            router.push({ path: 'principal' });
        }
    },
    modules: {}
});