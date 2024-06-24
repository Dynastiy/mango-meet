<template>
  <div class="min-h-[85vh] flex flex-col justify-between">
    <div class="flex flex-col gap-4">
      <span class="text-sm font-semibold">Fund your balance below with USDT to upgrade</span>
      <div class="flex items-center p-2 bg-white rounded-[6px] shadow-sm">
        <input
          type="text"
          class="bg-transparent w-full text-sm font-semibold"
          v-model="address"
          disabled
          readonly
        />
        <span class="brand-primary p-[5px] rounded-md">
          <i-icon icon="ion:copy" />
        </span>
      </div>

      <!-- <div class="bg-secondary py-5 px-6 flex justify-between items-center rounded-[8px]">
        <div class="flex flex-col gap-1">
          <span class="font-medium text-gray-200 text-xs">Balance</span>
          <span class="font-bold text-2xl text-white">0.6USDT</span>
        </div>
        <i-icon icon="solar:wallet-money-outline" class="text-4xl text-accent" />
      </div> -->
      <div>
        <user-wallet />
      </div>

      <div>
        <UpgradeFees />
      </div>

      <div>
        <h4 class="font-semibold mb-2">Recent Transactions</h4>
        <txn-history />
      </div>
    </div>
    <div class="flex gap-4 justify-center mt-3">
      <button class="brand-btn brand-primary w-full">Upgrade</button>
    </div>
  </div>
</template>

<script>
import UpgradeFees from '@/components/Upgrade/UpgradeFees.vue'
import TxnHistory from '@/components/Upgrade/TxnHistory.vue'
import UserWallet from '@/components/utils/UserWallet.vue'
export default {
  components: { UpgradeFees, TxnHistory, UserWallet },
  data() {
    return {}
  },

  methods: {
    generateAddress() {
      let user_id = this.user_id
      this.$middleware.generateWalletAddress(user_id).then((res) => {
        this.$store.commit('auth/setWalletAddress', res.data.address)
      })
    }
  },

  beforeMount() {
    let hasAddress = !!this.address
    if (!hasAddress) {
      this.generateAddress()
    }
  },

  computed: {
    address() {
      return this.$store.getters['auth/getWalletAddress']
    },
    user_id() {
      return this.$store.getters['auth/getUserID']
    }
  }
}
</script>

<style>
.claim-header {
  background: var(---secondary-color);
  background-image: url('https://preview.redd.it/some-random-pretty-lady-v0-gjoftzwojaqb1.png?width=640&crop=smart&auto=webp&s=2ed92df2c30baee7c8dc899c19fd8d9a22f56b96');
  background-blend-mode: overlay;
  background-size: cover;
  background-position: center;
}
</style>
