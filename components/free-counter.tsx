import { Zap } from "lucide-react";
import { useEffect, useState } from "react";


import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const FreeCounter = ({
  isPro = false,
  apiLimitCount = 0,
}: {
  isPro: boolean,
  apiLimitCount: number
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  

  if (isPro) {
    return null;
  }

  return (
    <div className="px-3">
    </div>
  )
}