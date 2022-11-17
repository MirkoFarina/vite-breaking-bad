<script>
export default {
    name: 'SelectCategory'
}
</script>

<template>
    <select class="form-select" aria-label="Default select example">
        <option selected>Select Category</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </select>
</template>



<style lang="scss" scoped>
    select {
        width: 200px;
        outline: none;
        margin-bottom: 50px;
        margin-left: 15px;
    }
</style>