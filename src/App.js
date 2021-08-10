      import React, { useState } from 'react';
      import Popup from './Popup';
      import "./popupstyle.css";
      
      function App() {
        const [isOpen, setIsOpen] = useState(false);
       
        const togglePopup = () => {
          setIsOpen(!isOpen);
        }
       
        return (
        <div className="collapsible">
          
       



        <input
            className="button"
            type="button"
            value="Calls"
            onClick={togglePopup}
          />   
          {isOpen && <Popup
            content={<>
            <div className="pop-up">
            <div className="popupContainer">
              <b className="popupBoard">Board</b>
              <p>saurabh : 500</p>
              <p>tanish : joined</p>
              <p>bablu : called 200</p>
              </div>
              </div>
            </>}
            handleClose={togglePopup}
          />}
        </div> 
  );
      }
      
      export default App;
 


