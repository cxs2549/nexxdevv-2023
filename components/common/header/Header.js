/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
const Header = () => {
  return (
    <header className="border-b shadow-md bg-slate-100 dark:border-none rounded-xl dark:bg-[#121212] border-slate-100 max-w-5xl sm:max-w-3xl mx-auto w-full">
      <div className=" p-3 h-[70px] mx-auto flex items-center justify-center">
        <div className="flex items-center justify-between gap-1">
          <Link href={`/`}>
            <img
              src="./assets/logo.png"
              className="w-6 h-6 dark:invert"
              alt=""
            />
          </Link>
          <h4 className="text-lg font-bold dark:text-white">nexxdevv</h4>
        </div>
      </div>
    </header>
  )
}

export default Header
