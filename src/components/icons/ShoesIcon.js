import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ShoesIcon = ({ width = 24, height = 24, color = '#6366F1' }) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      d="M3 18C3 19.11 3.9 20 5 20H19C20.11 20 21 19.11 21 18V14C21 13.45 20.55 13 20 13H16L14.42 7.87C14.16 7.05 13.42 6.5 12.58 6.5H8.42C7.58 6.5 6.84 7.05 6.58 7.87L5 13H4C3.45 13 3 13.45 3 14V18ZM5 15H19V18H5V15ZM8 8.5H12L13 13H11L8 8.5Z"
      fill={color}
    />
  </Svg>
);

export default ShoesIcon;
