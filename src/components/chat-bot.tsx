"use client";

import { useState, useRef, useEffect } from "react";
import { soloLevelingChatbot } from "@/ai/flows/solo-leveling-chatbot";
import type { SoloLevelingChatbotOutput } from "@/ai/flows/solo-leveling-chatbot";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bot, User, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  role: "user" | "bot";
  text: string;
}

export function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: 'Arise. Ask me anything about the Shadow Monarch or the world of Solo Leveling.' }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput("");
    setIsLoading(true);

    try {
      const result: SoloLevelingChatbotOutput = await soloLevelingChatbot({ query: currentInput });
      const botMessage: Message = { role: "bot", text: result.response };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chatbot error:", error);
      const botErrorMessage: Message = { role: "bot", text: "My apologies, I am unable to connect to the system at this moment. Please try again later." };
      setMessages((prev) => [...prev, botErrorMessage]);
      toast({
        variant: "destructive",
        title: "Connection Error",
        description: "Failed to get a response from the Oracle.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-2xl shadow-primary/20 bg-background/70 backdrop-blur-sm border-primary/50">
      <CardHeader className="text-center">
        <CardTitle className="font-headline text-2xl text-accent flex items-center justify-center gap-2">
          <Bot />
          Solo Leveling Oracle
        </CardTitle>
        <CardDescription>Your AI guide to the universe of gates and hunters.</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] w-full pr-4">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 ${
                  message.role === "user" ? "justify-end" : ""
                }`}
              >
                {message.role === "bot" && (
                  <Avatar className="h-8 w-8 border-2 border-primary">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      <Bot className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`rounded-lg px-4 py-2 max-w-[80%] break-words shadow-md ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
                {message.role === "user" && (
                  <Avatar className="h-8 w-8 border-2 border-accent">
                     <AvatarFallback className="bg-accent text-accent-foreground">
                       <User className="h-5 w-5" />
                     </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-3">
                <Avatar className="h-8 w-8 border-2 border-primary">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    <Bot className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
                <div className="rounded-lg px-4 py-2 bg-secondary shadow-md">
                  <div className="flex items-center space-x-2">
                    <span className="h-2 w-2 bg-muted-foreground rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                    <span className="h-2 w-2 bg-muted-foreground rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                    <span className="h-2 w-2 bg-muted-foreground rounded-full animate-pulse"></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about the Monarch of Shadows..."
            disabled={isLoading}
            className="focus-visible:ring-accent"
          />
          <Button type="submit" size="icon" disabled={isLoading} className="bg-accent text-background hover:bg-accent/90 flex-shrink-0">
            <Send className="h-4 w-4"/>
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
