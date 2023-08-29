import './App.css';
import Home from './Home'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Signin } from './Signin';
import {Cart} from './Cart'
function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
      <Route path="/" element={<Signin/>}></Route>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/Cart" element={<Cart/>}></Route>
    </Routes>
     </Router>
    </div>
  );
}

export default App;
