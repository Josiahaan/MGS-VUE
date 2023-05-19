<template>
  <div
    class="
      flex flex-col
      w-1/6
      h-screen
      px-4
      py-4
      bg-[#3A3845]
      dark:bg-[#222831]
      border-r
    "
  >
    <div class="flex flex-col justify-between">
      <nav>
        <div class="h-40 mt-2 mb-2 flex flex-col items-center">
          <div
            class="h-30 w-30 overflow-hidden flex justify-center items-center"
          >
            <img
              src="https://cdn.dribbble.com/users/6142/screenshots/5679189/media/1b96ad1f07feee81fa83c877a1e350ce.png?compress=1&resize=400x300&vertical=top"
              alt="Profile Picture"
              class="object-cover h-40"
            />
          </div>
            <p
          class="
            flex
            items-center
            px-4
            py-2
            text-white
          "
        >{{user}}
        </p>
        </div>
        <hr class="my-6 border-gray-200" />
        <a
          class="
            flex
            items-center
            px-4
            py-2
            text-gray-600
            transition-colors
            duration-200
            transform
            rounded-md
            dark:text-gray-400
            hover:bg-gray-200
            dark:hover:bg-[#15151e] dark:hover:text-gray-200
            hover:text-gray-700
          "
          href="/"
        >
          <p class="customtext">barang</p>
        </a>

        <a
          class="
            flex
            items-center
            px-4
            py-2
            mt-3
            text-gray-600
            transition-colors
            duration-200
            transform
            rounded-md
            dark:text-gray-400
            hover:bg-gray-200
            dark:hover:bg-[#15151e] dark:hover:text-gray-200
            hover:text-gray-700
          "
          href="/supplier"
        >
          <p class="customtext">Supplier</p>
        </a>
        <hr class="my-6 border-gray-200" />
        <p class="text-white">hari online: {{(new Date()).toLocaleDateString('en-GB')}}</p>
        <p class="text-white">waktu online: {{(new Date()).toLocaleTimeString('en-GB')}}</p>
        <hr class="my-6 border-gray-200" />
        <a
          class="
            flex
            items-center
            px-4
            py-2
            mt-3
            text-gray-600
            transition-colors
            duration-200
            transform
            rounded-md
            dark:text-gray-400
            hover:bg-gray-200
            dark:hover:bg-[#15151e] dark:hover:text-gray-200
            hover:text-gray-700
          "
          v-if="isLogged === false"
          @click.prevent="toLoginPage"
        >
          <p class="customtext">Login</p>
        </a>
        <a
          class="
            flex
            items-center
            px-4
            py-2
            mt-3
            text-gray-600
            transition-colors
            duration-200
            transform
            rounded-md
            dark:text-gray-400
            hover:bg-gray-200
            dark:hover:bg-[#15151e] dark:hover:text-gray-200
            hover:text-gray-700
          "
          v-if="isLogged === true"
          @click.prevent="logoutHandler"
        >
          <p class="customtext">Log out</p>
        </a>
      </nav>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { mapMutations, mapState } from "vuex";
export default {
  name: "SideBar",
  methods: {
    ...mapMutations(["CHANGE_ISLOGGED"]),
    logoutHandler() {
      localStorage.clear();
      this.CHANGE_ISLOGGED(false);
      Swal.fire({
        icon: "success",
        title: "Logout",
        text: `Logout berhasil`,
      });
    },
    toLoginPage() {
      this.$router.push({
        name: "Login"
      })
    }
  },
  computed: {
    ...mapState(["isLogged"]),
    user() {
      return localStorage.getItem("username")
    }
  },
};
</script>

<style>
</style>