"use client";


import exp from "constants";
import { Heading } from "@/components/heading";
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import  ChatCompletionRequestMessage  from "openai";
const ConversationPage = () => {
const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        prompt: "",
    },

});

interface ChatCompletionRequestMessage {
  role: string; // 'user' or 'assistant'
  content: string;
}

// Then you can use it as previously mentioned
const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);


const router = useRouter();
const isLoading = form.formState.isSubmitting;
const Messages = useState<ChatCompletionRequestMessage[]>([]);
const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {

        
    } catch (error: any) {
        console.error(error);
    } finally {
     router.refresh();
    }
}

    return (
    <div>
        <Heading
        title="Conversation"
        description="Our Most Advanced Conversation Model"
        icon={MessageSquare}
        iconColor="text-violent-500"
        bgColor="bg-violet-500/10"
        />

        <div className="px-4 lg:px-8">
        <div>
          <Form{...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}
          className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
          >
            <FormField 
            name="prompt"
            render={({ field }) => (
                <FormItem className="cols-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                        <Input className="border-0 outline-none focus-visible:ring-transparent"
                        placeholder="Type your prompt here"
                        {...field}
                        />
                        

                    </FormControl>

                </FormItem>
             )}
            />
            <Button className="col-span-12 lg:col-span-2 w-full" disabled={isLoading}>
                Generate
            </Button>

          </form>

          </Form>
        </div>
        <div className="space-y-4 mt-4">
          Messages Content
        </div>

        </div>
    </div>
    );
}

export default ConversationPage;