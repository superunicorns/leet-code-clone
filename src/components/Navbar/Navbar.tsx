import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between sm:px-12 px-2 md:px-24">
      <Link href="/" className="flex items-center justify-center h-20">
        <img src="/logo.png" alt="Leet Code logo" className="h-full" />
      </Link>
      <div className="flex items-center">
        <button className="bg-[#fba313] text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium hover:text-[#fba313] hover:bg-white hover:border-2 hover:border-[#fba313] border-2 border-transparent transition duration-300 ease-in-out">Sign In</button> 
      </div>
    </div>
  )
}

export default Navbar