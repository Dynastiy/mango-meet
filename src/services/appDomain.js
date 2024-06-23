import $request from '@/axios/index'
import { catchAxiosError, catchAxiosSuccess } from './response'

export default {
  async getMatch(payload, user_id) {
    try {
      let res = await $request.get(`wp-json/nellalink-mango-meet/v1/match/${user_id}`, { params: payload })
      catchAxiosSuccess(res)
      return res.data
    } catch (error) {
      catchAxiosError(error)
      throw error
    }
  },

  async listSubscriptionFees(user_id) {
    try {
      let res = await $request.get(`wp-json/nellalink-mango-meet/v1/subscription-fees?user_id=${user_id}`)
      return res.data
    } catch (error) {
      catchAxiosError(error)
      throw error
    }
  },

  //   Get Wallets
  async getWallets(params) {
    // params, body
    // return $request
    //   .get(
    //     `/wp-json/rimplenet/v1/user-wallet-balance/multi?wallet_id=${body}&formatted=yes&user_id=${params}`
    //   )
    //   .then((response) => response.data);
    // wallet_id=${body}&formatted=yes&user_id=${params}

      try {
        let res = await $request.get(`/wp-json/rimplenet/v1/user-wallet-balance/multi`, {
          params
        })
        return res.data
      } catch (error) {
        catchAxiosError(error)
        throw error
      }
  },

  //   get Transactions
  async getTransactions(params) {
    // return $request
    //   .get(`wp-json/rimplenet/v3/transactions?user_id=${params}&page_no=${page}`)
    //   .then((response) => response.data);

    // ?user_id=${params}&page_no=${page}
      try {
      let res = await $request.get(`wp-json/rimplenet/v3/transactions`, {
        params
      })
      // catchAxiosSuccess(res)
      return res.data
    } catch (error) {
      catchAxiosError(error)
      throw error
    }
  },
}
