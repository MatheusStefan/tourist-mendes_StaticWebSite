import React from "react"
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"

function App(): React.ReactNode {
  return (
    <main>
      <Routes>
        <Route path="/" element={(<Header />)} />
      </Routes>
    </main>
  )
}

export default App
