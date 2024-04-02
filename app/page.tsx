'use client'

import * as React from 'react';
import Image from "next/image";
import {useState, useEffect, useMemo, useCallback} from 'react';
import Map, {Source, Layer} from 'react-map-gl';
import {dataLayer1} from './map-style';
import {dataLayer1_line} from './map-style';
import {dataLayer2} from './map-style';
import {dataLayer2_line} from './map-style';


import {AttributionControl} from 'react-map-gl';



import {updatePercentiles} from './utils';
import { Console, log } from 'console';
// import ControlPanel from './control-panel';

// const { MAPBOX_PUBLIC_TOKEN} = process.env;



const MAPBOX_PUBLIC_TOKEN = 'pk.eyJ1IjoibWFyZ2FyaXRhMTIiLCJhIjoiY2s1Nm5mNWpxMDRvcTNtbHppYm4xeTJpOSJ9.boMER5L2ddRxh1pR7hDWJA'; 

export default function Home() {

  const [year, setYear] = useState(2015);
  const [allData, setAllData] = useState(null);
  const [seagrasData, setSeagrasData] = useState(null);
  const [mangroveData, setMangroveData] = useState(null);
  const [hoverInfo, setHoverInfo] = useState(null);

  useEffect(() => {
    /* global fetch */
    fetch(
      'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_vegetation/seagras_area2.geojson'
    )
      .then(resp => resp.json())
      .then(json => {
      // console.log(json);
        setSeagrasData(json)})
      .catch(err => console.error('Could not load data', err)); // eslint-disable-line

    
    }, []);


    useEffect(() => {
      /* global fetch */
      fetch(
        'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_vegetation/mangrove_area2.geojson'
      )
        .then(resp => resp.json())
        .then(json => {
          console.log(json);
          setMangroveData(json)})
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



    // ORGINAL VERIOSN
    // const data = useMemo(() => {
    //   return allData && updatePercentiles(allData, f => f.properties.income[year]);
    // }, [allData, year]);
  
    
    const data = useMemo(() => {
      return allData
    }, [allData]);
  
    
    const data1 = useMemo(() => {
      return seagrasData
    }, [seagrasData]);
  

    const data2 = useMemo(() => {
      return mangroveData
    }, [mangroveData]);
  



  return (

    <div className=" min-h-screen flex-col items-center justify-between p-10 bg-[#354545]">

      <div>
      <div className="flex text-[#AAAFAF] tracking-wider text-transform:uppercase"> NEW VISUAL |  proof of concept | for Peter</div>
      <div className="flex text-[#AAAFAF] text-3xl tracking-wider text-transform:uppercase py-5">vegetation mapping </div>
      </div>

        <div  className="drop-shadow-2xl">

        
        <Map
          style={{ height: '80vh', width: '70vw' }}
          initialViewState={{
            latitude: -36.8466538,
            longitude: 174.7165663,
            zoom: 12
          }}
          // mapStyle="mapbox://styles/margarita12/clu5z5wyt028h01oi5b2jaz4i"
          mapStyle="mapbox://styles/margarita12/clu63xet6005y01q530m2d8gg" // 
          // mapStyle="mapbox://styles/margarita12/clu62v272005x01rahucugbg4"
          
          mapboxAccessToken={MAPBOX_PUBLIC_TOKEN}
          interactiveLayerIds={['data']}
          onMouseMove={onHover}
          attributionControl={false}
    

        >
          {/* <AttributionControl customAttribution="dd" /> */}
          {/* Seagras */}
          <Source id='1' type="geojson" data={data1}>
            <Layer {...dataLayer1} />
          </Source>

          <Source id='1b' type="geojson" data={data1}>
            <Layer {...dataLayer1_line} />
          </Source>

          {/* Mangrove */}
          <Source id ='2' type="geojson" data={data2}>
            <Layer {...dataLayer2} />
          </Source>

          <Source id='2b' type="geojson" data={data2}>
            <Layer {...dataLayer2_line} />
          </Source>



          {hoverInfo && (
            <div className="tooltip" style={{left: hoverInfo.x, top: hoverInfo.y}}>
              {/* <div>laag: {hoverInfo.feature.properties.name}</div> */}
            </div>
          )}
        </Map>

        
        </div>

    </div>
  );
}


