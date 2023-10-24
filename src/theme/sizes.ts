import normalize from 'react-native-normalize';

export default {
  SPACING: {
    NONE: normalize(0),
    XS: normalize(4),
    SM: normalize(12),
    MD: normalize(16),
    LG: normalize(20),
    XL: normalize(24),
    XXL: normalize(28),
  },
  HEIGHT: {
    INPUT: normalize(48),
    BUTTON: normalize(50),
  },
  BORDER: {
    INPUT: normalize(1.5),
    HEADER: normalize(1.5),
    RADIUS: {
      BUTTON: normalize(10),
      INPUT: normalize(6),
    },
  },
};
