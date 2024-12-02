import React from "react"
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"

function App(): React.ReactNode {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={(<Home />)} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
