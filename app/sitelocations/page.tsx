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
  
  const [sitelocationsData, setSitelocationsData] = useState(null)
  const [hoverInfo, setHoverInfo] = useState(null);
  
  
  useEffect(() => {
    /* global fetch */
    fetch(
      'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/mainP_RMI/sitelocation.geojson'
    )
    .then(resp => resp.json())
    .then(json => {
      setSitelocationsData(json)})
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
      return sitelocationsData
    }, [sitelocationsData])




    
    return (
      <div>
      <Navbar />
      
      <div className=" pt-[120px] min-h-screen flex-col items-center justify-between p-20 bg-[#1f3940]">
      
      {/* <div className="flex text-[#e77148] text-4xl tracking-wider text-transform:uppercase py-10"> coastal</div> */}
      <div>
          <div className="flex text-[#D96941] text-2xl tracking-wider text-transform:uppercase py-5"> SITE LOCATIONS </div>
          <div className="flex text-[#AAAFAF]  tracking-wider text-transform:uppercase py-5 "> </div>
        </div>
      
      {/* <div  className="drop-shadow-2xl">  */}
      <Map
      style={{ height: '90vh'}}
      initialViewState={{
        latitude: 7.09929244603147058,
        longitude: 171.30422338904287471,
        zoom: 12
      }}
      
      // mapStyle="mapbox://styles/margarita12/clv4l6rdu00gl01rjd4r0gc7d" //               
      mapStyle="mapbox://styles/mapbox/satellite-v9" //               
      mapboxAccessToken={MAPBOX_PUBLIC_TOKEN}
      interactiveLayerIds={['data1']}
      onMouseMove={onHover}
      attributionControl={false}
      >

  
{/* 
      <Source id='aucklandcoastFill' type="geojson" data = {data1}>
      <Layer {...aucklandcoastStyleFill} />
      </Source> */}

      <Source id='coast7m' type="geojson" data = {data1}>
      <Layer {...coastline7mStyleLine} />
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