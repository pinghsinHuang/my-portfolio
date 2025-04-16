<template>
  <div>
    <Navbar />
    <div class="container">
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
