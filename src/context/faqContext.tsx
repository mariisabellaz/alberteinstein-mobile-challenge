import axios from 'axios';
import React, { ReactNode, createContext, useContext, useState } from 'react';

import { BASE_URL } from '@utils/storagekeys';
import { FaqModel } from './model/faq.model';

type FAQContextType = {
  fetchNextPage: () => Promise<void>;
  isLoading: boolean;
  items: ListItem[];
};

export type ListItem = FaqModel | { id: number; title: string; body: string };
type ChildrenContextProps = { children: ReactNode };

const FAQContext = createContext<FAQContextType | undefined>(undefined);

export const FAQProvider = ({ children }: ChildrenContextProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [items, setItems] = useState<ListItem[]>([]);
  const [page, setPage] = useState(1);

  const fetchNextPage = async () => {
    try {
      setIsLoading(true);

      const response = await axios.get(`${BASE_URL}/posts`);
      const newItems = response.data;
      setItems([...items, ...newItems]);
      setPage(page + 1);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FAQContext.Provider
      value={{
        items,
        fetchNextPage,
        isLoading,
      }}
    >
      {children}
    </FAQContext.Provider>
  );
};

export const useFAQ = () => {
  const context = useContext(FAQContext);
  if (!context) {
    throw new Error('useFaq must be used within an FAQProvider');
  }
  return context;
};
