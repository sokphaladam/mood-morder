import { Icon } from '@shopify/polaris';
import { CartIcon, HomeIcon, MenuIcon, OrderIcon } from '@shopify/polaris-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export function Navigation() {
  const pathname = usePathname();

  const p = pathname.split('/');
  const last = p[p.length - 1];

  return (
    <div className='fixed bottom-0 left-0 right-0 bg-white shadow-md w-full flex flex-row justify-between h-[50px]'>
      <Link href={'/'} className='p-3 cursor-pointer'>
        <Icon source={HomeIcon} tone={['kh', 'en', ''].includes(last) ? 'success' : 'subdued'} />
      </Link>
      <Link href={'#'} className='p-3 cursor-pointer'>
        <Icon source={OrderIcon} tone={['order'].includes(last) ? 'success' : 'subdued'} />
      </Link>
      <Link href={'/checkout'} className='p-3 cursor-pointer'>
        <Icon source={CartIcon} tone={['checkout'].includes(last) ? 'success' : 'subdued'} />
      </Link>
      <Link href={'#'} className='p-3 cursor-pointer'>
        <Icon source={MenuIcon} tone={['setting'].includes(last) ? 'success' : 'subdued'} />
      </Link>
    </div>
  )
}