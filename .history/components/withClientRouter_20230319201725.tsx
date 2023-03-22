// components/withClientRouter.tsx
import React from 'react';
import { useRouter } from 'next/router';
import { NextRouter } from 'next/router';

interface WithClientRouterProps {
  children: (router: NextRouter) => React.ReactNode;
}

export const withClientRouter = (
  Component: React.ComponentType<{ router: NextRouter }>
) => {
  const WithClientRouter: React.FC = () => {
    const router = useRouter();

    return <Component router={router} />;
  };

  return WithClientRouter;
};


