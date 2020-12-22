<template>
  <!-- <v-container fluid="true"> -->
  <v-carousel hide-delimiters cycle>
    <v-carousel-item
      v-for="(item, index) in items"
      :key="index"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
      <v-row class="fill-height" align="end" justify="center">
        <v-container fluid="true">
          <div
            style="background: rgba(0, 0, 0, 0.65)"
            class="display-2 text-center p-5"
          >
            {{ item.txt }}
          </div>
        </v-container>
      </v-row>
    </v-carousel-item>
  </v-carousel>
  <!-- </v-container> -->
</template>
<script>
export default {
  name: "LayoutBanner",
  data() {
    return {
      items: [
        {
          src:
            "https://bogota.gov.co/sites/default/files/styles/1050px/public/2019-07/artesanias-bogota-1.jpg",
          txt:
            "El ingenio de los peruanos en sus artesanias se expande a mercados globales.",
        },
        {
          src:
            "https://data.ibtimes.sg/en/full/16342/picture-representation.jpg",
          txt: "Egipto goza de una ancestral y mitica cultura de la artesanía.",
        },
        {
          src:
            "https://arc-anglerfish-arc2-prod-elespectador.s3.amazonaws.com/public/P5XOMOTUD5HMZLQXO3EF3H5YYI.png",
          txt:
            "Las artesanías de Colombia son una tendencia de alta calidad ante el mundo.",
        },
        {
          src:
            "https://cdn.cnn.com/cnnnext/dam/assets/150916155241-africanart-07-full-169.jpg",
          txt:
            "El arte sudafricano combina las miles de culturas de sus pueblos a través de la historia.",
        },
      ],
    };
  },
};
</script>