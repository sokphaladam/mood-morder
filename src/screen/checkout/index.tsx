'use client';
import { OrderInput, useCreateOrderMutation, useGetbankListQuery, useOrderLazyQuery } from "@/gql/graphql";
import { formatKHR } from "@/lib/formatKHR";
import { useCart } from "@/service/CartProvider";
import { useInvoice } from "@/service/InvoiceProvider";
import { useSetting } from "@/service/SettingProvider";
import { useUser } from "@/service/UserProvider";
import { Box, Card, Icon, Select, TextField, Thumbnail } from "@shopify/polaris";
import { useTranslations } from "next-intl";
import { useCallback, useRef, useState } from "react";
import { PrintV2 } from "./print";
import moment from "moment";
import { DeleteIcon, MinusIcon, PlusIcon } from "@shopify/polaris-icons";

export function CheckoutScreen() {
  const t = useTranslations('CheckoutPage')
  const { invoice, setInvoice } = useInvoice();
  const { order, setOrder } = useCart();
  const user = useUser();
  const setting = useSetting();

  const refPrint = useRef<HTMLButtonElement>(null);

  const [bank, setBank] = useState(1);
  const [currency, setCurreny] = useState('USD')
  // const [amountInput, setAmountInput] = useState(order?.customerPaid + '');
  const [isCheckout, setCheckOut] = useState(false);
  const [error, setError] = useState<any>(null);

  const queryBank = useGetbankListQuery();
  const [queryOrder, { data }] = useOrderLazyQuery();
  const [create] = useCreateOrderMutation();

  const discount = (Number(order?.amount || 0) * Number(order?.discount || 0)) / 100;
  const exchangeRate = setting ? setting.find((f) => f.option === 'EXCHANGE_RATE')?.value : 0;
  const totalAfterDiscount = Number((Number(order?.amount) - Number(discount)).toFixed(2));
  const vat = setting.find((f) => f.option === 'TAX')?.value;

  const handleCheckout = useCallback(() => {

    if (Number(order?.customerPaid) <= 0) {
      setError({
        type: 'customerPaid',
        message: 'Please input amount customer paid'
      })
      return;
    }

    if(Number(order?.customerPaid) < Number(order?.amount)) {
      setError({
        type: 'customerPaid',
        message: 'Amount input not enough for checkout'
      })
      return 
    }

    const b = queryBank.data?.getbankList?.find(f => f?.id);
    const input: OrderInput = {
      set: 'QO',
      invoice: Number(invoice.count),
      bankType: b?.name,
      bankId: Number(b?.id),
      amount: order?.amount,
      currency: currency,
      customerPaid: order?.amount,
      discount: order?.discount,
      name: user?.display,
      carts: order?.carts?.map(x => {
        return {
          skuId: x.skuId,
          productId: x.productId,
          qty: x.qty,
          addons: x.addons,
          discount: x.discount,
          price: x.price,
          remark: x.remark
        }
      })
    }

    create({
      variables: {
        data: input
      }
    }).then(res => {
      if ((res.data?.createOrder || 0) > 0) {
        const inv = {
          date: moment(new Date()),
          count: Number(invoice.count) + 1,
        };
        localStorage.setItem('invoice', JSON.stringify(inv));
        setInvoice(inv);
        queryOrder({
          variables: {
            orderId: Number(res.data?.createOrder || 0)
          }
        }).then(() => {
          refPrint.current?.click();
          setCheckOut(true);
          setOrder({
            set: 'QO',
            amount: "0",
            discount: 0,
            carts: []
          })
        })
      }
    })
  }, [order, queryBank.data, currency, bank, refPrint, create, localStorage, invoice, process, window, setInvoice, user]);

  const calculateAmount = (carts: any[]) => {
    const total = carts.reduce((a, b) => {
      const dis_price = Number(b.price) * (Number(b.discount) / 100);
      const amount = Number(b.qty) * (Number(b.price) - dis_price);
      return (a = a + amount);
    }, 0);

    return total
  }

  const handleIncreaseQty = useCallback((index: number) => {
    const carts = order?.carts || [];
    carts[index].qty = (carts[index].qty || 0) + 1;
    setOrder({
      ...order,
      amount: String(calculateAmount(carts).toFixed(2)),
      customerPaid: String(calculateAmount(carts).toFixed(2)),
      carts
    })
  }, [order])

  const handleDecreaseQty = useCallback((index: number) => {
    const carts = order?.carts || [];
    if ((carts[index].qty || 0) > 1) {
      carts[index].qty = (carts[index].qty || 0) - 1;
    } else {
      carts.splice(index, 1);
    }
    setOrder({
      ...order,
      amount: String(calculateAmount(carts).toFixed(2)),
      customerPaid: String(calculateAmount(carts).toFixed(2)),
      carts
    })
  }, [order]);

  const handleRemoveQty = useCallback((index: number) => {
    const carts = order?.carts || [];
    carts.splice(index, 1);
    setOrder({
      ...order,
      amount: String(calculateAmount(carts).toFixed(2)),
      customerPaid: String(calculateAmount(carts).toFixed(2)),
      carts
    })
  }, [order]);

  return (
    <div className="max-w-[1200px] w-full p-3 flex flex-1 flex-col justify-center mx-auto">
      <Card padding={'0'} roundedAbove="sm">
        <Box borderBlockEndWidth="0165" padding={'0'} borderColor="border-brand">
          <div className="text-center font-bold p-3">
            <h2 className="text-[16px]">{t('title')}</h2>
          </div>
        </Box>
        {
          !isCheckout && <>
            <Box borderBlockEndWidth="0165" padding={'0'} borderColor="border-brand">
              <div className="p-3 flex flex-row justify-between items-center">
                <div>
                  <div>{t('invoice')}: <b>#{String(invoice.count).padStart(5, '0')}</b></div>
                </div>
                <div>
                  <div>{t('cashier')}: <b>{user?.display}</b></div>
                </div>
              </div>
            </Box>
            <Box borderBlockEndWidth="0165" padding={'0'} borderColor="border-brand">
              <div className="p-3">
                {order?.carts?.map((x, i) => {
                  const dis_price = Number(x.price) * (Number(x.discount) / 100);
                  const amount = Number(x.qty) * (Number(x.price) - dis_price);
                  return (
                    <div key={i} className="flex flex-row justify-between items-center py-3">
                      <div className="flex flex-row items-center gap-1">
                        <div className="mr-2"><b>x{x.qty}</b></div>
                        <Thumbnail alt="" source={x.sku.image || x.product.images || ''} size="medium" />
                        <div>
                          <div className="text-black font-bold">{x.product.title} ({x.sku.name})</div>
                          <div><small>${x.price?.toFixed(2)}</small></div>
                        </div>
                      </div>
                      <div><b className="text-[15px]">${amount.toFixed(2)}</b></div>
                      <div className="flex flex-row gap-2">
                        <div className="cursor-pointer bg-gray-200 rounded-sm p-1" onClick={() => handleDecreaseQty(i)}><Icon source={MinusIcon} /></div>
                        <div className="cursor-pointer bg-gray-200 rounded-sm p-1" onClick={() => handleIncreaseQty(i)}><Icon source={PlusIcon} /></div>
                        <div className="cursor-pointer bg-rose-600 rounded-sm text-white p-1" onClick={() => handleRemoveQty(i)}><Icon source={DeleteIcon} /></div>
                      </div>
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
                      <div>
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
                      <div>
                        {
                          formatKHR(
                            Math.round(
                              Number(exchangeRate) * (Number(order?.customerPaid)),
                            ),
                          )
                        }
                      </div>
                      <div>
                        (${order?.customerPaid})
                      </div>
                    </div>
                    <div style={{ height: '2rem' }} className="flex flex-row gap-3">
                      <div>
                        {Number(order?.customerPaid) > 0
                          ? formatKHR(
                            Math.round(
                              Number(exchangeRate) * (Number(order?.customerPaid) - totalAfterDiscount),
                            ),
                          )
                          : 0}
                      </div>
                      <div>(${((Number(order?.customerPaid) - totalAfterDiscount)).toFixed(2)})</div>
                    </div>
                  </div>
                </div>
              </div>
            </Box>
            <Box borderBlockEndWidth="0165" padding={'0'} borderColor="border-brand">
              <div className="p-3 flex flex-row justify-between items-center">
                <div><h4 className="text-[16px]">{t('paid_type')}</h4></div>
                <div className="text-10px">
                  <small><Select
                    label
                    labelHidden
                    options={queryBank.data ? queryBank.data?.getbankList?.map(x => {
                      return {
                        label: x?.name || '',
                        value: x?.id + ''
                      }
                    }) || [] : []}
                    value={bank.toString()}
                    onChange={v => {
                      setBank(Number(v))
                    }}
                  /></small>
                </div>
              </div>
            </Box>
            <Box borderBlockEndWidth="0165" padding={'0'} borderColor="border-brand">
              <div className="p-3 flex flex-row justify-between items-center">
                <div><h4 className="text-[16px]">{t('currency')}</h4></div>
                <div>
                  <Select
                    label
                    labelHidden
                    options={[
                      { label: 'USD', value: "USD" },
                      { label: 'KHR', value: "KHR" }
                    ]}
                    value={currency.toString()}
                    onChange={setCurreny}
                  />
                </div>
              </div>
            </Box>
            <Box borderBlockEndWidth="0165" padding={'0'} borderColor="border-brand">
              <div className="p-3 flex flex-row justify-between items-center">
                <div><h4 className="text-[16px]">{t('customer_paid')}</h4></div>
                <div>
                  <TextField
                    align="right"
                    type="currency"
                    autoComplete="off"
                    label
                    labelHidden
                    prefix={currency === 'USD' ? '$' : '៛'}
                    selectTextOnFocus
                    value={order?.customerPaid?.toString()}
                    onChange={v => {
                      if (!isNaN(Number(v))) {
                        setOrder({
                          ...order,
                          customerPaid: currency === 'USD' ? v : (Number(v) / Number(exchangeRate || 0)).toFixed(2),
                        })
                      }
                    }}
                    error={error && error.type === 'customerPaid' && error.message}
                  />
                </div>
              </div>
            </Box>
          </>
        }
        <Box padding={'0'}>
          <div className="p-3">
            <PrintV2
              order={data?.order}
              total={data?.order?.total + ''}
              refbtn={refPrint}
            />
            {
              isCheckout ?
                <button onClick={() => {
                  refPrint.current?.click();
                }}
                  className="text-white flex w-full justify-center rounded-md px-3 py-1.5 bg-purple-600 shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                >Print Receipt</button> :
                <button disabled={!!isCheckout} onClick={handleCheckout} className="text-white flex w-full justify-center rounded-md px-3 py-1.5 bg-emerald-600 shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600">Checkout</button>
            }
          </div>
        </Box>
      </Card>
    </div>
  )
}