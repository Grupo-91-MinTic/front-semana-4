<template>
  <div>
    <h2>Testimonios</h2>
    <v-card class="mx-auto"  outlined v-for="(item, index) of txt" :key="index">
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">{{item.country}}</div>
          <v-list-item-title class="headline mb-1">
              {{item.company}}
          </v-list-item-title>
          <v-list-item-subtitle
            >{{item.comment}}</v-list-item-subtitle
          >
        </v-list-item-content>

        <v-list-item-avatar tile size="80" color="grey">
           <v-img :src="item.img"></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <v-btn outlined rounded text :href="item.link" target="_blank"> Sitio Web </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "LayoutTestomony",
  data() {
    return {
      txt: [
        {
          country: "Perú",
          company: "MÍTIKAS ARTESANÍAS",
          comment: "Las artesanias son un pilar fundamental en la globalziacion de nuestra cultura ancestral peruana, por lo que como provedores principales de articulos artesanales recomendamos realizar todas las compras en esta empresa la cual es altamente calificada para distribuir productos de alta calidad traidos desde Perú.",
          img: "../assets/mistikas.jpeg",
          link:"https://www.facebook.com/watch/mitikasartesanias/"
        },
        {
          country: "Colombia",
          company: "Artesanias de Colombia",
          comment: "Como principal empresa colombiana distribuidora de articulos artesanos de Colombia nos hemos sentido gratamente represetdos al distribuir nuestro productos a nivel mundial y poder llevar una parte del legado de Colombia a todos los paises.",
          img: "https://infolocal.comfenalcoantioquia.com/media/com_jbusinessdirectory/pictures/companies/67/artesaniascolombia-1487876886.jpg",
          link: "https://artesaniasdecolombia.com.co/PortalAC/General/template_index.jsf"
        },
        {
          country: "Sudáfrica",
          company: "African Crafts Market",
          comment: "Aquí en esta pagína web distribuimos gran parte de los productos y del arte sudafricano para América Latina y el mundo, esta alianza desde hace 10 años nos ha permitido incursionar los mercados de los souvenires a nivel mundial y poder llevar el arte que caracteriza a un continente tan rico en historia y cultura como lo es Äfrica.",
          img: "https://shop.artsandcraftsofafrica.com/ekmps/shops/365f2b-sandbox/resources/Design/new-logo.png",
          link: "http://www.africancraftsmarket.com/"
        },
        {
          country: "Egipto",
          company: "Sahra Nomad",
          comment: "La cultura egipcia representa una de los legados más importantes de la humanidad en muchos aspectos, y para nosotros como empresa es de gran importancia llevar al mundo las maravillas que rodean nuestra cultura y nos han permitido ser parte fundamental del desarrollo de nuestra humanidad. En Egipto la cultura y el arte hacen parte fundamental de todo lo vivido, por este motivo nuestras artesanias son reconocidas y llevadas hasta el rincón más remoto del mundo.",
          img: "https://i.redd.it/p9nntg2kgyv21.png",
          link: "https://www.wildearth.com.au/buy/sahara-nomad-king-single-dome-canvas-swag-bag-brow/sa-nomad-br-sg"
        },
      ],
    };
  },
};
</script>
<style lang="css">
</style>