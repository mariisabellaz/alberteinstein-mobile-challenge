import React, { useEffect, useState } from 'react';

import { ListItem, useFAQ } from '@context/faqContext';

import { Typography } from '@components/atoms/Typography';
import { Search } from '@components/molecules/Search';
import { FaqList } from '@components/organisms/FaqList';
import { CommonScreen } from '@components/templates/DefaultPage';
import * as S from './styles';

export function Faq() {
  const { fetchNextPage, isLoading, items } = useFAQ();
  const [searchText, setSearchText] = useState('');
  const [filteredItems, setFilteredItems] = useState<ListItem[]>([]);

  const onSearch = (searchText: string) => {
    setSearchText(searchText);

    const searchWords = searchText.toLowerCase().split(' ');
    const searchList = items.filter((item) =>
      searchWords.every((word) => item.title.toLowerCase().includes(word))
    );

    setFilteredItems(searchList);
  };

  useEffect(() => {
    fetchNextPage();
  }, []);
  //onSubmitEditing
  console.tron.log('RESULTS FILTER', filteredItems);
  console.tron.log('RESULTS', items);
  return (
    <CommonScreen.Header screenName="Central de Ajuda">
      <S.Container>
        <Typography mb="MD" testID="title">
          Como podemos lhe ajudar?
        </Typography>
        <S.SearchContainer>
          <Search value={searchText} onChangeText={onSearch} testID="input-search" />
        </S.SearchContainer>
        <Typography appearance="title" mt="XL" mb="MD" testID="subtitle">
          Tópicos populares
        </Typography>

        {isLoading ? (
          <></>
        ) : (
          <FaqList
            data={filteredItems.length >= 1 ? filteredItems : items}
            onEndReached={fetchNextPage}
            onEndReachedThreshold={0.1}
            testID="faq-list"
          />
        )}
      </S.Container>
    </CommonScreen.Header>
  );
}
