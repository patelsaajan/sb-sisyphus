<template>
    <span class="text-heading text-white">Recipe of the day!</span>
    <NuxtLink>
        <NuxtPicture 
            format="jpg"
            src="/imgs/default-food.jpg"
            height="400"
            width="400"
            alt="Recipe of the day"
            class="w-96 h-96 mx-auto mt-5 border-4 border-white rounded-3xl bg-white"
            :imgAttrs="{'class': 'rounded-3xl'}"
        />
    </NuxtLink>
    <span class="text-sub-heading mt-4 text-white">Korean Satay Sauce Tofu</span>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
</style>