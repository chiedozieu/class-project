import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import Navbar from "./component/Navbar"
import Footer from "./component/Footer"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
   
  <Router>
  <Navbar />
  <Routes>
    <Route path="/" element=<Home/>/> 
    <Route path="/about" element=<About/>/> 
    <Route path="/contact" element=<Contact/>/> 
    <Route path="/services" element=<Services/>/> 
  </Routes>
  <Footer />

  </Router>

  )
}

export default App