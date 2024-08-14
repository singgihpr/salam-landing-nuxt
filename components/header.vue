<template>
    <header class="absolute inset-x-0 top-0 z-50">
        <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div class="flex lg:flex-1">
                <NuxtLink class="-m-1.5 p-1.5" to="/">
                    <span class="sr-only">{{ companyName }}</span>
                    <img class="h-8 w-auto" src="~/assets/logo/logo.png" alt="" />
                </NuxtLink>
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
                <template v-for="item in navigation" :key="item.name">
                    <NuxtLink v-if="item.href !== '#'" :to="item.href"
                        class="text-sm font-semibold leading-6 text-gray-900">
                        {{ item.name }}
                    </NuxtLink>
                    <a v-else :href="item.href" @click="scrollTo(item.scroll)"
                        class="text-sm font-semibold leading-6 text-gray-900">
                        {{ item.name }}
                    </a>
                </template>
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
                    <NuxtLink class="-m-1.5 p-1.5" to="/">
                        <span class="sr-only">{{ companyName }}</span>
                        <img class="h-8 w-auto" src="~/assets/logo/logo.png" alt="" />
                    </NuxtLink>
                    <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
                        <span class="sr-only">Close menu</span>
                        <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6">
                            <template v-for="item in navigation" :key="item.name">
                                <NuxtLink v-if="item.href !== '#'" :to="item.href"
                                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                    {{ item.name }}
                                </NuxtLink>
                                <a v-else :href="item.href" @click="scrollTo(item.scroll)"
                                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                    {{ item.name }}
                                </a>
                            </template>
                        </div>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    </header>
</template>

<script setup>
import { ref } from 'vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const mobileMenuOpen = ref(false)

const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const navigation = [
    { name: 'Home', href: '/', scroll: null },
    { name: 'Service', href: '#', scroll: 'service' },
    { name: 'About', href: '#', scroll: 'about' },
    { name: 'Work', href: '/works', scroll: null },
    { name: 'Contact', href: '#', scroll: 'contact' },
]
</script>