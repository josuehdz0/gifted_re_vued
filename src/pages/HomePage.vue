<template>
 <div class="container-fluid">
  <div class="row">
    <div class="col-4">search</div>
    <div class="col-8">
      <div class="row pt-2">
        <h2 class="text-center">GIFTS</h2>
      </div>
      <div class="row">
        <div class="col-4" v-for="gift in gifts">
          <div class="card giftcard my-2">
            <img :src="gift.url" alt="img" class="img-fluid crdimg rounded-top">
            <div class="card-body crdbdy">
              <h6>{{gift.tag}}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 </div>
</template>

<script>
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import {giftsServices} from "../services/GiftsServices.js"
import { onMounted, computed } from "vue";
import { AppState } from "../AppState.js";

export default {
  setup() {
    async function getGifts(){
      try {
        await  giftsServices.getGifts()
      } catch (error) {
        Pop.error(error.message)
        logger.error(error)
      }
    }

    onMounted(()=>{
      logger.log('hi from homepage')
      getGifts()
    })
    return {
      gifts: computed(()=> AppState.gifts),

      async openGift(gift){
        try {
          await giftsServices.openGift(gift)
        } catch (error) {
          Pop.error(error.message)
          logger.error(error)
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">

.giftcard{
  max-height: 45vh;
}

.crdimg{
 height: 20vh;
 object-fit: cover;
}

.crdbdy{
 height: 8vh;
 object-fit: cover;
}
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

}
</style>
