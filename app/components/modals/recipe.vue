<template>
    <UModal>
        <UCard
            class="bg-neutral"
                :ui = "{ 
                        divide: 'divide-none',
                        }"
        >
            <template #header>
                <Icon
                    name="iconamoon:close"
                    size="2rem"
                    @click="onClose"
                    class="cursor-pointer"
                />
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
                    <UButton variant="solid" color="secondary" class="max-w-fit" @click="visitRecipeClick">
                        View Full Recipe
                    </UButton>
                    <UButton color="red" class="max-w-fit" @click="visitBlogClick">
                        View Blog Post
                    </UButton>
                </div>
                <span class="">{{ recipe.description }}</span>
                <span class="font-semibold">Ingredients</span>
                <div class="grid grid-cols-2">
                    <div class="flex flex-col">
                        <span v-for="(value, key) in ingredients" :key="key">
                            {{ key }}
                        </span>
                    </div>
                    <div class="flex flex-col">
                        <span v-for="(value, key) in ingredients" :key="key">
                            {{ value[0] }} {{ value[1] }}
                        </span>
                    </div>
                </div>
                <span class="font-semibold">Instructions</span>
                    <div class="flex flex-col">
                        <span v-for="( step, index  ) in instructions" :key="index">
                            {{ index + 1 }}. {{ step }}
                        </span>
                    </div>
            </div>
        </UCard>
    </UModal>    
</template>

<script setup lang="ts">
import type IRecipes from '~~/types/recipes';

const props = defineProps({
    recipe: {
        type: Object as () => IRecipes,
        required: true
    },
})

const ingredients = {
    'onion': [1, 'whole'],
    'tinned-tomatoes': [1, 'tin'],
    'tofu': [1, 'block'],
    'soy-sauce': [1, 'tbsp'],
    'rice-vinegar': [1, 'tbsp'],
    'sesame-oil': [1, 'tbsp'],
    'garlic': [2, 'cloves'],
    'ginger': [1, 'inch'],
}

const instructions = [
 'Press the tofu and take out all the water',
 'Dice the onions to small chunks',
 'Mince the onion are garlic'
]

const visitRecipeClick = () => {
    console.log('Visit Recipe Clicked');
}
const visitBlogClick = () => {
    console.log('Visit Recipe Clicked');
}

const emit = defineEmits(['close'])

const onClose = () => {
    console.log('close clicked');
    emit('close')
}

</script>

<style lang="scss" scoped>


</style>