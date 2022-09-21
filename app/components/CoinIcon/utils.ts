import { OUTLINE_DISTANCE } from './constants';

function getOutlineDistance(isOutlined: boolean): number {
  return isOutlined ? OUTLINE_DISTANCE : 0;
}

export function getIconSize(size: number): number {
  return size || 22;
}

export function getContainerSize(
  iconSize: number,
  isOutlined: boolean
): number {
  return iconSize + getOutlineDistance(isOutlined);
}

export function getContainerBorderWidth(isOutlined: boolean): number {
  return isOutlined ? 1 : 0;
}
