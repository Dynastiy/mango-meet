<template>
  <div class="h-[85vh] flex flex-col justify-between">
    <div class="flex flex-col gap-2">
      <!-- <span @click="$router.go(-1)">
        <i-icon icon="charm:arrow-left" class="text-xl" />
      </span> -->

      <div class="border-8 rounded-full mx-auto mt-12 flex items-center justify-center border border-primary w-[200px] h-[200px]">
        <span class="font-bold text-xl">5,000</span>
      </div>
      <button
        class="brand-btn mx-auto flex items-center w-fit gap-2 justify-center"
        @click="claimStarcoins"
        :disabled="loading"
        :class="[loading ? 'bg-gray-400' : 'brand-primary' ]"
      >
        <i-icon icon="icomoon-free:fire" />
        Claim
      </button>

      <div class="claim-header p-6 rounded-[8px] flex justify-between items-end text-white mt-12">
        <div>
          <h4 class="text-xs text-gray-200">Starcoins Claimed</h4>
          <h1 class="font-bold text-2xl">{{ balance.wallet_balance_raw }}</h1>
        </div>
      </div>
    </div>
    <div class="flex gap-4 justify-center mt-3">
      <button class="brand-btn brand-primary w-full" @click="$router.push('/')">
        Meet & Connect
      </button>
      <button class="brand-btn bg-secondary text-white w-full" @click="$router.push('/app/claim')">
        Claim Starcoins
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      balance:{},
      loading: false,
      isLoading: false
    }
  },

  methods: {
    getWallets() {
      this.isLoading = true
      let payload = {
        wallet_id: 'starcoins',
        formatted: 'yes',
        user_id: this.user_id
      }
      this.$appDomain
        .getWallets(payload)
        .then((res) => {
          console.log(res)
          this.balance = res.data[0]
        })
        .finally(() => {
          this.isLoading = false
        })
    },

    claimStarcoins() {
      this.loading = true
      let payload = {
        action_type: 'daily_coins_claim',
        user_id: this.user_id
      }
      this.$appDomain
        .claim(payload)
        .then((res) => {
          console.log(res)
          this.getWallets()
        })
        .finally(() => {
          this.loading = false
        })
    },
  },



  beforeMount(){
    this.getWallets()
  },

  computed:{
    user_id(){
      return this.$store.getters['auth/getUserID']
    }
  }
}
</script>

<style>
.claim-header {
  background: var(---secondary-color);
}
</style>
