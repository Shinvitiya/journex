"use client";
import React, {useState} from 'react';
import { motion } from 'framer-motion';

import useTouchPosition from '@/utils/touchPosition';

const MobileCTO = () => {
    const [isTouched, setIsTouch] = useState(false);
    const {touchx, touchy} = useTouchPosition();
    const touchSize = isTouched? 100: 20
    const maskPosition = `${touchx - touchSize / 4}px ${touchy - touchSize / 4}px`
    const maskSize = `${touchSize}px`
  return (
    <section className='bg-[#15171B] relative lg:hidden flex flex-col'>
        <div className='h-screen  items-center justify-center flex text-white p-6'>
            <h3 className='font-semibold md:text-6xl text-4xl'>
            Journex excels in tailor-made trekking. Share your dream destination, and we'll bring it to life with expert guidance.
            </h3>
        </div>

        <motion.div 
            className='h-screen  items-center justify-center flex text-white  absolute top-0 p-6 mask'
            animate={{
                WebkitMaskPosition: maskPosition,
                WebkitMaskSize: maskSize
            }}
            transition={{type:"tween", ease: "backOut"}}
        >
            <h3 
                className='font-semibold md:text-6xl text-4xl select-none'
                onTouchStart={() =>{setIsTouch(true)}}
                onTouchEnd={() =>{setIsTouch(false)}}
            >
            Discover uncharted terrains with Journex. Our customized treks explore remote landscapes, offering unique adventures.
            </h3>
        </motion.div>
    </section>
  )
}

export default MobileCTO