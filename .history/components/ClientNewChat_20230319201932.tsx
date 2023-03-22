// components/ClientNewChat.tsx
import React from 'react';
import { useClientRouter } from './useClientRouter';
import { createNewChat } from '../lib/chatgpt';

interface ClientNewChatProps {
  onFinish: () => void;
}

const ClientNewChat: React.FC<ClientNewChatProps> = ({ onFinish }) => {
  const router = useClientRouter();

  const handleNewChat = async () => {
    if (router) {
      const chatId = await createNewChat();
      router.push(`/chat/${chatId}`);
    }
  };

  return (
    <div>
      <button onClick={handleNewChat}>New Chat</button>
      <button onClick={onFinish}>Cancel</button>
    </div>
  );
};

export default ClientNewChat;



