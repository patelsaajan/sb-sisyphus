<template>
    <span class="text-sub-heading font-bold">{{ title }}</span>
    <div class="w-full gap-4 mt-6">
        <ClientOnly>
            <swiper-container ref="carouselRef">
                    <swiper-slide v-for="number in 5" :key="number">
                        <PartsRecipeCard
                        :recipe="recipe"
                        @click="openRecipeModal"
                        :bgLight="bgLight"
                    />
                    </swiper-slide>
            </swiper-container>
        </ClientOnly>
    </div>
</template>

<script lang="ts" setup>
import { ModalsRecipe } from '#components';
import type IRecipes from '~~/types/recipes';

const carouselRef = ref(null);
const modal = useModal();

const swiperOptions = {
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: true
    // },
    effect: 'slide',
    spaceBetween: 40,
    grabCursor: true,
    // mouseWheel: true,
    // direction: "horizontal",
    centeredSlides: true,
    // loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        640: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
        1440: {
            slidesPerView: 4
        },
        1920: {
            slidesPerView: 5
        }
    }
}

const swiper = useSwiper(carouselRef, swiperOptions)

const props = defineProps<{
    title: string;
    recipe: IRecipes;
    bgLight?: boolean;
}>();

function openRecipeModal(): void {
    modal.open(ModalsRecipe, {
        recipe: props.recipe,
    });
}

</script>

<style lang="scss" scoped>


</style>