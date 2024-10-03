
import './App.css';
import Home from './Home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Create from './Create';
import Update from './Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>} />
        <Route path='/edit/:id' element={<Update/>}/>
       

      </Routes>
      
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
