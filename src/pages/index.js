import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import PrimaryHero from "../ui/elements/PrimaryHero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <PrimaryHero />
        {/* <h1 className={styles.title}>
          Big things are coming <a href="https://nextjs.org">ilanlyfe!</a>
        </h1> */}

        {/* <div className={styles.grid}>
          <Image src="/sample1.webp" alt="Sample image sample 1" width={770} height={580} />
        </div> */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>{/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}</span>
        </a>
      </footer>
    </div>
  );
}
