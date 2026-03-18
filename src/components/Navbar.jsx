import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { navItems } from '../constants'
import logo from '../assets/logo.png'

const Navbar = () => {

  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');

  const toggleNavbar = () => {
    setHamburgerOpen(!hamburgerOpen);
  }

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
    setHamburgerOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType('');
  };

  return (
    <>
      <div className='nav sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
        <div className='container px-4 mx-auto relative text-sm'>
          <div className='flex justify-between items-start'>
            <div className='flex items-center flex-shrink-0'>
              <img className='h-10 w-10 mr-2' src={logo} />
              <span className='text-xl tracking-tight'>VirtualR</span>
            </div>
            <ul className='hidden lg:flex'>
              {navItems.map((item, idx) => (
                <li key={idx} className='hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-900 cursor-pointer transition duration-300 py-3 px-4 rounded-md active:scale-95'>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className='hidden lg:flex justify-center space-x-6 items-center'>
              <button onClick={() => openModal('signin')} className='cursor-pointer py-2 px-3 border rounded-md hover:scale-105 transition duration-300 active:scale-100'>
                Sign in
              </button>
              <button onClick={() => openModal('create')} className='cursor-pointer bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 rounded-md hover:scale-105 transition duration-300 active:scale-100 border border-blue-800'>
                Create an account
              </button>
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
                <ul className='w-full sm:w-1/3'>
                  {navItems.map((item, idx) => (
                    <li key={idx} className='py-4 px-3 rounded-md hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-900 cursor-pointer transition duration-300 rounded-md active:scale-95'>
                      <a href={item.href}>{item.label}</a>
                    </li>
                  ))}
                </ul>
                <div className='flex space-x-6'>
                  <button onClick={() => openModal('signin')} className='py-2 px-3 border rounded-md hover:scale-105 transition duration-300 active:scale-100'>
                    Sign in
                  </button>
                  <button onClick={() => openModal('create')} className='bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 rounded-md hover:scale-105 transition duration-300 active:scale-100 border border-blue-800'>
                    Create an account
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className='fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm' onClick={closeModal}>
          <div className='relative bg-neutral-900 border border-neutral-700 p-8 rounded-xl shadow-2xl w-full max-w-md mx-4' onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className='absolute top-4 right-4 text-neutral-400 hover:text-white transition'>
              <X />
            </button>
            <h2 className='text-3xl font-medium mb-6 text-center text-white'>
              {modalType === 'signin' ? 'Sign In' : 'Create Account'}
            </h2>
            <form className='flex flex-col gap-4' onSubmit={(e) => e.preventDefault()}>
              <input type='email' placeholder='Email Address' className='w-full p-3 rounded-md bg-neutral-800 border border-neutral-600 focus:outline-none focus:border-blue-500 text-white placeholder-neutral-500' required />
              <input type='password' placeholder='Password' className='w-full p-3 rounded-md bg-neutral-800 border border-neutral-600 focus:outline-none focus:border-blue-500 text-white placeholder-neutral-500' required />
              {modalType === 'create' && (
                <input type='password' placeholder='Confirm Password' className='w-full p-3 rounded-md bg-neutral-800 border border-neutral-600 focus:outline-none focus:border-blue-500 text-white placeholder-neutral-500' required />
              )}
              <button type='submit' className='w-full py-3 mt-4 bg-gradient-to-r from-blue-500 to-blue-800 rounded-md text-white font-medium hover:from-blue-600 hover:to-blue-900 transition duration-300 active:scale-[0.98]'>
                {modalType === 'signin' ? 'Sign In' : 'Create Account'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
export default Navbar
