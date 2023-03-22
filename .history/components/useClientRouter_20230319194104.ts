'use client'

import { useRouter as nextUseRouter } from "next/router";
import { useEffect, useState } from "react";

export function useClientRouter() {
  const [router, setRouter] = useState<null | ReturnType<typeof nextUseRouter>>(null);
  const nextRouter = nextUseRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRouter(nextRouter);
    }
  }, [nextRouter]);

  return router;
}

