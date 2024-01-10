import React from 'react'
import Navitem from './Navitem'

function Navbar() {
  return (
    <nav className='w-full flex justify-center h-24'>
        <ul className='flex flex-row items-center font-montserrat text-xl gap-20'>
            <Navitem name={'Home'} />
            <Navitem name={'Portfolio'} />
            <Navitem name={'Tech Stack'} />
        </ul>
    </nav>
  )
}

export default Navbar