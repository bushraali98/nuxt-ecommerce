<template>
    <div>
      <TheNavBar/>
      <!-- Contact section -->
      <section class="py-8 mx-3">
        <div class="container mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Contact form -->
            <div class="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 class="text-3xl font-bold mb-4">Contact Us</h2>
              <form>
                <div class="mb-4">
                  <label for="name" class="text-gray-700 font-bold">Name</label>
                  <input type="text" id="name" class="w-full border-gray-300 border rounded py-2 px-3 mt-1 focus:outline-none focus:ring-orange-500 focus:border-orange-500" placeholder="Your Name" />
                </div>
                <div class="mb-4">
                  <label for="email" class="text-gray-700 font-bold">Email</label>
                  <input type="email" id="email" class="w-full border-gray-300 border rounded py-2 px-3 mt-1 focus:outline-none focus:ring-orange-500 focus:border-orange-500" placeholder="Your Email" />
                </div>
                <div class="mb-4">
                  <label for="message" class="text-gray-700 font-bold">Message</label>
                  <textarea id="message" class="w-full border-gray-300 border rounded py-2 px-3 mt-1 focus:outline-none focus:ring-orange-500 focus:border-orange-500" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" class="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 hover:bg-orange-600">Send</button>
              </form>
            </div>
            
            <!-- Company info -->
            <div class="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 class="text-3xl font-bold mb-4">Company Information</h2>
              <div class="flex items-center mb-4">
                <i class="fas fa-envelope text-orange-500 mr-2"></i>
                <p>info@Sneakers.com</p>
              </div>
              <div class="flex items-center mb-4">
                <i class="fas fa-phone text-orange-500 mr-2"></i>
                <p>+1 123 456 7890</p>
              </div>
              <div class="flex items-center">
                <i class="fas fa-map-marker-alt text-orange-500 mr-2"></i>
                <p>123 Main Street, City, Country</p>
              </div>
              <div class="mt-4">
                <h3 class="text-lg font-bold mb-2">Work Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TheFooter/>
    </div>
</template>