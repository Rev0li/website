import { WalletButton } from '../solana/solana-provider';
import * as React from 'react';
import { ReactNode, Suspense, useEffect, useRef } from 'react';

import { Link, useLocation } from 'react-router-dom';

// my import
import Pricebar from './price/Pricebar';
import Grumpnomics from './grumpnomics/Grumpnomics';
import Grumpgames from './grumpgame/Grumpgames';
import Teams from './teams/Teams';
import Article from './article/Article';

import { AccountChecker } from '../account/account-ui';
import {
  ClusterChecker,
  ClusterUiSelect,
  ExplorerLink,
} from '../cluster/cluster-ui';
import toast, { Toaster } from 'react-hot-toast';

export function UiLayout({
  children,
  links,
}: {
  children: ReactNode;
  links: { label: string; path: string }[];
}) {
  const { pathname } = useLocation();

//   Deco frise %
// Navbar (logo - Grunpy ? - Grumpynomic & presale -  - Connect)
// who I am? (description/story grumpy) (info important, sociaux et address contract)
// Grumpnomics + presale OK
// Grumpy Game + Roadmap OK
// Team OK
// Footer OK

  return (
    <div className=" flex flex-col bg-prussian ">
      < Pricebar />
      <div className=" flex  justify-items-center  overflow-hidden max-h-60">
            <img className=" w-full h-full   " alt="Logo" src="/assets/logo.png" />
        </div>
      {/* <div className=" text-neutral-content flex-col  md:flex-row space-y-2 md:space-y-0 z-10">
        <div className=" flex-1  justify-items-center ">
            <img className="mx-auto widh-full bg-cover;  " alt="Logo" src="/assets/logo.png" />
        </div>
        <div className="flex-none space-x-2">
          <WalletButton />
          <ClusterUiSelect />
        </div>
      </div> */}

      <ClusterChecker>
      <AccountChecker />
      </ClusterChecker>

      <Article/>
      < Grumpnomics/>
      < Grumpgames />
      <Teams />
      
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>dontcontactme@grumpy.coin</p>
          <p>
          Created with meprise by the Grumpy team
          </p>
          <p>
          The content on this website is for informational purposes only and is not intended as financial advice. Cryptocurrency investments are subject to high market risks and volatility. we does not endorse or recommend purchasing any cryptocurrencies mentioned on this website. Readers are advised to conduct their own research or consult with a professional financial advisor before making any investment decisions. Grumpycoin will not be liable for any financial losses incurred based on information presented here.
          </p>
        </aside>
      </footer>
    </div>
  );
}

export function AppModal({
  children,
  title,
  hide,
  show,
  submit,
  submitDisabled,
  submitLabel,
}: {
  children: ReactNode;
  title: string;
  hide: () => void;
  show: boolean;
  submit?: () => void;
  submitDisabled?: boolean;
  submitLabel?: string;
}) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (!dialogRef.current) return;
    if (show) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [show, dialogRef]);

  return (
    <dialog className="modal" ref={dialogRef}>
      <div className="modal-box space-y-5">
        <h3 className="font-bold text-lg">{title}</h3>
        {children}
        <div className="modal-action">
          <div className="join space-x-2">
            {submit ? (
              <button
                className="btn btn-xs lg:btn-md btn-primary"
                onClick={submit}
                disabled={submitDisabled}
              >
                {submitLabel || 'Save'}
              </button>
            ) : null}
            <button onClick={hide} className="btn">
              Close
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}

export function AppHero({
  children,
  title,
  subtitle,
}: {
  children?: ReactNode;
  title: ReactNode;
  subtitle: ReactNode;
}) {
  return (
    <div className="hero py-[64px]">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          {typeof title === 'string' ? (
            <h1 className="text-5xl font-bold">{title}</h1>
          ) : (
            title
          )}
          {typeof subtitle === 'string' ? (
            <p className="py-6">{subtitle}</p>
          ) : (
            subtitle
          )}
          {children}
        </div>
      </div>
    </div>
  );
}

export function ellipsify(str = '', len = 4) {
  if (str.length > 30) {
    return (
      str.substring(0, len) + '..' + str.substring(str.length - len, str.length)
    );
  }
  return str;
}

export function useTransactionToast() {
  return (signature: string) => {
    toast.success(
      <div className={'text-center'}>
        <div className="text-lg">Transaction sent</div>
        <ExplorerLink
          path={`tx/${signature}`}
          label={'View Transaction'}
          className="btn btn-xs btn-primary"
        />
      </div>
    );
  };
}
