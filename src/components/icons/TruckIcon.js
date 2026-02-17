import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

const TruckIcon = ({ width = 24, height = 24, color = '#0EA5E9' }) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      d="M18 18.5C18.83 18.5 19.5 17.83 19.5 17C19.5 16.17 18.83 15.5 18 15.5C17.17 15.5 16.5 16.17 16.5 17C16.5 17.83 17.17 18.5 18 18.5ZM19.5 9.5L21.46 12.77C21.82 13.37 22 14.06 22 14.77V17C22 18.1 21.1 19 20 19V20C20 20.55 19.55 21 19 21H18C17.45 21 17 20.55 17 20V19H7V20C7 20.55 6.55 21 6 21H5C4.45 21 4 20.55 4 20V19C2.9 19 2 18.1 2 17V8C2 6.9 2.9 6 4 6H17V9.5H19.5ZM4 8V17H17V8H4ZM6 18.5C6.83 18.5 7.5 17.83 7.5 17C7.5 16.17 6.83 15.5 6 15.5C5.17 15.5 4.5 16.17 4.5 17C4.5 17.83 5.17 18.5 6 18.5ZM17 12L19.5 12V10.5L18.33 10.5L17 12Z"
      fill={color}
    />
  </Svg>
);

export default TruckIcon;
