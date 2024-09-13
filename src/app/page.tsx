import Image from 'next/image'

import fundo from '@/app/assets/fundo.png'
import Logo from '@/app/assets/logo.png'
import { SignInFormInputs } from './components/signin'

export default function Home() {
  return (
    <div className="bg-[#1c1c1e] flex flex-1 w-screen h-screen justify-center">
      <div className="bg-[#2C2C2E] flex justify-center w-[75%] rounded-3xl m-10 ">
        <div className=" w-full h-full flex flex-col items-center justify-center">
          <Image src={Logo} alt="logo" />
          <h1
            className="
            mb-2 mt-2 
          text-white 
            font-semibold 
            text-[24px]"
          >
            Hi, Welcome to Weno 👋
          </h1>
          <p className="font-semibold text-[#6C757D] text-[15px]">
            Login with your email address
          </p>
          <div className="">
            <SignInFormInputs />
          </div>
        </div>

        <div className="w-[80%] hidden sm:flex ">
          <Image src={fundo} alt="backgg" />
        </div>
      </div>
    </div>
  )
}
