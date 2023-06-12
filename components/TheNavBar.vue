<template>
  <div class="navbar m-7 md:m-10 overflow-hidden border-b border-gray-500 flex flex-row flex-wrap items-center md:justify-between space-x-6 md:space-x-10">
    <div class="flex items-center">
      <!-- Mobile menu button -->
      <button class="md:hidden  px-4 py-4 text-gray-500 focus:outline-none focus:text-gray-700" @click="toggleMobileMenu">
        <i class="fas fa-bars"></i>
      </button>
      <NuxtLink to="/" id="logo" class="text-black pb-6 font-oswald text-xl mt-2">Sneakers</NuxtLink>
      <div class="hidden md:flex">
        <NuxtLink to="/collections" class="px-4 pb-4 no-underline hover:text-gray-500 text-gray-700 visited:text-gray-600">Collections</NuxtLink>
        <NuxtLink to="/men" class="px-4 pb-4 no-underline hover:text-gray-500 text-gray-700 visited:text-gray-600">Men</NuxtLink>
        <NuxtLink to="/women" class="px-4 pb-4 no-underline hover:text-gray-500 text-gray-700 visited:text-gray-600">Women</NuxtLink>
        <NuxtLink to="/about" class="px-4 pb-4 no-underline hover:text-gray-500 text-gray-700 visited:text-gray-600">About</NuxtLink>
        <NuxtLink to="/contact" class="px-4 pb-4 no-underline hover:text-gray-500 text-gray-700 visited:text-gray-600">Contact</NuxtLink>
      </div>
    </div>
    <div class="cart-icon flex md:items-end md:content-end pr-5 justify-end items-end flex-initial w-1/2 sm:w-4/6 md:w-auto" @mouseover="setShowCartPreview(true)" @mouseleave="setShowCartPreview(false)"> 
      <a href="#cart"><i class="fas fa-shopping-cart fa-lg" style="color: grey;"></i></a>
      <CartPreview class="hidden sm:inline-block" v-if="showCartPreview"/> 
    </div>
    <!-- Mobile menu -->
    <div class="mobile-menu w-full md:hidden mt-4" :class="{ 'hidden': !showMobileMenu }">
      <NuxtLink to="/collections" class="block px-4 py-2 no-underline hover:text-gray-500 text-gray-700 visited:text-gray-600" @click="toggleMobileMenu">Collections</NuxtLink>
      <NuxtLink to="/men" class="block px-4 py-2 no-underline hover:text-gray-500 text-gray-700 visited:text-gray-600" @click="toggleMobileMenu">Men</NuxtLink>
      <NuxtLink to="/women" class="block px-4 py-2 no-underline hover:text-gray-500 text-gray-700 visited:text-gray-600" @click="toggleMobileMenu">Women</NuxtLink>
      <NuxtLink to="/about" class="block px-4 py-2 no-underline hover:text-gray-500 text-gray-700 visited:text-gray-600" @click="toggleMobileMenu">About</NuxtLink>
      <NuxtLink to="/contact" class="block px-4 py-2 no-underline hover:text-gray-500 text-gray-700 visited:text-gray-600" @click="toggleMobileMenu">Contact</NuxtLink>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
    data() {
        return{
            showMobileMenu: false,
        }
    },
    computed: {
        ...mapState({
            showCartPreview: state => state.showCartPreview,
        })
    }, 
    methods: {
        ...mapMutations(['setShowCartPreview']),
        toggleMobileMenu() {
            this.showMobileMenu = !this.showMobileMenu;
        },
    }
}
</script>
