<template>
  <div>
    <v-content>
      <v-container fluid fill-height>
        <v-slide-y-transition mode="out-in">
          <router-view />
          <h1>aun nada</h1>
        </v-slide-y-transition>
      </v-container>
    </v-content>
    <administration-footer></administration-footer>
  </div>
</template>
<script>
import AdministrationFooter from "./AdministrationFooter.vue";
export default {
  components: { AdministrationFooter },
};
</script>
<style lang="css">
</style>