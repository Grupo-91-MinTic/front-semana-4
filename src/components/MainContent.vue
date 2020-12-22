<template>
  <div>
    <v-main>
      <v-container fluid fill-height>
        <v-slide-y-transition mode="out-in">
          <router-view />
        </v-slide-y-transition>
      </v-container>
    </v-main>
  </div>
</template>
<script>
export default {
  name: "MainContent",
};
</script>
<style lang="css" scoped>
h1, h2{
  font-family: 'Merriweather', serif;
  font-family: 'Noto Sans JP', sans-serif;
}
</style>