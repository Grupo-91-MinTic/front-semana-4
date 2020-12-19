<template>
  <v-layout>
    <v-flex>
      <v-row>
        <v-col>
          <form>
            <v-text-field
              v-model="user"
              :error-messages="userErrors"
              :counter="10"
              label="User"
              required
              @input="$v.user.$touch()"
              @blur="$v.user.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="email"
              :error-messages="emailErrors"
              label="E-mail"
              required
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
            ></v-text-field>
            <v-btn class="mr-4" @click="submit"> submit </v-btn>
          </form>
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
</style>