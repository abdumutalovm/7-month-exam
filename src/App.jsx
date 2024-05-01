import React from 'react'
import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Headphones from './pages/Headphones'
import Speakers from './pages/Speakers'
import Earphones from './pages/Earphones'
import ErrorPage from './pages/ErrorPage'
import Layout from './layout/index'
import { useSelector } from 'react-redux'

function App() {
  const navigate = useNavigate();
  const token = useSelector(state => state.token.value);
  const location = useLocation();


  useEffect(() => {
    if (!token && location.pathname != '/register') {
      navigate('/login')
    }
  }, [navigate, token])

  function ProtectedRoute({ children, isAuthentication, redirectTo = '/login' }) {
    if (!isAuthentication) {
      navigate(redirectTo);
    }
    return children;
  }

  return (
    <Routes>
      {/* Public */}
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='*' element={<ErrorPage></ErrorPage>}></Route>

      {/* Protected */}
      <Route path='/' element={
        <ProtectedRoute isAuthentication={token ? true : false}>
          <Home></Home>
        </ProtectedRoute>
      }>
      </Route>
      <Route path='/headphones' element={<Layout>
        <Headphones></Headphones>
      </Layout>}></Route>
      <Route path='/earphones' element={<Layout>
        <Earphones></Earphones>
      </Layout>}></Route>
      <Route path='/speakers' element={<Layout>
        <Speakers></Speakers>
      </Layout>}></Route>
    </Routes>

  )
}

export default App
