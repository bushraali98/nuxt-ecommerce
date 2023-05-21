<template>
    <div class="images">
        <div class="container">
            <img id="expandedImg" :src="expandedImage" style="width: 100%;">
        </div>
        <div class="row">
            <div class="column">
                <img :src="img1" v-on:click="updateImage(img1)" alt="" width="100%"/>
            </div>
            <div class="column">
                <img :src="img3" v-on:click="updateImage(img3)" alt="" width="100%"/>
            </div>
            <div class="column">
                <img :src="img2" v-on:click="updateImage(img2)" alt="" width="100%"/>
            </div>
            <div class="column"> 
                <img :src="img4" v-on:click="updateImage(img4)" width="100%" height="96px"/>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            expandedImage: require('@/assets/product/img1.jpg'), 
            img1: require('@/assets/product/img1.jpg'),
            img2: require('@/assets/product/img2.jpg'),
            img3: require('@/assets/product/img3.jpg'),
            img4: require('@/assets/product/img4.jpg'),
        }
    }, 
    methods: {
        updateImage(img) {
            this.expandedImage = img 
        },
    }
}
</script>
