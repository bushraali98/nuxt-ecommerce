<template>
    <div>
      <TheNavBar/>
  
      <section class="first-section flex items-center mx-12">
        <div class="container mx-auto">
          <div class="flex flex-col md:flex-row space-x-4">
            <div class="w-full md:w-1/2">
              <img :src="require('@/assets/product/men1.jpg')" alt="Image 1" class="h-3/4 mb-4 bg-origin-border p-4 border-2 border-solid">
            </div>
            <div class="w-full md:w-1/2 text-start md:text-left items-center">
              <h1 class="text-3xl md:text-6xl font-bold mb-4 mt-12">Unleash Your Strength <br> with our products Unveiling the Perfect Fusion of Style and Functionality!</h1>
            </div>
          </div>
        </div>
      </section>
  
      <section class="second-section py-12 bg-gray-100 mx-2">
          <div class="container mx-auto">
            <h2 class="text-2xl font-semibold mb-8 ml-6">Our Products</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mx-6">
              <div v-for="product in products" :key="product.id" class="bg-white p-4 rounded shadow">
                <img :src="require('@/assets/product/col5.jpg')" :alt="product.name" class="h-48 w-full object-cover mb-4 hover:cursor-pointer">
                <h3 class="text-xl font-semibold text-gray-800">{{ product.name }}</h3>
                <p class="text-gray-600">{{ product.description }}</p>
              </div>
              <div v-for="product in products" :key="product.id" class="bg-white p-4 rounded shadow">
                <img :src="require('@/assets/product/col5.jpg')" :alt="product.name" class="h-48 w-full object-cover mb-4 hover:cursor-pointer">
                <h3 class="text-xl font-semibold text-gray-800">{{ product.name }}</h3>
                <p class="text-gray-600">{{ product.description }}</p>
              </div>
              <div v-for="product in products" :key="product.id" class="bg-white p-4 rounded shadow">
                <img :src="require('@/assets/product/col5.jpg')" :alt="product.name" class="h-48 w-full object-cover mb-4 hover:cursor-pointer">
                <h3 class="text-xl font-semibold text-gray-800">{{ product.name }}</h3>
                <p class="text-gray-600">{{ product.description }}</p>
              </div>
            </div>
          </div>
      </section>
  
      <!-- Footer -->
      <TheFooter/>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        products: [
          {
            id: 1,
            name: 'Nike Shoes',
            description: 'A black sports shoe.',
          },
        ],
      };
    },
  };
  </script>