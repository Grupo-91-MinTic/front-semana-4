<template>
  <v-layout class="primary">
    <v-flex>
      <v-row align="center" align-content="center">
        <v-col align-self="center">
          <v-card
            dark
            color="white"
            style="max-width: 750px; margin: auto"
            class="overflow-hidden info pa-12 mt-12 login"
          >
            <form>
              <v-avatar>
                <img
                  src="https://img.icons8.com/dusk/64/000000/change-user-male.png"
                  class="login--avatar d-inline-flex"
                  alt="password"
                />
              </v-avatar>
              <v-card-title class="d-inline-flex">
                Acceso al sistema
              </v-card-title>
              <v-text-field v-model="email" label="Usuario"></v-text-field>
              <v-text-field
                v-model="password"
                label="Contraseña"
                type="password"
              ></v-text-field>
              <v-btn class="mr-4" @click.prevent="loginUser"> Ingresar </v-btn>
              <v-btn class="mr-4" @click.prevent="cancelLogin">
                Cancelar
              </v-btn>
            </form>
          </v-card>
        </v-col>
      </v-row>
    </v-flex>
  </v-layout>
</template>

<script>
import swal from "sweetalert";
import axios from "axios";
export default {
  name: "TheLogin",
  data() {
    return {
      user: "",
      email: "",
      password: "",
      currentError: null,
    };
  },
  methods: {
    loginUser() {
      axios
        .post("/usuario/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          return response.data;
        })
        .then((data) => {
          this.$store.dispatch("keepToken", data.tokenReturn);
          swal(
            "Exitoso",
            "Hola de nuevo " + this.$store.state.user.nombre,
            "success"
          );
          if(localStorage.getItem("rol") == "Administrador") {
            this.$router.push({ name: "AdministrationMainContent" });
          }else{
            this.$router.push({ name: "LayoutMain" });
          }
        })
        .catch((error) => {
          this.currentError = null;
          if (error.response.status == 401) {
            this.currentError = "Credenciales son incorrectas.";
          } else if (error.response.status == 404) {
            this.currentError = "El usuario no existe";
          } else {
            this.currentError = "Ocurrió un error con el servidor.";
          }
          swal("Error", this.currentError, "error");
        });
    },
    cancelLogin() {
      this.$store.dispatch("close");
      this.$router.push({ path: "principal" });
    },
    /**
    async loginUser() {
      try {
        let response = await this.$http.post("/usuario/login", this.login);
        let token = response.data.tokenReturn;
        localStorage.setItem("jwt", token);
        console.log(token);

        if (token) {
          let token = localStorage.getItem("jwt");
          let decoded = VueJwtDecode.decode(token);
          console.log(decoded);

          swal("Exitoso", "Bienvenido " + decoded.nombre, "success");
          this.$router.push("/home");
        }
      } catch (error) {
        swal("Error", "Este registro no existe", "error");
      }
    },
    cancelLogin() {
      localStorage.removeItem("jwt");
      this.$router.push("/");
    },
    */
  },
};
</script>
<style lang='css'>
.sideImage {
  max-width: 70px;
  max-height: 70px;
  display: inline-flex;
}
.login {
  border-radius: 25px;
}
.login--avatar {
  display: inline-block;
  border-radius: 50%;
  background: #fff;
  margin: 15px;
}
</style>