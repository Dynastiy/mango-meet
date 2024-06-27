<template>
  <div class="flex flex-col gap-3">
    <div>
      <h2 class="font-bold text-md">Follow & Earn</h2>
      <div class="flex gap-[6px]">
        <span>
          <i-icon icon="fluent-emoji-flat:coin" class="text-[40px]" />
        </span>
        <span class="flex flex-col">
          <span class="text-gray-500 text-[12px] font-medium">Reward</span>
          <h6
            class="text-gray-700 text-[12px] lg:w-5/12 md:w-6/12 w-full font-semibold flex gap-[4px] items-center"
          >
            10 000
          </h6>
        </span>
      </div>
    </div>

    <h5 class="font-semibold text-sm">Your Tasks</h5>
    <span class="shadow rounded-md p-2 text-[12px] font-medium bg-gray-100" role="button">
      <a href="https://t.me/mangomeet">Follow Mangomeet on telegram</a>
    </span>
    <span class="shadow rounded-md p-2 text-[12px] font-medium bg-gray-100" role="button"
      ><a href="https://t.me/chambitpage">Follow Chambit on telegram</a></span
    >
    <button class="brand-btn brand-primary mx-auto flex items-center py-[4px] text-[12px] w-fit gap-2 justify-center" @click="$emit('claimReward', 'telegram_mangomeet_follow_claim')">Click here after following on telegram</button>
    <span class="shadow rounded-md p-2 text-[12px] font-medium bg-gray-100" role="button"
      ><a href="https://x.com/slmemine733?t=cEU5hRrL5sMN6bRaA32lmQ&s=09">Follow Mangomeet on Twitter(X)</a></span
    >
    <button class="brand-btn brand-primary mx-auto flex items-center py-[4px] text-[12px] w-fit gap-2 justify-center" @click="$emit('claimReward', 'twitter_mangomeet_follow_claim')">Click here after following on twitter(X)</button>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
