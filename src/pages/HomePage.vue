<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    
  </div>
</template>

<script>
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import {giftsServices} from "../services/GiftsServices.js"
import { onMounted } from "vue";

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
    return {}
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
