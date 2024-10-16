// 'use client';

// import * as React from 'react';
// import { useState, useEffect } from 'react';
// import { Navbar } from '@/components/navbar';
// import { Footer } from '@/components/footer';
// import CompareMap from "@/components/CompareMap";
// import { Base500yrDepthLayers } from '../../utils/mapboxMaps/Base500yrDepthLayers';
// import { Wai500yrDepthLayers } from '../../utils/mapboxMaps/wai500yrDepthLayers';

// const LAYERS_BEFOREMAP = Base500yrDepthLayers;
// const LAYERS_AFTERMAP = Wai500yrDepthLayers;

// export default function Diffmap() {
//   const [beforeLayers, setBeforeLayers] = useState<any[]>([]);
//   const [afterLayers, setAfterLayers] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const allLayers = [...LAYERS_BEFOREMAP, ...LAYERS_AFTERMAP];

//       try {
//         const dataPromises = allLayers.map(async (layer) => {
//           const response = await fetch(layer.url);
//           const data = await response.json();
//           return { ...layer, data };
//         });

//         const results = await Promise.all(dataPromises);

//         setBeforeLayers(results.slice(0, LAYERS_BEFOREMAP.length));
//         setAfterLayers(results.slice(LAYERS_BEFOREMAP.length));
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <div className="pt-[120px] min-h-screen flex-col items-center justify-between p-10 bg-[#354545]">
//         <CompareMap beforeLayers={beforeLayers} afterLayers={afterLayers} />
//       </div>
//       <Footer />
//     </div>
//   );
// }
