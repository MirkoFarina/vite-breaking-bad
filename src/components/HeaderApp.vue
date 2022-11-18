<script>
export default {
    name:'HeaderApp'
}
</script>

<template>
    <header>
        <img src="Breaking_Bad_logo.svg" alt="logo">
        <h1>
            Breaking Bad Api
        </h1>
    </header>
</template>

<style lang="scss" scoped>
    header {
        padding: 10px;
        display: flex;
        align-items: center;
        img {
            width: 80px;
        }
    }
    h1 {
        color: white;
    }
</style>