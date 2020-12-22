<template>
  <v-container fluid>
    <layout-banner></layout-banner>
    <h1 class="h1 text-center white--text info">Nuestros productos</h1>
    <v-row dense>
      <v-col
        style="display: inline-flex; margin: 0.8em"
        v-for="(product, index) of products"
        cols="card.flex"
        :key="index"
      >
        <v-sheet class="mx-auto">
          <layout-product-card :articles="product"></layout-product-card>
        </v-sheet>
      </v-col>
      <administration-footer></administration-footer>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";
import LayoutProductCard from "./LayoutProductCard.vue";
import AdministrationFooter from "./AdministrationFooter.vue";
import LayoutBanner from './LayoutBanner.vue';
export default {
  components: { LayoutProductCard, AdministrationFooter, LayoutBanner },
  name: "LayoutProduct",
  data() {
    return {
      products: [],
      headers: [
        { text: "Nombre", value: "nombre", sortable: false },
        { text: "Descripción", value: "descripcion", sortable: false },
        { text: "Características", value: "caracteristicas", sortable: false },
        { text: "Imagen", value: "urlImage", sortable: false },
        { text: "Estado", value: "estado", sortable: false },
        { text: "Opciones", value: "opciones", sortable: false },
      ],
    };
  },
  created() {
    this.listar();
  },
  methods: {
    listar() {
      let me = this;
      let header = { Token: this.$store.state.token };
      let configuracion = { headers: header };
      axios
        .get("articulo/list", configuracion)
        .then(function (response) {
          me.products = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
<style lang="css">
</style>