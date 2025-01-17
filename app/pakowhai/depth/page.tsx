'use client'

import * as React from 'react';
import * as turf from '@turf/turf';

import Image from "next/image";
import { useState, useEffect, useMemo, useCallback } from 'react';

import Map, { Source, Layer } from 'react-map-gl';


import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { flooddepth_categories } from '../../../utils/mapboxLayerstyles/depthstyles';
import { cat3_land_fill, cat3_land_line, area_inverse_fill } from '../../../utils/mapboxLayerstyles/basestyles';


const MAPBOX_PUBLIC_TOKEN = 'pk.eyJ1IjoibWFyZ2FyaXRhMTIiLCJhIjoiY2s1Nm5mNWpxMDRvcTNtbHppYm4xeTJpOSJ9.boMER5L2ddRxh1pR7hDWJA';



const LAYERS = [
    {
      id: 'cat3_land_fill',
      url: 'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_Napier/areas/cat_3_area.geojson',
      style: cat3_land_fill,
    },
    {
      id: 'flooddepth',
      url: 'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_Napier/depth_thresholds/pakowhai/TKwai500yplus400p_Proposed_depth_wgs.geojson',
      style: flooddepth_categories,
    }, 
    {
      id: 'cat3_land_line',
      url: 'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_Napier/areas/cat_3_area.geojson',
      style: cat3_land_line,
    },
    {
      id: 'uitsparing_gebied',
      url: 'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_Napier/areas/pakowhai_area_inverse.geojson',
      style: area_inverse_fill,
    },
  ];
  



export default function PakowhaiDepth() {
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

      <div className=" pt-[120px] min-h-screen flex-col items-center justify-between p-10 bg-[#354545]">
        <Navbar />
        <Map
          style={{ height: '100vh', width: '100%' }}
          initialViewState={{
            latitude: -39.568846,
            longitude: 176.84236931005989,
            zoom: 12,
          }}
          minZoom={10.5}
          maxZoom={15}
          mapStyle="mapbox://styles/margarita12/cm1r18bib012p01rbhgj184u8"  /// light

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