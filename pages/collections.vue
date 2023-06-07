<template>
    <div>
        <TheNavBar/>
        <div class="flex flex-col">
            <div class="container w- mx-auto px-4">
                <section class="flex justify-center items-center md:flex-row flex-col py-12">
                    <div class="md:w-1/2 mb-4 flex flex-col items-center justify-center md:items-start">
                        <h1 class="text-5xl md:text-8xl font-semibold mb-4 text-start md:text-start">Find The Best Foot Wear For You</h1>
                        <button class="bg-orange-500 text-white px-2 py-1 md:px-4 md:py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 hover:bg-orange-600">Shop Now</button>
                    </div>
                    <div class="md:w-1/2 md:mr-6">
                        <img src="~/assets/product/main.webp" alt="Footwear" class="w-4/5 md:w-full ml-10 object-cover rounded-r-lg">
                    </div>
                </section>
            </div>
            <div>
                <section class="py-12 mx-5">
                    <h2 class="text-3xl ml-4 font-semibold mb-8">New Collection</h2>
                    <div class="grid md:grid-cols-3 gap-4 justify-center items-center sm:mx-8">
                        <div class="bg-gray-100 p-4 rounded-md overflow-hidden">
                            <img src="~/assets/product/col1.webp" alt="Product" class="w-full object-cover hover:contrast-50">
                            <div class="text-center mt-4">
                                <button class="bg-orange-500 text-white px-8 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 hover:bg-orange-600">Explore</button>
                            </div>
                        </div>
                        <div class="bg-gray-100 p-4 rounded-md overflow-hidden">
                            <img src="~/assets/product/col2.webp" alt="Product" class="w-full object-cover hover:contrast-50">
                            <div class="text-center mt-4">
                                <button class="bg-orange-500 text-white px-8 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 hover:bg-orange-600">Explore</button>
                            </div>
                        </div>
                        <div class="bg-gray-100 p-4 rounded-md overflow-hidden">
                            <img src="~/assets/product/col3.webp" alt="Product" class="w-full object-cover hover:contrast-50">
                            <div class="text-center mt-4">
                                <button class="bg-orange-500 text-white px-8 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 hover:bg-orange-600">Explore</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div>
                <section class="py-12 bg-purple-500 w-full">
                    <div class="flex items-center md:flex-row flex-col">
                        <div class="md:w-1/2 ml-20">
                            <h2 class="text-6xl text-white font-semibold mb-4">Best Seller Products</h2>
                            <button class="bg-orange-500 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 hover:bg-orange-600">See More</button>
                        </div>
                        <div class="md:w-1/2 flex flex-col md:flex-row">
                            <div class="p-4 flex flex-col items-center justify-center">
                                <img src="~/assets/product/sl1.webp" alt="Product" class="w-3/4 object-cover cursor-pointer opacity-100 hover:opacity-75">
                                <h3 class="text-lg font-semibold mt-4">Nike Air Jordan</h3>
                                <p class="text-gray-100">$99.99</p>
                            </div>
                            <div class="p-4 flex flex-col items-center justify-center">
                                <img src="~/assets/product/sl2.webp" alt="Product" class="w-3/4 object-cover cursor-pointer opacity-100 hover:opacity-75">
                                <h3 class="text-lg font-semibold mt-4">Nike Air Jordan</h3>
                                <p class="text-gray-100">$99.99</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>

        <TheFooter/>
    </div>
  </template>