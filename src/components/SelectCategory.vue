<script>
import {store} from '../data/store';
export default {
    name: 'SelectCategory',
    data (){
        return {
            store
        }
    }
}
</script>

<template>
    <select @change="$emit('changeFilter')" v-model="store.filterWhitValue" class="form-select" aria-label="Default select example">
        <option value="" selected>Select Category</option>
        <option value="breaking bad">Breaking Bad</option>
        <option value="better call saul">Better Call Saul</option>
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