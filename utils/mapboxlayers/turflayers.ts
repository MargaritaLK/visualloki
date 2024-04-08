import type {FillLayer} from 'react-map-gl';
import type {LineLayer} from 'react-map-gl';



export const bboxStyle: FillLayer = {
    id: 'aucklandBbox',
    type: 'fill',
    // source: 'geojsonbbox',
    layout: {},
    paint: {
      'fill-color': '#e77148', 
      'fill-opacity': 0.7
    }
  };
  
  


// export const rivers_polygons_style: FillLayer  = {
//     id: 'rivers2',
//     type: 'fill',
//     paint: {
//       'fill-color': '#ffb703', 
//     }
//   };
  