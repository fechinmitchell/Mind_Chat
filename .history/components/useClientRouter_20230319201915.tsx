// components/useClientRouter.tsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { NextRouter } from 'next/router';

export const useClientRouter = (): NextRouter | null => {
  const [router, setRouter] = useState<NextRouter | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRouter(useRouter());
    }
  }, []);

  return router;
};
