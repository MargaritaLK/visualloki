import Map, {Layer} from 'react-map-gl';

import type {FillLayer} from 'react-map-gl';
import type {LineLayer} from 'react-map-gl';




export const aucklandcoastStyleLine: LineLayer = {
  id: 'aucklandcoastLine', 
  type: 'line',
  paint: {
    'line-color': '#e77148', 
    'line-width': 1, 
    'line-opacity': 0.9
  }
}



export const aucklandcoastStyleFill: FillLayer = {
  id: 'aucklandcoastFill', 
  type: 'fill',
  paint: {
    'fill-color': '#354545', 
    'fill-opacity': 0.3
  }
}



export const coastline7mStyleLine: LineLayer = {
  id: 'coast7m', 
  type: 'line',
  paint: {
    'line-color': '#e77148', 
    'line-width': 1, 
    'line-opacity': 0.9
  }

}


export const coastline7mStyleFill: FillLayer = {
  id: 'coast7mFill', 
  type: 'fill',
  paint: {
    'fill-color': '#354545', 
    'fill-opacity': 0.3
  }
}


export const coastline20mStyleLine: LineLayer = {
  id: 'coast20m', 
  type: 'line',
  paint: {
    'line-color': '#e77148', 
    'line-width': 1,
    'line-opacity': 0.9
  }

}


export const coastline20mStyleFill: FillLayer = {
  id: 'coast20mFill', 
  type: 'fill',
  paint: {
    'fill-color': '#354545', 
    'fill-opacity': 0.3
  }
}


