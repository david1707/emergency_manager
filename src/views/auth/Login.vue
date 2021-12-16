<template>
  <h2>Login</h2>
  <form @submit.prevent="submitLogin">
    <label for="email">Email:</label>
    <input name="email" type="email" v-model="email" required />

    <label for="password">Password:</label>
    <input name="password" type="password" v-model="password" required />

    <button>Login</button>
    <div v-if="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const error = ref(null);

    const store = useStore();
    const router = useRouter();

    const submitLogin = async () => {
      try {
        await store.dispatch("login", {
          email: email.value,
          password: password.value,
        });
        router.push({ name: "Home" });
      } catch (err) {
        error.value = err.message;
      }
    };

    return { submitLogin, email, password, error };
  },
};
</script>

<style>
</style>