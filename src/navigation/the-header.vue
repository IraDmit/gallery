<template>
  <header>
    <div class="logo"><svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M34 66C51.6731 66 66 51.6731 66 34C66 16.3269 51.6731 2 34 2C16.3269 2 2 16.3269 2 34C2 51.6731 16.3269 66 34 66Z"
          stroke="#4C4C4C" stroke-width="2.5" />
        <path d="M18.9773 35.3262H17.3555" stroke="#4C4C4C" stroke-width="2.5" stroke-miterlimit="10"
          stroke-linecap="round" stroke-linejoin="round" />
        <path d="M22.3003 27.8223H13V41.7102" stroke="#4C4C4C" stroke-width="2.5" stroke-miterlimit="10"
          stroke-linecap="round" stroke-linejoin="round" />
        <path d="M51.1641 32.334V41.7093" stroke="#4C4C4C" stroke-width="2.5" stroke-miterlimit="10"
          stroke-linecap="round" stroke-linejoin="round" />
        <path d="M55.9995 27.8223H46.6992" stroke="#4C4C4C" stroke-width="2.5" stroke-miterlimit="10"
          stroke-linecap="round" stroke-linejoin="round" />
        <path d="M31.5283 41.9594L26.1523 27" stroke="#4C4C4C" stroke-width="2.5" stroke-miterlimit="10"
          stroke-linecap="round" stroke-linejoin="round" />
        <path d="M43.0512 27L37.6753 41.9594L34.5117 33.5358" stroke="#4C4C4C" stroke-width="2.5" stroke-miterlimit="10"
          stroke-linecap="round" stroke-linejoin="round" />
      </svg></div>
    <div class="theme-switcher" @click="$emit('switchTheme')">
      <svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <path id="Vector"
          d="M10 5.45C7.49 5.45 5.45 7.49 5.45 10C5.45 12.5  7.49 14.54 10 14.54C12.5 14.54 14.54 12.5 14.54 10C14.54 7.49 12.5 5.45 10 5.45ZM0.9 10.9L2.72 10.9C3.22 10.9 3.63 10.5 3.63 10C3.63 9.5 3.22 9.09 2.72 9.09L0.9 9.09C0.4 9.09 0 9.5 0 10C0 10.5 0.4 10.9 0.9 10.9ZM17.27 10.9L19.09 10.9C19.59 10.9 20 10.5 20 10C20 9.5 19.59 9.09 19.09 9.09L17.27 9.09C16.77 9.09 16.36 9.5 16.36 10C16.36 10.5 16.77 10.9 17.27 10.9ZM9.09 0.9L9.09 2.72C9.09 3.22 9.5 3.63 10 3.63C10.5 3.63 10.9 3.22 10.9 2.72L10.9 0.9C10.9 0.4 10.5 0 10 0C9.5 0 9.09 0.4 9.09 0.9ZM9.09 17.27L9.09 19.09C9.09 19.59 9.5 20 10 20C10.5 20 10.9 19.59 10.9 19.09L10.9 17.27C10.9 16.77 10.5 16.36 10 16.36C9.5 16.36 9.09 16.77 9.09 17.27ZM4.53 3.25C4.18 2.9 3.59 2.9 3.25 3.25C2.9 3.6 2.9 4.19 3.25 4.53L4.21 5.5C4.57 5.85 5.15 5.85 5.5 5.5C5.84 5.14 5.85 4.56 5.5 4.21L4.53 3.25ZM15.78 14.5C15.42 14.14 14.84 14.14 14.5 14.5C14.14 14.85 14.14 15.43 14.5 15.78L15.46 16.74C15.81 17.1 16.4 17.1 16.74 16.74C17.09 16.39 17.09 15.8 16.74 15.46L15.78 14.5ZM16.74 4.53C17.09 4.18 17.09 3.59 16.74 3.25C16.39 2.9 15.8 2.9 15.46 3.25L14.5 4.21C14.14 4.57 14.14 5.15 14.5 5.5C14.85 5.84 15.43 5.85 15.78 5.5L16.74 4.53ZM5.5 15.78C5.85 15.42 5.85 14.84 5.5 14.5C5.14 14.14 4.56 14.14 4.21 14.5L3.25 15.46C2.9 15.81 2.9 16.4 3.25 16.74C3.6 17.09 4.19 17.1 4.53 16.74L5.5 15.78Z"
          fill-opacity="1.000000" fill-rule="nonzero" />
      </svg>
    </div>
  </header>
</template>

<script setup lang="ts">

const emit = defineEmits<{
  switchTheme: any
}>()
</script>

<style scoped>
header {
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 35px 0;
  align-items: center;

  .logo {
    cursor: pointer;
  }

  .theme-switcher {
    cursor: pointer;

    svg {
      fill: var(--themeSwitcher);

      #vector {
        fill: var(--themeSwitcher)
      }
    }
  }

}
</style>
