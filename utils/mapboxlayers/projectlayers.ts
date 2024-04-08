import Map, {Layer} from 'react-map-gl';

import type {FillLayer} from 'react-map-gl';
import type {LineLayer} from 'react-map-gl';



// For more information on data-driven styles, see https://www.mapbox.com/help/gl-dds-ref/
export const rivers_style_line: LineLayer  = {
  id: 'rivers1',
  type: 'line',
  paint: {
    'line-color': '#06d6a0', 
    'line-width': 1, 
    'line-opacity': 0.9
  }
};


export const rivers_polygons_style: FillLayer  = {
  id: 'rivers2',
  type: 'fill',
  paint: {
    'fill-color': '#ffb703', 
  }
};

export const nelsonregionStyle: FillLayer = {
  id: 'nelsonregion', 
  type: 'fill', 
  paint: {
    'fill-color': '#242424',
    'fill-opacity' : 0.76
  }
}


export const aucklandcoastStyle: LineLayer = {
  id: 'nzcoast', 
  type: 'line',
  paint: {
    'line-color': '#e77148', 
    'line-width': 1.7, 
    'line-opacity': 0.9
  }
  
}

