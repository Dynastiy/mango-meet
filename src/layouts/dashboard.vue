<template>
  <div class="container py-6">
    <div class="mb-8">
      <app-header />
    </div>
    <slot />
  </div>
</template>

<script>
import AppHeader from '@/components/navigation/headers/AppHeader.vue'
export default {
  components: {AppHeader},
  name: 'DashboardLayout',
  data() {
    return {}
  },

  methods: {},

  beforeMount() {
    // const user = this.$store.getters['auth/getUser']
  },

  created() {},

  computed: {
    routeName() {
      return this.$route.meta.name
    },

    routeParent() {
      return this.$route.meta.header
    },

    user() {
      return this.$store.getters['auth/getUser']
    },

    isSubPage() {
      return this.$route.meta.isSubPage
    },

    subRouteName() {
      return this.$route.meta.subName
    }
  }
}
</script>

<style></style>
