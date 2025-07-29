import AboutPageWrapper from '@/components/wrappers/AboutPageWrapper'
import React from 'react'
import { aboutMetadata } from '@/constants/seo';
import { getCurrentLocale } from '@/utils/locale';

const locale = getCurrentLocale();
console.log(locale);

export const metadata = aboutMetadata[locale];

const page = () => {
  return (
    <AboutPageWrapper />
  )
}

export default page