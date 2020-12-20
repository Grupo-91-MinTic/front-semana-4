<template>
  <div>
    <v-content>
      <v-container fluid fill-height>
        <v-slide-y-transition mode="out-in">
          <router-view />
        </v-slide-y-transition>
      </v-container>
    </v-content>
  </div>
</template>
<script>
export default {
  name: "MainContent",
};
</script>
<style lang="css">
</style>