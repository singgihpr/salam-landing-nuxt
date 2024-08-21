import { defineStore } from 'pinia';
import image1 from '@/assets/work/intiraga.png';
import image2 from '@/assets/work/lksi.png';
import image3 from '@/assets/work/ogya.png';

export const useWorksStore = defineStore('works', {
  state: () => ({
    works: [
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
    ],
  }),
});
