import { CONTAINER_ICON_RATIO, ICON_RATIO } from './constants';

export const getDimensionContainerIcon = (size: number): number =>
  size / CONTAINER_ICON_RATIO;

export const getDimensionIcon = (size: number): number => size / ICON_RATIO;

export const getDistanceContainerIcon = (size: number): number =>
  (getDimensionIcon(size) / ICON_RATIO) * -1;
