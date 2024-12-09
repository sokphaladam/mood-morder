'use client'

import { useUser } from "@/service/UserProvider"
import { Avatar, Box, Card, Divider, Icon, Listbox, ResourceItem, ResourceList, Text } from "@shopify/polaris";
import { ExitIcon, LanguageIcon } from "@shopify/polaris-icons";
import { deleteCookie } from "cookies-next";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { ControllerLng } from "./components/ControllerLng";
import { useState } from "react";

export function SettingScreen() {
  const user = useUser();
  const { push } = useRouter();
  const t = useTranslations('SettingPage');

  const [openLng, setOpenLng] = useState(false);

  const items = [
    {
      id: 1,
      name: t('language'),
      icon: LanguageIcon,
      onClick: () => setOpenLng(true)
    },
    {
      id: 2,
      name: t('logout'),
      icon: ExitIcon,
      onClick: async () => {
        await deleteCookie('tk_token');
        if (process.browser) {
          setTimeout(() => {
            window.location.replace('/')
          }, 300);
        }
      }
    }
  ]

  return (
    <div className="max-w-[1200px] w-full p-3 flex flex-1 flex-col justify-center mx-auto">
      <ControllerLng open={openLng} setOpen={setOpenLng} />
      <Card padding={'0'} roundedAbove="md">
        <Box borderBlockEndWidth="0165" borderColor="border-brand">
          <div className="flex flex-row gap-2 p-2">
            <div>
              <Avatar customer initials={user?.display?.split(' ').map(x => x.charAt(0)).join('')} size="xl" source={user?.profile || ''} />
            </div>
            <div>
              <div><b>{user?.display}</b></div>
              <div><small>{user?.position}</small></div>
            </div>
          </div>
        </Box>
        <Box borderBlockEndWidth="0165" padding={'0'} borderColor="border-brand">
          <ResourceList
            items={items}
            renderItem={renderItem}
          />
        </Box>
      </Card>
    </div>
  )

  function renderItem(item: any) {
    const { id, name, icon, onClick } = item;

    return (
      <ResourceItem
        onClick={onClick}
        id={id}
        accessibilityLabel={`View details for ${name}`}
        key={id}
      >
        <div className="flex flex-row gap-2 text-gray-700">
          <div>
            <Icon source={icon} />
          </div>
          <div>
            <Text variant="bodyMd" fontWeight="bold" as="h3">
              {name}
            </Text>
          </div>
        </div>
      </ResourceItem>
    );
  }
}