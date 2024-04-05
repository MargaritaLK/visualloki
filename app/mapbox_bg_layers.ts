
import type {FillLayer} from 'react-map-gl';
import type {LineLayer} from 'react-map-gl';



export const water_mpx: FillLayer = {
  id: 'mb_water',
  type: 'fill',
  source: 'composite',
  'source-layer': 'water',
  paint: {
    'fill-color': '#06d6a0', 
    'fill-opacity': 0.1
  }
};


export const buildings_mpx: FillLayer = {
  id: 'building',
  type: 'fill',
  source: 'mpabox-street',
  'source-layer': 'building',
  paint: {
    'fill-color': '#f12053', 
    "fill-outline-color": '#f12053',
    'fill-opacity': 0.7
  }
};

