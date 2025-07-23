import Image from 'next/image'
import LanguageSwitcher from '../LanguageSwitcher'
import Link from 'next/link'
import React from 'react'
import { getCurrentLocale } from '@/utils/locale'
import { headerRoutes } from '@/constants/routes'

const Header = () => {
  const locale = getCurrentLocale()

  return (
    <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-[90%] sm:max-w-4xl z-20">
      <div className="flex items-center justify-between px-6 py-2 border border-border rounded-full backdrop-blur-lg">
        <Link href="/" className="cursor-pointer flex items-center gap-2">
          <Image
            src="/images/placeholder.svg"
            width={48}
            height={48}
            sizes="100vw"
            className='rounded-full'
            alt="Vinesh Tech Logo"
          />
          <strong>Vinesh Tech</strong>
        </Link>

        <div className='hidden sm:flex space-x-4'>
          {
            headerRoutes.map((route, index) => 
            <Link className='hover:text-primary transition' href={route.link} key={index}>
              { route.name[locale] }
            </Link>
            )
          }
        </div>

        <LanguageSwitcher />
      </div>
    </div>
  )
}

export default Header
