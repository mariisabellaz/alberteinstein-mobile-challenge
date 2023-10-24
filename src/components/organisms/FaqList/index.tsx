import 'react-native-get-random-values';

import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { v4 as uuidv4 } from 'uuid';

import { FaqItem } from '@components/molecules/FaqItem';
import { FaqModel } from '@context/model/faq.model';

type ListItem = FaqModel | { id: number; title: string; body: string };

type FaqListProps = {
  data: ListItem[];
  testID?: string;
};

export const FaqList = ({ data }: FaqListProps) => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleItemExpansion = (itemId: number) => {
    if (expandedItems.includes(itemId)) {
      setExpandedItems(expandedItems.filter((id) => id !== itemId));
    } else {
      setExpandedItems([...expandedItems, itemId]);
    }
  };

  const generateUniqueKey = () => {
    return uuidv4();
  };

  return (
    <FlatList
      data={data}
      keyExtractor={() => generateUniqueKey()}
      renderItem={({ item }) => (
        <FaqItem
          item={item}
          isExpanded={expandedItems.includes(item.id)}
          onPress={() => toggleItemExpansion(item.id)}
        />
      )}
    />
  );
};
