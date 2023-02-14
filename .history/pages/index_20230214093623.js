import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [data, setData] = useState();

  const apiKey = "g3pY1Tdptf741ASB2RGAcEStDHNcWE3lqJUZlQSe";
  const url = `https://api.nasa.gov/techtransfer/patent/?q=10&engine&api_key=${apiKey}` //q = quantity

  const getTechTransferData = async() => {
    const res = await axios.get(url);
    const info = await res.data;
    console.log(info);
    setData(info);
  }

  useEffect(() => {
    getTechTransferData();
  }, []) // [] means it should only run once

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {
          data && data.results.map((tech, index) => {
            return (
              <div key={index}>
                {
                  tech && tech.map((t, ind) => {
                    if(ind === 10) {
                      return (
                        <Image src={t} alt={tech} key={ind} width={100} height={100}/>
                      )
                    }
                  })
                }
                <h1>{tech.title}</h1>
                <p>{tech.description}</p>
              </div>
            )
          })
        }
      </main>
    </>
  )
}
