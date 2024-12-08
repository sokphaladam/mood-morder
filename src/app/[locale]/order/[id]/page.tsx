import { OrderDocument } from "@/gql/graphql";
import { getClient } from "@/lib/server";
import { OrderDetailScreen } from "@/screen/order/detail";

async function getOrder(id: string) {
  const { data, loading } = await (await getClient()).query({
    query: OrderDocument,
    variables: {
      orderId: Number(id),
    }
  });

  return {
    data,
    loading
  }
}

export default async function OrderDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const query = await getOrder((await params).id);

  return <OrderDetailScreen query={query} />
}