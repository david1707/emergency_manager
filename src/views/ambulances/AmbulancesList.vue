<template>
  <h2>Ambulances List</h2>

</template>

<script>
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const ambulancesList = store.state.ambulances;

    return { ambulancesList };
  },
};
</script>

<style>
</style>