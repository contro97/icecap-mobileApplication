import { Dimensions, Platform, PixelRatio, useWindowDimensions } from 'react-native';

  const window = useWindowDimensions();

  const fontSize = window.width < 500 ? 16 : 24;

  const boxWidth = window.width * 0.9;
  const boxHeight = window.height * .925;

  export function responsiveFontSize(fontSize) {
    const ratio = fontSize / 375;
    const newSize = ratio * window.width;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }

  export function responsiveHeight(height) {
    const ratio = height / 812;
    const newSize = ratio * window.height;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }

  export function responsiveWidth(width) {
    const ratio = width / 375;
    const newSize = ratio * window.width;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }








// const {
//   width: SCREEN_WIDTH,
//   height: SCREEN_HEIGHT,
// } = Dimensions.get('window');

// const scale = SCREEN_WIDTH / 375;

// const scaleVertical = SCREEN_HEIGHT / 812;

// export function actuatedNormalize(size) {
//   const newSize = size * scale
//   if (Platform.OS === 'ios') {
//     return Math.round(PixelRatio.roundToNearestPixel(newSize))
//   } else {
//     return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1
//   }
// }

// export function actuatedNormalizeVertical(size) {
//   const newSize = size * scaleVertical
//   if (Platform.OS === 'ios') {
//     return Math.round(PixelRatio.roundToNearestPixel(newSize))
//   } else {
//     return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1
//   }
// }

// export function isTab() {
//   if (SCREEN_WIDTH > 550) {
//     return true
//   } else {
//     return false
//   }
// }

// export function isScreenHeight770() {
//   if (SCREEN_HEIGHT > 740 && SCREEN_HEIGHT < 760 ) {
//     return true
//   } else {
//     return false
//   }
// }