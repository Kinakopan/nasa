import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function Home() {

  const apiKey = "g3pY1Tdptf741ASB2RGAcEStDHNcWE3lqJUZlQSe";
  const url = `https://api.nasa.gov/techtransfer/patent/?q=10`

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

      </main>
    </>
  )
}
