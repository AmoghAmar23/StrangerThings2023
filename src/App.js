import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Login from './Login';
import Signup from './Signup';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element = {<Login/>}  />
        <Route path="/signup" element = {<Signup/>}  />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
