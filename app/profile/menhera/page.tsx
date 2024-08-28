import ContactInfo from '@/components/ContactInfo'
import ProfileHeader from '@/components/ProfileHeader'
import ProfileInfo from '@/components/ProfileInfo'
import React from 'react'

const page = () => {
  return (
    <main className='min-h-screen bg-primary p-8'>
        <ProfileHeader />
        <ProfileInfo />
        <ContactInfo />
    </main>
  )
}

export default page