export const useEnvVariables = () => {
    const config = useRuntimeConfig()
    return {
      companyName: config.public.COMPANY_NAME,
      companyNameOrg: config.public.COMPANY_NAME_ORG,
      footerAddress: config.public.FOOTER_ADDRESS,
      footerEmail: config.public.FOOTER_EMAIL,
      footerPhone: config.public.FOOTER_PHONE
    }
  }