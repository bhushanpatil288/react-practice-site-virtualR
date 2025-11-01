import {Menu, X} from 'lucide-react'
import { useState } from 'react'
import { navItems } from '../constants'
import logo from '../assets/logo.png'

const Navbar = () => {

  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleNavbar = () =>{
    setHamburgerOpen(!hamburgerOpen);
  }

  return (
    <div className='nav sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
      <div className='container px-4 mx-auto relative text-sm'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center flex-shrink-0'>
            <img className='h-10 w-10 mr-2' src={logo} />
            <span className='text-xl tracking-tight'>VirtualR</span>
          </div>
          <ul className='hidden lg:flex'>
              {navItems.map((item, idx)=>(
                <li key={idx} className='hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-900 cursor-pointer transition duration-300 py-3 px-4 rounded-md active:scale-95'>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
          </ul>
          <div className='hidden lg:flex justify-center space-x-12 items-center'>
            <a href='#' className='py-2 px-3 border rounded-md hover:scale-105 transition duration-300 active:scale-100'>
              Sign in
            </a>
            <a href='#' className='bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 rounded-md hover:scale-105 transition duration-300 active:scale-100'>
              Create an account
            </a>
          </div>
          <div className='lg:hidden'>
            <button 
              className='cursor-pointer active:scale-95 transition'
              onClick={toggleNavbar}>
              {hamburgerOpen ? <X /> : <Menu />}
            </button>
          </div>
          {hamburgerOpen && (
            <div className='fixed right-0 top-16 z-20 bg-neutral-900 w-full p-12 flex flex-col sm:flex-row gap-5 sm:gap-0 justify-between items-center lg:hidden'>
              <ul className='w-1/3'>
                {navItems.map((item, idx)=>(
                  <li key={idx} className='py-4 px-3 rounded-md hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-900 cursor-pointer transition duration-300 rounded-md active:scale-95'>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
              <div className='flex space-x-6'>
                <a href='#' className='py-2 px-3 border rounded-md hover:scale-105 transition duration-300 active:scale-100'>
                  Sign in
                </a>
                <a href='#' className='bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 rounded-md hover:scale-105 transition duration-300 active:scale-100'>
                  Create an account
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
