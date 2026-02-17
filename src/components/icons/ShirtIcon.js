import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ShirtIcon = ({ width = 24, height = 24, color = '#6366F1' }) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      d="M16 3L14.5 4.5L15.5 5.5L17.5 4L21 7.5V11H19V9L16.5 6.5L15 8V12H9V8L7.5 6.5L5 9V11H3V7.5L6.5 4L8.5 5.5L9.5 4.5L8 3C8 3 6.5 3 6 3C5.5 3 4 4 4 4L1 7V13H5V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V13H23V7L20 4C20 4 18.5 3 18 3C17.5 3 16 3 16 3Z"
      fill={color}
    />
  </Svg>
);

export default ShirtIcon;
