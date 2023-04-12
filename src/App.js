import {Nav} from "./Navbar/Nav";
import {Home} from "./Body/Home";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Register from "./Body/Register";
import Login from "./Body/Login";
import { Footer } from "./Footer/Footer";


function App() {

  return (
    <div className="App">
      <BrowserRouter> 
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Login" element={<Login/>}/>
      
        </Routes>
        <Footer/>
      </BrowserRouter>
      </div>
      )
}

export default App;
