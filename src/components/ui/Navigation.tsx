import { Badge, Icon } from '@shopify/polaris';
import { CartIcon, HomeIcon, MenuIcon, OrderIcon } from '@shopify/polaris-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export function Navigation() {
  const pathname = usePathname();

  const p = pathname.split('/');
  const last = p[p.length - 1];

  return (
    <div className='fixed bottom-0 left-0 right-0 bg-white shadow-md shadow-emerald-900 w-screen flex flex-row justify-around h-[50px]'>
      <Link href={'/'} className='p-3 cursor-pointer items-center flex'>
        <Icon source={HomeIcon} tone={['kh', 'en', ''].includes(last) ? 'success' : 'subdued'} />
      </Link>
      <Link href={'/order'} className='p-3 cursor-pointer items-center flex relative'>
        <Icon source={OrderIcon} tone={['order'].includes(last) ? 'success' : 'subdued'} />
        {/* <div className='absolute -top-1 -right-1'>
          <Badge size='small' tone='critical'>10</Badge>
        </div> */}
      </Link>
      <Link href={'/checkout'} className='p-3 cursor-pointer items-center flex relative'>
        <Icon source={CartIcon} tone={['checkout'].includes(last) ? 'success' : 'subdued'} />
      </Link>
      <Link href={'#'} className='p-3 cursor-pointer items-center flex'>
        <Icon source={MenuIcon} tone={['setting'].includes(last) ? 'success' : 'subdued'} />
      </Link>
    </div>
  )
}