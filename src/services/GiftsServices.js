import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { logger } from "../utils/Logger.js"
import { giftedApi } from "./AxiosService.js"

class GiftsServices{

  async getGifts(){
    const res = await giftedApi.get('gifts')
    logger.log('getting gifts', res.data)
    AppState.gifts = res.data.map(g => new Gift(g))
  }

  async openGift(gift){
    const res = await giftedApi.put(`gifts/${gift.id}`,{opened:true} )
    logger.log('opening gift', res.data)
    AppState.gifts = 
    
  }
}
export const giftsServices = new GiftsServices()