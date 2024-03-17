import React from 'react';

import {Svg, Path} from 'react-native-svg';

import {IconBase} from '../../components/Icon/Icon';

export function TicketFillIcon({size = 20, color = 'black'}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill={color}>
      <Path
        d="M12.8571 20H0V14C0.757761 14 1.48449 13.5786 2.02031 12.8284C2.55612 12.0783 2.85714 11.0609 2.85714 10C2.85714 8.93913 2.55612 7.92172 2.02031 7.17157C1.48449 6.42143 0.757761 6 0 6V0H12.8571V5H14.2857V0H20V6C19.2422 6 18.5155 6.42143 17.9797 7.17157C17.4439 7.92172 17.1429 8.93913 17.1429 10C17.1429 11.0609 17.4439 12.0783 17.9797 12.8284C18.5155 13.5786 19.2422 14 20 14V20H14.2857V15H12.8571V20ZM12.8571 7V13H14.2857V7H12.8571Z"
        fill={color}
      />
    </Svg>
  );
}
