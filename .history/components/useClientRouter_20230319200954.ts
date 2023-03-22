import { useEffect, useState } from "react";
import { useRouter as nextUseRouter } from "next/router";
import { useIsMounted } from "./useIsMounted";

export function useClientRouter(): ReturnType<typeof nextUseRouter> | null {
  const [router, setRouter] = useState<ReturnType<typeof nextUseRouter> | null>(null);
  const isMounted = useIsMounted();

  useEffect(() => {
    if (isMounted.current) {
      const currentRouter = nextUseRouter();
      setRouter(currentRouter);
    }
  }, [isMounted]);

  return router;
}



