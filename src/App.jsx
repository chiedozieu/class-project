import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import Navbar from "./component/Navbar"
import { BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
   
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element=<Home /> > </Route>
    <Route path="/about" element=<About /> > </Route>
    <Route path="/contact" element=<Contact /> > </Route>
    <Route path="/services" element=<Services /> > </Route>
    

   
  </Routes>

  </BrowserRouter>

  )
}

export default App