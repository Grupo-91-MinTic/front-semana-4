<template>
  <v-container>
    <h2>¿Que resolvimos?</h2>
    <br />
    <div v-for="(item, index) in items" :key="index">
      <layout-info-description :info="item"></layout-info-description>
    </div>
    <br />
    <br />
    <div>
      <layout-info-footer></layout-info-footer>
    </div>
    <footer></footer>
  </v-container>
</template>
<script>
import LayoutInfoDescription from "./LayoutInfoDescription.vue";
import LayoutInfoFooter from "./LayoutInfoFooter.vue";
export default {
  components: { LayoutInfoDescription, LayoutInfoFooter },
  name: "LayoutInfo",
  data() {
    return {
      items: [
        {
          title: "Reto",
          description: "58",
        },
        {
          title: "Desafío",
          description:
            "¿Cómo podríamos iniciar mercados internacionales respondan positivamente con los servicios/prodactuales?",
        },
        {
          title: "Área Temática",
          description: "Mercados / Canales Distribución",
        },
        {
          title: "Descripción",
          description:
            "No se tiene una estrategia clara de apertura a mercados internacionales potenciales",
        },
        {
          title: "Caso explicativo",
          description:
            "Existen organizaciones que se adaptan a mercados internacionales por medio del desarrollo de los productos, un claro ejemplo es el producto que se vende en Colombia y el producto con pandas que se venden en Japón, es el mismo producto respondiendo a diferentes mercados al adaptarse a la cultura y necesidades.",
        },
        {
          title: "Objetivos esperados",
          description:
            "Crear un portafolio web para una empresa  dedicada a la venta de productos extranjeros que ofrezca detalles de sus características y adaptación de uso en nuestro contexto.",
        },
      ],
    };
  },
};
</script>
<style lang="css">
</style>