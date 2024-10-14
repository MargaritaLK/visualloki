'use client';

import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import mapboxglCompare from 'mapbox-gl-compare';

import 'mapbox-gl/dist/mapbox-gl.css';
import 'mapbox-gl-compare/dist/mapbox-gl-compare.css';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

import { seaStyleFill } from '../../utils/mapboxLayerstyles/basestyles';
import { flooddepth_light_StyleFill } from '../../utils/mapboxLayerstyles/depthstyles';
import { depth_buildings_StyleFill } from '../../utils/mapboxLayerstyles/buildingstyles';

const MAPBOX_PUBLIC_TOKEN =
  'pk.eyJ1IjoibWFyZ2FyaXRhMTIiLCJhIjoiY2s1Nm5mNWpxMDRvcTNtbHppYm4xeTJpOSJ9.boMER5L2ddRxh1pR7hDWJA';

const LAYERS_BEFOREMAP = [
  {
    id: 'flood_scen1',
    url: 'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_Napier/depth_thresholds/500yr_base_max_depth_above_2m_wgs.geojson',
    style: {
      type: 'fill',
      paint: depth_buildings_StyleFill.paint,
      layout: depth_buildings_StyleFill.layout,
    },
  },
  {
    id: 'sea_before',
    url: 'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_Napier/sea_napier_wgs.geojson',
    style: {
      type: 'fill',
      paint: seaStyleFill.paint,
      layout: seaStyleFill.layout,
    },
  },
];

const LAYERS_AFTERMAP = [
  {
    id: 'flood_scen2',
    url: 'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_Napier/depth_thresholds/500yr_base_max_depth_above_0_1m_wgs.geojson',
    style: {
      type: 'fill',
      paint: flooddepth_light_StyleFill.paint,
      layout: flooddepth_light_StyleFill.layout,
    },
  },
  {
    id: 'depth_buildings',
    url: 'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_Napier/buildings/500yr_base_buildings_wgs.geojson',
    style: {
      type: 'fill',
      paint: depth_buildings_StyleFill.paint,
      layout: depth_buildings_StyleFill.layout,
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

export default function Swiper() {
  const [layerData, setLayerData] = useState({});
  const beforeMapRef = useRef(null);
  const afterMapRef = useRef(null);
  const comparisonContainerRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const allLayers = [...LAYERS_BEFOREMAP, ...LAYERS_AFTERMAP];

      try {
        const dataPromises = allLayers.map(async (layer) => {
          const response = await fetch(layer.url);
          const data = await response.json();
          console.log(`Data loaded for layer ${layer.id}:`, data);
          return { id: layer.id, data };
        });

        const results = await Promise.all(dataPromises);

        const dataObject = {};
        results.forEach((item) => {
          dataObject[item.id] = item.data;
        });

        // Update layerData state once with all the data
        setLayerData(dataObject);

        // Initialize maps after state has been updated
        initializeMaps(dataObject);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const initializeMaps = (dataObject) => {
    if (!beforeMapRef.current && !afterMapRef.current) {
      mapboxgl.accessToken = MAPBOX_PUBLIC_TOKEN;

      const beforeMap = new mapboxgl.Map({
        container: 'before-map',
        style: 'mapbox://styles/margarita12/cm1r18bib012p01rbhgj184u8',
        center: [176.84236931005989, -39.568846],
        zoom: 12,
      });

      const afterMap = new mapboxgl.Map({
        container: 'after-map',
        style: 'mapbox://styles/margarita12/cm1r18bib012p01rbhgj184u8',
        center: [176.84236931005989, -39.568846],
        zoom: 12,
      });

      beforeMapRef.current = beforeMap;
      afterMapRef.current = afterMap;

      new mapboxglCompare(beforeMap, afterMap, comparisonContainerRef.current);

      beforeMap.on('load', () => {
        addLayersToMap(beforeMap, LAYERS_BEFOREMAP, dataObject);
      });

      afterMap.on('load', () => {
        addLayersToMap(afterMap, LAYERS_AFTERMAP, dataObject);
      });
    }
  };

  const addLayersToMap = (map, layers, dataObject) => {
    layers.forEach((layer) => {
      const data = dataObject[layer.id];
      if (data) {
        console.log(`Adding layer ${layer.id} to map.`);
        map.addSource(layer.id, {
          type: 'geojson',
          data: data,
        });

        map.addLayer({
          id: layer.id,
          type: layer.style.type || 'fill',
          source: layer.id,
          paint: layer.style.paint || {},
          layout: layer.style.layout || {},
        });
      } else {
        console.warn(`Data for layer ${layer.id} is not available.`);
      }
    });
  };

  return (
    <div>
      <Navbar />

      <div className="pt-[120px] min-h-screen flex-col items-center justify-between p-10 bg-[#354545]">
        <div>
          <div
            id="comparison-container"
            ref={comparisonContainerRef}
            style={{ height: '100vh', width: '100%', position: 'relative' }}
          >
            <div
              id="before-map"
              style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }}
            ></div>
            <div
              id="after-map"
              style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }}
            ></div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
