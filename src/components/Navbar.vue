<template>
  <nav>
    <h2>Navbar</h2>

    <!-- For logged in users -->
    <div>
      <router-link :to="{ name: 'AmbulancesList' }">Ambulances</router-link>
      <router-link :to="{ name: 'FireTrucksList' }">Fire trucks</router-link>
      <router-link :to="{ name: 'PoliceCarsList' }">Police cars</router-link>
    </div>
    <!-- For logged out users -->
    <div>
      <router-link :to="{ name: 'Login' }">Login</router-link>
      <router-link :to="{ name: 'Signup' }">Signup</router-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>