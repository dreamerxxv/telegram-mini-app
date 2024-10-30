import { BrowserRouter, Route, Routes } from "react-router-dom"
import HeartRoseLetter from "./components/HeartRoseLetter"
import Home from "./pages/Home"
import Games from "./pages/Games"

function App() {

  return (
    <>
      <BrowserRouter>
        {/* <HeartRoseLetter /> */}

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/games' element={<Games />} />
          <Route path='/rlhGame' element={<HeartRoseLetter />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
