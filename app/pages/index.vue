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
        <span class="text-sub-heading font-bold">Saajan's Favourites</span>
        <ListFavRecipe 
        :recipe="todaysRecipe"
        />
    </div>
</template>

<script lang="ts" setup>
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