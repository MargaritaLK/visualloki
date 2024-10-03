'use client';

import * as React from 'react';
import * as turf from '@turf/turf';
import { useState, useEffect, useMemo, useCallback } from 'react';
import Map, { Source, Layer } from 'react-map-gl';
import { AttributionControl } from 'react-map-gl';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import LegendBuildings from '@/components/legendDepthBuildings';


import { flooddepth_light_StyleFill } from '../../utils/mapboxlayers/projectlayers';
import { buildings_StyleFill, depth_buildings_StyleFill, buildings_StylePoints } from '../../utils/mapboxlayers/buildingstyles';
import { seaStyleFill } from '../../utils/mapboxlayers/projectlayers';

const MAPBOX_PUBLIC_TOKEN =
  'pk.eyJ1IjoibWFyZ2FyaXRhMTIiLCJhIjoiY2s1Nm5mNWpxMDRvcTNtbHppYm4xeTJpOSJ9.boMER5L2ddRxh1pR7hDWJA';


const LAYERS = [
  {
    id: 'flood',
    url: 'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_Napier/depth_thresholds/500yr_base_max_depth_above_0_1m_wgs.geojson',
    style: flooddepth_light_StyleFill,
  },

  // {
  //   id: 'all_buildings',
  //   url: 'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_Napier/buildings/all_buildings_wgs_large_extent_centroids.geojson',
  //   style: buildings_StylePoints,
  // },

  {
    id: 'depth_buildings',
    url: 'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_Napier/buildings/500yr_base_buildings_wgs.geojson',
    style: depth_buildings_StyleFill,
  },

  {
    id: 'sea',
    url: 'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_Napier/sea_napier_wgs.geojson',
    style: seaStyleFill,
  },
];

export default function Buildings() {
  const [layerData, setLayerData] = useState<Record<string, any>>({});
  const [hoverInfo, setHoverInfo] = useState(null);

  // Fetch data for each layer
  useEffect(() => {
    LAYERS.forEach((layer) => {
      fetch(layer.url)
        .then((resp) => resp.json())
        .then((json) => {
          setLayerData((prev) => ({
            ...prev,
            [layer.id]: json,
          }));
        })
        .catch((err) => console.error(`Could not load ${layer.id} data`, err));
    });
  }, []);

  const onHover = useCallback((event) => {
    const {
      features,
      point: { x, y },
    } = event;
    const hoveredFeature = features && features[0];
    setHoverInfo(hoveredFeature && { feature: hoveredFeature, x, y });
  }, []);

  return (
    <div>
      <Navbar />

      <div className="pt-[120px] min-h-screen flex-col items-center justify-between p-10 bg-[#354545]">
        <Navbar />
        <LegendBuildings />

        <Map
          style={{ height: '100vh', width: '100%' }}
          initialViewState={{
            latitude: -39.568846,
            longitude: 176.84236931005989,
            zoom: 12,
          }}
          minZoom={10.5}
          maxZoom={15}
          mapStyle="mapbox://styles/margarita12/cm1r18bib012p01rbhgj184u8"
          mapboxAccessToken={MAPBOX_PUBLIC_TOKEN}
          interactiveLayerIds={['data1']}
          onMouseMove={onHover}
          attributionControl={false}
        >
          {LAYERS.map((layer) => (
            <Source key={layer.id} id={layer.id} type="geojson" data={layerData[layer.id]}>
              <Layer {...layer.style} />
            </Source>
          ))}



          {hoverInfo && (
            <div className="tooltip" style={{ left: hoverInfo.x, top: hoverInfo.y }}>
              <div>river: {hoverInfo.feature.properties.name}</div>
            </div>
          )}
        </Map>
      </div>

      <Footer />
    </div>
  );
}
