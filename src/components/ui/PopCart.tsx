'use client'

import { useCart } from "@/service/CartProvider"
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function PopCart() {
  const pathname = usePathname();
  const t = useTranslations('OrderPop');
  const { order } = useCart();

  const p = pathname.split('/');
  const last = p[p.length - 1];

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-20 p-4 ${(order?.carts?.length || 0) <= 0 || last === 'checkout' ? 'hidden' : ''}`}>
      <div className="bg-slate-800 text-white p-3 rounded-md flex flex-row items-center justify-between">
        <div>{t('title', { count: order?.carts?.reduce((a, b) => a = a + (b?.qty || 0), 0) || 0 })}</div>
        <div>
          <Link href={'/checkout'} className="flex w-full justify-center rounded-md px-3 py-1.5 bg-emerald-600 shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600">${order?.amount || 0}</Link>
        </div>
      </div>
    </div>
  )
}