"use client";
import React, { PropsWithChildren, useContext, useEffect, useState } from "react";
import moment from 'moment';

interface Props {
  invoice: any;
  setInvoice: (x: any) => void;
}

const InvoiceContext = React.createContext<Props>({
  invoice: 0,
  setInvoice: () => { }
});

export function useInvoice() {
  return useContext(InvoiceContext);
}

export function InvoiceProvider(props: PropsWithChildren<unknown>) {
  const [invoice, setInvoice] = useState<any>();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const local = localStorage.getItem('invoice');
      if (local) {
        const inv = JSON.parse(local);
        if (moment(new Date(inv.date)).date() === moment(new Date()).date()) {
          setInvoice(inv);
        } else {
          setInvoice({ date: moment(new Date()).format('YYYY-MM-DD'), count: 1 });
        }
      } else {
        setInvoice({ date: moment(new Date()).format('YYYY-MM-DD'), count: 1 });
      }
    }
  }, []);

  return (
    <InvoiceContext.Provider value={{ invoice, setInvoice }}>
      {props.children}
    </InvoiceContext.Provider>
  );
}