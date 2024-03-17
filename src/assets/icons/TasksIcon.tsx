import React from 'react';

import {Svg, Path} from 'react-native-svg';

import {IconBase} from '../../components/Icon/Icon';

export function TasksIcon({size = 20, color = 'black'}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill={color}>
      <Path
        d="M17.7504 20H1.24962C1.08647 20.0008 0.924737 19.9743 0.773645 19.9221C0.622553 19.8699 0.485063 19.7929 0.369025 19.6955C0.252987 19.5982 0.160673 19.4824 0.097356 19.3547C0.0340386 19.2271 0.000956842 19.0902 0 18.9517V3.05949C0.00433753 2.90605 0.0469621 2.75512 0.125061 2.61669C0.20316 2.47825 0.314957 2.35545 0.453074 2.25638C0.591192 2.15731 0.75249 2.08423 0.926324 2.04197C1.10016 1.9997 1.28258 1.98921 1.46154 2.01118H2.92308V3.25179H1.46154V18.7594H17.5385V3.25179H16.0769V2.01118H17.7212C17.8867 2.00704 18.0516 2.03105 18.2061 2.0818C18.3606 2.13255 18.5015 2.20902 18.6207 2.30669C18.7399 2.40437 18.8348 2.52129 18.8999 2.65057C18.9651 2.77985 18.9991 2.91889 19 3.05949V18.9517C18.999 19.0902 18.966 19.2271 18.9026 19.3547C18.8393 19.4824 18.747 19.5982 18.631 19.6955C18.5149 19.7929 18.3774 19.8699 18.2264 19.9221C18.0753 19.9743 17.9135 20.0008 17.7504 20Z"
        fill={color}
      />
      <Path
        d="M8.87478 15L5.16346 11.7933C5.0509 11.6782 4.99278 11.5306 5.00072 11.38C5.00866 11.2294 5.08207 11.087 5.20629 10.9812C5.3305 10.8754 5.49636 10.814 5.67071 10.8093C5.84505 10.8045 6.01504 10.8568 6.14668 10.9557L8.87478 13.3129L14.8572 8.14386C14.9897 8.04585 15.1601 7.99463 15.3343 8.00045C15.5086 8.00626 15.6739 8.06868 15.7972 8.17523C15.9205 8.28178 15.9928 8.42461 15.9995 8.57518C16.0062 8.72575 15.9469 8.87297 15.8335 8.98741L8.87478 15Z"
        fill={color}
      />
      <Path
        d="M15 6H4V3.55546C4.00181 3.14439 4.17116 2.75066 4.47118 2.45998C4.7712 2.16931 5.17759 2.00524 5.60187 2.00348H6.8325C6.98396 1.43037 7.32798 0.9224 7.81034 0.559648C8.2927 0.196896 8.88595 0 9.49656 0C10.1072 0 10.7004 0.196896 11.1828 0.559648C11.6651 0.9224 12.0092 1.43037 12.1606 2.00348H13.3912C13.8167 2.00348 14.2249 2.16678 14.5264 2.45764C14.8279 2.7485 14.9982 3.14324 15 3.55546V6ZM5.375 4.66783H13.625V3.55546C13.625 3.49717 13.6011 3.44126 13.5585 3.40004C13.516 3.35881 13.4583 3.33566 13.3981 3.33566H10.875V2.66957C10.875 2.31625 10.7301 1.97741 10.4723 1.72758C10.2144 1.47775 9.86467 1.3374 9.5 1.3374C9.13533 1.3374 8.78559 1.47775 8.52773 1.72758C8.26987 1.97741 8.125 2.31625 8.125 2.66957V3.33566H5.60187C5.57208 3.33566 5.54258 3.34134 5.51505 3.35239C5.48753 3.36343 5.46252 3.37962 5.44145 3.40004C5.42038 3.42045 5.40367 3.44468 5.39227 3.47135C5.38087 3.49801 5.375 3.5266 5.375 3.55546V4.66783Z"
        fill={color}
      />
    </Svg>
  );
}
