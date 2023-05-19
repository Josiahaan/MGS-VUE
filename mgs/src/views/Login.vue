<template>
  <div
    class="min-h-screen w-screen flex items-center justify-center py-10 px-5"
  >
    <section
      class="
        max-w-4xl
        p-6
        mx-auto
        bg-white
        rounded-md
        shadow-md
        dark:bg-gray-800
      "
    >
      <h2
        class="text-lg font-semibold text-gray-700 capitalize dark:text-white"
      >
        Login
      </h2>

      <hr class="my-6 border-gray-200" />

      <form @submit.prevent="loginSubmit">
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="username"
              >User Name</label
            >
            <input
              id="username"
              type="text"
              v-model="login.username"
              class="
                block
                w-full
                px-4
                py-2
                mt-2
                text-gray-700
                bg-white
                border border-gray-200
                rounded-md
                dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600
                focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40
                dark:focus:border-blue-300
                focus:outline-none focus:ring
              "
            />
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="password"
              >Password</label
            >
            <input
              id="loginpassword"
              type="password"
              v-model="login.password"
              class="
                block
                w-full
                px-4
                py-2
                mt-2
                text-gray-700
                bg-white
                border border-gray-200
                rounded-md
                dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600
                focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40
                dark:focus:border-blue-300
                focus:outline-none focus:ring
              "
            />
          </div>
        </div>

        <div class="flex justify-center mt-6">
          <button
            class="
              px-6
              py-2
              leading-5
              text-white
              transition-colors
              duration-200
              transform
              bg-gray-700
              rounded-md
              hover:bg-gray-600
              focus:outline-none focus:bg-gray-600
            "
          >
            Login
          </button>
        </div>
        <hr class="my-6 border-gray-200" />
        <div class="flex items-center justify-between mt-4">
          <a
            href="#"
            class="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500"
            >Forget Password?</a
          >

          <router-link
            to="/Register"
            class="
              px-4
              py-2
              leading-5
              text-white
              transition-colors
              duration-200
              transform
              bg-gray-700
              rounded
              hover:bg-gray-600
              focus:outline-none
            "
            type="button"
          >
            Register
          </router-link>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "LoginPage",
  data() {
    return {
      login: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(["loginHandler"]),
    async loginSubmit() {
      await this.loginHandler(this.login);
      if (this.isLogged === true) {
        this.$router.push({ name: "home" });
        this.login.username = "";
        this.login.password = "";
      }
    },
  },
  computed: {
    ...mapState(["isLogged"]),
  },
};
</script>

<style>
</style>