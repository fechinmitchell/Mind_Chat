// useClientRouter.ts
import { useRouter as nextUseRouter, NextRouter } from "next/router";
import { useEffect, useState } from "react";

export function useClientRouter(): NextRouter | null {
  const [router, setRouter] = useState<NextRouter | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentRouter = nextUseRouter();
      setRouter(currentRouter);
    }
  }, []);

  return router;
}
