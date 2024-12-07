import { Product } from "@/gql/graphql";
import { ProductItem } from "./ProductItem";

interface Props {
  products: any[]
}

export function ProductList(props: Props) {
  return (
    <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-2 p-4">
      {
        props.products.flat().map((product: Product, index) => {
          return product?.sku?.map((sku, i: number) => {
            return (
              <ProductItem key={index + '' + i} product={product} sku={sku ? sku : {}} />
            )
          })
        })
      }
    </div>
  )
}