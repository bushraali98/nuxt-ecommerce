<template>
    <div class="images flex flex-col sm:w-full md:w-2/3 md:mb-7">
        <div class="big-container w-4/5 ms-10 flex flex-col">
            <div class="container flex flex-row space-x-0 mt-2 mb-6 items-center justify-center">
                <div>
                    <button @click="previousImage" class="md:hidden left-arrow  bg-orange-500 text-white p-3 rounded-full opacity-75 hover:opacity-100">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                </div>
                <div>
                    <img id="expandedImg" :src="expandedImage">
                </div>
                <div>
                    <button @click="nextImage" class="md:hidden right-arrow bg-orange-500 text-white p-3 rounded-full opacity-75 hover:opacity-100">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
            <div class="row flex-row space-x-4 hidden md:flex">
                    <div class="column basis-1/4">
                        <img :src="img1" v-on:click="updateImage(img1)" alt=""/>
                    </div>
                    <div class="column basis-1/4">
                        <img :src="img3" v-on:click="updateImage(img3)" alt=""/>
                    </div>
                    <div class="column basis-1/4">
                        <img :src="img2" v-on:click="updateImage(img2)" alt=""/>
                    </div>
                    <div class="column basis-1/4"> 
                        <img :src="img4" v-on:click="updateImage(img4)"/>
                    </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            expandedImage: require('@/assets/product/img1.webp'), 
            img1: require('@/assets/product/img1.webp'),
            img2: require('@/assets/product/img2.webp'),
            img3: require('@/assets/product/img3.webp'),
            img4: require('@/assets/product/img4.webp'),
            images: []
        }
    }, 
    mounted() {
        this.images = [this.img1, this.img3, this.img2, this.img4];
    },
    methods: {
        updateImage(img) {
            this.expandedImage = img 
        },
        nextImage() {
            let currentIndex = this.images.findIndex(img => img === this.expandedImage);
            let nextIndex = (currentIndex + 1) % this.images.length;
            this.expandedImage = this.images[nextIndex];
        },
        previousImage() {
            let currentIndex = this.images.findIndex(img => img === this.expandedImage);
            let previousIndex = (currentIndex - 1 + this.images.length) % this.images.length;
            this.expandedImage = this.images[previousIndex];
        }   
    }
}
</script>
