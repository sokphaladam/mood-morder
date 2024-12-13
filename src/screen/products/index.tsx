'use client';
import { Category } from "./components/Category";
import { useState } from "react";
import { useProductListQuery } from "@/gql/graphql";
import { ProductList } from "./components/ProductList";

export function ProductScreen() {
  const [category, setCategory] = useState(null);
  const { data } = useProductListQuery({
    variables: {
      limit: 10000,
      offset: 0,
      enabledOn: ['QORDER', 'ALL'],
      schedule: true,
      filter: {
        type: [Type_Product.Production],
        status: [Status_Product.Available, Status_Product.OutOfStock, Status_Product.TimeOut],
      },
    }
  });

  const groups = data?.productList?.reduce((a: any, b: any) => {
    const key = b?.category?.name;

    if (!a[key]) {
      a[key] = [];
    }

    a[key].push(b);
    return a;
  }, {});

  return (
    <div className="max-w-[1200px] w-full flex flex-1 flex-col justify-center mx-auto">
      <div><Category productGroup={groups} selected={category} onSelected={setCategory} /></div>
      <div>
        <ProductList products={groups ? (category === null
          ? Object.keys(groups).map(x => groups[x])
          : Object.keys(groups).filter((f) => f === (category as any).name).map(x => groups[x])
        ) : []} />
      </div>
    </div>
  )
}