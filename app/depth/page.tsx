'use client'

import * as React from 'react';
import * as turf from '@turf/turf';

import Image from "next/image";
import {useState, useEffect, useMemo, useCallback} from 'react';

import Map, {Source, Layer} from 'react-map-gl';

import {AttributionControl} from 'react-map-gl';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import LegendDepth  from '@/components/legendDepth';

import {flooddepth_1_StyleFill} from '../../utils/mapboxlayers/projectlayers'
import {flooddepth_2_StyleFill} from '../../utils/mapboxlayers/projectlayers'
import {flooddepth_3_StyleFill} from '../../utils/mapboxlayers/projectlayers'
import {flooddepth_4_StyleFill} from '../../utils/mapboxlayers/projectlayers'
import {flooddepth_5_StyleFill} from '../../utils/mapboxlayers/projectlayers'

import {seaStyleFill} from '../../utils/mapboxlayers/projectlayers'


const MAPBOX_PUBLIC_TOKEN = 'pk.eyJ1IjoibWFyZ2FyaXRhMTIiLCJhIjoiY2s1Nm5mNWpxMDRvcTNtbHppYm4xeTJpOSJ9.boMER5L2ddRxh1pR7hDWJA'; 


export default function Depthmap() {
  
  const [depthData1, setDepthData1] = useState(null)
  const [depthData2, setDepthData2] = useState(null)
  const [depthData3, setDepthData3] = useState(null)
  const [depthData4, setDepthData4] = useState(null)
  const [depthData5, setDepthData5] = useState(null)
  const [depthData6, setDepthData6] = useState(null)

  const [seaData, setSeaData] = useState(null)
  const [hoverInfo, setHoverInfo] = useState(null);
  
  

    
    useEffect(() => {
      /* global fetch */
      fetch(
        'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_Napier/depth_thresholds/500yr_base_max_depth_above_0_1m_wgs.geojson'
      )
      .then(resp => resp.json())
      .then(json => {
        setDepthData1(json)})
        .catch(err => console.error('Could not load data', err)); // eslint-disable-line
      }, []);
      
    

    useEffect(() => {
        /* global fetch */
        fetch(
          'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_Napier/depth_thresholds/500yr_base_max_depth_above_0_5m_wgs.geojson'
        )
        .then(resp => resp.json())
        .then(json => {
          setDepthData2(json)})
          .catch(err => console.error('Could not load data', err)); // eslint-disable-line
        }, []);
        
      

    useEffect(() => {
        /* global fetch */
        fetch(
          'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_Napier/depth_thresholds/500yr_base_max_depth_above_1m_wgs.geojson'
        )
        .then(resp => resp.json())
        .then(json => {
          setDepthData3(json)})
          .catch(err => console.error('Could not load data', err)); // eslint-disable-line
        }, []);
        
      
    useEffect(() => {
      /* global fetch */
        fetch(
            'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_Napier/depth_thresholds/500yr_base_max_depth_above_1_5m_wgs.geojson'
          )
          .then(resp => resp.json())
          .then(json => {
            setDepthData4(json)})
            .catch(err => console.error('Could not load data', err)); // eslint-disable-line
          }, []);
          
        
    useEffect(() => {
      /* global fetch */
        fetch(
            'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_Napier/depth_thresholds/500yr_base_max_depth_above_2m_wgs.geojson'
          )
          .then(resp => resp.json())
          .then(json => {
            setDepthData5(json)})
            .catch(err => console.error('Could not load data', err)); // eslint-disable-line
          }, []);
          

    useEffect(() => {
      /* global fetch */
        fetch(
            'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_Napier/depth_thresholds/500yr_base_max_depth_above_2_5m_wgs.geojson'
          )
          .then(resp => resp.json())
          .then(json => {
            setDepthData6(json)})
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
      return depthData1
    }, [depthData1])
  
    const data2 = useMemo(() => {
      return depthData2
    }, [depthData2])
  
    const data3 = useMemo(() => {
      return depthData3
    }, [depthData3])
  
    const data4 = useMemo(() => {
      return depthData4
    }, [depthData4])
  
    const data5 = useMemo(() => {
      return depthData5
    }, [depthData5])
  
    const data6 = useMemo(() => {
      return depthData6
    }, [depthData6])
  
  
    const data7 = useMemo(() => {
      return seaData
    }, [seaData])


    
    
    return (
      <div>
      <Navbar />
      
      <div className=" pt-[120px] min-h-screen flex-col items-center justify-between p-10 bg-[#354545]">

      <Navbar />


      <LegendDepth />
      
      <Map
      style={{ height: '100vh', width: '100%' }}
      initialViewState={{
        latitude: -39.5688460,
        longitude: 176.84236931005989,
        zoom: 12
      }}
      minZoom={10.5}


      
      mapStyle="mapbox://styles/margarita12/cm0vsv1p100di01pq0pzmahmh" //               
      mapboxAccessToken={MAPBOX_PUBLIC_TOKEN}
      interactiveLayerIds={['data1']}
      onMouseMove={onHover}
      attributionControl={false}
      >


      <Source id='depth_1' type="geojson" data = {data1}>
        <Layer {...flooddepth_1_StyleFill} />
      </Source>
      
      <Source id='depth_2' type="geojson" data = {data2}>
        <Layer {...flooddepth_2_StyleFill} />
      </Source>

      <Source id='depth_3' type="geojson" data = {data3}>
        <Layer {...flooddepth_3_StyleFill} />
      </Source>
      
      <Source id='depth_4' type="geojson" data = {data4}>
        <Layer {...flooddepth_4_StyleFill} />
      </Source>
      

      <Source id='depth_5' type="geojson" data = {data5}>
        <Layer {...flooddepth_5_StyleFill} />
      </Source>
      

      <Source id='sea' type="geojson" data = {data7}>
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