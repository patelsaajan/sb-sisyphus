<template>
    <div class="bg-base h-screen w-screen text-center flex flex-col py-10">
        <span class="text-4xl">
            Recipes
        </span>
        <ContentNavigation v-slot="{ navigation }" :query="recipeQuery">
            <div class="grid grid-cols container gap-y-5 mt-5">
                <NuxtLink
                    v-for="link of [...navigation[0]?.children].sort((a, b) => (a.title).localeCompare(b.title))"
                    :key="link._path"
                    :to="link._path"
                    class="w-fit"
                    :class="{ 'hover:underline': true }"
                >
                    {{ link.navTitle || link.title }}
                </NuxtLink>
            </div>
        </ContentNavigation>
    </div>
</template>

<script lang="ts" setup>
const recipeQuery = await queryContent('/recipes/')

</script>

<style lang="scss" scoped>


</style>