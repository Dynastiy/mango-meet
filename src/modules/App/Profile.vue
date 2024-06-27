<template>
  <div class="flex gap-6 items-start lg:flex-row md:flex-row flex-col">
    <div class="bg-white p-6 lg:w-6/12 md:w-6/12 w-full rounded-md flex justify-center">
      <div>
        <img
          :src="userMeta.profile_picture_url ? userMeta.profile_picture_url : image"
          class="w-[100px] h-[100px] mx-auto border-2 p-1 border-gray-200 rounded-full object-fit object-top"
        />
        <h5 class="text-center text-sm font-semibold mt-2 flex gap-[2px] items-center">
          {{ `${userMeta.first_name} ${userMeta.last_name}` }}
          <span v-if="timeLeft > 0">
            <i-icon icon="mage:verified-check-fill" class="text-green-600 text-lg" />
          </span>
          <!-- {{ timeLeft }}
          {{ Date.now() }} -->
        </h5>
        <button
          class="brand-btn brand-primary mx-auto mt-2 py-2 text-xs flex items-center gap-2 justify-center"
          @click="$router.push('/upgrade')"
        >
          <i-icon icon="icomoon-free:fire" />
          upgrade
        </button>
      </div>
    </div>

    <div class="w-full">
      <span class="flex mb-3 bg-gray-200 w-fit">
        <span
          class="block px-3 py-2 text-[12px] capitalize font-medium"
          role="button"
          @click="activateTab(i)"
          :class="{ 'brand-primary text-white font-semibold': i === activeTab }"
          v-for="(item, i) in tabs"
          :key="i"
        >
          {{ item.label }}
        </span>
      </span>
      <div class="bg-white p-6">
        <component :is="tabs[activeTab].component" />
      </div>
    </div>
  </div>
</template>

<script>
import Edit from '@/components/profile/Edit.vue'
import Transactions from '@/components/profile/Transactions.vue'
import Referral from '@/components/profile/Referral.vue'
import { markRaw } from 'vue'
import image from '@/assets/img/no-user.png'

export default {
  // components: { Edit, Transactions },
  data() {
    return {
      image,
      form: {
        first_name: '',
        last_name: '',
        phone_number: '',
        country: '',
        region_state_province: '',
        city: '',
        bio: '',
        date_of_birth: '',
        gender: '',
        profile_picture_url: ''
      },
      tabs: [
        {
          label: 'profile',
          component: markRaw(Edit)
        },
        {
          label: 'transactions',
          component: markRaw(Transactions)
        },
        {
          label: 'referral',
          component: markRaw(Referral)
        }
      ],
      activeTab: 0
    }
  },

  methods: {
    activateTab(e) {
      this.activeTab = e
    },
    getUser() {
      let payload = {
        meta_key:
          'first_name,last_name,gender,country,region_state_province,city,bio,date_of_birth,phone_number,profile_picture_url,subscription_fee_expiration_time_of_last_payment,subscription_fee_transaction_time_of_last_payment,subscription_fee_duration_of_last_payment,rimplenet_referrer_sponsor,telegram_chat_id,telegram_username,_username,_user_email',
        data_response_format: 'array',
        type: 'array_multi_27'
      }
      this.$appDomain.getUserMeta(payload, 29).then((res) => {
        console.log(res.data)
        this.$store.commit('auth/setUserMeta', res.data)
      })
    }
  },

  watch: {
    user: {
      handler(val) {
        this.form = val
      },
      immediate: true,
      deep: true
    }
  },

  beforeMount() {
    this.getUser()
  },

  computed: {
    user() {
      return this.$store.getters['auth/getUser']
    },
    userMeta() {
      return this.$store.getters['auth/getUserMeta']
    },
    timeLeft(){
      return this.userMeta.subscription_fee_expiration_time_of_last_payment - this.userMeta.subscription_fee_transaction_time_of_last_payment
    }
  }
}
</script>

<style></style>
