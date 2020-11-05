<template>
    <div class="box">
        <div>App: <span class="num">{{count}}</span></div>
        <button @click="addHandler">按钮dd</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup () {
        let count = ref(1);
        const addHandler = () => {
            count.value++;
        };
        return {count, addHandler};
    }
});
</script>

<style>
.box {
    border: 1px solid red;
    display: flex;
}
.kjk {
    color: blue;
}
</style>
<style lang="less" scoped>
@red: red;
.box {
    .num {
        color: @red;
    }
}
</style>

<style lang="scss" scoped>
$green: green;
.box {
    background: $green;
}
</style>