<template>
  <div
    class="min-h-screen w-screen flex items-center justify-center py-10 px-5"
  >
    <section
      class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800"
    >
      <h2
        class="text-lg font-semibold text-gray-700 capitalize dark:text-white"
      >
        Add Barang
      </h2>

      <hr class="my-6 border-gray-200" />

      <form>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="title"
              >Nama Barang</label
            >
            <input
              id="addnama"
              type="text"
              v-model="addItem.namaBarang"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              placeholder="Masukan Nama Barang"
            />
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="isbn"
              >Harga Barang</label
            >
            <input
              id="addharga"
              type="text"
              v-model="addItem.harga"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              placeholder="Masukan Harga Barang"
            />
            <label class="text-gray-700 dark:text-gray-200" for="supplier"
              >Select Supplier</label
            >
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="stock"
              >Stock</label
            >
            <input
              id="addstock"
              type="text"
              v-model="addItem.stok"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              placeholder="Masukan Jumlah Stock Barang"
            />
          </div>
          <select v-model="selectedSupplier">
            <option
              v-for="supplier in suppliers" :key="supplier.id" :supplier="supplier"
            >
              {{ supplier.namaSupplier }}
            </option>
          </select>
        </div>

        <hr class="my-6 border-gray-200" />
        <div class="flex justify-between">
          <div class="mt-6">
            <button
              class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              @click.prevent="backhome"
            >
              Kembali
            </button>
          </div>

          <div class="mt-6">
            <button
              class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              @click.prevent="addSubmit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "AddForm",
  data() {
    return {
      addItem: {
        harga: null,
        namaBarang: "",
        stok: null,
        supplier: {
          alamat: "",
          namaSupplier: "",
          noTelp: "",
        },
      },
      selectedSupplier: null
    };
  },
  computed: {
    ...mapState({
      suppliers: "supplierList",
    }),
  },
  methods: {
    ...mapActions(["addHandler"]),
    async addSubmit() {
      const response = await this.addHandler(this.addItem);
      if (response) {
        this.$router.push({
          name: "home",
        });
      }
    },
    async backhome() {
      this.$router.push({
        name: "home",
      });
    },
  },
};
</script>

<style>
</style>