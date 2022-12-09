import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import toast from 'react-hot-toast'
import Loader from '../components/Loader'

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <button onClick={() => toast("Hi there!", { icon: '👋'})}>
        Hello!
      </button>
    </main>
  )
}
