'use client'   //it will be a client component
import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    <div className="bg-[#ADD8E6] h-screen flex flex-col items-center justify-center text-center">
      <Image 
        src=""
        width={300}
        height={300}
        alt="logo"
      />
      <button onClick={() =>signIn('google')} className="text-white font-bold text-3xl animate-pulse"> Sign In to use Mind</button>
    </div>
  )
}

export default Login