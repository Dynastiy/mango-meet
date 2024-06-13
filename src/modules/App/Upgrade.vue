<template>
  <div class="min-h-[85vh] flex flex-col justify-between">
    <div class="flex flex-col gap-4">
      <div>
        <span @click="$router.go(-1)">
          <i-icon icon="charm:arrow-left" class="text-xl" />
        </span>
        <h3 class="font-bold my-2 text-2xl">Upgrade</h3>
      </div>
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
      <div class="bg-secondary py-5 px-6 flex justify-between items-center rounded-[8px]">
        <div class="flex flex-col gap-1">
          <span class="font-medium text-gray-200 text-xs">Balance</span>
          <span class="font-bold text-2xl text-white">0.6USDT</span>
        </div>
        <i-icon icon="solar:wallet-money-outline" class="text-4xl text-accent" />
      </div>
      <div>
        <h4 class="font-semibold mb-2">Recent Transactions</h4>
        <div class="flex flex-col gap-3">
          <div
            class="bg-white py-3 px-6 rounded-[8px] flex justify-between"
            v-for="item in 4"
            :key="item"
          >
            <span class="font-semibold text-sm">0.2USDT</span>
            <span class="font-medium text-gray-500 text-sm">23/12/2023</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex gap-4 justify-center mt-3">
      <button class="brand-btn brand-primary w-full">Upgrade</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      address: '0x5g3uyguy2gr89328926h8426uih87s'
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
