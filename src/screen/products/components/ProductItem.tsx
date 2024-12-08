import { Product, Sku, Status_Product } from '@/gql/graphql';
import { Icon } from '@shopify/polaris';
import Image from 'next/image';
import React, { useCallback } from 'react';
import { CartAbandonedFilledIcon, PackageOnHoldIcon } from '@shopify/polaris-icons';
import { useCart } from '@/service/CartProvider';

interface Props {
  product: Product;
  sku: Sku
}

export function ProductItem(props: Props) {
  const { order, setOrder } = useCart();

  const handleClick = useCallback(() => {
    if (
      props.product.status === Status_Product.Available &&
      props.sku?.status === Status_Product.Available
    ) {
      const carts: any[] = order?.carts || [];
      const index = carts?.findIndex(f => f?.productId === props.product.id && f?.skuId === props.sku.id)

      if (index >= 0) {
        carts[index].qty = (carts[index]?.qty || 0) + 1
      }
      else {
        carts.push({
          productId: props.product.id,
          skuId: props.sku.id,
          addons: '',
          remark: '',
          discount: props.sku.discount,
          price: props.sku.price,
          qty: 1,
          product: props.product,
          sku: props.sku
        })
      }

      const total = carts.reduce((a, b) => {
        const dis_price = Number(b.price) * (Number(b.discount) / 100);
        const amount = Number(b.qty) * (Number(b.price) - dis_price);
        return (a = a + amount);
      }, 0);

      setOrder({
        ...order,
        amount: String(total.toFixed(2)),
        customerPaid: String(total.toFixed(2)),
        carts
      })
    }
  }, [props, order, setOrder]);

  const haveSelectedOrder = order?.carts?.find(x => x.skuId === props.sku.id && x.productId === props.product.id);

  return (
    <div onClick={handleClick} className={`${props.product.status === Status_Product.Available && props.sku?.status === Status_Product.Available
      ? 'bg-white'
      : 'bg-gray-50'
      } rounded-lg overflow-hidden justify-between items-center cursor-pointer ${props.product.status === Status_Product.Available && props.sku?.status === Status_Product.Available
        ? `hover:scale-105 hover:bg-gray-50`
        : ''
      } transition-all snap-center relative`}>
      <div className="w-full h-[150] flex flex-row justify-center items-center relative overflow-hidden">
        <Image
          src={props.sku?.image ? props.sku?.image + '' : props.product.images || ''}
          alt=""
          width={180}
          height={180}
          className="object-contain"
          style={{ width: 'fit-contain', height: 180 }}
        />
      </div>
      <div className="py-2 px-4">
        <div className='inline-block text-ellipsis whitespace-nowrap clear-both'>
          <b
            className={`text-lg ${props.product.status === Status_Product.OutOfStock ||
              props.sku?.status === Status_Product.OutOfStock ||
              props.sku?.status === Status_Product.TimeOut
              ? 'text-gray-400'
              : ''
              }`}
          >
            {props.product.title} ({props.sku?.name})
          </b>
        </div>
        <div className="text-red-500 font-bold my-2">${Number(props.sku?.price).toFixed(2)}</div>
        {(props.product.status === Status_Product.OutOfStock ||
          props.sku?.status === Status_Product.OutOfStock) && (
            <div className="flex flex-row items-center gap-1">
              <div>
                <Icon source={CartAbandonedFilledIcon} tone="critical" />
              </div>
              <small className="text-red-500">(Out Of Stock)</small>
            </div>
          )}
        {props.sku?.status === Status_Product.TimeOut && (
          <div className="flex flex-row items-center gap-1">
            <div>
              <Icon source={PackageOnHoldIcon} tone="critical" />
            </div>
            <small className="text-red-500">(Time Out)</small>
          </div>
        )}
        <div className="max-h-[30px] truncate">{props.product.description}</div>
      </div>
      {
        !!haveSelectedOrder &&
        <div className='bg-rose-900 rounded-full h-10 w-10 shadow-md shadow-rose-200 text-white flex flex-row items-center justify-center absolute top-1 right-1'>
          {haveSelectedOrder.qty?.toString().padStart(2, '0')}
        </div>
      }
    </div>
  )
}