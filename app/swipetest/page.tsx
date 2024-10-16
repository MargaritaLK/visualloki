// import React, { useEffect, useRef } from 'react';
// import mapboxgl from 'mapbox-gl';
// import mapboxglCompare from 'mapbox-gl-compare';

// import 'mapbox-gl/dist/mapbox-gl.css';
// import 'mapbox-gl-compare/dist/mapbox-gl-compare.css';




// // extend mapboxgl, adding the Compare class
// // mapboxgl.Compare = mapboxglCompare;

// const Swipetest = () => {
//   const mapRef = useRef();
//   const beforeMapContainerRef = useRef();
//   const afterMapContainerRef = useRef();
//   const comparisonContainerRef = useRef();

//   const mapStyle = { position: 'absolute', top: 0, bottom: 0, width: '100%' };

//   useEffect(() => {
//     // some development servers will run this hook more than once
//     // return if the map has already been initialized
//     if (mapRef.current) return;

//     mapboxgl.accessToken = 'pk.eyJ1IjoibWFyZ2FyaXRhMTIiLCJhIjoiY2s1Nm5mNWpxMDRvcTNtbHppYm4xeTJpOSJ9.boMER5L2ddRxh1pR7hDWJA';

//     const beforeMap = new mapboxgl.Map({
//       container: beforeMapContainerRef.current,
//       style: 'mapbox://styles/mapbox/light-v11',
//       center: [0, 0],
//       zoom: 0
//     });

//     const afterMap = new mapboxgl.Map({
//       container: afterMapContainerRef.current,
//       style: 'mapbox://styles/mapbox/dark-v11',
//       center: [0, 0],
//       zoom: 0
//     });

//     mapRef.current = new mapboxglCompare(
//       beforeMap,
//       afterMap,
//       comparisonContainerRef.current
//     );
//   }, []);

//   return (
//     <div>

//       <div className="pt-[120px] min-h-screen flex-col items-center justify-between p-10 bg-[#354545]">
//         <div>
//           <div
//             id="comparison-container"
//             ref={comparisonContainerRef}
//             style={{ height: '100vh', width: '100%', position: 'relative' }}
//           >
//             <div
//               id="before-map"
//               style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }}
//             ></div>
//             <div
//               id="after-map"
//               style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }}
//             ></div>
//           </div>
//         </div>
//       </div>

//     </div>
//   );;
// };

// export default Swipetest;