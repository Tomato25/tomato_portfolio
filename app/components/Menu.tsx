import Link from "next/link"

export default function Menu() {
  return (
    <div className="flex flex-col  justify-center item-center gap-20 mx-auto w-1/2  text-white text-7xl">
    <Link className="my-5" href="/projects">
      <h1>Projects</h1>
    </Link>
    <Link className="my-5" href="/about">
      <h1>About</h1>
    </Link>
    <Link className="my-5" href="/contact">
      <h1>Contact</h1>
    </Link>
  </div>
  )
}
