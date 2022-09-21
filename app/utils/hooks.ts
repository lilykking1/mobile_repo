import { ForwardedRef, useLayoutEffect, useRef } from 'react';
import { isFunction } from 'lodash';

export const useProxyRef = <T>(target: ForwardedRef<T>) => {
  const ref = useRef<T>();

  useLayoutEffect(() => {
    if (!target) {
      return;
    }

    if (isFunction(target)) {
      target(ref.current);
      return;
    }

    // eslint-disable-next-line no-param-reassign
    target.current = ref.current;
  }, [target, ref]);

  return ref;
};
