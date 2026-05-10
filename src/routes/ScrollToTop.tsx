import { useLocation } from 'react-router-dom';
import { useScrollToTopOnChange } from '../lib/useScrollToTopOnChange';

export const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useScrollToTopOnChange([pathname], 'auto');

  return null;
};
