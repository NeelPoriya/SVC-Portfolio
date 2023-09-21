"use client"
import styles from './page.module.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import VideoSection from './components/VideoSection'
import NumbersSection from './components/NumbersSection'
import LevelSection from './components/LevelSection'
import HomeSliderSection from './components/HomeSliderSection'
import ExclusiveSection from './components/ExclusiveSection'

export default function Home({ open, setOpen }) {

  return (
    <>
      <HeroSection />
      <VideoSection />
      <NumbersSection />
      <LevelSection />
      <HomeSliderSection />
      <ExclusiveSection />
    </>
  )
}
