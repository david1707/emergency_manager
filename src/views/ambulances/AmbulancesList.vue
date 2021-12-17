<template>
  <h2>Ambulances List</h2>
  {{ ambulancesList }}
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    return { ambulancesList: computed(() => store.state.ambulances) };
  },
};
</script>

<style>
</style>