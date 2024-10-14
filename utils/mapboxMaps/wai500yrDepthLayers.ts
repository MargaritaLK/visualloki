import {
    flooddepth_1_StyleFill,
    flooddepth_2_StyleFill,
    flooddepth_3_StyleFill,
    flooddepth_4_StyleFill,
    flooddepth_5_StyleFill,
    flooddepth_6_StyleFill,
  } from '../mapboxLayerstyles/depthstyles';
  
  
  import {
      seaStyleFill,
    } from '../mapboxLayerstyles/basestyles';
    
    
  
  export const Wai500yrDepthLayers = [
    {
        id: '500yr_wai_max_depth_above_0_1m',
        url: 'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_Napier/depth_thresholds/wai500_depth_above_0_1m.geojson',
        style: {
            type: 'fill',
            paint: flooddepth_1_StyleFill.paint,
            layout: flooddepth_1_StyleFill.layout,
        },
    },
    {
        id: '500yr_wai_max_depth_above_0_5',
        url: 'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_Napier/depth_thresholds/wai500_depth_above_0_5m.geojson',
        style: {
            type: 'fill',
            paint: flooddepth_2_StyleFill.paint,
            layout: flooddepth_2_StyleFill.layout,
        },
    },
    {
        id: '500yr_wai_max_depth_above_1m',
        url: 'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_Napier/depth_thresholds/wai500_depth_above_1m.geojson',
        style: {
            type: 'fill',
            paint: flooddepth_3_StyleFill.paint,
            layout: flooddepth_3_StyleFill.layout,
        },
    },
    {
        id: '500yr_wai_max_depth_above_1_5m',
        url: 'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_Napier/depth_thresholds/wai500_depth_above_1_5m.geojson',
        style: {
            type: 'fill',
            paint: flooddepth_4_StyleFill.paint,
            layout: flooddepth_4_StyleFill.layout,
        },
    },
    {
        id: '500yr_wai_max_depth_above_2m',
        url: 'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_Napier/depth_thresholds/wai500_depth_above_2m.geojson',
        style: {
            type: 'fill',
            paint: flooddepth_5_StyleFill.paint,
            layout: flooddepth_5_StyleFill.layout,
        },
    },
    {
        id: '500yr_wai_max_depth_above_2_5m',
        url: 'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_Napier/depth_thresholds/wai500_depth_above_2_5m.geojson',
        style: {
            type: 'fill',
            paint: flooddepth_6_StyleFill.paint,
            layout: flooddepth_6_StyleFill.layout,
        },
    },
    {
        id: 'sea_after',
        url: 'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_Napier/sea_napier_wgs.geojson',
        style: {
            type: 'fill',
            paint: seaStyleFill.paint,
            layout: seaStyleFill.layout,
        },
    },
  ];
  