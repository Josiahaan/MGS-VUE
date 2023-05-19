<template>
  <div>
    <div class="flex flex-col justify-between">
      <div class="flex flex-row h-full">
        <SideBar />
        <div class="flex flex-row w-[76%] h-screen px-4 py-4">
          <div class="w-5/6 flex flex-col">
            <div class="flex justify-between">
              <div>
                <p class="py-3 px-4 mb-4 mt-4 text-white text-xl font-semi-bold">
                  Barang
                </p>
              </div>
              <div>
                <section
                  class="relative w-full max-w-md px-5 py-4 mx-auto rounded-md"
                >
                  <div class="relative">
                    <button
                      class="py-3 px-4 mb-4 mt-4 rounded-full bg-gray-500 hover:bg-gray-600 font-semi-bold text-white text-l"
                      @click.prevent="addForm"
                    >
                      Tambah Barang
                    </button>
                  </div>
                </section>
              </div>
            </div>
            <ItemList v-for="item in items" :key="item.id" :item="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SideBar from "../components/Sidebar.vue";
import ItemList from "../components/ItemList.vue";
import { mapActions, mapState } from "vuex";
export default {
  name: "HomeView",
  components: {
    SideBar,
    ItemList,
  },
  methods: {
    ...mapActions(["fetchAllItems"]),
    async addForm() {
      this.$router.push({
        name: "addform",
      });
    },
  },
  computed: {
    ...mapState({
      items: "itemList",
    }),
  },
  created() {
    this.fetchAllItems();
  },
};
</script>
