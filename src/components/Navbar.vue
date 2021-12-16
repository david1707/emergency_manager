<template>
  <nav>
    <h2>Navbar</h2>

    <!-- For logged in users -->
    <!-- For logged out users -->
    <router-link :to="{name: 'Login'}" >Login</router-link>
    <router-link :to="{name: 'Signup'}" >Signup</router-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>