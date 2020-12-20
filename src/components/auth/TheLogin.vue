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
              <v-text-field
                v-model="login.email"
                label="Usuario"
              ></v-text-field>
              <v-text-field
                v-model="login.password"
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
import VueJwtDecode from 'vue-jwt-decode'
import swal from 'sweetalert';
export default {
  name: "TheLogin",
  data() {
    return {
      login: {
        user: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async loginUser() {
      try {
        let response = await this.$http.post('/api/usuario/login', this.login);
        let token = response.data.tokenReturn;
        localStorage.setItem('jwt', token);
        console.log(token);

        if (token) {
          let token = localStorage.getItem("jwt");
          let decoded = VueJwtDecode.decode(token);
          console.log(decoded);

          swal('Exitoso', 'Bienvenido ' + decoded.id.nombre, 'success');
          this.$router.push('/administration');
        }
      } catch (error) {
        swal("Error", "Este registro no existe", "error");
      }
    },
    cancelLogin(){
      localStorage.removeItem("jwt");
      this.$router.push("/");
    }
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