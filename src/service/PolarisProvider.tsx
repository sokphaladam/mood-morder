/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useCallback, useState } from 'react';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider, Frame } from '@shopify/polaris';
import '@shopify/polaris/build/esm/styles.css';
import '@/app/[locale]/globals.css';
import { config_app } from '@/lib/config_app';
import Link from 'next/link';
import { TokenVerification } from './TokenProvider';

const logo = {
  width: 35,
  topBarSource: config_app.public.assets.logo,
  contextualSaveBarSource: config_app.public.assets.logo,
  url: '/',
  accessibilityLabel: 'LOGO',
};

export function PolarisProvider({ children }: React.PropsWithChildren<any>) {
  const [verify, setVerify] = useState(false);
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);

  const toggleMobileNavigationActive = useCallback(
    () => setMobileNavigationActive((mobileNavigationActive) => !mobileNavigationActive),
    [],
  );

  // const pwdwifi = setting.find((f) => f.option === 'GUEST_WIFI')?.value;

  return (
    <AppProvider
      i18n={enTranslations}
      features={{
        polarisSummerEditions2023: true,
        polarisSummerEditions2023ShadowBevelOptOut: true,
      }}
      linkComponent={({ children, url, ...rest }: { children?: React.ReactNode; url: string }) => {
        return (
          <Link href={url} {...rest}>
            {children}
          </Link>
        );
      }}
    >
      <TokenVerification onCompleted={setVerify} />
      <Frame
        logo={verify ? logo : undefined}
        topBar={null}
        showMobileNavigation={mobileNavigationActive && verify}
        onNavigationDismiss={toggleMobileNavigationActive}
        navigation={null}
      >
        <div className="flex flex-col h-screen">
          {config_app.public.assets.dev === 'development' && (
            <div className="bg-sky-800 w-full p-1 text-white text-center text-xs sticky bottom-0">Developer Mode</div>
          )}
          <div>
            {/* <ModalComponent ref={(t) => Modal.setModal(t)} /> */}
            {children}
          </div>
        </div>
      </Frame>
    </AppProvider>
  );
}
