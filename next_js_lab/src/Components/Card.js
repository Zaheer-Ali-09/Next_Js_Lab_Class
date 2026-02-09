import React from 'react'
import Image from 'next/image'
import Cardone from '../../public/img/one.png'
function Card() {
    return (
        //   Card,, Section
        <div className='w-100% h-[70vh]'>
            <h1 className='text-4xl text-center font-bold pt-10 '>Popular Blogs</h1>
            <div className='pt-20 flex justify-around'>
                <div className='w-[400px] h-[400px] border-2 rounded'>
                    <Image
                        src={Cardone}
                        alt="Card image" className='w-[100%] h-[300px] rounded '/>
                    <p className='text-center pt-2'>Features over 1,000 free images, including illustrations and vector graphics specifically for blogging and WordPress.</p>
                </div>
                     <div className='w-[400px] h-[400px] border-2 rounded'>
                    <Image
                        src={Cardone}
                        alt="Card image" className='w-[100%] h-[300px] rounded '/>
                    <p className='text-center pt-2'>Features over 1,000 free images, including illustrations and vector graphics specifically for blogging and WordPress.</p>
                </div>
                     <div className='w-[400px] h-[400px] border-2 rounded'> 
                    <Image
                        src={Cardone}
                        alt="Card image" className='w-[100%] h-[300px] rounded '/>
                    <p className='text-center pt-2'>Features over 1,000 free images, including illustrations and vector graphics specifically for blogging and WordPress.</p>
                </div>
            </div>
        </div>
    )
}

export default Card
