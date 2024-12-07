'use client';
import { Layout, Page } from "@shopify/polaris";
import { ProductList } from "./components/ProductList";

export function ProductScreen(){
  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section variant="fullWidth">
          <ProductList />
        </Layout.Section>
      </Layout>
    </Page>
  )
}