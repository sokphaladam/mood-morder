'use client';
import { CustomToastMultiple } from "@/components/CustomToast";
import { ApolloWrapper } from "./ApolloProvider";
import { PolarisProvider } from "./PolarisProvider";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function AppProvider({ children }: React.PropsWithChildren<any>) {
  return (
      <ApolloWrapper>
        <PolarisProvider>
          <CustomToastMultiple>{children}</CustomToastMultiple>
        </PolarisProvider>
      </ApolloWrapper>
  );
}
