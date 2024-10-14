
import type {FillLayer} from 'react-map-gl';


export const seaStyleFill: FillLayer = {
    id: 'seaFill', 
    type: 'fill',
    paint: {
      'fill-color': '#354545', 
      'fill-opacity': 1
    }
  }
  