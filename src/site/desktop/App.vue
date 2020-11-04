<template>
    <div class="box">
        <div>App: <span class="num">{{count}}</span></div>
        <button @click="addHandler">按钮</button>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup () {
        const count = ref(0);
        const addHandler = () => {
            count.value++;
        };
        return {count, addHandler};
    }
});
</script>

<style lang="scss" scoped>
.box {
    .num {
        color: red;
    }
}
</style>