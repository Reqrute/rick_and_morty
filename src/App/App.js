import React, { lazy, Suspense } from 'react';
import {Routes, Route} from 'react-router-dom'
import Navbar from '../Components/Header/Header';
import { Login } from '../Components/ClientModal/Login';
import { SignUp } from '../Components/ClientModal/SignUp';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/userSlice';
import Loader from '../Components/Loader/Loader';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"



function App() {

  const Characters = lazy(() => import('../Pages/Characters'))
  const Episodes = lazy(() => import('../Pages/Episode'))
  const Location = lazy(() => import('../Pages/Location'))
  const Profile = lazy(() => import('../Pages/Profile'))

  const dispatch = useDispatch();
  sessionStorage.length && dispatch(setUser({
    email : sessionStorage.getItem("Email"),
    token : sessionStorage.getItem("Token"),
    userId : sessionStorage.getItem("id"),
    password : sessionStorage.getItem("Password"),
    favorite : JSON.parse(sessionStorage.getItem("Favorite")),
  }))
  return (
    <Suspense fallback={<Loader />}>
      <div className="App">
        <Navbar />
        <Login />
        <SignUp/>

      </div>
      <Routes>
        <Route exact path="/" element={<Characters />} />
        <Route exact path="/episodes" element={<Episodes />} />
        <Route exact path="/location" element={<Location />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
      </Suspense>
  );
}

export default App;
