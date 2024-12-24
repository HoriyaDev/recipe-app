
// import './App.css';
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {

  const toggleTheme = () =>{
    document.documentElement.classList.toggle('dark')
  }
  return (

   <>

   <button onClick={toggleTheme} className="bg-red-200 px-3 py-2 ">dark</button>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Home />} />

  </Routes>
  </BrowserRouter>
   
   </>
  );
}

export default App;
