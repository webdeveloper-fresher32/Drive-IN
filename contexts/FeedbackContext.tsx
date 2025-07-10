import React, { createContext, useContext, useState, ReactNode } from "react";

export interface FeedbackMessage {
  id: string;
  type: "success" | "error" | "warning" | "info";
  title: string;
  description?: string;
  duration?: number;
}

interface FeedbackContextType {
  messages: FeedbackMessage[];
  addMessage: (message: Omit<FeedbackMessage, "id">) => void;
  removeMessage: (id: string) => void;
  clearAllMessages: () => void;
}

const FeedbackContext = createContext<FeedbackContextType | undefined>(
  undefined
);

interface FeedbackProviderProps {
  children: ReactNode;
}

export function FeedbackProvider({ children }: FeedbackProviderProps) {
  const [messages, setMessages] = useState<FeedbackMessage[]>([]);

  const addMessage = (message: Omit<FeedbackMessage, "id">) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newMessage: FeedbackMessage = {
      ...message,
      id,
      duration: message.duration || 5000,
    };

    setMessages((prev) => [...prev, newMessage]);

    setTimeout(() => {
      removeMessage(id);
    }, newMessage.duration);
  };

  const removeMessage = (id: string) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== id));
  };

  const clearAllMessages = () => {
    setMessages([]);
  };

  return (
    <FeedbackContext.Provider
      value={{ messages, addMessage, removeMessage, clearAllMessages }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}

export function useFeedback() {
  const context = useContext(FeedbackContext);
  if (context === undefined) {
    throw new Error("useFeedback must be used within a FeedbackProvider");
  }
  return context;
}
