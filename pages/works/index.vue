<template>
    <div class="bg-white py-24 sm:py-32">
        <Header />

        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto lg:mx-0 text-center">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Best Works</h2>
                <p class="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your business with our expert advice.
                </p>
            </div>
            <div
                class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <article v-for="work in works" :key="work.id"
                    class="flex max-w-xl flex-col items-start justify-between">
                    <NuxtLink :to="work.href">
                        <img :src="work.image"
                            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                            class="rounded-lg h-full w-full object-cover object-center lg:h-full lg:w-full" />
                    </NuxtLink>
                    <div class="flex items-center gap-x-4 text-xs sm:mt-2 mt-1">
                        <time :datetime="work.datetime" class="text-gray-500">{{ work.date }}</time>
                        <p class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{ work.category.title }}</p>
                    </div>
                    <div class="group relative">
                        <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                            <NuxtLink :to="work.href">
                                <span class="absolute inset-0" />
                                {{ work.title }}
                            </NuxtLink>
                        </h3>
                        <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{{ work.description }}</p>
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useWorksStore } from '~/stores/works';

const worksStore = useWorksStore();
const works = worksStore.works;
</script>