import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
    </>
  )
}
