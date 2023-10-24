import { TouchableOpacityProps } from 'react-native';

import { Typography } from '@components/atoms/Typography';
import { VectorIcon } from '@components/atoms/VectorIcon';
import * as S from './styles';

type FaqItemType = {
  title: string;
  body: string;
};

type FaqItemProps = Partial<S.CustomItemProps> & TouchableOpacityProps & { item: FaqItemType };

export function FaqItem({ isExpanded, item, ...rest }: FaqItemProps) {
  return (
    <S.Container testID="menu-faq">
      <S.TitleWrapper>
        <S.Wrapper>
          <S.Title appearance="paragraph" numberOfLines={3} isExpanded={isExpanded}>
            {item?.title}
          </S.Title>
        </S.Wrapper>
        <S.ButtonIcon
          accessible={true}
          accessibilityLabel="isExpanded"
          accessibilityRole="button"
          hitSlop={30}
          {...rest}
        >
          <VectorIcon
            name={isExpanded ? 'minus' : 'plus'}
            color={isExpanded ? 'LINK' : 'ICON'}
            size="SM"
            alignment="right"
          />
        </S.ButtonIcon>
      </S.TitleWrapper>

      {isExpanded && <Typography appearance="body">{item?.body}</Typography>}
    </S.Container>
  );
}
