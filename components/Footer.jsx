"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
const footerLinks = [
    {
        name: "All Rights Reserved",
        link: "/"
    },
    {
        name: "Privacy Policy",
        link: "/"
    },
    {
        name: "Terms & Conditions",
        link: "/"
    },
    {
        name: "Licenses",
        link: "/"
    },
]

const Footer = () => {
  return (
    <footer className=' background_gradient flex flex-col gap-4 p-4 w-full'>

        <div className='w-full bg-[#15171B] rounded-xl footer_pattern'>
            <div className='w-full p-10 flex flex-col items-center justify-center gap-4 mt-10'>
                <h4 className='md:text-5xl text-3xl 2xl:text-6xl text-center text-white font-semibold'>
                    What are you waiting for? <br/>
                    Let's get started!!
                </h4>
                <Link href="https://www.w3.org/Provider/Style/dummy.html" target='_blank'>
                <motion.button 
                    className='text-white font-semibold text-3xl md:text-4xl background_gradient px-4 py-2 rounded-xl'
                    initial={{}}
                    whileHover={{scale: 1.2, borderRadius: "10px", rotate: "-3deg"}}
                    transition={{duration: 0.4, type:"spring"}}
                >
                    Book a Call
                </motion.button>
                </Link>
            </div>

            <div className='flex md:flex-row flex-col  justify-between text-white mt-48 p-4 gap-5'>
                <Link className='flex gap-4 items-center justify-center w-fit' href="/">
                    <Image 
                        src='/logoipsum02.svg'
                        width={100}
                        height={70}
                        alt="logo"
                    />
                    <span className='font-grotesque text-2xl'>Journex</span>
                </Link>
                
                <div className='w-fit flex gap-5 flex-col md:flex-row md:pt-0 pt-4'>
                    {footerLinks.map((link,index)=>(
                        <Link href={link.link} key={index}>
                        <span>{link.name}</span>
                        </Link>
                    ))}
                </div>

            </div>

            
        </div>
    </footer>
  )
}

export default Footer