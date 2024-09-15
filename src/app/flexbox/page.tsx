
import Box from "@/components/Box"
import Link from "next/link"

export default function flexbox() {
    return (
        <div>
            <Link href={"/"} className="inline-block px-7 py-2 border-4 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                Home
            </Link>
            <h1>Flexbox</h1>
            <div>
                <Box />
            </div>
        </div>
    )
}