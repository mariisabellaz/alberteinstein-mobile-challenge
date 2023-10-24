import * as S from './styles';

type IconProps = Partial<S.CustomIconProps> & { name: string; testID?: string };

export function VectorIcon({ alignment, color, size, name, testID, ml, mb, mr, mt }: IconProps) {
  return (
    <S.StyledIcon
      name={name}
      size={size}
      color={color}
      alignment={alignment}
      testID={testID}
      mt={mt}
      ml={ml}
      mb={mb}
      mr={mr}
    />
  );
}
