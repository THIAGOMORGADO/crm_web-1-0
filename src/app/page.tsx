import Image from 'next/image'

import fundo from '@/app/assets/fundo.png'
import Logo from '@/app/assets/logo.png'
import { Lock, Mail } from 'lucide-react'

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
            <form action="">
              <div className="bg-[#1c1c1e] flex m-2 items-center w-full px-6 gap-1 rounded-xl">
                <Mail size={24} color="#a280ff" />
                <input
                  type="email"
                  className="w-full bg-[#1c1c1e] p-2 placeholder:text-[#a280ff] outline-none text-white"
                  placeholder="Seu email"
                />
              </div>
              <div className="bg-[#1c1c1e] flex m-2 items-center w-full px-6 gap-1 rounded-xl">
                <Lock size={24} color="#a280ff" />
                <input
                  type="email"
                  className="w-full bg-[#1c1c1e] p-2 placeholder:text-[#a280ff] outline-none text-white"
                  placeholder="Ssua senha"
                />
              </div>
              <button className="w-full py-3 px-6 text-white bg-[#a280ff] rounded-md hover:bg-[#8a65ff]">
                Entrar
              </button>
            </form>
          </div>
        </div>

        <div className="w-[80%] hidden sm:flex ">
          <Image src={fundo} alt="backgg" />
        </div>
      </div>
    </div>
  )
}
