'use client'

import { ArrowDownCircleIcon } from '@heroicons/react/24/outline';
import { collection, orderBy, query } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import Message from './Message';

type Props = {
  chatId: string;
}



const Chat = ({chatId} : Props) => {
const {data : Session} = useSession();
const [messages] = useCollection(Session && query(collection(db,"users",Session?.user?.email!,"chats",chatId,"messages"),
  orderBy("createdAt","asc")
))
return (
  <div className="flex-1 overflow-y-auto">
     {messages?.empty && (
      <>
       <p className="mt-10 text-center text-white">Type a prompt to get started!</p>
       <ArrowDownCircleIcon className="h-10 w-10 mx-auto mt-5 text-white animate-bounce" />
      </>
     )}
     {messages?.docs.map((message) => 
     <Message key={message.id} message={message.data()} />)}
  </div>
)
}
export default Chat