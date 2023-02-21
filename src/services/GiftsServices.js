import { logger } from "../utils/Logger.js"
import { giftedApi } from "./AxiosService.js"

class GiftsServices{

  async getGifts(){
    const res = await giftedApi.get('gifts')
    logger.log('getting gifts', res.data)
  }
}
export const giftsServices = new GiftsServices()