<template>
    <div class="double-arrow">

        <svg width="13.000000" height="12.000000" viewBox="0 0 13 12"  xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">
        
        <rect id="Frame230" width="13.453125" height="12.812500" transform="translate(-0.906250 -0.906250)"
        fill="#FFFFFF" fill-opacity="0" />
        <path id="Vector"
        d="M10.28 5.49L5.19 0.62C4.83 0.27 4.83 -0.3 5.19 -0.65C5.56 -1 6.15 -1 6.52 -0.65L12.27 4.86C12.45 5.04 12.54 5.27 12.54 5.49C12.54 5.72 12.45 5.95 12.27 6.13L6.52 11.64C6.15 11.99 5.56 11.99 5.19 11.64C4.83 11.29 4.83 10.72 5.19 10.37L10.28 5.49ZM-0.64 10.37C-1 10.72 -1 11.29 -0.64 11.64C-0.27 11.99 0.32 11.99 0.69 11.64L6.44 6.13C6.62 5.95 6.71 5.72 6.71 5.49C6.71 5.27 6.62 5.04 6.44 4.86L0.69 -0.65C0.32 -1 -0.27 -1 -0.64 -0.65C-1 -0.3 -1 0.27 -0.64 0.62L4.45 5.49L-0.64 10.37Z"
         fill-opacity="1.000000" fill-rule="nonzero" />
    </svg>
</div>

</template>

<script setup lang="ts">

</script>

<style scoped lang='scss'>
.double-arrow{
    height:100%;
    svg {
        fill: var(--arr-color);
        
        #vector {
            fill: var(--arr-color);
        }
    }
}
</style>