"use client"
import React, {useEffect, useRef} from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

import { galleries, smoothScroll } from '@/utils/utilities';

const Gallery = () => {
  useEffect( ()=>{
    smoothScroll()
  }, [])
  const ref = useRef(null)
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const moveY1 = useTransform(scrollYProgress, [0,1], ["0%", "-200%"]);
  const moveY2 = useTransform(scrollYProgress, [0,1], ["0%", "100%"]);
  const moveY3 = useTransform(scrollYProgress, [0,1], ["0%", "-30%"]);

  return (
    <section className="h-[80vh] md:h-[120vh] flex gap-4 overflow-hidden w-full  items-center justify-center px-2 bg-gray-200" ref={ref} >

      {galleries.map((gallery,index) =>{
        let move;
        if (index === 0) {
          move = moveY1;
        } else if (index === 1) {
          move = moveY2;
        } else {
          move = moveY3;
        }
        return(
        <motion.div className={`flex-col gap-4 w-full pointer-events-none ${index===0 ? "md:flex hidden": "flex" }`} key={index} >
        
        {gallery.map((image, i)=>(
          <motion.div className='' style={{y : move}} key={i}>
            <Image 
              src={image}
              alt="gallery image"
              className='aspect-video object-cover rounded-xl w-full h-full min-w-[250px]'
            />
          </motion.div>
        ))}
      </motion.div>
      )})}
    </section>
  )
}


export default Gallery