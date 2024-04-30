import { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from "./components/Nav.jsx"
import Alerts from "./pages/Alerts.tsx"


export const CloseContext = createContext()

function App() {
  const [close, setClose] = useState<boolean |null>(false)
  const [navState, setNavState] = useState<boolean |null>(false)

  return (
    <BrowserRouter>
    <CloseContext.Provider value={{close, setClose, navState, setNavState}} >
    <div className="flex">
     <Nav/>
     <Routes>
       <Route path="/" element={<Alerts/>}/>
     </Routes>
     </div>
    </CloseContext.Provider>
     </BrowserRouter>
  )
}

export default App
