import { Route, Routes } from "react-router-dom";

import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Home from './pages/home/Home'
import Detail from './pages/detail/Detail'
import Author from './pages/author/Author'
import Profile from './pages/profile/Profile'

import './styles/reset.scss'
import './styles/style.scss'

function App() {

  return (
    <>
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/author" element={<Author />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/profile" element={<Profile />} />
    </Routes>
    </>
  )
}

export default App
