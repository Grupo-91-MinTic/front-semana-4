<template>
  <v-container fluid="true">
    <layout-banner></layout-banner>
    <layout-category></layout-category>
    <div class="mt-16 grey lighten-5">
      <v-toolbar class="white--text text-center grey darken-4">
        <v-spacer></v-spacer>
        <v-toolbar-title>Solución del reto 58</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <layout-main-info></layout-main-info>
    </div>
  </v-container>
</template>
<script>
import LayoutBanner from "./LayoutBanner.vue";
import LayoutCategory from "./LayoutCategory.vue";
import LayoutMainInfo from "./LayoutMainInfo.vue";
export default {
  name: "LayoutMain",
  components: { LayoutBanner, LayoutCategory, LayoutMainInfo },
};
</script>
<style lang="css">
</style>