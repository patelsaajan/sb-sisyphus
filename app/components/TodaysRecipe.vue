<template>
    <div class="flex flex-col gap-8">
    <span class="text-heading">Recipe of the day</span>
    <span> Discover our handpicked recipe that will make your day special</span>
    <!-- <NuxtLink> -->
        <div class="grid grid-cols-2 w-full border-4 border-white rounded-xl bg-inherit overflow-hidden">
            <NuxtPicture 
                format="jpg"
                src="/imgs/default-food.jpg"
                alt="Recipe of the day"
                :imgAttrs="{'class': 'w-full h-auto'}"
            />
            <div class="flex flex-col gap-4 mt-4 p-8 text-grey">
                <span class="text-base text-red-300"> {{ recipe.cuisine }} </span>
                <span class="text-sub-heading text-black"> {{ recipe.name }} </span>
                <span class="">{{ recipe.description }}</span>
                <div class="flex flex-row gap-6">
                    <span class="flex flex-row items-center gap-x-2"> <Icon name="material-symbols:timer-outline-rounded" size="1.5rem"/>  {{ recipe.preparationTime }} minutes</span>
                    <span class="flex flex-row items-center gap-x-2 "><Icon name="ic:round-people" size="1.5rem"/>  {{ recipe.servings }} servings</span>
                </div>
            </div>
        </div>
    </div>
    <!-- </NuxtLink> -->
</template>

<script lang="ts" setup>
import type IRecipe from '~~/types/recipes';

const props = defineProps<{
    recipe: IRecipe;
}>();

</script>

<style lang="scss" scoped>
</style>