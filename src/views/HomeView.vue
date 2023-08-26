<template>
  <div class="estado">
    <div class="contentNav">
      <Navbar />
    </div>
    <div class="content">
      <Wellcome />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Wellcome from '@/components/Wellcome.vue';
export default {
  name: 'HomeView',
  components: {
    Navbar,
    Wellcome
  }
}
</script>
<style>

</style>