
import type {FillLayer} from 'react-map-gl';
import type {LineLayer} from 'react-map-gl';


export const seaStyleFill: FillLayer = {
    id: 'seaFill', 
    type: 'fill',
    paint: {
      'fill-color': '#354545', 
      'fill-opacity': 1
    }
  }
  


  
export const cat3_land_fill: FillLayer = {
  id: 'cat3Fill', 
  type: 'fill',
  paint: {
    'fill-color': '#232323', 
    'fill-opacity': 0.8
  }
}

export const area_inverse_fill: FillLayer = {
  id: 'area_inverse', 
  type: 'fill',
  paint: {
    'fill-color': '#232323', 
    'fill-opacity': 0.5
  }
}




export const cat3_land_line: LineLayer = {
  id: 'cat3Line',
  type: 'line',
  paint: {
    'line-color': '#ffffff',
    'line-width': 1,  // Breedte van de lijn
    'line-opacity': 0.8
  }
};