
import './App.css';


import Department from './components/Department';
import Stocks from './components/Stocks';
import {BrowserRouter,Route, Routes, Link} from 'react-router-dom'
import Navigation from './components/Navigation'
import Login1 from './components/Login1';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <BrowserRouter>
    <div className='container'>
      <h2 className='m-3 d-flex justify-content-center'>Stock Management Portal</h2>
      
      <nav className="navbar navbar-expand-lg navheader">      
          <div className="collapse navbar-collapse" >      
            <ul className="navbar-nav mr-auto"> 
                
              <li className="nav-item justify-content-right">      
                <Link to={'/Register'} className="nav-link">Register</Link>      
              </li>    
            </ul>      
          </div>      
        </nav>
<br/>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Login1/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
       
        <Route path='/department' element={<Department/>} />
        <Route path='/stocks' element={<Stocks/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
