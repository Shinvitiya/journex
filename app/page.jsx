import About from '@/components/About'
import Gallery from '@/components/Gallery'
import Hero from '@/components/Hero'
import CTO from '@/components/CTO'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="w-full">
      <Hero/>
      <About/>
      <Gallery/>
      <CTO />
    </div>
  )
}
