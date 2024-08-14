<template>
    <div class="bg-white scroll-smooth">
        <Header />

        <video
            class="w-full h-full min-h-screen object-cover leading-none p-0 absolute top-0 left-0 md:object-center object-[70%_0%] scroll-smooth"
            autoPlay muted loop>
            <source src="/background-flow.mp4" type="video/mp4" />
        </video>

        <div class="relative isolate px-6 pt-14 lg:px-8 scroll-smooth">
            <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div class="text-center">
                    <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Empower Your Business with
                        Innovative Solutions</h1>
                    <p class="mt-6 text-lg leading-8 text-gray-600">Join us at <u>{{ companyName }}</u>, where we
                        transform your digital landscape with cutting-edge technology and innovative strategies tailored
                        for your success.</p>
                    <div class="mt-5 flex items-center justify-center gap-x-6">
                        <a :href="`https://api.whatsapp.com/send/?phone=${formattedPhone}`" target="_blank"
                            class="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get
                            started</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="service" class="relative px-6 lg:px-8 scroll-smooth">
        <div class="bg-white rounded-xl py-12 sm:py-32">
            <div class="text-center mb-24">
                <h1 class="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Transforming Businesses with Technology</h1>
            </div>
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <dl class="grid gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    <div v-for="stat in stats" :key="stat.id" class="mx-auto flex max-w-xs flex-col gap-y-4">
                        <img class="rounded-lg h-full w-full object-cover object-center lg:h-full lg:w-full" :src="stat.image" />
                        <dt class="text-base leading-7 text-gray-600">{{ stat.name }}</dt>
                        <dd class="order-first text-xl font-semibold tracking-tight text-gray-900 sm:text-xl">
                            {{ stat.value }}
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    </div>

    <div id="about" class="bg-gradient-to-t pb-12 from-slate-300 scroll-smooth">
        <div
            class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <img src="/world.jpg"
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                class="rounded-lg bg-gray-100" />
            <div>
                <h2 class="text-4xl font-semibold text-center tracking-tight text-gray-900 sm:text-6xl">Discover the essence
                    of digital innovation</h2>
                <div class="pt-12 mx-2 sm:mx-8">
                    <dt class="font-medium text-justify text-gray-900">At Salam Solusi Nusantara, we fuse technology with creativity,
                        crafting bespoke solutions that empower businesses across Indonesia. Join us on a journey of
                        transformation where your vision meets our expertise, elevating your narrative in the digital
                        realm.</dt>
                </div>
                <div class="mt-5 mx-2 sm:mx-8 flex sm:justify-start justify-center gap-x-6">
                    <a :href="`https://api.whatsapp.com/send/?phone=${formattedPhone}`" target="_blank"
                        class="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Contact
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div id="contact" class="bg-gradient-to-b from-slate-300 py-12 sm:py-32 scroll-smooth">
        <div class="grid gap-x-8 gap-y-16 lg:grid-cols-3">
            <div>
                <h2
                    class="text-xl font-semibold sm:ml-[15%] mr-[5%] mx-[5%] text-left tracking-tight text-gray-900 sm:text-3xl">
                    {{ companyNameOrg }}
                </h2>
                <p class="text-md font-semibold sm:mx-[15%] mx-[5%] mt-10 tracking-tight text-gray-900 sm:text-xl">
                    Made with love
                </p>
            </div>
            <div>
                <h2
                    class="text-xl font-semibold sm:mx-[15%] mx-[5%] text-left tracking-tight text-gray-900 sm:text-3xl">
                    Location
                </h2>
                <p class="text-md font-normal sm:mx-[15%] mx-[5%] mt-3 tracking-tight text-gray-900 sm:text-xl">
                    {{ footerAddress }}
                </p>
            </div>
            <div>
                <h2
                    class="text-xl font-semibold sm:mx-[15%] mx-[5%] text-left tracking-tight text-gray-900 sm:text-3xl">
                    Contact
                </h2>
                <p class="text-md font-normal sm:mx-[15%] mx-[5%] mt-3 tracking-tight text-gray-900 sm:text-xl">
                    {{ footerEmail }}
                </p>
                <p class="text-md font-normal sm:mx-[15%] mx-[5%] mt-3 tracking-tight text-gray-900 sm:text-xl">
                    <a :href="`https://api.whatsapp.com/send/?phone=${formattedPhone}`" target="_blank"><u>{{ footerPhone }}</u></a>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import Header from '../components/header.vue'
const { companyName, companyNameOrg, footerAddress, footerEmail, footerPhone } = useEnvVariables()

const formattedPhone = computed(() => {
  return footerPhone.replace(/[^\d]/g, '');
});

const stats = [
  { id: 1, name: 'Custom-built, responsive websites tailored to your unique needs', value: 'Custom Web Development', image: '/web-dev.jpg' },
  { id: 2, name: 'Innovative mobile applications for iOS and Android platforms', value: 'Custom Mobile Development', image: '/mobile-dev.jpg' },
  { id: 3, name: 'Smart, connected solutions to revolutionize your business operations.', value: 'Custom IoT Development', image: '/iot-dev.jpg' },
]
</script>