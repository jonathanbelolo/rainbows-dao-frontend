import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ConnectButton } from 'web3uikit'

export default function Home() {
  return (
    <div>
      
      <Head>
        <title>Rainbows DAO</title>
        <meta name="description" content="Rainbows DAO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1> 
          Rainbows DAO
        </h1>      
        <nav>
          <ConnectButton moralisAuth={false}/>
        </nav>  
      </main>

    </div>
  )
}
