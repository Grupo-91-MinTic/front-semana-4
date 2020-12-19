<template>
  <v-layout class="primary">
    <v-flex>
      <v-row align="center" align-content="center">
        <v-col align-self="center">
          <a
            href="https://vuetifyjs.com/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="@/assets/logo.svg" class="sideImage" alt="veutify" />
          </a>
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
                  class="login--avatar"
                  alt="user"
                />
              </v-avatar>
              <v-card-title class="d-inline-flex">
                Login: Sprint IV & V
              </v-card-title>
              <v-text-field
                :error-messages="userErrors"
                @input="$v.user.$touch()"
                @blur="$v.user.$touch()"
                v-model="user"
                label="User"
                required
              ></v-text-field>
              <v-text-field
                :error-messages="emailErrors"
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
                v-model="email"
                label="E-mail"
                required
              ></v-text-field>
              <v-btn class="mr-4" @click="submit"> submit </v-btn>
            </form>
          </v-card>
        </v-col>
      </v-row>
    </v-flex>
  </v-layout>
</template>

<script>
import { required, maxLength, email } from "vuelidate/lib/validators";
import { validationMixin } from "vuelidate";
import VueJwtDecode from "vue-jwt-decode";
import swal from "sweetalert";
export default {
  mixins: [validationMixin],

  validations: {
    user: { required, maxLength: maxLength(10) },
    email: { required, email },
  },

  data() {
    return {
      login: {
        user: "",
        email: "",
        password: "",
      },
    };
  },
  computed: {
    userErrors() {
      const errors = [];
      if (!this.$v.user.$dirty) return errors;
      !this.$v.user.maxLength &&
        errors.push("user must be at most 10 characters long");
      !this.$v.user.required && errors.push("user is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
  },
  methods: {
    async loginUser() {
      try {
        let response = await this.$http.post("/api/auth/signin", this.login);
        let token = response.data.accessToken;
        localStorage.setItem("jwt", token);

        let decoded = VueJwtDecode.decode(token);
        console.log(decoded);

        if (token) {
          let token = localStorage.getItem("jwt");
          let decoded = VueJwtDecode.decode(token);

          swal("Exitoso", "Bienvenido " + decoded.user, "success");
          this.$router.push("/home");
        }
      } catch (error) {
        swal("Error", "Este registro no existe", "error");
      }
    },
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.user = "";
      this.email = "";
    },
  },
};
</script>
<style lang="css">
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
  background: #fff;
  margin: 15px;
  border: 50%;
}
</style>