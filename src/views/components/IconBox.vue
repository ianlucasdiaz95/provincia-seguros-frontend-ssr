<template>
    <div class="iconBox">
        <a :href="props.url">
            <div class="iconBox__icon" v-html="props.icon"></div>
            <h3 class="iconBox__title">
                {{props.title}}
            </h3>
            <p class="iconBox__text">
                {{props.text}}
            </p>
        </a>
    </div><!-- iconBox -->
</template>
<script setup>
    const props = defineProps({
        icon: String,
        title: String,
        text: String,
        url: String
    })
</script>