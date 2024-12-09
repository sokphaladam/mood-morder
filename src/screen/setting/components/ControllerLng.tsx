import { Modal, RadioButton } from "@shopify/polaris";
import { useLocale, useTranslations } from "next-intl";
import { useCallback, useState } from "react";

interface Props {
  open: boolean;
  setOpen: (p: boolean) => void;
}

export function ControllerLng(props: Props) {
  const t = useTranslations('SettingPage');
  const local = useLocale();
  const toggleOpen = useCallback(() => props.setOpen(!props.open), [props]);

  return (
    <Modal title={t('language')} open={props.open} onClose={toggleOpen}>
      <Modal.Section>
        <div className="flex flex-row gap-3">
          <RadioButton
            label={t('english')}
            name="lng"
            id='en'
            checked={local === 'en'}
            onChange={(_, v) => {
              if (process.browser && !!_) {
                setTimeout(() => {
                  window.location.replace(`/${v}`)
                }, 300);
              }
            }}
          />
          <RadioButton
            label={t('khmer')}
            name="lng"
            id='kh'
            checked={local === 'kh'}
            onChange={(_, v) => {
              if (process.browser && !!_) {
                setTimeout(() => {
                  window.location.replace(`/${v}`)
                }, 300);
              }
            }}
          />
        </div>
        <br />
        <br />
      </Modal.Section>
    </Modal>
  )
}