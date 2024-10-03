'use client'

import * as React from 'react';
import { useState, useEffect, useMemo, useCallback } from 'react';
import Map, { Source, Layer } from 'react-map-gl';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import LegendDepth from '@/components/legendDepth';

import {
  flooddepth_1_StyleFill,
  flooddepth_2_StyleFill,
  flooddepth_3_StyleFill,
  flooddepth_4_StyleFill,
  flooddepth_5_StyleFill,
  flooddepth_6_StyleFill,
  seaStyleFill,
} from '../../utils/mapboxlayers/projectlayers';

const MAPBOX_PUBLIC_TOKEN = 'pk.eyJ1IjoibWFyZ2FyaXRhMTIiLCJhIjoiY2s1Nm5mNWpxMDRvcTNtbHppYm4xeTJpOSJ9.boMER5L2ddRxh1pR7hDWJA';

const geojsonUrls = [
  'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_Napier/depth_thresholds/500yr_base_max_depth_above_0_1m_wgs.geojson',
  'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_Napier/depth_thresholds/500yr_base_max_depth_above_0_5m_wgs.geojson',
  'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_Napier/depth_thresholds/500yr_base_max_depth_above_1m_wgs.geojson',
  'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_Napier/depth_thresholds/500yr_base_max_depth_above_1_5m_wgs.geojson',
  'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_Napier/depth_thresholds/500yr_base_max_depth_above_2m_wgs.geojson',
  'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_Napier/depth_thresholds/500yr_base_max_depth_above_2_5m_wgs.geojson',
  'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_Napier/sea_napier_wgs.geojson',
];

const styles = [
  flooddepth_1_StyleFill,
  flooddepth_2_StyleFill,
  flooddepth_3_StyleFill,
  flooddepth_4_StyleFill,
  flooddepth_5_StyleFill,
  flooddepth_6_StyleFill,
  seaStyleFill,
];

export default function Depthmap() {
  const [depthData, setDepthData] = useState([null, null, null, null, null, null, null]);
  const [hoverInfo, setHoverInfo] = useState(null);

  const loadData = useCallback((index, url) => {
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => {
        setDepthData((prev) => {
          const newData = [...prev];
          newData[index] = json;
          return newData;
        });
      })
      .catch((err) => console.error('Could not load data', err)); // eslint-disable-line
  }, []);

  useEffect(() => {
    geojsonUrls.forEach((url, index) => loadData(index, url));
  }, [loadData]);

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
        <LegendDepth />

        <Map
          style={{ height: '100vh', width: '100%' }}
          initialViewState={{
            latitude: -39.568846,
            longitude: 176.84236931005989,
            zoom: 12,
          }}
          minZoom={10.5}
          mapStyle="mapbox://styles/margarita12/cm0vsv1p100di01pq0pzmahmh"
          mapboxAccessToken={MAPBOX_PUBLIC_TOKEN}
          interactiveLayerIds={['data1']}
          onMouseMove={onHover}
          attributionControl={false}
        >
          {depthData.map((data, index) => (
            <Source key={index} id={`depth_${index + 1}`} type="geojson" data={data}>
              <Layer {...styles[index]} />
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
