<template>
  <div>
    <v-main>
      <v-container fluid fill-height>
        <v-slide-y-transition mode="out-in">
          <router-view />
        </v-slide-y-transition>
        <!-- <layout-banner></layout-banner> -->
      </v-container>
    </v-main>
  </div>
</template>
<script>
// import LayoutBanner from './LayoutBanner.vue';
export default {
  name: "LayoutHome",
  // components:{LayoutBanner}
};
</script>
<style lang="css">
</style>