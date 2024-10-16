'use client'

import * as React from 'react';
import {useState, useCallback} from 'react';

import Map, {Source, Layer, AttributionControl} from 'react-map-gl';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const MAPBOX_PUBLIC_TOKEN = 'pk.eyJ1IjoibWFyZ2FyaXRhMTIiLCJhIjoiY2s1Nm5mNWpxMDRvcTNtbHppYm4xeTJpOSJ9.boMER5L2ddRxh1pR7hDWJA'; 

export default function Gabrielmap() {

  const [hoverInfo, setHoverInfo] = useState(null);

  const onHover = useCallback(event => {
    const {
      features,
      point: {x, y}
    } = event;
    const hoveredFeature = features && features[0];
    
    setHoverInfo(hoveredFeature && {feature: hoveredFeature, x, y});
  }, []);

  return (
    <div>
      <Navbar />
      
      <div className="pt-[120px] min-h-screen flex-col items-center justify-between p-10 bg-[#354545]">

        <Map
          style={{ height: '100vh', width: '100%' }}
          initialViewState={{
            latitude: -39.5688460,
            longitude: 176.84236931005989,
            zoom: 12
          }}
          mapboxAccessToken={MAPBOX_PUBLIC_TOKEN}
          mapStyle="mapbox://styles/margarita12/cm0vsv1p100di01pq0pzmahmh"
          interactiveLayerIds={['data1']}
          onMouseMove={onHover}
          attributionControl={false}
        >
          {/* WMTS layer source */}
          <Source
            id="wmts-test-layer"
            type="raster"
            tiles={[
              "https://tiles-cdn.koordinates.com/services;key=1d89429c8fab41c7989f0f1ce2fffdcc/tiles/v4/layer=112726/EPSG:3857/{z}/{x}/{y}.png"
            ]}
            tileSize={256}
            attribution='Map tiles by <a target="_top" rel="noopener" href="http://www.swisstopo.admin.ch">swisstopo</a>'
          >
            {/* WMTS layer */}
            <Layer
              id="wmts-test-layer"
              type="raster"
              paint={{
                'raster-opacity': 0.6
              }}
            />
          </Source>

          {hoverInfo && (
            <div className="tooltip" style={{left: hoverInfo.x, top: hoverInfo.y}}>
              <div>river: {hoverInfo.feature.properties.name}</div>
            </div>
          )}
          
        </Map>

      </div>

      <Footer />
    </div>
  );
}
