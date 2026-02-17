import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const PantsIcon = ({ width = 24, height = 24, color = '#6366F1' }) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      d="M8 2L6 12L8 22H10L12 12L14 22H16L18 12L16 2H8ZM10 4H14L15.5 12L14 20H12L10.5 12L12 9L10 4Z"
      fill={color}
    />
  </Svg>
);

export default PantsIcon;
