<template>
        <div class="h-screen flex flex-col text-left justify-center py-5">
            <!-- <NuxtLink to="/recipes">Recipes</NuxtLink> -->
            <TodaysRecipe 
            :recipe="todaysRecipe"
            />
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
import type IRecipes from '~~/types/recipes';


const todaysRecipe : IRecipes = {
        name: 'Korean Satay Sauce Tofu',
        cusine: 'Korean',
        description: 'This is a delicious recipe that will make your day special This is a delicious recipe that will make your day special This is a delicious recipe that will make your day special This is a delicious recipe that will make your day special',
        image: '/imgs/default-food.jpg',
        difficulty: 'easy',
        preparationTime: 30,
        servings: 4,
};

</script>

<style lang="scss" scoped>
</style>