<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <template>
          <v-list-item :to="{ name: 'LayoutMain' }">
            <v-list-item-action>
              <v-icon>home</v-icon>
            </v-list-item-action>
            <v-list-item-title> Inicio </v-list-item-title>
          </v-list-item>
        </template>
        <template>
          <v-list-group>
            <v-list-item slot="activator">
              <v-list-item-content>
                <v-list-item-title> Productos </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: 'LayoutProduct' }">
              <v-list-item-action>
                <v-icon>mdi-clipboard-edit</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title> Productos </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </template>
        <template>
          <v-list-group>
            <v-list-item slot="activator">
              <v-list-item-content>
                <v-list-item-title> Testimonios </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: 'LayoutTestimony' }">
              <v-list-item-action>
                <v-icon>mdi-account-heart</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title> Nuestros clientes </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </template>
        <template>
          <v-list-group>
            <v-list-item slot="activator">
              <v-list-item-content>
                <v-list-item-title> Información </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: 'LayoutCreator' }">
              <v-list-item-action>
                <v-icon>mdi-account-group</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title> Creadores </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: 'LayoutInfo' }">
              <v-list-item-action>
                <v-icon>mdi-book-information-variant</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title> Contenidos </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <span class="hidden-sm-and-down">Menu</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div v-if="this.rol">
        <v-btn @click="logOut" icon>
          <v-icon>logout</v-icon>
        </v-btn>
      </div>
      <div v-else>
        <v-btn @click="sendLogin" icon>
          <v-icon>login</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  name: "HomeNavigator",
  data() {
    return {
      rol: null,
      token: null,
      drawer: false,
    };
  },
  created() {
    this.checkSession();
  },
  methods: {
    sendLogin() {
      this.$router.push({path: "login"});
    },
    logOut() {
      this.$store.dispatch("close");
      this.sendLogin();
    },
    checkSession() {
      try {
        this.$store.dispatch("autoLogin");
        this.rol = this.$store.state.rol;
      } catch (error) {
        console.log("No se han registrado usuarios");
      }
    },
  },
};
</script>
<style lang="css">
</style>