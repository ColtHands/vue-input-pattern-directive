<template>
    <div>
        <span>Test UI component</span>
        <button @click="add">Click From Component</button>
    </div>
</template>

<script>
import store from './store.ts'

export default {
    methods: {
        add() {
            store.dispatch('test', 'test from test component')
        }
    }
}
</script>