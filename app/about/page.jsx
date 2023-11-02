"use client"
import { motion, useScroll, useTransform} from 'framer-motion'
import React, {useEffect, useRef} from 'react'
import Lenis from '@studio-freight/lenis';

const AnimatedSection = ({ children, className }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start end"]
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const blurProgress = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  return (
    <motion.div
      className= {className}
      ref={ref}
      style={{ scale: scaleProgress }}
    >
      {children}
    </motion.div>
  );
}

const page = () => {
  useEffect( () => {
    const lenis = new Lenis()
    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  })
  return (
    <section className='md:p-20 p-10 flex flex-col gap-4 bg-black items-center justify-center'>

      <AnimatedSection className={"md:h-[90vh] h-[70vh] flex justify-evenly flex-col sticky top-0 bg-[#15171B] rounded-xl p-5"}>
          <h1 className='font-bold  text-3xl md:text-5xl lg:text-8xl text_gradient'>Your Adventure Awaits</h1>
          <p className='font-semibold  text-lg md:text-xl lg:text-2xl text-white'>
          At Journex, we believe that every journey is an opportunity to discover, explore, and create unforgettable memories.
          We are not just a company that takes you trekking; we are your partners in adventure, 
          dedicated to making your dream destinations a reality.
          </p>
      </AnimatedSection>

      <AnimatedSection className={'md:h-[90vh] h-[70vh] flex justify-evenly flex-col p-5 sticky top-0 rounded-xl bg-[#F2F2F2]'}>
        <h2 className='font-bold text-3xl md:text-5xl lg:text-8xl text_gradient'>Our Story</h2>
        <p className='font-semibold text-lg md:text-xl lg:text-2xl'>
        Founded by a group of passionate travelers, Journex was born from the idea that the world is meant to be explored. Our journey started with a shared love for adventure and a desire to share that passion with the world.
        </p>
      </AnimatedSection>

      <AnimatedSection className={"md:h-[90vh] h-[70vh] flex justify-evenly flex-col p-5 sticky top-0 bg-[#15171B] rounded-xl"}>
        <h2 className='font-bold text-3xl md:text-5xl lg:text-8xl text_gradient'>Our Promise</h2>
        <p className='font-semibold text-lg md:text-xl lg:text-2xl text-white'>
        When you embark on a journey with Journex, you're not just a traveler; you're part of our global family of explorers. We are here to support you from the moment you decide on your destination until you return home with a heart full of memories.
        </p>
      </AnimatedSection>
    </section>
  )
}

export default page