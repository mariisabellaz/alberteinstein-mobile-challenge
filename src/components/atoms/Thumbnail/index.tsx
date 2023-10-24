import { ImageSourcePropType } from 'react-native';

import * as S from './styles';

type ThumbnailImageProps = Partial<S.CustomImageProps> & {
  imageSource?: ImageSourcePropType;
  imageUri?: ImageSourcePropType;
  testID?: string;
};

export function Thumbnail({
  width,
  height,
  mr,
  ml,
  mt,
  mb,
  resizeMode,
  position,
  index,
  imageSource,
  imageUri,
  accessibilityLabel,
  testID,
}: ThumbnailImageProps) {
  if (typeof imageUri === 'string') {
    return (
      <S.Container
        testID={testID}
        source={{ uri: imageUri }}
        width={width}
        height={height}
        mr={mr}
        ml={ml}
        mt={mt}
        mb={mb}
        resizeMode={resizeMode}
        position={position}
        index={index}
        accessible={true}
        accessibilityRole="image"
        accessibilityLabel={accessibilityLabel}
      />
    );
  }

  return (
    <S.Container
      source={imageSource}
      width={width}
      height={height}
      mr={mr}
      ml={ml}
      mt={mt}
      mb={mb}
      resizeMode={resizeMode}
      position={position}
      index={index}
      accessible={true}
      accessibilityRole="image"
      accessibilityLabel={accessibilityLabel || 'image'}
    />
  );
}
