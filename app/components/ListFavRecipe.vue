<template>
    <div class="grid grid-cols-12 gap-4">
    <div 
        v-for="n in 3" :key="n"
        class="flex flex-col justify-center items-center rounded-3xl border-4 border-white col-span-4"
    >
        <FavRecipe/>
    </div>
    <div 
        v-for="n in 2" :key="n"
        class="flex flex-col justify-center items-center rounded-3xl border-4 border-white col-span-4"
        :class="{'col-start-3': n === 1}"
    >
        <FavRecipe/>
    </div>
</div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>


</style>