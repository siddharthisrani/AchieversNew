export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",

  name: "DNDC - Data & Development Center",

  url: "https://dndc.in",

  logo: "https://dndc.in/og-image.png",

  description:
    "DNDC is one of the leading IT Training Institutes in Bhopal offering MERN Stack, Java, Python, Data Analytics, Data Science, Artificial Intelligence and Machine Learning courses.",

  sameAs: [
    "https://www.instagram.com/dndc_official/",
  ],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",

  "@type": "EducationalOrganization",

  name: "DNDC",

  image: "https://dndc.in/og-image.png",

  url: "https://dndc.in",

  telephone: "+91-6261437008",

  address: {
    "@type": "PostalAddress",

    streetAddress: "MP Nagar Zone-1",

    addressLocality: "Bhopal",

    addressRegion: "Madhya Pradesh",

    postalCode: "462011",

    addressCountry: "IN",
  },

  openingHours: "Mo-Sa 09:00-19:00",
};