'use client'

import dynamic from "next/dynamic";

const ClientNewChat = dynamic(() => import("./ClientNewChat"), {
  ssr: false,
});

export default function NewChat() {
  return <ClientNewChat />;
}
