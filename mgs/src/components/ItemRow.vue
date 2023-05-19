<template>
  <tbody>
    <tr class="odd:bg-white even:bg-slate-100">
      <td class="px-4 py-2 border bg-gray-200 text-center">{{ item.id }}</td>
      <td class="px-4 py-2 border text-center">{{ item.namaBarang }}</td>
      <td class="px-4 py-2 border bg-gray-200 text-center">{{ item.stok }}</td>
      <td class="px-4 py-2 border text-center">{{ item.harga }}</td>
      <td class="px-4 py-2 border bg-gray-200 text-center">
        {{ item.supplier.namaSupplier }}
      </td>
      <td class="px-4 py-2 border text-center">{{ item.supplier.alamat }}</td>
      <td class="px-4 py-2 border bg-gray-200 text-center">
        {{ item.supplier.noTelp }}
      </td>
      <td class="px-4 py-2 border">
        <div class="flex justify-between">
          <button
            class="
              mx-auto
              py-2
              px-4
              rounded-full
              bg-gray-500
              hover:bg-gray-600
              font-semi-bold
              text-white text-l
            "
            @click.prevent="editForm"
          >
            Update
          </button>
          <button
            class="
              mx-auto
              py-2
              px-4
              rounded-full
              bg-red-500
              hover:bg-red-600
              font-semi-bold
              text-white text-l
            "
            @click.prevent="deleteItem"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: "ItemRow",
  props: ["item"],
  methods: {
    deleteItem() {
      this.$store.dispatch("delete", { id: this.item.id });
    },
    async editForm() {
      this.$router.push({
        name: "editform",
      });
    },
    created(){
    console.log(this.item);
  }
  },
};
</script>

<style>
</style>