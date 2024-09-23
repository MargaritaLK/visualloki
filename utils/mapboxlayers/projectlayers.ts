import Map, {Layer} from 'react-map-gl';

import type {FillLayer} from 'react-map-gl';
import type {LineLayer} from 'react-map-gl';




export const velocity1mStyleLine: LineLayer = {
  id: 'velocity_line_1ms', 
  type: 'line',
  paint: {
    'line-color': '#000000', 
    'line-width': 0.8, 
    'line-opacity': 0.7
  }

}



export const velocity1_5mStyleLine: LineLayer = {
  id: 'velocity_line_1_5ms', 
  type: 'line',
  paint: {
    'line-color': '#000000', 
    'line-width': 0.8, 
    'line-opacity': 0.7
  }

}


export const velocity2mStyleLine: LineLayer = {
  id: 'velocity_line_2ms', 
  type: 'line',
  paint: {
    'line-color': '#000000', 
    'line-width': 0.8, 
    'line-opacity': 0.7
  }

}



export const velocity2_5mStyleLine: LineLayer = {
  id: 'velocity_line_2_5ms', 
  type: 'line',
  paint: {
    'line-color': '#000000', 
    'line-width': 0.8, 
    'line-opacity': 0.7
  }

}


export const velocity3mStyleLine: LineLayer = {
  id: 'velocity_line_3ms', 
  type: 'line',
  paint: {
    'line-color': '#000000', 
    'line-width': 0.8, 
    'line-opacity': 0.7
  }

}



export const velocity1mStyleFill: FillLayer = {
  id: 'velocity1msFill', 
  type: 'fill',
  paint: {
    'fill-color': '#90be6d', 
    'fill-opacity': 0.9
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


export const velocity2mStyleFill: FillLayer = {
  id: 'velocity2msFill', 
  type: 'fill',
  paint: {
    'fill-color': '#f89621', 
    'fill-opacity': 0.9
  }
}


export const velocity2_5mStyleFill: FillLayer = {
  id: 'velocity2_5msFill', 
  type: 'fill',
  paint: {
    'fill-color': '#f3722b', 
    'fill-opacity': 0.9
  }
}



export const velocity3mStyleFill: FillLayer = {
  id: 'velocity3msFill', 
  type: 'fill',
  paint: {
    'fill-color': '#ef4347', 
    'fill-opacity': 0.9
  }
}



export const seaStyleFill: FillLayer = {
  id: 'seaFill', 
  type: 'fill',
  paint: {
    'fill-color': '#354545', 
    'fill-opacity': 1
  }
}

const set_opacity = 1

export const flooddepth_1_StyleFill: FillLayer = {
  id: 'depthFill_1', 
  type: 'fill',
  paint: {
    'fill-color': '#359eac', 
    'fill-opacity': set_opacity
  }
}


export const flooddepth_2_StyleFill: FillLayer = {
  id: 'depthFill_2', 
  type: 'fill',
  paint: {
    'fill-color': '#348c97', 
    'fill-opacity': set_opacity
  }
}



export const flooddepth_3_StyleFill: FillLayer = {
  id: 'depthFill_3', 
  type: 'fill',
  paint: {
    'fill-color': '#27757a', 
    'fill-opacity': set_opacity
  }
}

export const flooddepth_4_StyleFill: FillLayer = {
  id: 'depthFill_4', 
  type: 'fill',
  paint: {
    'fill-color': '#0c4f51', 
    'fill-opacity': set_opacity
  }
}

export const flooddepth_5_StyleFill: FillLayer = {
  id: 'depthFill_5', 
  type: 'fill',
  paint: {
    'fill-color': '#051919', 
    'fill-opacity': set_opacity
  }
}


