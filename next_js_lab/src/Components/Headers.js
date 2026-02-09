import React from 'react'

function Headers() {
    return (
        <div className='w-100% h-[50vh] bg-blue-400 pt-10'>
            <header className='flex justify-around items-center text-white text-xl'>
                <h1 className='text-white font-bold text-2xl'>BLOGI</h1>
                <ul className='flex  gap-10'>
                    <li>Future</li>
                    <li>Pages</li>
                    <li>Contact</li>
                </ul>
                <div className='flex flex-row gap-10'>
                    <button>Login</button>
                    <button className='border-1 px-4 py-2'>SignUp</button>
                </div>
            </header>
            <div className=' text-4xl text-white flex flex-col items-center gap-8 pt-30'>
                <h3>Blogs</h3>
                <p>All New About Blogi in one place</p>
            </div>
        </div>
    )
}

export default Headers
