'use client'

import * as React from 'react';
import * as turf from '@turf/turf';

import Image from "next/image";
import {useState, useEffect, useMemo, useCallback} from 'react';

import Map, {Source, Layer} from 'react-map-gl';

import {AttributionControl} from 'react-map-gl';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

// import {water_mpx, buildings_mpx} from './mapbox_bg_layers';

// import { aucklandcoastStyle} from '../../utils/mapboxlayers/projectlayers';
import { aucklandcoastStyleFill, aucklandcoastStyleLine} from '../../utils/mapboxlayers/projectlayers'
import {coastline7mStyleFill, coastline7mStyleLine } from '../../utils/mapboxlayers/projectlayers'
import {coastline20mStyleFill, coastline20mStyleLine } from '../../utils/mapboxlayers/projectlayers'
import { bboxStyle} from '../../utils/mapboxlayers/turflayers';


const MAPBOX_PUBLIC_TOKEN = 'pk.eyJ1IjoibWFyZ2FyaXRhMTIiLCJhIjoiY2s1Nm5mNWpxMDRvcTNtbHppYm4xeTJpOSJ9.boMER5L2ddRxh1pR7hDWJA'; 



export default function Coastalmap() {
  
  const [aucklandcoastData, setAucklandcoastData] = useState(null)
  const [coastline7mData, setCoastline7mData] = useState(null)
  const [coastline20mData, setCoastline20mData] = useState(null)
  const [hoverInfo, setHoverInfo] = useState(null);
  
  
  useEffect(() => {
    /* global fetch */
    fetch(
      'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_Auckland/coastline_auckland_wgs.geojson'
    )
    .then(resp => resp.json())
    .then(json => {
      setAucklandcoastData(json)})
      .catch(err => console.error('Could not load data', err)); // eslint-disable-line
    }, []);


    
    useEffect(() => {
      /* global fetch */
      fetch(
        'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_Auckland/coast_min7m.geojson'
      )
      .then(resp => resp.json())
      .then(json => {
        setCoastline7mData(json)})
        .catch(err => console.error('Could not load data', err)); // eslint-disable-line
      }, []);
      
      
        
    useEffect(() => {
        /* global fetch */
        fetch(
          'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_Auckland/coast_min20m.geojson'
        )
        .then(resp => resp.json())
        .then(json => {
          setCoastline20mData(json)})
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
    
    
    
    const data4 = useMemo(() => {
      return aucklandcoastData
    }, [aucklandcoastData])


    const data1 = useMemo(() => {
      return coastline7mData
    }, [coastline7mData])


    const data2 = useMemo(() => {
      return coastline20mData
    }, [coastline20mData])


   

    
    return (
      <div>
      <Navbar />
      
      <div className=" pt-[120px] min-h-screen flex-col items-center justify-between p-20 bg-[#354545]">
      
      {/* <div className="flex text-[#e77148] text-4xl tracking-wider text-transform:uppercase py-10"> coastal</div> */}
      <div>
          <div className="flex text-[#D96941] text-4xl tracking-wider text-transform:uppercase py-5"> site locations </div>
          <div className="flex text-[#AAAFAF]  tracking-wider text-transform:uppercase py-5 "> </div>
        </div>
      
      {/* <div  className="drop-shadow-2xl">  */}
      <Map
      style={{ height: '100vh', width: '100%' }}
      initialViewState={{
        latitude: 7.09929244603147058,
        longitude: 171.30422338904287471,
        zoom: 12
      }}
      
      // mapStyle="mapbox://styles/margarita12/cluq5psso00j001r7ckm2ayus" //               
      mapStyle="mapbox://styles/mapbox/satellite-v9" //               
      mapboxAccessToken={MAPBOX_PUBLIC_TOKEN}
      interactiveLayerIds={['data1']}
      onMouseMove={onHover}
      attributionControl={false}
      >

    
    
{/*     
    <Source id = 'bbox_t' type = 'geojson' data = {data4}> 
      <Layer
        id="bbox_t"
        type="fill"
        paint={{ 'fill-color': '#161E1F', 'fill-opacity': 0.7 }}
        />
    </Source>
  
       */}
      

      <Source id='aucklandcoastFill' type="geojson" data = {data4}>
      <Layer {...aucklandcoastStyleFill} />
      </Source>

      <Source id='coast7mFill' type="geojson" data = {data1}>
      <Layer {...coastline7mStyleFill} />
      </Source>


      <Source id='coast20mFill' type="geojson" data = {data2}>
      <Layer {...coastline20mStyleFill} />
      </Source>



      <Source id='coast7m' type="geojson" data = {data1}>
      <Layer {...coastline7mStyleLine} />
      </Source>

      <Source id='coast20m' type="geojson" data = {data2}>
      <Layer {...coastline20mStyleLine} />
      </Source>


      <Source id='aucklandcoastline' type="geojson" data = {data4}>
      <Layer {...aucklandcoastStyleLine} />
      </Source>

{/* 
      
      <Source id = 'aucklandBbox' type = 'geojson' data = {geojsonbbox}> 
      <Layer {...bboxStyle} />
    </Source>
     */}
    
  


    {/* <Source id = 'bbox_t' type = 'geojson' data = {data4}> 
    <Layer
      id="bbox_t"
      type="fill"
      paint={{ 'fill-color': '#088', 'fill-opacity': 0.8 }}
      />
    </Source>
   */}
  
    
    
    {/* <Layer {...buildings_mpx} />
  <Layer {...water_mpx} /> */}
  
  
  
  {/*                                 
  <Source id='bbox_test' type="geojson" data = {polyMask(mask, bounds)} >
  <Layer {...aucklandcoastStyle} />
  </Source>
  
*/}




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