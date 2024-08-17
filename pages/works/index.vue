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
                <article v-for="post in posts" :key="post.id"
                    class="flex max-w-xl flex-col items-start justify-between">
                    <NuxtLink :to="post.href">
                        <img :src="post.image"
                            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                            class="rounded-lg h-full w-full object-cover object-center lg:h-full lg:w-full" />
                    </NuxtLink>
                    <div class="flex items-center gap-x-4 text-xs sm:mt-2 mt-1">
                        <time :datetime="post.datetime" class="text-gray-500">{{ post.date }}</time>
                        <p class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{ post.category.title }}</p>
                    </div>
                    <div class="group relative">
                        <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                            <NuxtLink :to="post.href">
                                <span class="absolute inset-0" />
                                {{ post.title }}
                            </NuxtLink>
                        </h3>
                        <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{{ post.description }}</p>
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>

<script setup>
    import image1 from '@/assets/work/intiraga.png';
    import image2 from '@/assets/work/lksi.png';
    import image3 from '@/assets/work/ogya.png';

    const posts = [
        {
            id: 1,
            title: 'Back Office - Software Solutions',
            href: '/works/Back Office - Software Solutions',
            image: image1,
            description: 'Back Office for Intiraga Logistic is a comprehensive software solution designed to improve efficiency and transparency in the company\'s financial management and accounting. The system offers a variety of advanced features to support accurate and structured recording and management of financial data.',
            feature: [
                {
                    title: 'Integrated Financial Recording',
                    desc: 'Back Office memungkinkan pencatatan transaksi keuangan dengan mudah dan cepat. Setiap transaksi, mulai dari pemasukan dan pengeluaran hingga transfer antar rekening, dapat dicatat secara rinci, memudahkan pemantauan arus kas dan pengelolaan anggaran.'
                },
                {
                    title: 'Pengelolaan Akun',
                    desc: 'Sistem ini menyediakan modul akuntansi yang kuat untuk mengelola akun perusahaan, termasuk buku besar, neraca, dan laporan laba rugi. Fitur ini memastikan bahwa semua transaksi tercatat dengan benar dan laporan keuangan dapat dihasilkan dengan cepat dan akurat.'
                },
                {
                    title: 'Pelaporan Keuangan',
                    desc: 'Back Office menawarkan alat pelaporan yang canggih, memungkinkan pengguna untuk membuat laporan keuangan yang mendetail dan kustomisasi. Laporan ini membantu manajemen untuk membuat keputusan yang berbasis data dan memastikan kepatuhan terhadap regulasi keuangan.'
                },
            ],
            benefit: [
                {
                    title: 'Efisiensi Operasional',
                    desc: 'Mempercepat proses pencatatan dan pelaporan keuangan, sehingga mengurangi beban administrasi dan meningkatkan produktivitas.'
                },
                {
                    title: 'Akurasi Data',
                    desc: 'Mengurangi kesalahan manual dengan otomatisasi dan integrasi sistem yang terintegrasi dengan baik.'
                },
                {
                    title: 'Keputusan Berbasis Data',
                    desc: 'Memberikan wawasan mendalam dan analisis yang membantu manajemen dalam pengambilan keputusan yang strategis.'
                },
                {
                    title: 'Kepatuhan yang Terjamin:**',
                    desc: 'Memastikan kepatuhan terhadap regulasi dan standar akuntansi yang berlaku.'
                },
            ],
            date: 'Oct 2023 - Jan 2024',
            category: {
                title: 'Web Dashboard',
                href: '#'
            },
        },
        {
            id: 2,
            title: 'BMT - Sharia Accounting',
            href: '/works/BMT - Sharia Accounting',
            image: image2,
            description: 'BMT (Badan Mikro Tazkiyah) is the latest innovation in the world of Islamic financial institutions that carries the concept of comprehensive and integrated Islamic accounting. This project is designed to support Islamic financial institutions in running their operations efficiently, transparently, and in accordance with Islamic principles.',
            feature: [
                {
                    title: 'Akuntansi Syariah yang Terintegrasi',
                    desc: 'BMT menawarkan sistem akuntansi yang sepenuhnya sesuai dengan prinsip syariah. Sistem ini memudahkan lembaga keuangan syariah dalam mencatat, melaporkan, dan menganalisis transaksi keuangan tanpa melanggar prinsip-prinsip syariah. Dengan fitur ini, lembaga dapat memastikan bahwa semua transaksi keuangan, termasuk investasi dan pembiayaan, dilakukan sesuai dengan hukum Islam.'
                },
                {
                    title: 'Pelaporan Keuangan yang Transparan dan Akurat',
                    desc: 'BMT dilengkapi dengan modul pelaporan yang canggih untuk menghasilkan laporan keuangan yang akurat dan mudah dipahami. Fitur ini mempermudah lembaga dalam membuat laporan keuangan berkala yang memenuhi standar syariah dan regulasi yang berlaku, serta meningkatkan transparansi bagi pemangku kepentingan.'
                },
                {
                    title: 'Manajemen Zakat, Infak, dan Sedekah',
                    desc: 'Proyek BMT juga menyertakan fitur khusus untuk pengelolaan zakat, infak, dan sedekah. Sistem ini memungkinkan lembaga untuk mencatat dan melaporkan pengumpulan serta distribusi dana zakat dan amal secara terpisah, sesuai dengan prinsip-prinsip syariah, serta memastikan dana-dana tersebut disalurkan kepada penerima yang berhak.'
                },
            ],
            benefit: [
                {
                    title: 'Efisiensi Operasional',
                    desc: 'Mempercepat proses pencatatan dan pelaporan keuangan, sehingga mengurangi beban administrasi dan meningkatkan produktivitas.'
                },
                {
                    title: 'Akurasi Data',
                    desc: 'Mengurangi kesalahan manual dengan otomatisasi dan integrasi sistem yang terintegrasi dengan baik.'
                },
                {
                    title: 'Keputusan Berbasis Data',
                    desc: 'Memberikan wawasan mendalam dan analisis yang membantu manajemen dalam pengambilan keputusan yang strategis.'
                },
                {
                    title: 'Kepatuhan yang Terjamin:**',
                    desc: 'Memastikan kepatuhan terhadap regulasi dan standar akuntansi yang berlaku.'
                },
            ],
            date: 'Jan 2024 - Present',
            category: {
                title: 'Web Dashboard',
                href: '#'
            },
        },
        {
            id: 3,
            title: 'Kaktus - Garbage Monitoring Apps',
            href: '/works/Kaktus - Garbage Monitoring Apps',
            image: image3,
            description: 'The Kaktus Project is a technological breakthrough specifically designed to combine the power of mobile applications and advanced dashboards to manage and monitor waste transportation operations with high efficiency. With a focus on better waste management, Kaktus aims to increase the effectiveness and transparency of waste transportation in various regions.',
            feature: [
                {
                    title: 'Integrated Financial Recording',
                    desc: 'Back Office memungkinkan pencatatan transaksi keuangan dengan mudah dan cepat. Setiap transaksi, mulai dari pemasukan dan pengeluaran hingga transfer antar rekening, dapat dicatat secara rinci, memudahkan pemantauan arus kas dan pengelolaan anggaran.'
                },
                {
                    title: 'Pengelolaan Akun',
                    desc: 'Sistem ini menyediakan modul akuntansi yang kuat untuk mengelola akun perusahaan, termasuk buku besar, neraca, dan laporan laba rugi. Fitur ini memastikan bahwa semua transaksi tercatat dengan benar dan laporan keuangan dapat dihasilkan dengan cepat dan akurat.'
                },
                {
                    title: 'Pelaporan Keuangan',
                    desc: 'Back Office menawarkan alat pelaporan yang canggih, memungkinkan pengguna untuk membuat laporan keuangan yang mendetail dan kustomisasi. Laporan ini membantu manajemen untuk membuat keputusan yang berbasis data dan memastikan kepatuhan terhadap regulasi keuangan.'
                },
            ],
            benefit: [
                {
                    title: 'Efisiensi Operasional',
                    desc: 'Mempercepat proses pencatatan dan pelaporan keuangan, sehingga mengurangi beban administrasi dan meningkatkan produktivitas.'
                },
                {
                    title: 'Akurasi Data',
                    desc: 'Mengurangi kesalahan manual dengan otomatisasi dan integrasi sistem yang terintegrasi dengan baik.'
                },
                {
                    title: 'Keputusan Berbasis Data',
                    desc: 'Memberikan wawasan mendalam dan analisis yang membantu manajemen dalam pengambilan keputusan yang strategis.'
                },
                {
                    title: 'Kepatuhan yang Terjamin:**',
                    desc: 'Memastikan kepatuhan terhadap regulasi dan standar akuntansi yang berlaku.'
                },
            ],
            date: 'Aug 2023 - Oct 2023',
            category: {
                title: 'Web Dashboard & Mobile App',
                href: '#'
            },
        },
    ]
</script>