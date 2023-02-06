import Head from "next/head";

import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { MainContainer } from "@/MianContainer";

import { Weather } from "@/Components/Weather/Weather";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Weather App</title>
        <meta name="viewport" content="Place weather" />
      </Head>
      <main className={styles.main}>
        <Weather />
      </main>
    </>
  );
}
