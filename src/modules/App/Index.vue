<template>
  <div class="flex flex-col gap-4">
    <el-skeleton style="width: 100%" :loading="loading" animated>
      <template #template>
        <div class="">
          <div class="flex flex-col w-full gap-4">
            <el-skeleton-item
              variant="image"
              style="height: 55vh; border-radius: 10px; width: 100%"
            />
            <el-skeleton-item
              variant="text"
              style="height: 20px; border-radius: 10px; width: 40%"
            />
            <el-skeleton-item
              variant="text"
              style="height: 20px; border-radius: 10px; width: 50%"
            />
            <el-skeleton-item
              variant="text"
              style="height: 20px; border-radius: 10px; width: 80%"
            />
          </div>
        </div>
      </template>
      <template #default>
        <div class="flex flex-col gap-4" v-for="(item, i) in match" :key="i">
          <div
            class="h-[50vh] rounded-[10px] bg-cover bg-top flex p-4 items-end"
            :style="`background: url(${item?.profile_picture_url})`"
          >
            <div class="flex items-center justify-center gap-6 w-full">
              <span
                role="button"
                @click="prev"
                class="brand-primary block rounded-[8px] p-4 text-xl text-white w-fit shadow"
              >
                <i-icon icon="charm:arrow-left" />
              </span>
              <span
                class="bg-white block rounded-[8px] p-4 text-xl text-secondary w-fit shadow"
                role="button"
                @click="like(item)"
              >
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
            <h1 class="font-bold flex items-center gap-[2px]">
              {{ `${item?.first_name} ${item?.last_name}` }}
              <span v-if="timeLeft(item) > 0">
                <i-icon icon="mage:verified-check-fill" class="text-green-600 text-lg" />
              </span>
              
            </h1>
            <span class="text-sm font-medium flex items-center gap-1 capitalize">
              <i-icon icon="icons8:gender" class="text-primary" /> 
              <span class="text-primary font-bold">{{ `${item.gender}, ${item?.age}yrs` }}</span>
            </span>
            <span class="text-sm font-medium flex items-center gap-1">
              <i-icon icon="tabler:location-filled" class="text-primary" />
              {{ `${item?.city} - ${item?.region_state_province_name}, ${item?.country_name} ` }}
            </span>
            <span class="font-medium text-sm flex flex-col">
              <span class="text-primary font-medium text-[13px]">About Me</span>
              <span class="font-medium">
                {{ item?.bio }}
              </span>
            </span>
          </div>
        </div>
      </template>
    </el-skeleton>

    <div class="flex gap-4 justify-center mt-3">
      <button class="brand-btn brand-primary w-full">Meet & Connect</button>
      <button class="brand-btn bg-secondary text-white w-full" @click="$router.push('/claim')">
        Claim Starcoins
      </button>
    </div>
  </div>
</template>

<script>
// import { useToast } from 'vue-toastification'
export default {
  data() {
    return {
      filter: {
        per_page: 1,
        page_no: 1
      },
      match: [],
      meta: {},
      loading: false
    }
  },

  methods: {
    getMatch() {
      this.loading = true
      let payload = this.filter
      let user_id = this.user.user_id
      this.$appDomain
        .getMatch(payload, user_id)
        .then((res) => {
          console.log(res)
          this.match = res.data
          this.meta = res.meta.pagination
        })
        .finally(() => {
          this.loading = false
        })
    },

    like(e) {
      let payload = {
        user_id_to_connect: e.ID,
        user_id: this.user.user_id
      }
      this.$appDomain.likeMatch(payload).then((res) => {
        console.log(res)
      })
      // .finally(() => {
      //   this.loading = false
      // })
    },

    timeLeft(value) {
      return (
        value.subscription_fee_expiration_time_of_last_payment -
        value.subscription_fee_transaction_time_of_last_payment
      )
    },

    next() {
      this.filter.page_no++
      this.getMatch()
    },

    prev(){
      if(this.meta.current_page > 1) {
        this.filter.page_no--
        this.getMatch()
      }
    }
  },

  beforeMount() {
    this.getMatch()
  },

  computed: {
    user() {
      return this.$store.getters['auth/getUser']
    }
  }
}
</script>

<style></style>
