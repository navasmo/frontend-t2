import React from 'react';
//import QR from '../assets/qr.png';
import './result.css';
//<img src={QR} alt="QR code" style={{ width: '100%', height: '400px', borderRadius: 15 }} />
function Result() {
  return (
    <div className="body" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',backgroundColor: '#c5d4ed', maxWidth: '1200px', height: '65vh', boxShadow: '12px 18px 40px rgba(0, 0, 0, 0.1)'}}>
      <div className="container"style={{ width: '330px', height: '550px', backgroundColor: 'white', padding:20, borderRadius: 15, boxShadow: '2px 8px 20px rgba(0, 0, 0, 0.1)'}}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%' }}>
          
          <div style={{ display: 'flex', backgroundColor: 'white', color: 'black', flexDirection: 'column', justifyContent: 'center', height: '50%', }}>
            <h2>Improve your front-end skills by building projects</h2>
            <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Result;
