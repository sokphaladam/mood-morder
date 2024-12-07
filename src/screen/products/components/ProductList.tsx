import { useProductListQuery } from "@/gql/graphql";
import Image from "next/image";

function SkeltonProductItem () {
  return (
    <div></div>
  )
}

export function ProductList(){
  const {data, loading} = useProductListQuery();

  if(loading || !data) {
    return (
      <div>
        <SkeltonProductItem/>
      </div>
    )
  }
  
  return (
    <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-2">
      {
        data.productList?.map((product, index) => {
          return product?.sku?.map((sku, i) => {
            return (
              <div key={index+''+i} className="w-full h-[150px]">
                <Image
                  alt=""
                  src={sku?.image || product.images || ''}
                  width={180}
                  height={180}
                  className="aspect-square object-contain w-fit h-[180px]"
                />
              </div>
            )
          })
        })
      }
    </div>
  )
}