import { Routes , Route } from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Skills from "./pages/Skills"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/projects" element={<Projects/>}></Route>
      <Route path="/about" element={<About/>} />
      <Route path="/skills" element={<Skills/>} />
    </Routes>
  )
}

export default App
