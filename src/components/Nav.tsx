import Image from 'next/image'
import React from 'react'

export const Nav = () => {
  return (
    <div  >
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={100}
          height={37}
          priority
        />
      </div>
  )
}
