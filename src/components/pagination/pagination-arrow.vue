<template>
    <div class="arrow">

        <svg width="8.000000" height="12.000000" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <rect id="Frame 229" width="7.687500" height="12.812500" transform="translate(-0.343750 -0.906250)"
                fill="#FFFFFF" fill-opacity="0" />
            <path id="Vector"
                d="M7.06 6.13L1.26 11.64C0.89 11.99 0.3 11.99 -0.07 11.64C-0.44 11.29 -0.44 10.72 -0.07 10.37L5.06 5.49L-0.07 0.62C-0.44 0.27 -0.44 -0.3 -0.07 -0.65C0.3 -1 0.89 -1 1.26 -0.65L7.06 4.86C7.25 5.04 7.34 5.27 7.34 5.49C7.34 5.72 7.25 5.95 7.06 6.13Z"
                fill-opacity="1.000000" fill-rule="nonzero" />
        </svg>
    </div>

</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.arrow {
    height: 100%;

    svg {
        fill: var(--arr-color);

        #vector {
            fill: var(--arr-color);
        }
    }
}
</style>