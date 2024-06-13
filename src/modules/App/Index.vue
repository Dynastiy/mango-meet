<template>
  <div class="flex flex-col gap-4">
    <div class="flex justify-between items-center">
      <span class="brand-icon block text-3xl">Mango Meet</span>
      <button class="brand-btn brand-primary flex items-center gap-2 justify-center" @click="$router.push('/app/upgrade')">
        <i-icon icon="icomoon-free:fire" />
        upgrade
      </button>
    </div>
    <div
      class="h-[60vh] rounded-[10px] bg-cover bg-center flex p-4 items-end"
      style="
        background: url('https://preview.redd.it/some-random-pretty-lady-v0-gjoftzwojaqb1.png?width=640&crop=smart&auto=webp&s=2ed92df2c30baee7c8dc899c19fd8d9a22f56b96');
      "
    >
      <div class="flex items-center justify-center gap-6 w-full">
        <span class="bg-white block rounded-[8px] p-4 text-xl text-secondary w-fit shadow">
          <i-icon icon="icon-park-solid:like" />
        </span>
        <span class="brand-primary block rounded-[8px] p-4 text-xl text-white w-fit shadow">
          <i-icon icon="charm:arrow-right" />
        </span>
      </div>
    </div>
    <div class="flex flex-col gap-3">
      <h1 class="font-bold">John Doe, <span class="text-primary font-bold">28,</span> F</h1>
      <span class="text-sm font-medium flex items-center gap-1"> <i-icon icon="tabler:location-filled" class="text-primary" /> Lagos, Nigeria </span>
      <span class="font-medium text-sm flex flex-col">
        <span class="text-primary font-medium text-[13px]">About Me</span>
        <span class="font-medium">
          Lorem ipsum dolor sit alit ipsam nihil incidunt, voluptate, eveniet odit corrupti soluta
          labore inventore fugit cumque facilis nemo ex illum quos!
        </span>
      </span>
    </div>

    <!-- <div>
     
    </div> -->
    <div class="flex gap-4 justify-center mt-3">
      <button class="brand-btn brand-primary w-full">Meet & Connect</button>
      <button class="brand-btn bg-secondary text-white w-full" @click="$router.push('/app/claim')">Claim Starcoins</button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
