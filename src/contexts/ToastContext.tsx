import { createContext, ReactNode, useState } from "react";
import { v4 as uuid } from "uuid";

interface IToastProviderProps {
  children: ReactNode;
}

export interface IAddToast {
  title: string;
  description?: string;
  type: string;
}

export interface IMessages {
  id: string | number;
  title: string;
  description?: string;
  type?: string;
}

export interface IToastContext {
  addToast: (value: IAddToast) => void;
  removeToast: (value: number | string) => void;
  messages: IMessages[];
}

export const ToastContext = createContext<IToastContext>({} as IToastContext);

const ToastProvider = ({ children }: IToastProviderProps) => {
  const [messages, setMessages] = useState<IMessages[]>([]);

  function addToast({ title, description, type }: IAddToast) {
    const toast = {
      id: uuid(),
      title,
      description,
      type,
    };
    setMessages((previousMessages) => [...previousMessages, toast]);
  }

  function removeToast(id: number | string) {
    const newMessages = messages.filter((message) => message.id !== id);
    setMessages(newMessages);
  }

  return (
    <ToastContext.Provider value={{ addToast, removeToast, messages }}>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
