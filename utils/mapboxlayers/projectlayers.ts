import Map, {Layer} from 'react-map-gl';

import type {FillLayer} from 'react-map-gl';
import type {LineLayer} from 'react-map-gl';






export const velocity1mStyleFill: FillLayer = {
  id: 'velocity1msFill', 
  type: 'fill',
  paint: {
    'fill-color': '#90be6d', 
    'fill-opacity': 0.9
  }
}



export const velocityStyleLine: LineLayer = {
  id: 'velocity_line', 
  type: 'line',
  paint: {
    'line-color': '#363636', 
    'line-width': 1, 
    'line-opacity': 0.9
  }

}





export const velocity1_5mStyleFill: FillLayer = {
  id: 'velocity1_5msFill', 
  type: 'fill',
  paint: {
    'fill-color': '#f9c750', 
    'fill-opacity': 0.9
  }
}

