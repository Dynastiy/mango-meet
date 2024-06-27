<template>
  <div class="container py-6">
    <Loader v-if="loading" />
    <div v-else>
      <div class="mb-8">
        <app-header />
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/navigation/headers/AppHeader.vue'
export default {
  components: { AppHeader },
  name: 'DashboardLayout',
  data() {
    return {
      loading: false
    }
  },

  methods: {
    getUser(value) {
      let payload = {
        meta_key:
          'first_name,last_name,gender,country,region_state_province,city,bio,date_of_birth,phone_number,profile_picture_url,subscription_fee_expiration_time_of_last_payment,subscription_fee_transaction_time_of_last_payment,subscription_fee_duration_of_last_payment,rimplenet_referrer_sponsor,telegram_chat_id,telegram_username,_username,_user_email',
        data_response_format: 'array',
        type: 'array_multi_27'
      }
      this.$appDomain.getUserMeta(payload, value).then((res) => {
        console.log(res.data)
        this.$store.commit('auth/setUserMeta', res.data)
      })
    },

    loginUser() {
      this.loading = true
      const queryData = this.$route.query
      let payload = {
        chat_id: queryData.chat_id
      }
      this.$appDomain.getUser(payload).then((res) => {
        console.log(res)
        this.$store.commit('auth/setUser', res.data)
        localStorage.setItem('_mangomeet_token', res.data.access_token)
        this.getUser(res.data.user_id)
      })
      .finally(()=> {
        this.loading = false
      })
    }
  },

  beforeMount() {
   
    let token = localStorage.getItem('_mangomeet_token')
    if (!token) {
      this.loginUser()
    }
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
