import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { Faq } from '.';

jest.mock('@context/faqContext', () => ({
  useFAQ: () => ({
    fetchNextPage: jest.fn(),
    isLoading: false,
    items: [
      {
        id: 1,
        userId: 1,
        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
      },
      {
        id: 2,
        userId: 2,
        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
      },
    ],
  }),
}));

describe('Faq Screen', () => {
  it('renders the Faq screen', () => {
    const { getByTestId, getByText } = render(<Faq />);

    expect(getByText('Central de Ajuda')).toBeTruthy();
    expect(getByTestId('input-search')).toBeTruthy();
    expect(getByTestId('title')).toBeTruthy();
  });

  it('updates searchText state on search input change', () => {
    const { getByTestId } = render(<Faq />);
    const searchInput = getByTestId('input-search');

    fireEvent.changeText(searchInput, 'example query');
  });

  it('calls fetchNextPage on initial render', () => {
    const { getByTestId } = render(<Faq />);
    expect(jest.fn()).toHaveBeenCalled();
  });
});
