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
import { useSelector } from 'react-redux'
import Details from './pages/HeadPhonesDetails/Details'
import Details2 from './pages/HeadPhonesDetails/Details2'
import Details3 from './pages/HeadPhonesDetails/Details3'

import Detail1 from './pages/EarphonesDetail/Detail1'

import DetailS1 from './pages/SpeakersDetail/Detail1'
import DetailS2 from './pages/SpeakersDetail/Detail2'
import CheckOut from './pages/CheckOut'


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
      <Route path='/headphones' element={
        <Headphones></Headphones>}></Route>
      <Route path='/earphones' element={
        <Earphones></Earphones>
      }></Route>
      <Route path='/speakers' element={
        <Speakers></Speakers>
      }></Route>

      <Route path='/checkout' element={<CheckOut></CheckOut>}></Route>

      <Route path='/product/:id' element={<Details></Details>}></Route>

      <Route path='/product2/:id' element={<Details2></Details2>}></Route>

      <Route path='/product3/:id' element={<Details3></Details3>}></Route>

      <Route path='/product4/:id' element={<Detail1></Detail1>}></Route>

      <Route path='/product7/:id' element={<DetailS1></DetailS1>}></Route>

      <Route path='/product8/:id' element={<DetailS2></DetailS2>}></Route>


    </Routes>

  )
}

export default App
