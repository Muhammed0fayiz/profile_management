
import Navbar from '@/components/navbar'
import ProfileCardsGrid from '@/components/profile_card'


import React from 'react'

const Profile = () => {
  return (
    <>

    <Navbar/>
  <div className="flex justify-center items-start gap-6 p-6">
        <ProfileCardsGrid/>
      
      </div>


    </>


  )
}

export default Profile
