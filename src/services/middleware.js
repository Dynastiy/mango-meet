import $request from '@/axios/middleware'
import { catchAxiosError, catchAxiosSuccess } from './response'

export default {
  async generateWalletAddress(user_id) {
    try {
      let res = await $request.get(`cryptocurrency/bscscan/deposit-address/${user_id}`)
      catchAxiosSuccess(res)
      return res.data
    } catch (error) {
      catchAxiosError(error)
      throw error
    }
  },

}
