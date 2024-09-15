import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col bg-gradient-to-r from-black to-zinc-800 min-h-screen">
      <h1 className="font-black text-blue-600 text-center">Hello world</h1>
      <span className="text-white text-center">{Date()}</span>
      <Link href={"/first"} className="text-blue-400">first component</Link>
      <Link href={"/flexbox"} className="text-blue-400">flexbox</Link>
    </div>
  );
}
