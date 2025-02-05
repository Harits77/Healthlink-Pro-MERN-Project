import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='bg-gradient-to-br from-blue-800 to-blue-400 min-h-screen'>
     <nav className='shadow-sm p-5 shadow-white'>
        <div className='flex justify-between gap-10 px-6 text-white font-semibold text-2xl'>
        <h1 className=''>HealthLink Pro</h1>
        <ul className='flex gap-10 '>
            <li className=''><Link to='/Login'>Patient</Link></li>
            <li className=''><Link to='/DoctorLogin'>Doctor</Link></li>
        </ul>
        </div>
     </nav>
     <div className='flex flex-col items-center mt-36 text-3xl text-white font-bold'>
        <p className='mb-8'>Welcome to Healthlink Pro</p>
        <p>Better care, better health, better life because you deserve the best</p>
     </div>
    </div>
  )
}

export default Home