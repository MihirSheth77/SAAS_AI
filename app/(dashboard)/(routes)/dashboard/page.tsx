"use client";

import { ArrowRight, Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";


const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation",
  },
  {
    label: "Generate Music",
    icon: Music,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    href: "/music",
  },
  {
    label: "Generate Images",
    icon: ImageIcon,
    color: "text-pink-500",
    bgColor: "bg-pink-700/10",
    href: "/image",
  },
  {
    label: "Generate Videos",
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: "/video",
  },
  {
    label: "Generate Code",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: "/code",
  },

]

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
 
const DashboardPage = () =>{
  const router = useRouter();
  return (
    <div>
     <div className="mb-8 space-y-4">
      <h2 className="text-2xl md:text-4xl font-bold text-center">
        Explore Power of AI
      </h2>
      <p className="text-muted-foreround text-sm md:text-lg text-center">
        Chat with the smartest AI on the planet. Generate images, videos, music, and code with the power of AI.
      </p>

     </div>
     <div className="px-4 md:px-20 lg:px-32 space-y-4">
      {tools.map((tools) => (
        <Card
         onClick={() => router.push(tools.href)}
         key={tools.href}
        className="p-4 border-black/5 flex itens-center justify-between hover:shadow-md transition cursor cursor-pointer"
        >
         <div className="flex items-center gap-x-4">
          <div className={cn("p-2 w-fit rounded-md", tools.bgColor)}>
            <tools.icon className={cn("w-8 h-8", tools.color)} />
          </div>

          <div className="font-semibold">
            {tools.label}
          </div>
          </div>
          <ArrowRight className="w-5 h-5" />
        </Card>

        ))}

     </div>
    </div>

  );
}

export default DashboardPage;