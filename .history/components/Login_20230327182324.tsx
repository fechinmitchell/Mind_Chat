'use client'   //it will be a client component
import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    <div className="bg-[#ADD8E6] h-screen flex flex-col items-center justify-center text-center">
      <Image 
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dbrain%2BLogo&psig=AOvVaw3IEoS-JKZ63VEbBRAZ_Pih&ust=1680024172767000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKiYrfLP_P0CFQAAAAAdAAAAABAT"
        width={300}
        height={300}
        alt="logo"
      />
      <button onClick={() =>signIn('google')} className="text-white font-bold text-3xl animate-pulse"> Sign In to use Mind Chat</button>
    </div>
  )
}

export default Login