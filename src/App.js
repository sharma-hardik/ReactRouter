import Menu from './Menu';
import './App.css';

import Login from './Login/Login';

import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
    <Menu />
      <Routes>
      
      <Route path='/' exact element={ <Login />} />
      
      </Routes>

    </>

  );
}

export default App;