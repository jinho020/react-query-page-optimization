import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';

export function QueryHandler() {
  const queryClient = useQueryClient();
  const location = useLocation();
  const lastPathname = useRef(location.pathname);

  // Invalidate all queries when the pathname changes
  useEffect(() => {
    if (lastPathname.current != location.pathname) {
      console.log('invalidate');
      queryClient.invalidateQueries();
      lastPathname.current = location.pathname;
    }
  }, [location]);

  return null;
}
