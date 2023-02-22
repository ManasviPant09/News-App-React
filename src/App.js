import React from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Signin from './Pages/Signin';
import Home from './Pages/Home';
import Signup from './Pages/Signup';

const App = () => {
  return (
    <div>
        <BrowserRouter>
         <Routes>
          <Route exact path="/" element = {<Signin />}>
          </Route >
          <Route exact path="/signup" element = {<Signup />}>
          </Route >
          <Route path="/home" element = {<Home />}>
          </Route >
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

