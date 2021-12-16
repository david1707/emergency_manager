<template>
  <h2>Signup</h2>
  <form @submit.prevent="submitSignup">
    <label for="email">Email:</label>
    <input name="email" type="email" v-model="email" required />

    <label for="password">Password:</label>
    <input name="password" type="password" v-model="password" required />

    <button>Sign up</button>
    <div v-if="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const error = ref(null);

    const store = useStore();

    const submitSignup = async () => {
      await store.dispatch("signup", {
        email: email.value,
        password: password.value,
      });
    };

    return { submitSignup, email, password, error };
  },
};
</script>

<style>
</style>