<template>
    <div>App: {{name}}</div>
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup () {
        const name = ref('小明');

        return {name};
    }
});
</script>

<style>

</style>