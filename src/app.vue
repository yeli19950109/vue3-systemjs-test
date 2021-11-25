<template>
    <div>
        {{ message }}
        <input type="text" v-model="message">
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const message = ref('');
        return {
            message,
        };
    },
});
</script>
