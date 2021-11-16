import './App.scss';
import { Header, Home, Button } from './components/index';
import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';



function App() {
  useEffect(() => {
    const stalker = document.getElementById('stalker');
    let hovFlag = false;
    document.addEventListener('mousemove', e => {
      // マウス追従
      if (!hovFlag) {
        stalker.style.transform = 'translate(' + e.clientX + 'px,' + e.clientY + 'px)';
      }
    });

    const linkElem = document.querySelectorAll('li');
    const btnElem = document.querySelectorAll('button');
    linkElem.forEach(elem => {
      stalkerAdjustment(elem, hovFlag);
    });

    btnElem.forEach(elem => {
      stalkerAdjustment(elem, hovFlag);
    });

    function stalkerAdjustment(elem, flag) {
      elem.addEventListener('mouseover', e => {
        flag = true;
        stalker.style.background = 'transparent';
      });
      elem.addEventListener('mouseout', e => {
        flag = false;
        stalker.style.background = 'rgba(0,0,0,0.5)';
      });
    }
  }, []);
  return (
    <div className="App">
      
      <Router>
        <div id="stalker"></div>  
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}/>
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
