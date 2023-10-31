"use client";
import React, {useState, useEffect, useRef} from 'react';
import { motion } from 'framer-motion';

import useMousePosition from '@/utils/mousePosition';


const CTO = () => {

    //Identifying whether the device has a touch screen or not to render the masked text
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    useEffect(() => {
    const supportsTouch = 'ontouchstart' in window;
    setIsTouchDevice(supportsTouch);
    }, []);

    //Consts for masked text
    const [isHovered, setIsHovered] = useState(false);
    const {x,y} = useMousePosition();
    const size = isHovered? 400 : 40;
    const maskPosition = `${x - size / 2}px ${y - size / 2}px`;
    const maskSize = `${size}px`;

    const phrases = [
        "Journex excels in tailor-made trekking." ,"Share your dream destination,",
        "and we'll bring it to life with expert guidance."
    ]
  return (
    <>
    {!isTouchDevice ?
        (
        <section className='bg-[#15171B] relative w-full'>
            <div className='h-screen w-full items-center justify-center flex text-white p-6'>
                <motion.h3 
                    className='font-semibold md:text-6xl text-4xl 2xl:text-8xl text_gradient h-fit'
                    initial={{opacity:0, y:100}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration:1, type: "tween"}}
                    viewport={{once:true}}
                >
                Journex excels in tailor-made trekking. Share your dream destination, and we'll bring it to life with expert guidance.
                </motion.h3>
            </div>
            <motion.div 
                className='h-screen  items-center justify-center flex text-white  absolute top-0 p-6 mask w-fit'
                animate={{
                    WebkitMaskPosition: maskPosition,
                    WebkitMaskSize: maskSize
                }}
                transition={{type:"tween", ease: "backOut"}}
            >
                <h3 
                    className='font-semibold md:text-6xl text-4xl 2xl:text-8xl'
                    onMouseEnter={() =>{setIsHovered(true)}}
                    onMouseLeave={() =>{setIsHovered(false)}}
                >
                Discover uncharted terrains with Journex. Our customized treks explore remote landscapes, offering unique adventures.
                </h3>
            </motion.div>
        </section>
        ) :
        (
        <section className='bg-[#15171B] relative flex'>
            <div className='h-screen  items-left justify-center flex flex-col text-white p-6'>
                {phrases.map((phrase,index) =>(
                    <motion.div key={index}>
                        <motion.h3 
                            className='font-semibold md:text-6xl text-4xl w-fit'
                            initial={{opacity:0, y:100}}
                            whileInView={{opacity:1, y:0}}
                            transition={{duration:1, type: "tween"}}
                            viewport={{once:true}}
                        >
                        {phrase}
                        </motion.h3>
                    </motion.div>
                ))}
            </div>
        </section>
        )
    }
    
    </>
  )
}

export default CTO