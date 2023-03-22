// useClientRouter.ts
import { useRouter as nextUseRouter, NextRouter } from "next/router";
import { useEffect, useState } from "react";
import { useIsMounted } from "./useIsMounted";

export function useClientRouter(): NextRouter | null {
  const [router, setRouter] = useState<NextRouter | null>(null);
  const isMounted = useIsMounted();

  useEffect(() => {
    if (isMounted.current) {
      setRouter(nextUseRouter());
    }
  }, [isMounted]);

  return router;
}


