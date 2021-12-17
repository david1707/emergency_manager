<template>
  <h2>Firetrucks List</h2>
  {{ firetrucksList}}
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    return { firetrucksList: computed(() => store.state.firetrucks) };
  },
};
</script>

<style>
</style>