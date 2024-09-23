import React from 'react';

export default function legendDepth() {
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
      <h4>Flood Depth (m)</h4>
      <br />
      <div><span style={{ backgroundColor: '#051919', width: 20, height: 20, display: 'inline-block', marginRight: 5 }}></span> &gt; 2 m/s</div>
      <div><span style={{ backgroundColor: '#0c4f51', width: 20, height: 20, display: 'inline-block', marginRight: 5 }}></span> 1.5 - 2 m/s</div>
      <div><span style={{ backgroundColor: '#27757a', width: 20, height: 20, display: 'inline-block', marginRight: 5 }}></span> 1 - 1.5 m/s</div>
      <div><span style={{ backgroundColor: '#348c97', width: 20, height: 20, display: 'inline-block', marginRight: 5 }}></span> 0.5 - 1 m/s</div>
      <div><span style={{ backgroundColor: '#359eac', width: 20, height: 20, display: 'inline-block', marginRight: 5 }}></span> 0.1 - 0.5 m/s</div>
    </div>
  );
}

