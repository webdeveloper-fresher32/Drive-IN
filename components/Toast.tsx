import React from "react";
import { X, CheckCircle, XCircle, AlertCircle, Info } from "lucide-react";
import { useFeedback, FeedbackMessage } from "@/contexts/FeedbackContext";
import { Button } from "@/components/ui/button";

export function ToastContainer() {
  const { messages, removeMessage } = useFeedback();

  if (messages.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {messages.map((message) => (
        <Toast
          key={message.id}
          message={message}
          onClose={() => removeMessage(message.id)}
        />
      ))}
    </div>
  );
}

interface ToastProps {
  message: FeedbackMessage;
  onClose: () => void;
}

function Toast({ message, onClose }: ToastProps) {
  const getIcon = () => {
    switch (message.type) {
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "error":
        return <XCircle className="h-5 w-5 text-red-500" />;
      case "warning":
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      case "info":
        return <Info className="h-5 w-5 text-blue-500" />;
      default:
        return <Info className="h-5 w-5 text-blue-500" />;
    }
  };

  const getBorderColor = () => {
    switch (message.type) {
      case "success":
        return "border-l-green-500";
      case "error":
        return "border-l-red-500";
      case "warning":
        return "border-l-yellow-500";
      case "info":
        return "border-l-blue-500";
      default:
        return "border-l-blue-500";
    }
  };

  return (
    <div
      className={`
      bg-white dark:bg-gray-800 border-l-4 ${getBorderColor()} 
      rounded-lg shadow-lg p-4 min-w-[300px] max-w-[400px]
      animate-in slide-in-from-right duration-300
    `}
    >
      <div className="flex items-start gap-3">
        {getIcon()}
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 dark:text-gray-100">
            {message.title}
          </h4>
          {message.description && (
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              {message.description}
            </p>
          )}
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="h-auto p-1 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
