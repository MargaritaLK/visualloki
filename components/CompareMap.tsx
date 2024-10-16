'use client';

import * as React from 'react';
import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import mapboxglCompare from 'mapbox-gl-compare';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'mapbox-gl-compare/dist/mapbox-gl-compare.css';

const MAPBOX_PUBLIC_TOKEN =
  'pk.eyJ1IjoibWFyZ2FyaXRhMTIiLCJhIjoiY2s1Nm5mNWpxMDRvcTNtbHppYm4xeTJpOSJ9.boMER5L2ddRxh1pR7hDWJA';

interface CompareMapProps {
  beforeLayers: any[];
  afterLayers: any[];
}

export default function CompareMap({ beforeLayers, afterLayers }: CompareMapProps) {
  const beforeMapRef = useRef<mapboxgl.Map | null>(null);
  const afterMapRef = useRef<mapboxgl.Map | null>(null);
  const comparisonContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

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

    new mapboxglCompare(beforeMap, afterMap, comparisonContainerRef.current!);

    beforeMap.on('load', () => addLayersToMap(beforeMap, beforeLayers));
    afterMap.on('load', () => addLayersToMap(afterMap, afterLayers));
  }, [beforeLayers, afterLayers]);

  const addLayersToMap = (map: mapboxgl.Map, layers: any[]) => {
    layers.forEach((layer) => {
      map.addSource(layer.id, {
        type: 'geojson',
        data: layer.data,
      });

      map.addLayer({
        id: layer.id,
        type: layer.style.type || 'fill',
        source: layer.id,
        paint: layer.style.paint || {},
        layout: layer.style.layout || {},
      });
    });
  };

  return (
    <div
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
  );
}
