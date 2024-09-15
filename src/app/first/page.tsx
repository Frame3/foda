import Link from "next/link";
import Image from 'next/image'


export default function Primeiro() {

    const Pi = Math.PI;
    const title = <div><h1>Title</h1></div>

    function anoAtual() {
        return new Date().getMilliseconds();
    }

    return (
        <div>
            <h1>Primeiro</h1>
            <Link href={"/"} className="inline-block px-7 py-2 border-4 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                Home
            </Link>
            <div className="flex flex-col">
                <span>{1 + 1}</span>
                <span>{Math.random()}</span>
                <span>{anoAtual()}</span>
                <span>{`Hello Frame, now is: ${Date()}`}</span>
                <span>{Pi}</span>
                {title}
                <Image
                    src="/image.jpg"
                    width={500}
                    height={500}
                    alt="Fancy bear"
                />
            </div>
        </div>
    )
}