"use client";
import React, {useRef, useEffect} from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { smoothScroll } from '@/utils/utilities';

const Hero = () => {
    useEffect( () =>{
        smoothScroll()
    });

    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"] 
    });
    const backgroundY = useTransform(scrollYProgress, [0,1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0,1], ["0%", "200%"]);

  return (
    <main ref={ref} className='relative w-full h-screen overflow-hidden flex flex-col items-center justify-center'>
        
        <motion.div 
            className='parallax_image_top'
        />
        <motion.div 
            className='parallax_image_bottom'
            style={{y:backgroundY}}
        />
        <motion.h1 
            className='text-5xl md:text-6xl lg:text-8xl 2xl:text-[150px] font-grotesque sm:te text-white absolute text-center font-bold px-3 text_gradient'
            style={{y:textY}}
        >
            Trek Anywhere
        </motion.h1>
    </main>
  )
}

export default Hero