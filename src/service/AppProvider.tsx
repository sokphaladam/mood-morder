'use client';
import { CustomToastMultiple } from "@/components/CustomToast";
import { ApolloWrapper } from "./ApolloProvider";
import { PolarisProvider } from "./PolarisProvider";
import { UserProvider } from "./UserProvider";
import { CartProvider } from "./CartProvider";
import { PopCart } from "@/components/ui/PopCart";
import { InvoiceProvider } from "./InvoiceProvider";
import { SettingProvider } from "./SettingProvider";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function AppProvider({ children }: React.PropsWithChildren<any>) {
  return (
    <ApolloWrapper>
      <SettingProvider>
        <UserProvider>
          <PolarisProvider>
            <InvoiceProvider>
              <CartProvider>
                <CustomToastMultiple>{children}</CustomToastMultiple>
                <PopCart />
              </CartProvider>
            </InvoiceProvider>
          </PolarisProvider>
        </UserProvider>
      </SettingProvider>
    </ApolloWrapper>
  );
}
