<template>
  <div>
    <!-- Hello World -->
    <div>
      {{ locat }}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    locat() {
        console.log(window.location)
      return window.location.origin
    }
  }
}
</script>

<style></style>
