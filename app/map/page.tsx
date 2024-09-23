'use client'

import * as React from 'react';
import * as turf from '@turf/turf';

import Image from "next/image";
import {useState, useEffect, useMemo, useCallback} from 'react';

import Map, {Source, Layer} from 'react-map-gl';

import {AttributionControl} from 'react-map-gl';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import LegendVelocity  from '@/components/legendVelocity';

import {velocity1mStyleFill, velocity1mStyleLine} from '../../utils/mapboxlayers/projectlayers'
import {velocity1_5mStyleFill, velocity1_5mStyleLine} from '../../utils/mapboxlayers/projectlayers'
import {velocity2mStyleFill, velocity2mStyleLine} from '../../utils/mapboxlayers/projectlayers'
import {velocity2_5mStyleFill, velocity2_5mStyleLine} from '../../utils/mapboxlayers/projectlayers'
import {velocity3mStyleFill,velocity3mStyleLine} from '../../utils/mapboxlayers/projectlayers'
import {seaStyleFill} from '../../utils/mapboxlayers/projectlayers'


const MAPBOX_PUBLIC_TOKEN = 'pk.eyJ1IjoibWFyZ2FyaXRhMTIiLCJhIjoiY2s1Nm5mNWpxMDRvcTNtbHppYm4xeTJpOSJ9.boMER5L2ddRxh1pR7hDWJA'; 


export default function Coastalmap() {
  
  const [velocity1msData, setVelocity1msData] = useState(null)
  const [velocity1_5msData, setVelocity1_5msData] = useState(null)
  const [velocity2msData, setVelocity2msData] = useState(null)
  const [velocity2_5msData, setVelocity2_5msData] = useState(null)
  const [velocity3msData, setVelocity3msData] = useState(null)
  const [seaData, setSeaData] = useState(null)
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

                
    useEffect(() => {
      /* global fetch */
      fetch(
        'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_Napier/velocity/500y_base_vmax_above_2ms_wgs.geojson'
      )
      .then(resp => resp.json())
      .then(json => {
        setVelocity2msData(json)})
        .catch(err => console.error('Could not load data', err)); // eslint-disable-line
      }, []);
      
    
                      
    useEffect(() => {
      /* global fetch */
      fetch(
        'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_Napier/velocity/500y_base_vmax_above_2_5ms_wgs.geojson'
      )
      .then(resp => resp.json())
      .then(json => {
        setVelocity2_5msData(json)})
        .catch(err => console.error('Could not load data', err)); // eslint-disable-line
      }, []);
      

                            
    useEffect(() => {
      /* global fetch */
      fetch(
        'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_Napier/velocity/500y_base_vmax_above_3ms_wgs.geojson'
      )
      .then(resp => resp.json())
      .then(json => {
        setVelocity3msData(json)})
        .catch(err => console.error('Could not load data', err)); // eslint-disable-line
      }, []);
      
      

                                  
    useEffect(() => {
      /* global fetch */
      fetch(
        'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_Napier/sea_napier_wgs.geojson'
      )
      .then(resp => resp.json())
      .then(json => {
        setSeaData(json)})
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
  
    const data3 = useMemo(() => {
      return velocity2msData
    }, [velocity2msData])

  
    const data4 = useMemo(() => {
      return velocity2_5msData
    }, [velocity2_5msData])

  
    const data5 = useMemo(() => {
      return velocity3msData
    }, [velocity3msData])


    const data6 = useMemo(() => {
      return seaData
    }, [seaData])


    
    
    return (
      <div>
      <Navbar />
      
      <div className=" pt-[120px] min-h-screen flex-col items-center justify-between p-10 bg-[#354545]">
      
      {/* <div className="flex text-[#e77148] text-4xl tracking-wider text-transform:uppercase py-10"> coastal</div>
      <div>
          <div className="flex text-[#e77148] text-4xl tracking-wider text-transform:uppercase py-5"> test velocity map </div>
          <div className="flex text-[#AAAFAF]  tracking-wider text-transform:uppercase py-5 "> </div>
        </div> */}
      
      {/* <div  className="drop-shadow-2xl">  */}

      <Navbar />

      {/* <Legend /> */}

      <LegendVelocity />
      
      <Map
      style={{ height: '100vh', width: '100%' }}
      initialViewState={{
        latitude: -39.5688460,
        longitude: 176.84236931005989,
        zoom: 12
      }}
      minZoom={10.5}


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
        <Layer {...velocity1mStyleLine} />
      </Source>


      <Source id='velocity1_5ms' type="geojson" data = {data2}>
        <Layer {...velocity1_5mStyleFill} />
        <Layer {...velocity1_5mStyleLine} />
      </Source>
      
      <Source id='velocity2ms' type="geojson" data = {data3}>
        <Layer {...velocity2mStyleFill} />
        <Layer {...velocity2mStyleLine} />
      </Source>



      <Source id='velocity2_5ms' type="geojson" data = {data4}>
        <Layer {...velocity2_5mStyleFill} />
        <Layer {...velocity2_5mStyleLine} />
      </Source>



      <Source id='velocity3ms' type="geojson" data = {data5}>
        <Layer {...velocity3mStyleFill} />
        <Layer {...velocity3mStyleLine} />
      </Source>


      
      <Source id='sea' type="geojson" data = {data6}>
        <Layer {...seaStyleFill} />
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