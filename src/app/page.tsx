import { cookies } from 'next/headers'
import { Blur } from '@/components/blur/Blur'
import { Copyright } from '@/components/copyright/Copyright'
import { EmptyMemories } from '@/components/empty-memories/EmptyMemories'
import { Hero } from '@/components/hero/Hero'
import { SignIn } from '@/components/signin/Signin'
import { Stripes } from '@/components/stripes/Stripes'
import { Profile } from '@/components/profile/Profile'

export default function Home() {
  const isAuthenticated = cookies().has('token')

  return (
    <main className="grid min-h-screen grid-cols-2">
      {/** Left Container */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
        <Blur />
        <Stripes />
        {isAuthenticated ? <Profile /> : <SignIn />}
        <Hero />
        <Copyright />
      </div>

      {/** Right Container */}
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <EmptyMemories />
      </div>
    </main>
  )
}
