<template>
  <div class="relative overflow-hidden bg-white">
    <Header />
    
    <div class="mx-auto sm:mt-20 grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
      <div>
        <h2 class="mx-2 sm:mx-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-7xl">Vision & Mission</h2>
        <div class="pt-8 mx-2 sm:mx-8">
          <dt class="text-lg font-normal text-justify text-gray-900">We aim to become a SEA leader in Digital Solutions,
            continously innovating and empowering business with cutting-edge technology. Innovation, quality, client satisfaction,
            integrity and teamwork are core values that guide our operation.
          </dt>
        </div>
        <div class="mt-5 mx-2 sm:mx-8 flex sm:justify-start justify-center gap-x-6">
          <a :href="`https://api.whatsapp.com/send/?phone=${formattedPhone}`" target="_blank"
            class="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Contact
          </a>
        </div>
      </div>
      <img src="/tower.png" alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
        class="rounded-lg bg-gray-100" />
    </div>
  </div>
</template>
