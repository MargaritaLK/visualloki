import React from 'react';

export default function LegendBuildings() {
  return (
    <div className="legend" style={{
      position: 'absolute', 
      top: "10vh", 
      left: "3vw", 
      padding: '25px', 
      backgroundColor: 'rgb(53, 69, 69)',
      borderRadius: '5px',
      margin: '10px',
      zIndex: 20,
    }}>
      <h4>Flood Depth (m)</h4>
      <br />
      <div><span style={{ backgroundColor: '#d62828', width: 20, height: 20, display: 'inline-block', marginRight: 5 }}></span> &gt; 1.5 m</div>
      <div><span style={{ backgroundColor: '#f77f00', width: 20, height: 20, display: 'inline-block', marginRight: 5 }}></span> 1 - 1.5 m</div>
      <div><span style={{ backgroundColor: '#fcbf49', width: 20, height: 20, display: 'inline-block', marginRight: 5 }}></span> 0.5 - 1 m</div>
      <div><span style={{ backgroundColor: '#eae2b7', width: 20, height: 20, display: 'inline-block', marginRight: 5 }}></span> 0.05 - 0.5 m</div>
    </div>
  );
}
