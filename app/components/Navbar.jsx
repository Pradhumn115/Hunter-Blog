import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className=' w-screen h-24 flex items-center justify-center font-Comfortaa'>
        <ul className='flex sm:flex-row  justify-center sm:gap-24 font-extrabold gap-8'>
            <Link href='/'><li className="home cursor-pointer">Home</li></Link>
            <Link href='/about'><li className="about cursor-pointer">About</li></Link>
            <Link href='/blog'><li className="blog cursor-pointer">Blog</li></Link>
            <Link href='/contact'><li className="contact cursor-pointer">Contact</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar