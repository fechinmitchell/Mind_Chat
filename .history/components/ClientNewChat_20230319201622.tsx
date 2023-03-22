// components/ClientNewChat.tsx
import React from 'react';
import { withClientRouter } from './withClientRouter';
import { NextRouter } from 'next/router';

interface ClientNewChatProps {
  router: NextRouter;
}

const ClientNewChat: React.FC<ClientNewChatProps> = ({ router }) => {
  // ...rest of the component implementation
  // For example:
  const handleClick = () => {
    router.push('/some-path');
  };

  return (
    <div>
      <h1>Client New Chat</h1>
      <button onClick={handleClick}>Navigate</button>
    </div>
  );
};

export default withClientRouter(ClientNewChat);


