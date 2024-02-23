import React from 'react';
import {Pressable} from 'react-native';

import {useAppTheme} from '../../hooks/useAppTheme';
import {ThemeColors} from '../../theme/theme';
import {EyeOnIcon} from '../../assets/icons/EyeOnIcon';
import {EyeOffIcon} from '../../assets/icons/EyeOffIcon';
import {ArrowLeftIcon} from '../../assets/icons/ArrowLeftIcon';

export interface IconBase {
  size?: number;
  color?: string;
}

interface Props {
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
}: Props) {
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
};

type IconType = typeof iconRegistry;

type IconName = keyof IconType;
