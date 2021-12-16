<template>
  <h2>Firetrucks List</h2>
  {{ firetrucksList}}
</template>

<script>
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const firetrucksList = store.state.firetrucks;

    return { firetrucksList };
  },
};
</script>

<style>
</style>