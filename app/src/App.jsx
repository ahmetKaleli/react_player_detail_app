import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Details from "./pages/Details"
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './pages/Contact'

function App() {

  return (
    <>
     <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/detail/:id' element={<Details />} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer />
     </Router>
    </>
  )
}

export default App
