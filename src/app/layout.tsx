import './globals.css'
import { ReactNode } from 'react'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamJuree,
} from 'next/font/google'
import { Blur } from '@/components/blur/Blur'
import { Stripes } from '@/components/stripes/Stripes'
import { Profile } from '@/components/profile/Profile'
import { SignIn } from '@/components/signin/Signin'
import { Hero } from '@/components/hero/Hero'
import { Copyright } from '@/components/copyright/Copyright'
import { cookies } from 'next/headers'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamJuree = BaiJamJuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'NLW Spacetime Diguya',
  description:
    'Uma cápsula do tempo construída com React, NextJS, TailwindCSS e Typescript',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const isAuthenticated = cookies().has('token')

  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamJuree.variable} bg-gray-900 font-sans text-gray-100`}>
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
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
