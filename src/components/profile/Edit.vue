<template>
  <div>
    <div>
      <div class="flex flex-col gap-3 w-full rounded-md">
        <div class="flex gap-3">
          <span class="w-full">
            <label class="text-xs" for="">First Name</label>
            <input type="text" class="input" v-model="form.first_name" />
          </span>
          <span class="w-full">
            <label class="text-xs" for="">Last Name</label>
            <input type="text" class="input" v-model="form.last_name" />
          </span>
        </div>
        <span>
          <label class="text-xs" for="">Gender</label>
          <select name="" id="" class="input capitalize" v-model="form.gender">
            <option v-for="(item, i) in ['male', 'female']" :value="item" :key="i">
              {{ item }}
            </option>
          </select>
        </span>
        <div class="flex gap-3">
          <span class="w-full">
            <label class="text-xs" for="">Phone Number</label>
            <input type="text" class="input" v-model="form.phone_number" />
          </span>
          <span class="w-full">
            <label class="text-xs" for="">Date Of Birth</label>
            <input type="date" class="input" v-model="form.date_of_birth" />
          </span>
        </div>
        <div class="flex gap-3">
          <span class="w-full">
            <label class="text-xs" for="">Country</label>
            <select name="" id="" class="input capitalize" v-model="form.country">
              <option v-for="(item, i) in countries" :value="item.iso_alpha_2_code" :key="i">
                {{ item.country_name }}
              </option>
            </select>
          </span>
          <span class="w-full">
            <label class="text-xs" for="">Region, State, Province</label>
            <select name="" id="" :disabled="form.country == ''" class="input capitalize" v-model="form.region_state_province">
              <option value="" selected disabled>--Select One--</option>
              <option v-for="(item, i) in regions" :value="item.iso_alpha_2_code" :key="i">
                {{ item.region_state_province_name }}
              </option>
            </select>
          </span>
        </div>
        <span>
          <label class="text-xs" for="">City</label>
          <input type="text" class="input" v-model="form.city" />
        </span>
        <span>
          <label class="text-xs" for="">Bio</label>
          <textarea
            name=""
            @keyup="countCharacters"
            id=""
            :maxlength="totalCount"
            cols="30"
            class="input"
            rows="5"
            v-model="form.bio"
          ></textarea>
          <span class="block text-right text-[12px] font-semibold"
            ><span :class="{ 'text-red-600': remainingCount < 10 }"
              >{{ `${remainingCount}` }}
            </span>
            / {{ totalCount }}</span
          >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
        // profile_picture_url: ''
      },
      countries: [],
      regions: [],
      wordCount: 0,
      totalCount: 200
    }
  },

  methods: {
    getData(e) {
      this.$appDomain.getLocationByType(e).then((res) => {
        console.log(res)
        if (e.type == 'country') {
          this.countries = res.data
        }
        if (e.type == 'region_state_province') {
          this.regions = res.data
        }
      })
    }
  },

  beforeMount() {
    let e = { type: 'country' }
    this.getData(e)
  },

  watch: {
    user: {
      handler(val) {
        this.form = {
            ...val,
            date_of_birth: new Date(val.date_of_birth)
        }
      },
      immediate: true,
      deep: true
    },

    'form.bio': {
      handler(val) {
        this.wordCount = val.length
      },
      immediate: true,
      deep: true
    },

    'form.country': {
      handler(val) {
        if (val) {
          let e = {
            type: 'region_state_province',
            iso_code: val,
            data_response_format: 'array'
          }
          this.getData(e)
        }
      },
      immediate: true,
      deep: true
    }
  },

  computed: {
    user() {
      return this.$store.getters['auth/getUser']
    },

    remainingCount() {
      return this.totalCount - this.wordCount
    }
  }
}
</script>

<style></style>
