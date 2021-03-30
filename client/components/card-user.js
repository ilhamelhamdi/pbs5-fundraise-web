import React from 'react'
import Image from 'next/image'

export default function CardUser({
  children,
  profile_picture,
  fullname,
  className
}) {
  return (
    <div className={`card-user w-full flex flex-row ${className}`}>
      <div className="user-info-img w-16 h-16 mr-4 flex-none flex items-center rounded-full overflow-hidden">
        <Image src={`${process.env.API_BASE_URL}${profile_picture.url}`} width={profile_picture.width} height={profile_picture.height} fill="responsive" />
      </div>
      <div className="user-info-detail w-full flex flex-col justify-center">
        <p className="font-bold w-full">{fullname}</p>
        {children}
      </div>
    </div>
  )
}