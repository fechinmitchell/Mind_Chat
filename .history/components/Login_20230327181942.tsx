'use client'   //it will be a client component
import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    <div className="bg-[#ADD8E6] h-screen flex flex-col items-center justify-center text-center">
      <Image 
        src="http://links.papareact.com/2i6"
        width={300}
        height={300}
        alt="logo"
      />
      <button onClick={() =>signIn('google')} className="text-white font-bold text-3xl animate-pulse"> Sign In to use ChatGPT</button>
    </div>
  )
}

export default Login