<template>
    <UModal>
        <UCard
            class=""
                :ui = "{ 
                        divide: 'divide-none',
                        }"
        >
            <template #header>
                <div class="flex flex-col font-bold gap-y-4 text-center">
                    {{ recipe.name }}
                    <div class="flex justify-center">
                        <NuxtPicture 
                            format="jpg"
                            src="/imgs/default-food.jpg"
                            alt="Recipe of the day"
                            width="250px"
                            height="250px"
                              :imgAttrs="{'class': 'rounded-lg'}"
                        />
                    </div> 
                </div>
            </template>
            <div class="flex flex-col gap-4 text-grey">
                <div class="flex flex-row gap-6">
                    <span class="text-secondary"> {{ recipe.cuisine }} </span>
                    <span class="flex flex-row items-center gap-x-2"> <Icon name="material-symbols:timer-outline-rounded" size="1.5rem"/>  {{ recipe.preparationTime }} minutes</span>
                    <span class="flex flex-row items-center gap-x-2 "><Icon name="ic:round-people" size="1.5rem"/>  {{ recipe.servings }} servings</span>
                </div>
                <div class="flex flex-row gap-4">
                    <UButton color="primary" class="max-w-fit" @click="visitRecipeClick">
                        View Full Recipe
                    </UButton>
                    <UButton color="red" class="max-w-fit" @click="visitBlogClick">
                        View Blog Post
                    </UButton>
                </div>
                <span class="">{{ recipe.description }}</span>
                <span class="font-semibold">Ingredients</span>
                <span class="font-semibold">Instructions</span>
            </div>
            <template #footer>
                <UButton color="primary" class="max-w-fit" @click="visitRecipeClick">
                    View Full Recipe
                </UButton>
            </template>
        </UCard>
    </UModal>    
</template>

<script setup lang="ts">
import type IRecipes from '~~/types/recipes';

const props = defineProps({
    recipe: {
        type: Object as () => IRecipes,
        required: true
    }
})

const visitRecipeClick = () => {
    console.log('Visit Recipe Clicked');
}
const visitBlogClick = () => {
    console.log('Visit Recipe Clicked');
}

</script>

<style lang="scss" scoped>


</style>