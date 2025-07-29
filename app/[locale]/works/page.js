import React from 'react'
import WorksPageWrapper from '@/components/wrappers/WorksPageWrapper'
import { worksMetadata } from '@/constants/seo';

export async function generateMetadata({ params }) {
  const locale = await params.locale || "en";

  return worksMetadata[locale] || worksMetadata.en;
}

const page = () => {
  return (
    <WorksPageWrapper />
  )
}

export default page