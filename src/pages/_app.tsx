import "@/styles/globals.css";
import "keen-slider/keen-slider.min.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import Header from "@/components/groups/header";

export default function App({ Component, ...pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

/* 
import { SWRConfig } from 'swr'
import fetchJson from '../lib/fetchJson'

<SWRConfig value={{
    fetcher: fetchJson,
    onError: (err) => {
      console.error(err)
    },
  }}
>
  </SWRConfig>*/
