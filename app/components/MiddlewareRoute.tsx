'use client';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';
import { getAccessToken } from '../../services/cookie.service';

interface MiddlewareRouteProps {
  children: React.ReactNode;
}

const MiddlewareRoute: React.FC<MiddlewareRouteProps> = ({ children }) => {
  useEffect(() => {
    const accessToken = getAccessToken();
    if (!accessToken) {
      redirect('/auth');
    }
  }, []);

  return <>{children}</>;
};

export default MiddlewareRoute;
