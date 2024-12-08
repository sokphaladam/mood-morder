'use client'
import { Order } from "@/gql/graphql"
import { formatKHR } from "@/lib/formatKHR";
import { PrintV2 } from "@/screen/checkout/print";
import { useSetting } from "@/service/SettingProvider";
import { Box, Card, Thumbnail } from "@shopify/polaris";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { CancelOrder } from "./components/CancelOrder";

interface Props {
  query: {
    data: {
      order: Order
    },
    loading: boolean
  }
}

export function OrderDetailScreen(props: Props) {
  const { query: { data, loading } } = props;
  const t = useTranslations('CheckoutPage');
  const setting = useSetting();
  const refPrint = useRef<HTMLButtonElement>(null);
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <div className="max-w-[1200px] w-screen flex flex-row justify-center items-center h-screen">
      <div>Loading...</div>
    </div>
  }

  if (loading) {
    return <div className="max-w-[1200px] w-screen flex flex-row justify-center items-center h-screen">
      <div>Loading...</div>
    </div>
  }

  const discount = (Number(data?.order.total || 0) * Number(data?.order.discount || 0)) / 100;
  const exchangeRate = setting ? setting.find((f) => f.option === 'EXCHANGE_RATE')?.value : 0;
  const totalAfterDiscount = Number((Number(data?.order.total) - Number(discount)).toFixed(2));
  const vat = setting.find((f) => f.option === 'TAX')?.value;
  const checkout = data.order.log?.find(f => f?.text === 'Checkout');

  return (
    <div className="max-w-[1200px] w-full p-3 flex flex-1 flex-col justify-center mx-auto">
      <Card padding={'0'} roundedAbove="sm">
        <Box borderBlockEndWidth="0165" padding={'0'} borderColor="border-brand">
          <div className="text-center font-bold p-3">
            <h2 className="text-[16px]">{t('order')} {data.order.id}</h2>
          </div>
        </Box>
        <Box borderBlockEndWidth="0165" padding={'0'} borderColor="border-brand">
          <div className="p-3 flex flex-row justify-between items-center">
            <div>
              <div>{t('invoice')}: <b>#{String(data.order.invoice).padStart(5, '0')}</b></div>
            </div>
            <div>
              <div>{t('cashier')}: <b>{checkout?.by?.display}</b></div>
            </div>
          </div>
        </Box>
        <Box borderBlockEndWidth="0165" padding={'0'} borderColor="border-brand">
          <div className="p-3">
            {data?.order.items?.map((x, i) => {
              const dis_price = Number(x?.price) * (Number(x?.discount) / 100);
              const amount = Number(x?.qty) * (Number(x?.price) - dis_price);
              return (
                <div key={i} className="flex flex-row justify-between items-center py-3">
                  <div className="flex flex-row items-center gap-1">
                    <div className="mr-2"><b>x{x?.qty}</b></div>
                    <Thumbnail alt="" source={x?.sku?.image || x?.product?.images || ''} size="medium" />
                    <div>
                      <div className="text-black font-bold">{x?.product?.title} ({x?.sku?.name})</div>
                      <div><small>${x?.price?.toFixed(2)}</small></div>
                    </div>
                  </div>
                  <div><b className="text-[15px]">${amount.toFixed(2)}</b></div>
                </div>
              )
            })}
          </div>
        </Box>
        <Box borderBlockEndWidth="0165" padding={'0'} borderColor="border-brand">
          <div className="p-3">
            <h4 className="text-[16px]">{t('order_summary')}</h4>
            <br />
            <div className="flex flex-row justify-between text-xs">
              <div className="max-w-[130px]">
                <div style={{ height: '2rem' }}>{t('total')}</div>
                <div style={{ height: '2rem' }}>{t('vat')}</div>
                <div style={{ height: '2rem' }}>{t('received')}</div>
                <div style={{ height: '2rem' }}>{t('return')}</div>
              </div>
              <div className="flex flex-col items-end">
                <div style={{ height: '2rem', fontWeight: 'bold' }} className="flex flex-row gap-3">
                  <div suppressHydrationWarning>
                    {
                      formatKHR(
                        Math.round(
                          Number(exchangeRate) * (Number(totalAfterDiscount)),
                        ),
                      )
                    }
                  </div>
                  <div>
                    (${totalAfterDiscount.toFixed(2)})
                  </div>
                </div>
                <div style={{ height: '2rem' }}>$({vat}%)</div>
                <div style={{ height: '2rem' }} className="flex flex-row gap-3">
                  <div suppressHydrationWarning>
                    {
                      formatKHR(
                        Math.round(
                          Number(exchangeRate) * (Number(data?.order.customerPaid)),
                        ),
                      )
                    }
                  </div>
                  <div>
                    (${data?.order.customerPaid})
                  </div>
                </div>
                <div style={{ height: '2rem' }} className="flex flex-row gap-3">
                  <div suppressHydrationWarning>
                    {Number(data?.order.customerPaid) > 0
                      ? formatKHR(
                        Math.round(
                          Number(exchangeRate) * (Number(data?.order.customerPaid) - totalAfterDiscount),
                        ),
                      )
                      : 0}
                  </div>
                  <div>(${((Number(data?.order.customerPaid) - totalAfterDiscount)).toFixed(2)})</div>
                </div>
              </div>
            </div>
          </div>
        </Box>
        <Box borderBlockEndWidth="0165" padding={'0'} borderColor="border-brand">
          <div className="p-3 flex flex-row justify-between items-center">
            <div><h4 className="text-[16px]">{t('paid_type')}</h4></div>
            <div className="text-10px">
              {data.order.bankType}
            </div>
          </div>
        </Box>
        <Box borderBlockEndWidth="0165" padding={'0'} borderColor="border-brand">
          <div className="p-3 flex flex-row justify-between items-center">
            <div><h4 className="text-[16px]">{t('currency')}</h4></div>
            <div>
              {data.order.currency}
            </div>
          </div>
        </Box>
        <Box padding={'0'}>
          <div className="p-3">
            {
              data.order && <>
                <PrintV2
                  order={data.order}
                  total={data.order.total + ''}
                  refbtn={refPrint}
                />
                <div className="flex flex-row gap-2 justify-end">
                  <div>
                    <button onClick={() => {
                      refPrint.current?.click();
                    }}
                      className="text-white flex w-full justify-center rounded-md px-3 py-1.5 bg-purple-600 shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                    >Print Receipt</button>
                  </div>
                  <div>
                    <CancelOrder id={data.order.id || 0} />
                  </div>
                </div>
              </>
            }
          </div>
        </Box>
      </Card>
    </div>
  )
}