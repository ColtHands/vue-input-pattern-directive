<template>
    <div>
        <button @click="clickHandle" v-directive:argument.modifier="'value' + 'expression'">Click me</button>
    </div>
</template>

<script>
export default {
    methods: {
        clickHandle() {
            this.$test('asd')
        }
    }
}
</script>