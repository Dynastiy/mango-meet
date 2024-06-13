<template>
  <div class="h-[85vh] flex flex-col justify-between">
    <div class="flex flex-col gap-4">
        <span @click="$router.go(-1)">
            <i-icon icon="charm:arrow-left" class="text-xl" />
        </span>
      <div
        class="claim-header p-6 rounded-[8px] h-[200px] flex justify-between items-end text-white"
      >
        <div>
          <h4 class="text-sm text-gray-200">Total Amount</h4>
          <h1 class="font-bold text-2xl">N300, 000</h1>
        </div>
        <button class="brand-btn-md brand-primary">Claim</button>
      </div>
      <div class="bg-white py-3 px-6 rounded-[8px] flex justify-between">
        <span class="font-semibold text-sm">Starcoins Claimed</span>
        <span class="font-semibold text-sm">N300, 000</span>
      </div>
    </div>
    <div class="flex gap-4 justify-center mt-3">
      <button class="brand-btn brand-primary w-full" @click="$router.push('/')">Meet & Connect</button>
      <button class="brand-btn bg-secondary text-white w-full" @click="$router.push('/app/claim')">Claim Starcoins</button>
    </div>
  </div>
</template>

<script>
export default {}
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
