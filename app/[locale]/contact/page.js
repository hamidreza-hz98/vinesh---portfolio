import ContactPageWrapper from '@/components/wrappers/ContactPageWrapper'
import React from 'react'
import { contactMetadata } from '@/constants/seo';

export async function generateMetadata({ params }) {
  const locale = await params?.locale || "en";
  
  return contactMetadata[locale] || contactMetadata.en;
}

const page = () => {
  return (
    <ContactPageWrapper />
  )
}

export default page