<template>
  <div class="h-[85vh] flex flex-col justify-between">
    <div class="flex flex-col gap-2">
      <span @click="$router.go(-1)">
        <i-icon icon="charm:arrow-left" class="text-xl" />
      </span>

      <div class="border-8 rounded-full mx-auto mt-12 flex items-center justify-center border border-primary w-[200px] h-[200px]">
        <span class="font-bold text-xl">4,000</span>
      </div>
      <button
        class="brand-btn mx-auto brand-primary flex items-center w-fit gap-2 justify-center"
        @click="alert('claimed')"
      >
        <i-icon icon="icomoon-free:fire" />
        Claim
      </button>

      <div class="claim-header p-6 rounded-[8px] flex justify-between items-end text-white mt-12">
        <div>
          <h4 class="text-xs text-gray-200">Starcoins Claimed</h4>
          <h1 class="font-bold text-2xl">N300, 000</h1>
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
