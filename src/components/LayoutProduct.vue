<template>
  <v-container>
    <h2>Productos</h2>
    <v-row justify="space-around">
      <v-col
        style="display: inline-flex; margin: 1em"
        v-for="(product, index) of products"
        :key="index"
        cols="12"
        md="3"
      >
        <v-sheet :rounded="rounded" class="mx-auto">
          <layout-product-card :articles="product"></layout-product-card>
        </v-sheet>
      </v-col>
      <administration-footer></administration-footer>
    </v-row>
  </v-container>
</template>
<script>
import LayoutProductCard from "./LayoutProductCard.vue";
export default {
  components: { LayoutProductCard },
  name: "LayoutProduct",
  data() {
    return {
      products: [
        {
          image:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyopagolojusto.com%2F_files%2F200003139-e518be615f%2FOFERTA%2520ESPECIAL.png&f=1&nofb=1",
          price: "80.00",
          company: "Especial 91",
          name: "keyboard",
          descripcion:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim accusantium, atque qui sint, asperiores eum repellendus beatae commodi in cum et, accusamus quia similique exercitationem maxime eaque earum! Porro, dicta.",
        },
        {
          image:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyopagolojusto.com%2F_files%2F200003139-e518be615f%2FOFERTA%2520ESPECIAL.png&f=1&nofb=1",
          price: "80.00",
          name: "keyboard",
          descripcion:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim accusantium, atque qui sint, asperiores eum repellendus beatae commodi in cum et, accusamus quia similique exercitationem maxime eaque earum! Porro, dicta.",
        },
        {
          image:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyopagolojusto.com%2F_files%2F200003139-e518be615f%2FOFERTA%2520ESPECIAL.png&f=1&nofb=1",
          price: "80.00",
          company: "Especial 91",
          name: "keyboard",
          descripcion:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim accusantium, atque qui sint, asperiores eum repellendus beatae commodi in cum et, accusamus quia similique exercitationem maxime eaque earum! Porro, dicta.",
        },
        {
          image:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyopagolojusto.com%2F_files%2F200003139-e518be615f%2FOFERTA%2520ESPECIAL.png&f=1&nofb=1",
          price: "80.00",
          name: "keyboard",
          descripcion:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim accusantium, atque qui sint, asperiores eum repellendus beatae commodi in cum et, accusamus quia similique exercitationem maxime eaque earum! Porro, dicta.",
        },
        {
          image:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyopagolojusto.com%2F_files%2F200003139-e518be615f%2FOFERTA%2520ESPECIAL.png&f=1&nofb=1",
          price: "80.00",
          name: "keyboard",
          company: "Especial 91",
          descripcion:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim accusantium, atque qui sint, asperiores eum repellendus beatae commodi in cum et, accusamus quia similique exercitationem maxime eaque earum! Porro, dicta.",
        },
      ],
    };
  },
};
</script>
<style lang="css">
</style>