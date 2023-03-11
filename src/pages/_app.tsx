import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import PrimaryNavBar from '../components/organizms/PrimaryNav'

export default function App({ Component, pageProps }: AppProps) {

  const links = [
    {
      text: "home",
      url: "/",
    },
    {
      text: "journeys",
      url: "/style",
    },
    {
      text: "more",
      url: "/746",
    },
  ];
  return (
<>
<PrimaryNavBar navLinks={links}  />
<Component {...pageProps} />
</>
  )
}
