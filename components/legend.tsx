import React from 'react';

export default function Legend() {
  return (
    <div className="legend" style={{
      position: 'absolute', 
      top: "10vh", 
      left: "3vw", 
      padding: '25px', 
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderRadius: '5px',
      margin: '10px',
      zIndex:20,
    }}>
      <h4>Velocity (m/s)</h4>
      <br />
      <div><span style={{ backgroundColor: '#ef4347', width: 20, height: 20, display: 'inline-block', marginRight: 5 }}></span> &gt; 3 m/s</div>
      <div><span style={{ backgroundColor: '#f3722b', width: 20, height: 20, display: 'inline-block', marginRight: 5 }}></span> 2.5 - 3 m/s</div>
      <div><span style={{ backgroundColor: '#f89621', width: 20, height: 20, display: 'inline-block', marginRight: 5 }}></span> 2 - 2.5 m/s</div>
      <div><span style={{ backgroundColor: '#f9c750', width: 20, height: 20, display: 'inline-block', marginRight: 5 }}></span> 1.5 - 2 m/s</div>
      <div><span style={{ backgroundColor: '#90be6d', width: 20, height: 20, display: 'inline-block', marginRight: 5 }}></span> 1 - 1.5 m/s</div>
    </div>
  );
}
