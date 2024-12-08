import { useCustomToast } from "@/components/CustomToast";
import { StatusOrder, useChangeOrderStatusMutation } from "@/gql/graphql";
import { Modal, TextField } from "@shopify/polaris"
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react"

interface Props {
  id: number;
}

export function CancelOrder(props: Props) {
  const t = useTranslations('CheckoutPage');
  const { push } = useRouter();
  const { toasts, setToasts } = useCustomToast();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [change] = useChangeOrderStatusMutation({
    refetchQueries: ['order', 'orderList']
  });

  const toggleOpen = useCallback(() => setOpen(!open), [open])

  const activator = <button onClick={toggleOpen}
    className="text-white flex w-full justify-center rounded-md px-3 py-1.5 bg-rose-600 shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
  >{t('cancel')}</button>

  const handleCancel = useCallback(() => {
    if (input) {
      change({
        variables: {
          data: {
            orderId: Number(props.id),
            status: StatusOrder.Cancelled,
            reason: input
          }
        }
      }).then((res) => {
        if (res.data?.changeOrderStatus) {
          setToasts([...toasts, { content: 'Update status was success.', status: 'success' }]);
          setInput('');
          toggleOpen();
          push('/order');
        } else {
          setToasts([...toasts, { content: 'Oop! somthing was wrong!', status: 'error' }]);
        }
      })
        .catch(() => {
          setToasts([...toasts, { content: 'Oop! somthing was wrong!', status: 'error' }]);
        });
    }
    else {
      setToasts([...toasts, { content: 'Please input the reason!', status: 'error' }]);
    }
  }, [toasts, setToasts, change, input])

  return (
    <Modal activator={activator} open={open} onClose={toggleOpen} title={t('cancel')} primaryAction={{ content: 'Yes', onAction: handleCancel }}>
      <Modal.Section>
        <TextField
          multiline={5}
          type="text"
          autoComplete="off"
          label={t('reason')}
          selectTextOnFocus
          focused
          value={input}
          onChange={setInput}
        />
      </Modal.Section>
    </Modal>
  )
}