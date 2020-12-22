<template>
  <v-container fluid="true">
    <layout-banner></layout-banner>
    <layout-category></layout-category>
    <div class="mt-16 grey lighten-5">
      <div class="pa-8">
        <h2 class="text-center mt-6">¿Quiénes somos?</h2>
        <v-divider inset></v-divider><br>
        <p class="text-center">
          Somos una empresa colombiana que se dedica a la venta de productos de
          artesanías de Colombia y del exterior a nivel nacional y global. Con
          mas de 10 años de experiencia en el área de exportación e importación
          contamos con una gran red de socios a nivel mundial que se encargan de
          llevar a cabo el proceso logístico para llegar a todas las personas.
        </p>
      </div>
      <div class="pa-8">
        <h2 class="text-center mt-6">¿Qué ofrecemos?</h2>
        <v-divider inset></v-divider><br>
        <p class="text-center">
          Ofrecemos los mejores productos que identifican a las culturas de
          diferentes partes del mundo que por medio de las artesanías llevan sus
          costumbres y su historia. Nuestros productos son de la mas alta
          calidad ya que llevan consigo el trabajo realizado por las comunidades
          indígenas y campesinas de diferentes países. Estos productos cumplen
          con los estándares de calidad en todos los materiales de fabricación y
          su excelencia ha llevado estos productos a grandes reconocimientos a
          nivel internacional.
        </p>
      </div>
      <div class="pa-8">
        <h2 class="text-center mt-6">¿Por qué lo hacemos?</h2>
        <v-divider inset></v-divider><br>
        <p class="text-center">
          Nuestra empresa tiene como objetivo poder globalizar las culturas de
          todos los países, por lo que uno de los medios de poder llegar a cada
          uno de los hogares es por medio de la cultura y las tradiciones
          innatas que cada país ha plasmado por generaciones en artesanías que
          se caracterizan por tener diferentes elementos de elaboración y
          diferentes significados que han perdurado a través del tiempo y que
          buscan en las nuevas generaciones propender el distribuir en todo el
          mundo conocimientos y culturas milenarias.
        </p>
      </div>
    </div>
  </v-container>
</template>
<script>
import LayoutBanner from "./LayoutBanner.vue";
import LayoutCategory from './LayoutCategory.vue';
export default {
  name: "LayoutMain",
  components: { LayoutBanner, LayoutCategory },
};
</script>
<style lang="css">
</style>