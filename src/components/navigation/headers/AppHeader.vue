<template>
  <div>
    <div class="flex justify-between items-center">
      <span v-if="routeName === 'home'" class="brand-icon block text-3xl">Mango Meet</span>
      <div v-else class="flex gap-4 items-center justify-between">
        <span
          @click="$router.go(-1)"
          role="button"
          class="bg-gray200 border border-gray300 p-2 rounded-full"
        >
          <i-icon icon="charm:arrow-left" class="text-xl" />
        </span>
        <div class="flex justify-center w-full">
          <h3 class="font-bold text-2xl capitalize">{{ routeName.split('-').join(' ') }}</h3>
        </div>
      </div>
      <div class="flex gap-2 items-center">
        <!-- {{user}} -->
        <img
          v-if="user"
          :src="user.profile_picture_url ? user.profile_picture_url : image"
          class="w-[45px] h-[45px] border-2 p-[2px] border-gray-300 rounded-full object-fit object-top"
          role="button"
          @click="$router.push('/profile')"
        />
        <!-- <div>
          <span class="text-sm capitalize font-semibold block">Vendor</span>
          <span class="text-xs block text-gray-400">{{
            `${user.first_name} ${user.last_name}`
          }}</span>
        </div> -->
        <button
          v-if="routeName === 'home'"
          class="brand-btn brand-primary py-2 flex items-center gap-2 justify-center"
          @click="$router.push('/upgrade')"
        >
          <i-icon icon="icomoon-free:fire" />
          upgrade
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import image from '@/assets/img/no-user.png'
export default {
  data() {
    return {
      image
    }
  },

  methods: {
    getUser() {
      let payload = {
        meta_key:
          'first_name,last_name,gender,country,region_state_province,city,bio,date_of_birth,phone_number,profile_picture_url,subscription_fee_expiration_time_of_last_payment,subscription_fee_transaction_time_of_last_payment,subscription_fee_duration_of_last_payment,rimplenet_referrer_sponsor,telegram_chat_id,telegram_username,_username,_user_email',
        data_response_format: 'array',
        type: 'array_multi_27'
      }
      this.$appDomain.getUserMeta(payload, this.user_id).then((res) => {
        console.log(res.data)
        this.$store.commit('auth/setUser', res.data)
      })
    }
  },

  beforeMount() {
    console.log(this.user, 'res:User data from app header')
    const queryData = this.$route.query
    if (this.user_id) {
      if (queryData.user_id) {
        if (queryData.user_id !== this.user_id) {
          this.$store.commit('auth/setUserID', queryData.user_id)
        }
      }
    } else {
      this.$store.commit('auth/setUserID', queryData.user_id)
    }

    const token = localStorage.getItem('_user_token')
    if (token) {
      if (queryData.access_token) {
        if (queryData.access_token !== token) {
          console.log(queryData.access_token, 'from check')
          localStorage.setItem('_user_token', queryData.access_token)
        }
      }
    } else {
      localStorage.setItem('_user_token', queryData.access_token)
    }
  },

  watch: {
    user_id: {
      handler(oldVal, newVal) {
        if (oldVal !== newVal) {
          this.getUser()
        }
      }
    }
  },

  computed: {
    user_id() {
      return this.$store.getters['auth/getUserID']
    },
    user() {
      return this.$store.getters['auth/getUser']
    },
    routeName() {
      return this.$route.meta.name
    }
  }
}
</script>

<style></style>
