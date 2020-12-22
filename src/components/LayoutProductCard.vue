<template>
  <v-hover v-slot="{ hover }">
    <v-card class="mx-auto" max-width="800" min-width="300">
      <v-img :aspect-ratio="16 / 9" :src="articles.urlImage">
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out info darken-2 v-card--reveal display-3 white--text"
            style="height: 100%"
          >
            <span class="text-h3">${{ articles.precio_venta }}</span>
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text class="pt-6" style="position: relative">
        <br />
        <v-dialog max-width="500px" v-model="dialog">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
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
                      v-model="shopping.quantity"
                      hint="¿Cuantos deseas llevar?"
                      label="Cantidad *"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Color"
                      v-model="shopping.color"
                      hint="¿Prefieres otro color?"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      v-model="shopping.pay"
                      :items="opcionesPago"
                      label="Medio de pago *"
                      required
                    ></v-select>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      counter
                      maxlength="255"
                      name="input-5-4"
                      label="¿Que cambios deseas?"
                      v-model="shopping.description"
                      hint="Se muy explícito, describe cómo quieres tu producto"
                    ></v-textarea>
                  </v-col>
                  <v-flex xs12 sm12 md12 v-show="valida">
                    <div
                      class="red--text"
                      v-for="v in validaMensaje"
                      :key="v"
                      v-text="v"
                    ></div>
                  </v-flex>
                  <v-col>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancelar</v-btn>
              <v-btn color="blue darken-1" text @click="buyProduct(articles)">Comprar</v-btn>
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
          <hr />
          {{ articles.caracteristicas }}
        </div>
      </v-card-text>
    </v-card>
  </v-hover>
</template>
<script>
import swal from "sweetalert";
import axios from 'axios';
export default {
  name: "LayoutProductCard",
  props: {
    articles: Object,
  },
  data() {
    return {
      user: null,
      dialog: false,
      valida:'',
      validaMensaje: '',
      opcionesPago: '',
      shopping: {
        id_product: "",
        quantity: "",
        color: "",
        pay: "",
        description: "",
      },
    };
  },
  created() {
    this.opcionesPago = ['PayPal','MasterCard','Transferencia bancaria','BitCoin'];
    this.checkUser();
  },
  methods: {
    validar() {
      this.valida = 0;
      this.validaMensaje = [];
      if (isNaN(this.shopping.quantity) || this.shopping.quantity.length < 1) {
        this.validaMensaje.push(
          "La cantidad a comprar debe ser númerica."
        );
      }
      if (this.shopping.color.length < 1 || this.shopping.color.length > 50) {
        this.validaMensaje.push(
          "El color del producto debe tener entre 1-50 caracteres."
        );
      }
      if (this.opcionesPago.indexOf(this.shopping.pay) === -1) {
        this.validaMensaje.push("Debe seleccionar un medio de pago.");
      }
      if (this.shopping.description.length < 1) {
        this.validaMensaje.push(
          "La descripción del producto no debe ser nula."
        );
      }
      if (this.validaMensaje.length) {
        this.valida = 1;
      }
      return this.valida;
    },
    buyProduct(articles) {
      console.log(this.$store.state.user.id);
      let me = this;
      let header = { Token: this.$store.state.token };
      let configuracion = { headers: header };
      if (this.validar()) {
        return;
      }
      this.shopping.id_product = articles.id;
      let descriptionMod = "Color: " + this.shopping.color + " -Descripción: " + this.shopping.description + " -MPago: " + this.shopping.pay;
      axios.post("compra/add",{
        descripcion: descriptionMod,
        cantidad: this.shopping.quantity,
        articuloId: this.shopping.id_product,
        usuarioId: this.$store.state.user.id,
      },configuracion)
      .then(function (response) {
        me.limpiar();
        me.close();
        me.listar();
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    close() {
      this.limpiar();
    },
    limpiar() {
      this.shopping.id_product = '';
      this.shopping.quantity = '';
      this.shopping.color = '';
      this.shopping.pay = '';
      this.validaMensaje = [];
      this.editedIndex = -1;
      this.dialog = false;
    },
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