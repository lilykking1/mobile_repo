import { STICKY_HEADER_THRESHOLD } from '@app/components/StickyHeader/constants';

export const snapPoint = (
  position: number,
  velocity = 0,
  stickyThreshold = STICKY_HEADER_THRESHOLD
): number => {
  'worklet';

  const start = 0;
  const end = stickyThreshold;
  const threshold = end * 0.45;

  const offset = position + 0.2 * velocity;

  let snap;

  if (offset > start && offset < threshold) {
    snap = 0;
  }

  if (offset >= threshold && offset < end) {
    snap = stickyThreshold;
  }

  return snap;
};
