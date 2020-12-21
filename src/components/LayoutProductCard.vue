<template>
  <v-hover v-slot="{ hover }">
    <v-card class="mx-auto" max-width="800">
      <v-img :aspect-ratio="16 / 9" :src="articles.urlImage">
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out info darken-2 v-card--reveal display-3 white--text"
            style="height: 100%"
          >
            ${{ articles.precio_venta }}
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text class="pt-6" style="position: relative">
        <br />
        <v-dialog max-width="1000px" v-model="dialog" persistent>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="this.checkUser()"
              class="white--text"
              v-bind="attrs"
              color="info"
              v-on="on"
              absolute
              large
              right
              dark
              fab
              top
            >
              <v-icon>mdi-cart</v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">
                ¡Personaliza tu <strong>{{ articles.nombre }}</strong>
              </span>
              <v-spacer></v-spacer>
              <span class="headline">
                <strong> {{ user.nombre }}</strong
                >!
              </span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Legal first name*"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Legal middle name"
                      hint="example of helper text only on focus"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Legal last name*"
                      hint="example of persistent helper text"
                      persistent-hint
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-select
                      :items="[
                        'PayPal',
                        'MasterCard',
                        'Transferencia bancaria',
                        'BitCoin',
                      ]"
                      label="Medio de pago *"
                      required
                    ></v-select>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      name="input-5-4"
                      label="¿Que cambios deseas?"
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">
                Cancelar
              </v-btn>
              <v-btn
                elevation="2"
                @click="dialog = false"
                color="primary darken-1"
              >
                Comprar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <div class="font-weight-light grey--text title mb-2">
          {{ articles.categoria.nombre }}
        </div>
        <h3 class="display-1 font-weight-light info--text mb-2">
          {{ articles.nombre }}
        </h3>
        <div class="font-weight-light title mb-2">
          {{ articles.descripcion }}
        </div>
      </v-card-text>
    </v-card>
  </v-hover>
</template>
<script>
import swal from "sweetalert";
export default {
  name: "LayoutProductCard",
  props: {
    articles: Object,
  },
  data() {
    return {
      user: null,
      dialog: false,
      compras: {
        id_user: "",
        id_product: "",
        quantity: 1,
        price: 0,
        product: "",
        description: "",
      }
    };
  },
  created() {
    this.checkUser();
  },
  methods: {
    checkUser() {
      this.user = this.$store.state.user;
      console.log("Checked");
      if (!this.user) {
        this.$router.push({ path: "login" });
        swal("Tenemos un problema", "Debes registrarte primero...", "warning");
      }
    },
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