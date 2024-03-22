<template>
  <div class="painting">
    <img :src="`https://test-front.framework.team${pictureInfo?.imageUrl}`" :alt="pictureInfo?.name">
    <div class="info">
      <h4 class="titlePainting">{{ pictureInfo?.name }}</h4>
      <div class="desc"> Author: <span>{{ getAuthorById(pictureInfo?.authorId) }}</span></div>
      <div class="desc"> Created: <span>{{ pictureInfo?.created }}</span></div>
      <div class="desc"> Location: <span>{{ getLocationById(pictureInfo?.locationId) }}</span></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useAuthorsStore from '../stores/author';
import useLocationsStore from '../stores/location';
import { type Painting } from '../interfaces'


const { pictureInfo } = defineProps<{
  pictureInfo: Painting;
}>();


// const store = useAuthorsStore();
const { getAuthorById } = useAuthorsStore();
const { getLocationById } = useLocationsStore();

</script>

<style scoped>
.painting {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  height: 275px;
  cursor: pointer;

  img {
    width: 100%;
    height: 275px;
    object-fit: cover;
  }

  .info {
    background: rgba(255, 255, 255, 0.75);
    padding: 5px 15px;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: -75px;
    display: flex;
    flex-direction: column;
    grid-gap: 6px;
    transition: .3s;

    .desc {
      color: rgb(0, 0, 0);
      font-family: Roboto;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      display: flex;
      grid-gap: 8px;

      span {
        color: rgb(0, 0, 0);
        font-family: Roboto;
        font-size: 14px;
        font-weight: 300;
        line-height: 20px;
        letter-spacing: 0%;
        white-space: nowrap;
      }
    }

    .titlePainting {
      color: rgb(0, 0, 0);
      font-family: Roboto;
      font-size: 18px;
      font-weight: 700;
      line-height: 20px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  &:hover {
    .info {
      bottom: 0;

      span {
        white-space: unset;
      }
    }
  }
}
</style>
