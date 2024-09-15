import Image from "next/image"
import Link from "next/link"

export default function Page() {
    return (
        <div className="bg-gradient-to-bl from-black to-zinc-800 min-h-screen text-white">
            <Image className=" absolute bottom-0 left-1/2 transform -translate-x-1/2"
                src="/pngegg.png"
                width={500}
                height={500}
                alt="Fancy bear"
            />
            <header>
                <nav>
                    <ul className="p-5 flex flex-row">
                        <li className=""><Link href={"/"} className="text-blue-400 hover:text-sky-700 pr-10">Home</Link></li>
                        <li className=""><Link href={"/"} className="text-blue-400 hover:text-sky-700">About</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <div id="container" className="">
                    <h1 className="font-black text-lg">Hello world</h1>
                    <h2>Welcome</h2>
                    <p>Us bulding your dream</p>
                </div>
            </main>
            <footer>
                <span>®️ Frame Inc.</span>
            </footer>
        </div>
    )
}