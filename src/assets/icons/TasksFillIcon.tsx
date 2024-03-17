import React from 'react';

import {Svg, Path} from 'react-native-svg';

import {IconBase} from '../../components/Icon/Icon';

export function TasksFillIcon({size = 20, color = 'black'}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill={color}>
      <Path
        d="M17.7504 1.83847H12.4888C12.2785 1.30275 11.8773 0.837137 11.3417 0.507287C10.8061 0.177438 10.1632 0 9.50365 0C8.84411 0 8.2012 0.177438 7.66561 0.507287C7.13002 0.837137 6.72878 1.30275 6.51846 1.83847H1.46154C1.28258 1.81629 1.10016 1.82688 0.926324 1.86955C0.75249 1.91223 0.591192 1.98601 0.453074 2.08602C0.314957 2.18604 0.20316 2.31003 0.125061 2.44979C0.0469621 2.58956 0.00433753 2.74193 0 2.89685V18.9416C0.000956842 19.0814 0.0340386 19.2197 0.097356 19.3485C0.160673 19.4774 0.252987 19.5943 0.369025 19.6926C0.485063 19.7909 0.622553 19.8686 0.773645 19.9213C0.924737 19.9741 1.08647 20.0008 1.24962 20H17.7504C17.9135 20.0008 18.0753 19.9741 18.2264 19.9213C18.3774 19.8686 18.5149 19.7909 18.631 19.6926C18.747 19.5943 18.8393 19.4774 18.9026 19.3485C18.966 19.2197 18.999 19.0814 19 18.9416V2.89685C18.999 2.75704 18.966 2.61875 18.9026 2.4899C18.8393 2.36105 18.747 2.24414 18.631 2.14586C18.5149 2.04758 18.3774 1.96985 18.2264 1.91711C18.0753 1.86437 17.9135 1.83764 17.7504 1.83847ZM4.59654 3.71725C4.59654 3.55115 4.67353 3.39186 4.81058 3.27441C4.94762 3.15697 5.1335 3.09099 5.32731 3.09099H7.84115V2.69644C7.84115 2.31194 8.01939 1.94318 8.33665 1.67129C8.65391 1.3994 9.08421 1.24665 9.53288 1.24665C9.98156 1.24665 10.4119 1.3994 10.7291 1.67129C11.0464 1.94318 11.2246 2.31194 11.2246 2.69644V3.1223H13.7385C13.9323 3.1223 14.1181 3.18828 14.2552 3.30573C14.3922 3.42317 14.4692 3.58246 14.4692 3.74856V4.87583H4.56731L4.59654 3.71725ZM15.2073 9.49762L8.54269 15.2091L4.71346 11.9275C4.51965 11.7614 4.41077 11.5361 4.41077 11.3012C4.41077 11.0663 4.51965 10.8411 4.71346 10.675C4.90727 10.5089 5.17014 10.4156 5.44423 10.4156C5.71832 10.4156 5.98119 10.5089 6.175 10.675L8.55731 12.7166L13.775 8.2451C13.9688 8.079 14.2317 7.98569 14.5058 7.98569C14.7799 7.98569 15.0427 8.079 15.2365 8.2451C15.4304 8.41119 15.5392 8.63647 15.5392 8.87136C15.5392 9.10625 15.4304 9.33152 15.2365 9.49762H15.2073Z"
        fill={color}
      />
    </Svg>
  );
}
