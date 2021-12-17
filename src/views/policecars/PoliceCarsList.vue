<template>
  <h2>Police cars List</h2>
  {{ policecarsList }}
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    return { policecarsList: computed(() => store.state.policecars) };
  },
};
</script>

<style>
</style>