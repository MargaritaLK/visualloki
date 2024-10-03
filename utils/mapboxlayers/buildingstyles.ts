
import type {FillLayer} from 'react-map-gl';
import type {LineLayer} from 'react-map-gl';
import type {CircleLayer} from 'react-map-gl';
 


export const buildings_StyleFill: FillLayer = {
    id: 'depth_buildinga', 
    type: 'fill',
    paint: {
      'fill-color': '#99d98c', 
      'fill-opacity': 0.9
    }
  }
  

  // export const depth_buildings_StyleFill: FillLayer = {
  //   id: 'all_buildings', 
  //   type: 'fill',
  //   paint: {
  //     'fill-color': '#f9c750', 
  //     'fill-opacity': 0.9
  //   }
  // }
  

  export const buildings_StylePoints: CircleLayer = {
    id: 'depth_buildinga',
    type: 'circle',
    paint: {
      'circle-color': '#99d98c',
      'circle-opacity': 0.9,
      'circle-radius': [
        'interpolate', ['linear'], ['zoom'],
        10, 0.04,
        15, 3 
      ]
    }
  }

  export const depth_buildings_StyleFill: FillLayer = {
    id: 'all_buildings', 
    type: 'fill',
    paint: {
      'fill-color': [
        'interpolate',
        ['linear'],
        ['get', 'depth_raster'], 
        0.05, '#eae2b7', 
        0.5, '#fcbf49', 
        1, '#f77f00',
        1.5, '#d62828' 
      ],
      'fill-opacity': 0.9
    }
  }