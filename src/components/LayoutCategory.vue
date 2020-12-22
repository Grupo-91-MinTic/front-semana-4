<template>
  <v-card max-width="auto" class="mx-auto">
    <v-toolbar class="grey darken-4 white--text">
      <v-spacer></v-spacer>
      <v-toolbar-title>Categorías</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-list three-line>
      <template v-for="(item, index) in items">
        <v-subheader
          v-if="item.header"
          :key="item.header"
          v-text="item.header"
        ></v-subheader>

        <v-divider
          v-else-if="item.divider"
          :key="index"
          :inset="item.inset"
        ></v-divider>

        <v-list-item v-else :key="item.title">
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>
<script>
export default {
  name: "LayoutCategory",
  data: () => ({
    items: [
      {
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg",
        title: "Colombia",
        subtitle: `Colombia cuenta con un amplio legado artesanal que además de transmitir nuestra cultura, se ha 
        perfilado como un producto de exportación reconocido a nivel internacional.
        Las artesanías de Colombia se han posicionado como mercancías de alta calidad y 
        variedad que constituyen una de las cartas de presentación que tenemos ante el mundo. Nuestra amplia geografía y cultura, así como la experta utilización de materiales que implementan nuestros artesanos, son algunas de las características que el país posee en este sector.`,
      },
      { divider: true, inset: true },
      {
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg",
        title: "Peru",
        subtitle: `La artesanía peruana se encuentra entre las más variadas del mundo, como lo prueba la amplia red de exportadores que cada año expone el ingenio de los peruanos en mercados europeos, asiáticos y norteamericanos.Su diversidad, colorido, creatividad y múltiple funcionalidad hacen de ella una actividad fundamental no sólo para la configuración de la identidad peruana sino también para la supervivencia de miles de familias y aún de pueblos enteros, como los de Sarhua y Quinua, en Ayacucho. Esas pequeñas piezas que causan la admiración de propios y extraños contienen siglos de historia cargados de formas y también símbolos prehispánicos que se funden y conviven con otros traídos por los españoles.`,
      },
      { divider: true, inset: true },
      {
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg",
        title: "Sudafrica",
        subtitle:
          "El arte africano es una agrupación de diferentes manifestaciones o movimientos artísticos que se fueron originando en los pueblos de “África negra” durante toda la historia del arte. Se podría decir, que el arte africano se desarrolló por las diferentes culturas que existían, y todavía hoy existen, en el continente africano. Dichas culturas se caracterizaban por tener diferentes idiomas, distintas tradiciones y diversas maneras artísticas que caracterizaban a cada una de las culturas.",
      },
      { divider: true, inset: true },
      {
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg",
        title: "Egipto",
        subtitle:
          "Egipto goza de una ancestral cultura de la artesanía, donde encontramos numerosos objetos, considerados todo un arte, que continúan siendo un importante patrimonio de Egipto. La artesanía del país se caracteriza por utilizar productos naturales y de buena calidad: pieles, piedras semipreciosas, cristales y pinturas hechas con extractos de la tierra entre muchos otros. Desde hace miles de años, los egipcios han sido amantes de lo artesanal, construían estatuas hechas con materiales arcillosos y piedras que simbolizaban diferentes aspectos de la sociedad y de la vida cotidiana además de encontrar representaciones de Dioses y seres ancestrales a los cuales se les ofrecía un tipo de culto especial por sus características o dotes.",
      },
    ],
  }),
};
</script>