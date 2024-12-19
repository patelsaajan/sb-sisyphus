<template>
    <div class="bg-base h-screen w-screen text-center flex flex-col">
        <span class="text-4xl">
            Recipes!
        </span>
        <ContentNavigation v-slot="{ navigation }" :query="recipeQuery">
            <div class="flex flex-col container gap-y-5 mt-5">
                <NuxtLink
                    v-for="link of navigation[0]?.children"
                    :key="link._path"
                    :to="link._path"
                    class="bg-red-600 py-5"
                >
                    {{ link.navTitle || link.title }}
                </NuxtLink>
            </div>
        </ContentNavigation>
    </div>
</template>

<script lang="ts" setup>
const recipeQuery = queryContent('/recipes/')

</script>

<style lang="scss" scoped>


</style>