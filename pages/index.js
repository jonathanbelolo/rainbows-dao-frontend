import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rainbows DAO</title>
        <meta name="description" content="Rainbows DAO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}> 
          Rainbows DAO
        </h1>        
      </main>

    </div>
  )
}
