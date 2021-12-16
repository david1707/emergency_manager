<template>
  <h2>Police cars List</h2>
  {{ policecarsList }}
</template>

<script>
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const policecarsList  = store.state.policecars;

    return { policecarsList  };
  },
};
</script>

<style>
</style>