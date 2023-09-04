import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './Home';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Cursor from './components/Cursor';
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from 'react';
import Script from './Script';
import Loader from './components/Loader';


function App() {
  const containerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    if (document.readyState === 'complete') {
      setIsLoading(false);
    }
    setTimeout(() => {setIsLoading(false)}, 5000);
    console.log('loading -> ',isLoading);
    console.log(document.readyState);
  },[document.readyState]);
  return (
    <>
      <Cursor />
      {/* {isLoading ? <Loader/> : null} */}
        
      
        <Routes>
          <Route path="/" element={

            <div   >
              <Home />
            </div>

          } />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/script" element={<Script/> } />
          <Route path="*" element={< NotFound />} />
        </Routes>
      
    </>
  );
}

export default App;
