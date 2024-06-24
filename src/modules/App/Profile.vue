<template>
  <div class="flex gap-4 items-start lg:flex-row md:flex-row flex-col">
    <div class="bg-white p-6 lg:w-6/12 md:w-6/12 w-full rounded-md flex justify-center">
      <div>
        <img
          :src="user.profile_picture_url ? user.profile_picture_url : image"
          class="w-[100px] h-[100px] mx-auto border-2 p-1 border-gray-200 rounded-full object-fit object-top"
        />
        <h5 class="text-center text-sm font-semibold mt-2">{{ `${user.first_name} ${user.last_name}` }}</h5>
        <button
          class="brand-btn brand-primary mx-auto mt-2 py-2 text-xs flex items-center gap-2 justify-center"
          @click="$router.push('/upgrade')"
        >
          <i-icon icon="icomoon-free:fire" />
          upgrade
        </button>
      </div>
    </div>

    <div class="flex flex-col gap-3 bg-white p-6 w-full rounded-md">
      <div class="flex lg:flex-row md:flex-row flex-col gap-3">
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
        <label class="text-xs" for="">Phone Number</label>
        <input type="text" class="input" v-model="form.phone_number" />
      </span>
      <span>
        <label class="text-xs" for="">Gender</label>
        <select name="" id="" class="input capitalize" v-model="form.gender">
          <option v-for="(item, i) in ['male', 'female']" :value="item" :key="i">{{ item }}</option>
        </select>
      </span>
      <span>
        <label class="text-xs" for="">Date Of Birth</label>
        <input type="date" class="input" v-model="form.date_of_birth" />
      </span>
      <span>
        <label class="text-xs" for="">Country</label>
        <input type="text" class="input" v-model="form.country" />
      </span>
      <span>
        <label class="text-xs" for="">Region, State, Province</label>
        <input type="text" class="input" v-model="form.region_state_province" />
      </span>
      <span>
        <label class="text-xs" for="">Bio</label>
        <textarea name="" id="" cols="30" class="input" rows="4" v-model="form.bio"></textarea>
      </span>
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
        profile_picture_url: ''
      }
    }
  },

  watch: {
    user: {
      handler(val) {
        this.form = val
      },
      immediate: true,
      deep: true
    }
  },

  computed: {
    user() {
      return this.$store.getters['auth/getUser']
    }
  }
}
</script>

<style></style>
