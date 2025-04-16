<template>
  <div>
    <div class="container">
      <Navbar />
    <div class="mt-5">
      <router-view />
    </div>
  </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  components: { Navbar }
}
</script>
