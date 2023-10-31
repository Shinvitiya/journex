"use client";
import React,{useState} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {TiThMenu} from "react-icons/ti"

import { navbarAnimations, navbarItems } from '@/utils/utilities';

const Navbar = () => {
    const [click, setClick] = useState(false)
  return (
    <>
    {/* PC Navigation */}
    <nav className='absolute w-full z-20 hidden md:flex items-center justify-end p-3 gap-5 top-0'>
        {navbarItems.map((item, index) =>(
            
                <motion.div
                    variants={navbarAnimations}
                    initial= "initial"
                    whileInView="animate"
                    custom={index}
                    // viewport={{once : true}} 
                    key={index} 
                    className='bg-[#333333] rounded-full px-2 py-1 font-semibold text-white'
                >
                    <Link href={item.link}>{item.name}</Link>
                </motion.div>
            
        ))}
        <Link href="/">
        <Image
            src="/logoipsum02.svg"
            width={65}
            height={100}
            alt="logo"
            className='bg-white rounded-full p-2'
        />
        </Link>

    </nav>

    {/* Mobile Navigation */}
    <motion.nav 
        className='absolute z-20 w-full flex flex-col md:hidden top-0'
    >
        <div className='w-full flex justify-between p-3'>

            <motion.div 
                className={`bg-white ${click? "rounded-lg": "rounded-full"} rounded-full p-3 flex flex-col items-start`}
                whileTap={{scale:0.8, opacity:0.6}}
                onClick={() =>setClick(!click)}
                >
                <TiThMenu 
                    className=' cursor-pointer'
                />

            </motion.div>
            <Image 
                src="/logoipsum02.svg"
                width={40}
                height={40}
                alt="logo"
                className='bg-white rounded-full p-1 '
            />
        </div>
        
    </motion.nav>

    <AnimatePresence>
    {click && (
        <div className='flex flex-col md:hidden absolute top-20 left-0 gap-4 pl-4'>
        {navbarItems.map((item, index) =>(
            <motion.div 
            key={index}
            variants={navbarAnimations}
            initial="initial"
            animate="animate"
            custom={index}
            exit={{x:-100, opacity:[0.8,0.5, 0], scale: [0.8,0.5, 0]}}
            className='z-30 flex justify-center px-2 py-1 rounded-lg bg-[#54BFFA]'
            >
                <Link href={item.link} className=' text-white font-semibold'>
                    {item.name}
                </Link>
            </motion.div>
        ))} 
        </div> 
    )}
    </AnimatePresence>
    </>
  )
}

export default Navbar