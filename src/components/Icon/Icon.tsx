import React from 'react';
import {Pressable} from 'react-native';

import {useAppTheme} from '@hooks';
import {ThemeColors} from '@theme';

import {ArrowLeftIcon} from '../../assets/icons/ArrowLeftIcon';
import {CheckRoundIcon} from '../../assets/icons/CheckRoundIcon';
import {EyeOffIcon} from '../../assets/icons/EyeOffIcon';
import {EyeOnIcon} from '../../assets/icons/EyeOnIcon';
import {HomeFillIcon} from '../../assets/icons/HomeFillIcon';
import {HomeIcon} from '../../assets/icons/HomeIcon';
import {MessageRoundIcon} from '../../assets/icons/MessageRoundIcon';
import {ProfileFillIcon} from '../../assets/icons/ProfileFillIcon';
import {ProfileIcon} from '../../assets/icons/ProfileIcon';
import {TasksFillIcon} from '../../assets/icons/TasksFillIcon';
import {TasksIcon} from '../../assets/icons/TasksIcon';
import {TicketFillIcon} from '../../assets/icons/TicketFillIcon';
import {TicketIcon} from '../../assets/icons/TicketIcon';

export interface IconBase {
  size?: number;
  color?: string;
}

export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  size?: number;
  onPress?: () => void;
}
export function Icon({
  name,
  color = 'backgroundContrast',
  size,
  onPress,
}: IconProps) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];

  if (onPress) {
    return (
      <Pressable hitSlop={10} onPress={onPress}>
        <SVGIcon color={colors[color]} size={size} />
      </Pressable>
    );
  }

  return <SVGIcon color={colors[color]} size={size} />;
}

const iconRegistry = {
  eyeOn: EyeOnIcon,
  eyeOff: EyeOffIcon,
  arrowLeft: ArrowLeftIcon,
  checkRound: CheckRoundIcon,
  messageRound: MessageRoundIcon,
  ticket: TicketIcon,
  ticketFill: TicketFillIcon,
  task: TasksIcon,
  taskFill: TasksFillIcon,
  homeFill: HomeFillIcon,
  home: HomeIcon,
  profile: ProfileIcon,
  profileFill: ProfileFillIcon,
};

type IconType = typeof iconRegistry;

type IconName = keyof IconType;
