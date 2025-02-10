import React from "react"
import Header from "./components/Header/Header"
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home/HomePage"
import Footer from "./components/Footer/Footer"
import LocalAttraction from "./pages/LocalAttraction/LocalAttraction"
import NotFound from "./pages/NotFound/NotFound"
import EventoPage from "./pages/EventoPage/EventoPage"
import TrilhaPage from "./pages/TrilhaPage/TrilhaPage"
function App(): React.ReactNode {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={(<HomePage />)} />
        <Route path="atracaoLocal/:id" element={(<LocalAttraction />)} />
        <Route path="evento/:id" element={(<EventoPage />)} />
        <Route path="trilha/:id" element={(<TrilhaPage />)} />
        <Route path="*" element={(<NotFound />)} />
      </Routes>
      <Footer />  
    </>
  )
}

export default App;
