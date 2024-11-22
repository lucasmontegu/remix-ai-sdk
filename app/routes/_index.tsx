import type { MetaFunction } from '@vercel/remix';
import { useChat } from 'ai/react';
import { Form } from "@remix-run/react";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "AI Chat Assistant" },
    { name: "description", content: "Chat con IA" },
  ];
};

export default function Index() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Panel izquierdo para input */}
      <div className="w-1/3 border-r border-gray-200 p-4 flex flex-col bg-white shadow-sm">
        <h1 className="text-2xl font-bold mb-4">AI Assistant</h1>
        <Form 
          onSubmit={handleSubmit} 
          className="mt-auto"
        >
          <div className="relative">
            <Textarea
              value={input}
              placeholder="¿En qué puedo ayudarte?"
              onChange={handleInputChange}
              className="min-h-[100px] pr-12 border-2 focus:border-blue-500"
            />
            <Button 
              type="submit" 
              size="icon"
              className="absolute bottom-2 right-2 hover:bg-blue-600"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </Form>
      </div>

      {/* Panel derecho para mensajes */}
      <div className="flex-1 p-4 flex flex-col">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-full p-4">
          <ScrollArea className="h-full">
            {messages.length === 0 ? (
              <div className="h-full flex items-center justify-center text-gray-500">
                <p className="text-center">
                  👋 ¡Bienvenido! Escribe tu mensaje para comenzar la conversación.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map(m => (
                  <div 
                    key={m.id} 
                    className={`flex items-start gap-2.5 ${
                      m.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                    }`}
                  >
                    {/* Avatar */}
                    <div className={`
                      w-8 h-8 rounded-full flex items-center justify-center shadow-sm
                      ${m.role === 'user' ? 'bg-blue-500' : 'bg-gray-600'}
                    `}>
                      {m.role === 'user' ? '👤' : '🤖'}
                    </div>
                    
                    {/* Mensaje */}
                    <div className={`
                      max-w-[80%] px-4 py-2 rounded-lg shadow-sm
                      ${m.role === 'user' 
                        ? 'bg-blue-500 text-white rounded-br-none border border-blue-600' 
                        : 'bg-gray-200 text-gray-900 rounded-bl-none border border-gray-300'}
                    `}>
                      <p className="whitespace-pre-wrap">{m.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
