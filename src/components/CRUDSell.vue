<template>
  <v-card>
    <v-card-title> Ventas </v-card-title>
    <v-simple-table fixed-header height="300px">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Id</th>
            <th class="text-left">Id usuario</th>
            <th class="text-left">Id articulo</th>
            <th class="text-left">Cantidad</th>
            <th class="text-left">Precio del articulo</th>
            <th class="text-left">Nombre del articulo</th>
            <th class="text-left">Personalizacion del cliente</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in toke" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.usuarioId }}</td>
            <td>{{ item.articuloId }}</td>
            <td>{{ item.cantidad }}</td>
            <td>{{ item.articulo.precio_venta }}</td>
            <td>{{ item.articulo.nombre }}</td>
            <td>{{ item.descripcion }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>
<script>
export default {
  name: "Client",
  data() {
    return {
      toke: [
        {
          id: 1,
          descripcion: "lorem limsus test",
          cantidad: 2,
          usuarioId: 1,
          articuloId: 1,
          createdAt: "2020-12-19T21:20:16.137Z",
          updatedAt: "2020-12-19T21:20:16.137Z",
          articulo: {
            id: 1,
            codigo: "art00001",
            nombre: "Articulo 1",
            descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam maiores dolore enim tenetur minus? Cupiditate, voluptatum assumenda iure velit unde sit quis fuga, nostrum voluptatem repellat nobis corporis sapiente minus?",
            precio_venta: 1000,
            estado: 1,
            categoriaId: 1,
            createdAt: "2020-12-19T21:20:15.437Z",
            updatedAt: "2020-12-19T21:20:15.437Z",
          },
        },
      ],
    };
  },
};
</script>
<style lang="css">
</style>