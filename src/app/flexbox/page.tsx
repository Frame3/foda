
import Box from "@/components/Box"
import Link from "next/link"

export default function flexbox() {
    return (
        <div>
            <Link href={"/"}>Home</Link>
            <h1>Flexbox</h1>
            <div>
                <Box />
            </div>
        </div>
    )
}