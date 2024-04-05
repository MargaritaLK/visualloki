'use client'

import * as React from 'react';
import Image from "next/image";
import {useState, useEffect, useMemo, useCallback} from 'react';

import Map, {Source, Layer} from 'react-map-gl';

import {AttributionControl} from 'react-map-gl';

import { Navbar } from '@/components/navbar';

// import {water_mpx, buildings_mpx} from './mapbox_bg_layers';
import {rivers_style_line, rivers_polygons_style} from '../map_project_layers';


const MAPBOX_PUBLIC_TOKEN = 'pk.eyJ1IjoibWFyZ2FyaXRhMTIiLCJhIjoiY2s1Nm5mNWpxMDRvcTNtbHppYm4xeTJpOSJ9.boMER5L2ddRxh1pR7hDWJA'; 



export default function Flowmap() {

    const [riversData, setRiversData] = useState(null);
    const [riversPolygonData, setRiversPolygonData] = useState(null);
    const [hoverInfo, setHoverInfo] = useState(null);
  
    useEffect(() => {
      /* global fetch */
      fetch(
        'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_Nelson/rivers_tasman_wgs.geojson'
      )
        .then(resp => resp.json())
        .then(json => {
          setRiversData(json)})
        .catch(err => console.error('Could not load data', err)); // eslint-disable-line
      }, []);
  
  
      
    useEffect(() => {
      /* global fetch */
      fetch(
        'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_Nelson/rivers_nelson_model.geojson'
      )
        .then(resp => resp.json())
        .then(json => {
          setRiversPolygonData(json)})
        .catch(err => console.error('Could not load data', err)); // eslint-disable-line
      }, []);
  
  

    const onHover = useCallback(event => {
        const {
          features,
          point: {x, y}
        } = event;
        const hoveredFeature = features && features[0];
    
        // prettier-ignore
        setHoverInfo(hoveredFeature && {feature: hoveredFeature, x, y});
      }, []);
  
      
      const data1 = useMemo(() => {
        return riversData
      }, [riversData]);
  
  
      const data2 = useMemo(() => {
        return riversPolygonData
      }, [riversPolygonData]);
  



    return (

        <div>

        <Navbar />
 
        
        <div className=" pt-[120px] min-h-screen flex-col items-center justify-between p-20 bg-[#354545]">
    
          <div className="flex text-[#f12053] text-4xl tracking-wider text-transform:uppercase py-10"> flow paths</div>

            <div  className="drop-shadow-2xl">
            
                <Map
                style={{ height: '80vh', width: '90%' }}
                initialViewState={{
                    latitude: -41.3029295,
                    longitude: 173.2954709,
                    zoom: 12
                }}
        
                mapStyle="mapbox://styles/margarita12/clu63xet6005y01q530m2d8gg" //               
                mapboxAccessToken={MAPBOX_PUBLIC_TOKEN}
                interactiveLayerIds={['data1']}
                onMouseMove={onHover}
                attributionControl={false}
                >
        
                <Source id='rivers1' type="geojson" data={data1}>
                    <Layer {...rivers_style_line} />
                </Source>
        
                <Source id='rivers_polygons' type="geojson" data={data2}>
                    <Layer {...rivers_polygons_style} />
                </Source>
        
                {/* <Layer {...buildings_mpx} /> */}
                {/* <Layer {...water_mpx} /> */}

                {hoverInfo && (
                    <div className="tooltip" style={{left: hoverInfo.x, top: hoverInfo.y}}>
                    <div>river: {hoverInfo.feature.properties.name}</div>
                    </div>
                    
                )}
        
                {/* <AttributionControl customAttribution="loki test" /> */}
                </Map>
            </div>
    
        </div>
        </div>
      );
}