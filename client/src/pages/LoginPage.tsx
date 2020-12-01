import React from 'react';
import { Redirect } from 'react-router-dom';
import { LoginBox } from '@/components';
import { useAuth } from '@/hooks';

const LoginPage: React.FC = () => {
  const { accessToken } = useAuth();
  return <>{accessToken ? <Redirect to="/" /> : <LoginBox />}</>;
};

export default LoginPage;