<template>
  <v-content>
    <v-container fluid fill-height>
      <v-slide-y-transition mode="out-in">
        <router-view />
        <h1>aun nada</h1>
      </v-slide-y-transition>
    </v-container>
  </v-content>
</template>
<script>
export default {};
</script>
<style lang="css">
</style>