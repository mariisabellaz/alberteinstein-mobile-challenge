import React, { PropsWithChildren } from 'react';

import logo from '@assets/img/logo.png';
import { Thumbnail } from '@components/atoms/Thumbnail';
import { Typography } from '@components/atoms/Typography';
import { Header } from '@components/molecules/Header';
import * as S from './styles';

type AppearanceType =
  | 'display'
  | 'heading'
  | 'caption'
  | 'paragraph'
  | 'title'
  | 'subtitle'
  | 'placeholder'
  | 'button'
  | 'helperText';

type ScreenTypographyProps = {
  subtitle?: string;
  title?: string;
  appearance?: AppearanceType;
  scrollEnabled?: boolean;
};

const Page = ({ children }: PropsWithChildren) => <S.SafeArea>{children}</S.SafeArea>;

const ScreenHeading: React.FC<PropsWithChildren & ScreenTypographyProps> = ({
  children,
  subtitle = '',
  title = '',
}) => (
  <S.Container testID="page-container">
    <S.SafeArea edges={['top']}>
      <Thumbnail
        imageSource={logo}
        width={130}
        height={100}
        testID="page-logo"
        resizeMode="stretch"
        mb="MD"
      />
      <Typography appearance="heading" mb="XS" testID="page-title">
        {title}
      </Typography>
      <Typography appearance="subtitle" mb="MD" testID="page-subtitle">
        {subtitle}
      </Typography>

      {children}
    </S.SafeArea>
  </S.Container>
);

const ScreenHeader: React.FC<PropsWithChildren & { screenName: string }> = ({
  children,
  screenName,
}) => (
  <S.Container testID="page-container">
    <Header screenName={screenName} />
    <S.SafeArea>{children}</S.SafeArea>
  </S.Container>
);

Page.Heading = ScreenHeading;
Page.Header = ScreenHeader;
// Page.Heading = ScreenHeading;

export default Page;
