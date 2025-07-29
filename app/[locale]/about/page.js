import AboutPageWrapper from '@/components/wrappers/AboutPageWrapper'
import React from 'react'
import { aboutMetadata } from '@/constants/seo';

export async function generateMetadata({ params }) {
  const locale = await params?.locale || "en";
  return aboutMetadata[locale] || aboutMetadata.en;
}

const page = () => {
  return (
    <AboutPageWrapper />
  )
}

export default page