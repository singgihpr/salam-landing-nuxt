<template>
    <div class="bg-white scroll-smooth">
        <header class="absolute inset-x-0 top-0 z-50">
            <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div class="flex lg:flex-1">
                    <a href="#" class="-m-1.5 p-1.5">
                        <span class="sr-only">{{ config.public.COMPANY_NAME }}</span>
                        <img class="h-8 w-auto" src="~/assets/logo/logo.png" alt="" />
                    </a>
                </div>
                <div class="flex lg:hidden">
                    <button type="button"
                        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        @click="mobileMenuOpen = true">
                        <span class="sr-only">Open main menu</span>
                        <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div class="hidden lg:flex lg:gap-x-12">
                    <a v-for="item in navigation" :key="item.name" :href="item.href"
                        class="text-sm font-semibold leading-6 text-gray-900">{{ item.name }}</a>
                </div>
                <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                    <!-- for menu navbar in right, remove this element -->
                    <!-- <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Log in <span
                            aria-hidden="true">&rarr;</span></a> -->
                </div>
            </nav>
            <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
                <div class="fixed inset-0 z-50" />
                <DialogPanel
                    class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div class="flex items-center justify-between">
                        <a href="#" class="-m-1.5 p-1.5">
                            <span class="sr-only">{{ config.public.COMPANY_NAME }}</span>
                            <img class="h-8 w-auto" src="~/assets/logo/logo.png" alt="" />
                        </a>
                        <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700"
                            @click="mobileMenuOpen = false">
                            <span class="sr-only">Close menu</span>
                            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div class="mt-6 flow-root">
                        <div class="-my-6 divide-y divide-gray-500/10">
                            <div class="space-y-2 py-6">
                                <a v-for="item in navigation" :key="item.name" :href="item.href"
                                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>

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
                    <p class="mt-6 text-lg leading-8 text-gray-600">Join us at <u>{{ config.public.COMPANY_NAME }}</u>, where we
                        transform your digital landscape with cutting-edge technology and innovative strategies tailored
                        for your success.</p>
                    <div class="mt-5 flex items-center justify-center gap-x-6">
                        <a href="#"
                            class="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get
                            started</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="relative px-6 lg:px-8 scroll-smooth">
            <div class="bg-white rounded-xl py-24 sm:py-32">
                <div class="text-center mb-12">
                    <h1 class="text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Transforming Businesses with Technology</h1>
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
    </div>

    <div class="bg-gradient-to-t from-slate-300 scroll-smooth">
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
                <div class="mt-5 mx-2 sm:mx-8 flex justify-start gap-x-6">
                    <a href="#"
                        class="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Contact
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div class="bg-gradient-to-b from-slate-300 py-12 sm:py-32 scroll-smooth">
        <div class="grid gap-x-8 gap-y-16 lg:grid-cols-3">
            <div>
                <h2
                    class="text-xl font-semibold sm:ml-[15%] ml-[5%] text-left tracking-tight text-gray-900 sm:text-3xl">
                    {{ config.public.COMPANY_NAME_ORG }}
                </h2>
                <p class="text-md font-semibold sm:ml-[15%] ml-[5%] mt-10 tracking-tight text-gray-900 sm:text-xl">
                    Made with love
                </p>
            </div>
            <div>
                <h2
                    class="text-xl font-semibold sm:ml-[15%] ml-[5%] text-left tracking-tight text-gray-900 sm:text-3xl">
                    Location
                </h2>
                <p class="text-md font-normal sm:ml-[15%] ml-[5%] mt-3 tracking-tight text-gray-900 sm:text-xl">
                    {{ config.public.FOOTER_ADDRESS }}
                </p>
            </div>
            <div>
                <h2
                    class="text-xl font-semibold sm:ml-[15%] ml-[5%] text-left tracking-tight text-gray-900 sm:text-3xl">
                    Contact
                </h2>
                <p class="text-md font-normal sm:ml-[15%] ml-[5%] mt-3 tracking-tight text-gray-900 sm:text-xl">
                    {{ config.public.FOOTER_EMAIL }}
                </p>
                <p class="text-md font-normal sm:ml-[15%] ml-[5%] mt-3 tracking-tight text-gray-900 sm:text-xl">
                    {{ config.public.FOOTER_PHONE }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const config = useRuntimeConfig()

const navigation = [
  { name: 'Service', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Contact', href: '#' },
]

const stats = [
  { id: 1, name: 'Custom-built, responsive websites tailored to your unique needs', value: 'Custom Web Development', image: '/web-dev.jpg' },
  { id: 2, name: 'Innovative mobile applications for iOS and Android platforms', value: 'Custom Mobile Development', image: '/mobile-dev.jpg' },
  { id: 3, name: 'Smart, connected solutions to revolutionize your business operations.', value: 'Custom IoT Development', image: '/iot-dev.jpg' },
]

const features = [
  { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
  { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
  { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
  { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
  { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
  { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
]

const mobileMenuOpen = ref(false)
</script>