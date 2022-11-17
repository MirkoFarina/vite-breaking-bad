<script>
export default {
    name:'CardMain',
    props: {
        characters: Object
    }
}
</script>


<template>
    <div class="col-md-6 col-xl-4">
        <div class="card">
            <div class="img">
                <img :src="characters.img" class="card-img-top" :alt="characters.name">
            </div>
            <div class="card-body">
                <h3>
                    {{characters.name}}
                </h3>
                <h6>
                    {{characters.category}}
                </h6>
                <h6>
                    {{characters.status}}
                </h6>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
    .card {
        text-align: center;
        border: none;
        background-color: $primary-color;
        border-radius: 0;
        margin-bottom: 20px;
        padding: 10px;
        height: 500px;
        h3 {
            color: white;
        }
        h6 {
            color: lighten($primary-color , 40%);
        }
        .img {
            height: 300px;
            img {
                max-width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: top;
                transition: all .4s;
                &:hover {
                    transform: scale(1.05);
                }
            }
        }
    }
</style>