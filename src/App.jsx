import { Route, Routes } from "react-router-dom";

import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Home from './pages/home/Home'
import Detail from './pages/detail/Detail'
import Author from './pages/author/Author'
import Profile from './pages/profile/Profile'
import Search from './pages/search/Search'

import NavLayout from "./layout/NavLayout";

import './styles/reset.scss'
import './styles/style.scss'

function App() {

  return (
    <>
    <Routes>
      {/* <Route path="/" element={<NavLayout />}> */}
        <Route index element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/author" element={<Author />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
      {/* </Route > */}
    </Routes>
    </>
  )
}

export default App
