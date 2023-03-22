'use client'
import {signIn} from "next-auth/react";
import Image from "next/image";

export const Login = () => {
  return (
      <div className="bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center">
          <Image
                 src="https://links.papareacts.com/216"
                 width={300}
                 height={300}
                 alt="logo"
           />
          <button onClick={()=> signIn('google')} className="text-white font-bold text-3xl animate-pulse ">Sign in to use ChatGPT</button>       
      </div>
    )
  }
  
export default Login