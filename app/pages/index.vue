<template>
    <div class="h-screen bg-base flex flex-col justify-center text-center py-5">
        <NuxtLink to="/recipes">Recipes</NuxtLink>
        <span class="text-lg-heading text-white">Welcome</span>
        <TodaysRecipe />
    </div>
    <div class="h-screen bg-white w-full justify-center text-center">
        <span class="text-lg-heading">Saajan's Favourites</span>
        <ListFavRecipe />
    </div>
    <div class="h-screen bg-base w-full">
        <span>footer</span>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
</style>