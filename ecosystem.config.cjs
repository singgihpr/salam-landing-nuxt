module.exports = {
  apps: [
    {
      name: 'Salam Solusi Nusantara',
      port: '3000',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
      env: {
        NODE_ENV: 'production',
        // Add .env variable here for pm2
        NUXT_PUBLIC_COMPANY_URL:'',
        NUXT_PUBLIC_COMPANY_NAME:'',
        NUXT_PUBLIC_COMPANY_NAME_ORG:'',
        NUXT_PUBLIC_FOOTER_ADDRESS:'',
        NUXT_PUBLIC_FOOTER_EMAIL:'',
        NUXT_PUBLIC_FOOTER_PHONE:'',
      }
    }
  ]
}
