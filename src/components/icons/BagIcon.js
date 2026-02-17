import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const BagIcon = ({ width = 24, height = 24, color = '#6366F1' }) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      d="M5 20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V8H5V20ZM7 10H17V20H7V10ZM16.5 3L15.5 2H8.5L7.5 3H4V5H20V3H16.5Z"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20 6H4L5 20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20L20 6Z"
      fill={color}
      opacity="0.3"
    />
    <Path
      d="M9 9V6C9 4.34 10.34 3 12 3C13.66 3 15 4.34 15 6V9"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </Svg>
);

export default BagIcon;
