<template>
    <div class="container">
        <div class="flex flex-row gap-x-4">
            <UButton 
                v-for="link in links"
                :key="link.name"
                :to="link.uri"
                :label="link.name"
                variant="link"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>

const links = [
    { name: 'Home', uri: '/' },
    { name: 'About', uri: '/about' },
    { name: 'Recipes', uri: '/recipes' },
];

</script>

<style lang="scss" scoped>


</style>