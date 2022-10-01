import './App.css';
import ManagerLogin from './components/ManagerLogin';
import Navbar from './components/Navbar';
import {Routes, Route} from "react-router-dom";
import ManagerPanel from './components/ManagerPanel';
import PrivateRoutes from './components/PrivateRoutes';
import Menu from './components/Menu'
import {AuthProvider} from './components/AuthContext'
import Home from './components/Home';
import { onIdTokenChanged } from 'firebase/auth';

function App() {
  return (
   <>
   <Navbar/>
          <AuthProvider>
            <Routes>
              <Route
              path="/ManagerPanel"
              element={
              <PrivateRoutes>
                  <ManagerPanel/>
              </PrivateRoutes>
                      }
              />
              <Route path='/ManagerLogin' element={<ManagerLogin/>}/>
              <Route path='/' element={<Home/>}/>
              <Route path='/Menu' element={<Menu/>}/>
            </Routes>
          </AuthProvider>     
  </>
  );
}

export default App;
