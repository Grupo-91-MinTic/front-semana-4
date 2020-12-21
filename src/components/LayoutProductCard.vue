<template>
  <v-hover v-slot="{ hover }">
    <v-card class="mx-auto" max-width="800">
      <v-img :aspect-ratio="16 / 9" :src="articles.image">
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out info darken-2 v-card--reveal display-3 white--text"
            style="height: 100%"
          >
            ${{ articles.price }}
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text class="pt-6" style="position: relative">
        <v-btn absolute color="info" class="white--text" fab large right top>
          <v-icon>mdi-cart</v-icon>
        </v-btn>
        <div class="font-weight-light grey--text title mb-2">
          {{ articles.company }}
        </div>
        <h3 class="display-1 font-weight-light info--text mb-2">
          {{ articles.name }}
        </h3>
        <div class="font-weight-light title mb-2">
          {{ articles.descripcion }}
        </div>
      </v-card-text>
    </v-card>
  </v-hover>
</template>
<script>
export default {
  name: "LayoutProductCard",
  props: {
    articles: Object,
  },
};
</script>
<style lang="css">
.v-card--reveal {
  justify-content: center;
  align-items: center;
  position: absolute;
  opacity: 0.9;
  width: 100%;
  bottom: 0;
}
</style>