import Head from "next/head";
import { Open_Sans } from "next/font/google";
import Curator from "@/components/groups/curator";

const openSans = Open_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to the ilanlyfe</title>
        <meta
          name="description"
          content="Created with love from the Caribbean"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* if guest is authenticated... else */}
        {/*  pass auth/ctx to curation component */}
        <Curator />
      </main>
    </>
  );
}
