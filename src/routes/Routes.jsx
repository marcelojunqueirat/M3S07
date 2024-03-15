import { Routes, Route, Navigate } from 'react-router-dom';
import SigninPage from '../pages/SigninPage';
import SignupPage from '../pages/SignupPage';
import HomePage from '../pages/HomePage';
import { useAuth } from '../context/AuthContext';

export default function RoutesComponent() {
  const { isAuthenticated } = useAuth();

  const loginRedirect = (children) => {
    if (isAuthenticated) {
      return <Navigate to='/home' replace />
    }
    return children;
  }

  return (
    <Routes>
      <Route path='/signin' element={
        loginRedirect(<SigninPage />)
      } />
      <Route path='/signup' element={
        loginRedirect(<SignupPage />)
      } />

      {isAuthenticated ? (
        <>
          <Route path='/' exact Component={HomePage} />
          <Route path='/home' Component={HomePage} />
        </>

      ) : (
        <Route path='*' element={<Navigate replace to='/signin' />} />
      )}
    </Routes>
  )
}