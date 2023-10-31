import Link from "next/link";

export default function Custom404() {
    return(
        <section className="h-screen w-full bg-[#15171B] text-white font-semibold items-center justify-center flex flex-col">
            <h2 className="text-6xl">There was a Problem</h2>
            <p className="text-2xl">We could not find the page you were looking</p>
            <Link href="/" className="text-2xl underline">Go back Home</Link>
        </section>
    )
  }