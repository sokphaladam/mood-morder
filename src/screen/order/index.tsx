'use client';

import { OrderViewBy, StatusOrder, useOrderListQuery } from "@/gql/graphql";
import { useTranslations } from "next-intl";
import Link from "next/link";

export function OrderScreen() {
  const t = useTranslations('CheckoutPage');
  const { data, loading } = useOrderListQuery({
    variables: {
      offset: 0,
      limit: 10000,
      status: [StatusOrder.Checkout],
      viewBy: OrderViewBy.QuickOrder
    }
  });

  if (loading || !data) {
    return <></>
  }

  return (
    <div className="max-w-[1200px] w-full p-3 flex flex-1 flex-col justify-center mx-auto scroll-smooth snap-mandatory snap-y">
      <div className="text-center font-bold p-3">
        <h2 className="text-[16px]">{t('order')}</h2>
      </div>
      <ul>
        {
          data.orderList?.map((x, i) => {
            const last = x?.log?.find(f => f?.text === 'Checkout');
            const qty = x?.items?.reduce((a, b) => a = a + (b?.qty || 0), 0)
            return <Link key={i} href={`/order/${x?.id}`}>
              <li className="snap-center">
                <div className="flex flex-row justify-between bg-white my-3 shadow-md rounded-md p-3">
                  <div>
                    <div>
                      <b>{t('invoice')}: #{x?.invoice?.toString().padStart(5, '0')}</b>
                    </div>
                    <div>
                      <small className="text-gray-600">{t('order_id')}: {x?.id}</small>
                    </div>
                    <div className="mt-2">
                      <b className="text-gray-600">{x?.items?.length}({qty})</b>
                    </div>
                  </div>
                  <div className="text-right">
                    <div><b className="text-emerald-800">${x?.total}</b></div>
                    <div>
                      <small className="text-gray-600">{last?.date} ({last?.by?.display})</small>
                    </div>
                    <div className="mt-2">
                      <b className="text-cyan-700">{x?.bankType} ({x?.currency})</b>
                    </div>
                  </div>
                </div>
              </li>
            </Link>
          })
        }
      </ul>
    </div>
  )
}