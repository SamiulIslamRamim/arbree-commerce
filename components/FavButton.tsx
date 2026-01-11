import { Heart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const FavButton = () => {
  return (
  <Link href={'/cart'} className='group relative'> 
    <Heart className='w-5 h-5 hover:text-shop-light-green hoverEffect '/>
    <span className=' absolute -top-1 -right-1 bg-shop-dark-green text-white h-3.5 w-3.5 rounded-full twxt-xs font-semibold felx items-center justify-center'>0</span>
    </Link>
  )
}

export default FavButton
