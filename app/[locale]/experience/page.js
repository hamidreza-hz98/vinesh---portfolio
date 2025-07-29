import ExperiencePageWrapper from '@/components/wrappers/ExperiencePageWrapper'
import React from 'react'
import { experienceMetadata } from '@/constants/seo';

export async function generateMetadata({ params }) {
  const locale = await params.locale || "en";

  return experienceMetadata[locale] || experienceMetadata.en;
}

const page = () => {
  return (
    <ExperiencePageWrapper />
  )
}

export default page