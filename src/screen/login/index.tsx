/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
'use client'
import { useCustomToast } from "@/components/CustomToast";
import { useLoginMutation } from "@/gql/graphql";
import { useTranslations } from "next-intl";
import { useCallback, useState } from "react";
import { setCookie } from 'cookies-next';

export function LoginScreen(){
  const t = useTranslations("LoginPage");
  const { toasts, setToasts } = useCustomToast();
  const [, setMsg] = useState<any | null>(null);
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isReset, setIsReset] = useState(false);
  const [login] = useLoginMutation();

  const handleLogin = useCallback(() => {
    login({
      variables: {
        username: usernameInput,
        password: passwordInput,
      },
    })
      .then((res) => {
        setMsg({
          success: !!res.data?.login,
          message: res.data?.login ? 'Login success' : 'Fail login',
        });
        setToasts([
          ...toasts,
          {
            content: res.data?.login ? 'Login success' : 'Fail login',
            status: res.data?.login ? 'success' : 'error',
          },
        ]);
        if (res.data?.login) {
          setCookie('tk_token', res.data.login, {
            expires: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 365),
          });
          setTimeout(() => process.browser && window.location.reload(), 500);
        }
      })
      .catch((err) => {
        if (err.message === 'Your password was reset change new password!') {
          setIsReset(true);
        }
        setToasts([
          ...toasts,
          {
            content: err.message,
            status: 'error',
          },
        ]);
      });
  }, [login, passwordInput, setToasts, toasts, usernameInput]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="/assets/logo.png"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            {t('sign_in_your_acc')}
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                {t('username')}
              </label>
              <div className="mt-2">
                <input
                  value={usernameInput}
                  onChange={e => setUsernameInput(e.currentTarget.value)}
                  id="email"
                  name="email"
                  type="text"
                  required
                  autoComplete="off"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  {t('password')}
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={passwordInput}
                  onChange={e => setPasswordInput(e.currentTarget.value)}
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {t('signin')}
              </button>
            </div>
          </form>
        </div>
    </div>
  )
}