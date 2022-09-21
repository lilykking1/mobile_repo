/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * A simplified version of https://github.com/primus/eventemitter3
 */

const listenersMap: { [id: string]: Array<(...params: any[]) => void> } = {};

function addListener(
  eventName: string,
  listener: (...params: any[]) => void
): void {
  listenersMap[eventName] = listenersMap[eventName] || [];
  listenersMap[eventName].push(listener);
}

function removeListener(
  eventName: string,
  listener: (...params: any[]) => void
): void {
  const lis = listenersMap[eventName];
  if (!lis) {
    return;
  }

  for (let i = lis.length - 1; i >= 0; i -= 1) {
    if (lis[i] === listener) {
      lis.splice(i, 1);
      break;
    }
  }
}

function notify<T = any>(eventName: string, ...params: T[]): boolean {
  const listeners = listenersMap[eventName];
  if (!listeners) {
    return false;
  }
  listeners.forEach((fnc) => {
    fnc(...params);
  });
  return true;
}

export default {
  addListener,
  removeListener,
  notify,
};
