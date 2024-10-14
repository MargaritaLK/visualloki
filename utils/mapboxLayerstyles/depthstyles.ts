
import type {FillLayer} from 'react-map-gl';



export const flooddepth_1_StyleFill: FillLayer = {
  id: 'depthFill_1', 
  type: 'fill',
  paint: {
    'fill-color': '#359eac', 
    'fill-opacity': [
      'interpolate', 
      ['linear'], 
      ['zoom'], 
      10, 1,  
      15, 0.4  
    ]
  }
}


export const flooddepth_2_StyleFill: FillLayer = {
  id: 'depthFill_2', 
  type: 'fill',
  paint: {
    'fill-color': '#348c97', 
    'fill-opacity': [
      'interpolate', 
      ['linear'], 
      ['zoom'], 
      10, 1,  
      15, 0.4  
    ]
  }
}



export const flooddepth_3_StyleFill: FillLayer = {
  id: 'depthFill_3', 
  type: 'fill',
  paint: {
    'fill-color': '#27757a', 
    'fill-opacity': [
      'interpolate', 
      ['linear'], 
      ['zoom'], 
      10, 1,  
      15, 0.4  
    ]
  }
}

export const flooddepth_4_StyleFill: FillLayer = {
  id: 'depthFill_4', 
  type: 'fill',
  paint: {
    'fill-color': '#0c4f51', 
    'fill-opacity': [
      'interpolate', 
      ['linear'], 
      ['zoom'], 
      10, 1,  
      15, 0.4  
    ]
  }
}

export const flooddepth_5_StyleFill: FillLayer = {
  id: 'depthFill_5', 
  type: 'fill',
  paint: {
    'fill-color': '#051919', 
    'fill-opacity': [
      'interpolate', 
      ['linear'], 
      ['zoom'], 
      10, 1,  
      15, 0.4  
    ]
  }
}


export const flooddepth_6_StyleFill: FillLayer = {
  id: 'depthFill_6', 
  type: 'fill',
  paint: {
    'fill-color': '#000000', 
    'fill-opacity': [
      'interpolate', 
      ['linear'], 
      ['zoom'], 
      10, 1,  
      15, 0.4  
    ]
  }
}



export const flooddepth_light_StyleFill: FillLayer = {
  id: 'depthFill_light', 
  type: 'fill',
  paint: {
    'fill-color': '#359eac', 
    'fill-opacity': [
      'interpolate', 
      ['linear'], 
      ['zoom'], 
      10, 0.4,  
      15, 0.4  
    ]
  }
}


export const flooddepth_categories: FillLayer = {
  id: 'depthFill_light', 
  type: 'fill',
  paint: {
    'fill-color': [
      'match',
      ['get', 'depth_class'], 
      "0.05-0.5", '#359eac', 
      "0.5-1", '#348c97',
      "1-1.5", '#27757a',
      "1.5-2", '#0c4f51',
      ">2", '#051919', 
      '#051919', // Standaardkleur als geen match
    ],
    'fill-opacity': [
      'match',
      ['get', 'depth_class'], 
      "0.05-0.5", 0.4,  
      0.7
    ]
  }
}