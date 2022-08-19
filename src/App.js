import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home.js'
function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path = '/' element={<Home></Home>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
