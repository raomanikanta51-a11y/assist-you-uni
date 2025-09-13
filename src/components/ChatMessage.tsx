import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp: Date;
}

export const ChatMessage = ({ message, isUser, timestamp }: ChatMessageProps) => {
  return (
    <div className={cn("flex gap-3 mb-4", isUser ? "flex-row-reverse" : "flex-row")}>
      <div className={cn(
        "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
        isUser ? "bg-chat-user" : "bg-primary"
      )}>
        {isUser ? (
          <User className="w-4 h-4 text-chat-user-foreground" />
        ) : (
          <Bot className="w-4 h-4 text-primary-foreground" />
        )}
      </div>
      
      <div className={cn(
        "max-w-[80%] p-3 rounded-2xl shadow-sm",
        isUser 
          ? "bg-chat-user text-chat-user-foreground rounded-tr-md" 
          : "bg-chat-bot text-chat-bot-foreground border rounded-tl-md"
      )}>
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message}</p>
        <p className={cn(
          "text-xs mt-2 opacity-70",
          isUser ? "text-chat-user-foreground" : "text-muted-foreground"
        )}>
          {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
    </div>
  );
};