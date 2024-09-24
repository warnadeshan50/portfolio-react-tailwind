import { Route,BrowserRouter,Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route index element=<Home />  />
      <Route path="/home" element=<Home /> />
      <Route path="/about" element=<About /> />
      <Route path="/projects" element=<Projects /> />
      <Route path="/Contact" element=<Contact /> />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
