import React from 'react'
import SkillsPageWrapper from '@/components/wrappers/SkillsPageWrapper'
import { skillsMetadata } from '@/constants/seo';

export async function generateMetadata({ params }) {
  const locale = await params.locale || "en";

  return skillsMetadata[locale] || skillsMetadata.en;
}

const page = () => {
  return (
    <SkillsPageWrapper />
  )
}

export default page