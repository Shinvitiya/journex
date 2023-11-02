"use client";
import React, {useRef, useEffect} from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Lenis from '@studio-freight/lenis';


const About = () => {
  useEffect( () => {
    const lenis = new Lenis()
    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])
  const ref = useRef(null);

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  }, []);

  const topOpacity = useTransform(scrollYProgress, [0,0.5], [1,0]);

  const bottomOpacity = useTransform(scrollYProgress, [0,0.5, 0.6, 0.8], [0,0, 1,0]);

  return (
    <section 
        className='h-[400vh] bg-[#15171B] text-white'
        ref={ref}
    >
        <div className='flex flex-col items-center justify-center sticky top-0 h-screen'>
             <motion.div
                style={{opacity:topOpacity}}
                className='flex flex-col items-center justify-center p-4 w-full'
            >
                <h2 className='font-semibold md:text-7xl text-5xl text_gradient'>
                Wanna trek somewhere?<br/>
                We'll take you there.<br/>
                Yep, anywhere you want!
                </h2>
            </motion.div>
        </div>

        {/* <div className='flex flex-col items-center justify-center sticky top-0 h-[100vh]'>HiZ</div> */}

        <div className='flex items-center justify-center sticky top-0 h-screen'>
             <motion.div
                style={{opacity:bottomOpacity}}
                className='flex flex-col items-center justify-center p-4 w-full'
            >
                <h2 className='font-semibold md:text-7xl text-5xl text_gradient'>
                Discover boundless horizons <br className='md:flex hidden'/> with Journex. <br/>
                Your trekking adventure <br/>
                Awaits!
                </h2>
            </motion.div>
        </div>

        
    </section>
  )
}

export default About