<template>
    <div>
        <h1>Template A</h1>
        <input type="text" @input="updateName" :value="customerName" />
        <router-link to="/a/figlioA">Child</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        methods: {
            updateName(event) {
                this.$store.commit('setCustomerName', event.target.value)
            }
        }
    }
</script>