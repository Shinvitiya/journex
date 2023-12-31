import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';


import { Poppins } from 'next/font/google'
import '../styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';

const poppins = Poppins({ subsets: ['latin'], weight:["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

export const metadata = {
  metadataBase: new URL('https://journex.vercel.app/'),
  title: 'Journex',
  description: 'Want to go trekking, our team will get you there. Yeah, anywhere you want.',
  openGraph: {
    title: "Journex",
    description: "Want to go trekking, our team will get you there. Yeah, anywhere you want.",
    images: "/open-graph.png",
    locale: 'en_US',
    type: 'website',
  }
};

export default function RootLayout({ children }) {

  return (
    
    <>
    <html lang="en">
      <head>
      <Script 
        strategy='afterInteractive'
        src="https://www.googletagmanager.com/gtag/js?id=G-8DPY6SRFQ5"
      />

      <Script
        strategy='afterInteractive'
        id='google-analytics'
      >
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-8DPY6SRFQ5');
        `}
      </Script>
      <meta name="google-site-verification" content="yCsHCcBoaV6v5y1H0vTzk5Vv08kAk_gXdq5Sy_bL3XU" />
      </head>
      <body className={poppins.className}>
          <Navbar/>
          {children}
          <Analytics />
          <Footer/>
      </body>
    </html>
    </>
  )
}
