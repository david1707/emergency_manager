<template>
  <div class="home">
    <h2>Home</h2>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  name: "Home",
  setup() {
    const store = useStore()
    store.dispatch('loadVehicle', 'ambulances')
    store.dispatch('loadVehicle', 'firetrucks')
    store.dispatch('loadVehicle', 'policecars')
  },
};
</script>
