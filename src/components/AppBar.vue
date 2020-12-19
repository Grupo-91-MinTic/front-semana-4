<template>
  <v-app-bar
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    app
    color="blue darken-3"
    dark
  >
    <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <span class="hidden-sm-and-down">Sprint IV</span>
    </v-toolbar-title>
    <navigator-bar></navigator-bar>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>logout</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script>
import NavigatorBar from "./NavigatorBar.vue";
export default {
  components: {
    NavigatorBar,
  },

  data() {
    return {
      drawer: null,
    };
  },
};
</script>
<style lang="css">
</style>