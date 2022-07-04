import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";
import {useEffect, useState} from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [state,setState] = useState<string>('hello')
  useEffect(()=>{
    setTimeout(()=>{
      setState('world')
    },5000)
  },[])
  return <>
    <Head>
      <title>
        {state}
      </title>
      <link key={1} rel={'icon'} href={'/account_profile_user_ecommerce_icon_224942.ico'}></link>
    </Head>
    <Component {...pageProps} />
  </>

}

export default MyApp
