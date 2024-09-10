'use client'

import * as React from 'react';
import * as turf from '@turf/turf';

import Image from "next/image";
import {useState, useEffect, useMemo, useCallback} from 'react';

import Map, {Source, Layer} from 'react-map-gl';

import {AttributionControl} from 'react-map-gl';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

import {velocityStyleLine} from '../../utils/mapboxlayers/projectlayers'
import {velocity1mStyleFill} from '../../utils/mapboxlayers/projectlayers'
import {velocity1_5mStyleFill} from '../../utils/mapboxlayers/projectlayers'


const MAPBOX_PUBLIC_TOKEN = 'pk.eyJ1IjoibWFyZ2FyaXRhMTIiLCJhIjoiY2s1Nm5mNWpxMDRvcTNtbHppYm4xeTJpOSJ9.boMER5L2ddRxh1pR7hDWJA'; 


export default function Coastalmap() {
  
  const [velocity1msData, setVelocity1msData] = useState(null)
  const [velocity1_5msData, setVelocity1_5msData] = useState(null)
  const [hoverInfo, setHoverInfo] = useState(null);
  
  

    
    useEffect(() => {
      /* global fetch */
      fetch(
        'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_Napier/velocity/500y_base_vmax_above_1ms_wgs.geojson'
      )
      .then(resp => resp.json())
      .then(json => {
        setVelocity1msData(json)})
        .catch(err => console.error('Could not load data', err)); // eslint-disable-line
      }, []);
      
      


          
    useEffect(() => {
      /* global fetch */
      fetch(
        'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_Napier/velocity/500y_base_vmax_above_1_5ms_wgs.geojson'
      )
      .then(resp => resp.json())
      .then(json => {
        setVelocity1_5msData(json)})
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
      return velocity1msData
    }, [velocity1msData])


    

    const data2 = useMemo(() => {
      return velocity1_5msData
    }, [velocity1_5msData])


    
    
    return (
      <div>
      <Navbar />
      
      <div className=" pt-[120px] min-h-screen flex-col items-center justify-between p-10 bg-[#0c0c0c]">
      
      {/* <div className="flex text-[#e77148] text-4xl tracking-wider text-transform:uppercase py-10"> coastal</div>
      <div>
          <div className="flex text-[#e77148] text-4xl tracking-wider text-transform:uppercase py-5"> test velocity map </div>
          <div className="flex text-[#AAAFAF]  tracking-wider text-transform:uppercase py-5 "> </div>
        </div> */}
      
      {/* <div  className="drop-shadow-2xl">  */}
      <Map
      style={{ height: '100vh', width: '100%' }}
      initialViewState={{
        latitude: -39.5688460,
        longitude: 176.84236931005989,
        zoom: 10.3
      }}


      // 176.84236931005989391 -39.56884601232292908
      
      // mapStyle="mapbox://styles/margarita12/cluq5psso00j001r7ckm2ayus" //               
      mapStyle="mapbox://styles/margarita12/cm0vsv1p100di01pq0pzmahmh" //               
      mapboxAccessToken={MAPBOX_PUBLIC_TOKEN}
      interactiveLayerIds={['data1']}
      onMouseMove={onHover}
      attributionControl={false}
      >


      <Source id='velocity1ms' type="geojson" data = {data1}>
        <Layer {...velocity1mStyleFill} />
      </Source>


      <Source id='velocity1_5ms' type="geojson" data = {data2}>
        <Layer {...velocity1_5mStyleFill} />
      </Source>







{hoverInfo && (
  <div className="tooltip" style={{left: hoverInfo.x, top: hoverInfo.y}}>
  <div>river: {hoverInfo.feature.properties.name}</div>
  </div>
)}

</Map>


{/* </div> */}

</div>

<Footer />

</div>
);
}