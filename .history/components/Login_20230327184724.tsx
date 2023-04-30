'use client'   //it will be a client component
import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    <div className="bg-[#ADD8E6] h-screen flex flex-col items-center justify-center text-center">
      <Image 
        src="https://i.imgur.com/J3SSaec.jpg"
        width={500}
        height={500}
        alt="logo"
      />
      <button onClick={() =>signIn('google')} className="text-white font-bold text-3xl animate-pulse"> Sign In to use Mind Chat</button>
    </div>
  )
}

export default Login