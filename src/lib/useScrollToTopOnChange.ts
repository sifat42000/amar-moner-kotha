import { useEffect } from 'react';

export const useScrollToTopOnChange = (
  dependencies: ReadonlyArray<unknown>,
  behavior: ScrollBehavior = 'smooth',
) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0, behavior });
    }
  }, dependencies);
};
