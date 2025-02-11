<template>
    <div class="container">
        <div class="flex flex-col text-left justify-center py-20">
            <!-- <NuxtLink to="/recipes">Recipes</NuxtLink> -->
            <TodaysRecipe 
                :recipe="todaysRecipe"
            />
        </div>
    </div>
    <div class="flex flex-col bg-white text-black p-10">
        <RecipeCarousel 
            title="Saajan's Favourites"
            :recipe="todaysRecipe"
        />
    </div>
</template>

<script lang="ts" setup>
import Recipe from '~/components/modals/recipe.vue';
import type IRecipes from '~~/types/recipes';


const todaysRecipe : IRecipes = {
        name: 'Korean Satay Sauce Tofu',
        cuisine: 'Korean',
        description: 'This is a delicious recipe that will make your day special This is a delicious recipe that will make your day special This is a delicious recipe that will make your day special This is a delicious recipe that will make your day special',
        image: '/imgs/default-food.jpg',
        difficulty: 'easy',
        preparationTime: 30,
        servings: 4,
};

</script>

<style lang="scss" scoped>
</style>