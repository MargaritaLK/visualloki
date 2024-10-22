
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





export const velocity_categories: FillLayer = {
  id: 'velocityFill', 
  type: 'fill',
  paint: {
    'fill-color': [
      'match',
      ['get', 'velocity_class'], 
      "0-0.5 m/s", '#90be6d', 
      "0.5-1 m/s", '#f9c750',
      "1-1.5 m/s", '#f89621',
      "1.5-2 m/s", '#f3722b',
      ">2 m/s", '#ef4347', 
      '#051919', // Standaardkleur als geen match
    ],
    'fill-opacity': [
      'match',
      ['get', 'velocity_class'], 
      "0-0.5 m/s", 0,  
      0.7 // Standaard opaciteit als geen match
    ]
  }
};
