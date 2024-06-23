<template>
  <div class="flex flex-col gap-4">
    <div class="flex justify-between items-center">
      <span class="brand-icon block text-3xl">Mango Meet</span>
      <button
        class="brand-btn brand-primary flex items-center gap-2 justify-center"
        @click="$router.push('/app/upgrade')"
      >
        <i-icon icon="icomoon-free:fire" />
        upgrade
      </button>
    </div>
    <div class="flex flex-col gap-4" v-for="(item, i) in match" :key="i">
      <div
        class="h-[60vh] rounded-[10px] bg-cover bg-top flex p-4 items-end"
        :style="`background: url(${item?.profile_picture_url})`"
      >
        <!-- <img :src="item.profile_picture_url" alt="" /> -->
        <div class="flex items-center justify-center gap-6 w-full">
          <span class="bg-white block rounded-[8px] p-4 text-xl text-secondary w-fit shadow">
            <i-icon icon="icon-park-solid:like" />
          </span>
          <span
            role="button"
            @click="next"
            class="brand-primary block rounded-[8px] p-4 text-xl text-white w-fit shadow"
          >
            <i-icon icon="charm:arrow-right" />
          </span>
        </div>
      </div>
      <div class="flex flex-col gap-3">
        <h1 class="font-bold">
          {{ `${item?.first_name} ${item?.last_name}` }},
          <span class="text-primary font-bold">{{ item?.age }}</span>
        </h1>
        <span class="text-sm font-medium flex items-center gap-1 capitalize">
          <i-icon icon="icons8:gender" class="text-primary" /> {{ item.gender }}
        </span>
        <span class="text-sm font-medium flex items-center gap-1">
          <i-icon icon="tabler:location-filled" class="text-primary" />
          {{ `${item?.region_state_province_name}, ${item?.country_name} ` }}
        </span>
        <span class="font-medium text-sm flex flex-col">
          <span class="text-primary font-medium text-[13px]">About Me</span>
          <span class="font-medium">
            {{ item?.bio }}
          </span>
        </span>
      </div>
    </div>

    <!-- <div>
     
    </div> -->
    <div class="flex gap-4 justify-center mt-3">
      <button class="brand-btn brand-primary w-full">Meet & Connect</button>
      <button class="brand-btn bg-secondary text-white w-full" @click="$router.push('/app/claim')">
        Claim Starcoins
      </button>
    </div>
  </div>
</template>

<script>
import { useToast } from 'vue-toastification'

// const toast = useToast();
export default {
  data() {
    return {
      filter: {
        per_page: 1,
        page_no: 1
      },
      match: [],
      meta: {}
    }
  },

  methods: {
    getMatch() {
      let payload = this.filter
      let user_id = 7
      this.$appDomain.getMatch(payload, user_id).then((res) => {
        console.log(res)
        this.match = res.data
        this.meta = res.meta.pagination
      })
    },

    next() {
      if (this.meta.last_page === this.meta.current_page) {
        useToast().error('No more matches found', {
          timeout: 6000
        })
      } else {
        this.filter.page_no++
        this.getMatch()
      }
    }
  },

  beforeMount() {
    this.getMatch()
  }

  // watch: {
  //   filter: {
  //     handler(val) {
  //       if (val) {
  //         this.getMatch()
  //       }
  //     },
  //     immediate: true,
  //     deep: true
  //   }
  // }
}
</script>

<style></style>
