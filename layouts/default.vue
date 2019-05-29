<template>
  <div>
    <Nav></Nav>
    <nuxt />
  </div>
</template>

<script>
  import Nav from '@/components/Nav';

  export default {
    name: 'defaultLayout',
    components: {
      Nav
    }
  }
</script>

<style>

</style>