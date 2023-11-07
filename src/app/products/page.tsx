import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProductImages01 from '../../../public/ProductImage01.png'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'

export default function products() {
    return (
        <>
            <div className='text-4xl text-center'>Navbar</div>
            <div className=''>
                <div className='flex justify-between border border-[#dbdbdb] py-5 px-2'>
                    <h1 className='text-2xl font-bold'>Treadmill Apollo</h1>
                    <div className='flex gap-1 text-sm py-1 '>
                        <Link href='/' className='hover:text-[#c1e502]'>Home</Link>/
                        <Link href='/' className='hover:text-[#c1e502]'>Store</Link>/
                        <Link href='' className='hover:text-[#c1e502]'>Treadmill Apollo</Link>
                    </div>
                </div>
                <div className='flex px-40 gap-10'>
                    <Image className="" src={ProductImages01} alt='' width={400} height={400}></Image>
                    <div>
                        <h1 className='text-3xl font-bold'>Treadmill Apollo</h1>
                        <div className='flex'>
                            <AiFillStar color='#FFD600' size='22px' />
                            <AiFillStar color='#FFD600' size='22px' />
                            <AiFillStar color='#FFD600' size='22px' />
                            <AiFillStar color='#FFD600' size='22px' />
                            <AiOutlineStar color='#D2D2D2' size='22px' />
                        </div>
                        <p className='text-xl font-semibold text-[#737070]'>£99.00</p>
                        <p>Nullam ut hendrerit nibh. Morbi at ante in est auctor fermentum. Nunc sodales porta malesuada. Mauris non sodales eros. Aenean sed commodo nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas sit amet sollicitudin augue, rutrum luctus purus. Maecenas dapibus lacus ut tincidunt tincidunt. Suspendisse potenti. Proin ut lectus ante. Duis odio massa, aliquet at purus non, mollis pulvinar velit.</p>
                    </div>
                </div>
            </div >
            <div className='text-4xl text-center'>Footer</div>
        </>
    )
}
