import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HeadSection from '../components/headSection'
import WhatWeDo from '../components/whatWeDo'
import Techno from '../components/techno'
import Team from '../components/team'
import Banner from '../components/banner'
import SEO from '../components/SEO'


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <SEO />
      <HeadSection />
      <WhatWeDo />
      <Techno />
      <Team />
      <Banner />




    </div>
  )
}

export default Home
