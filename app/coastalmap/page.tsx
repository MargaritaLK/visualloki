'use client'

import * as React from 'react';
import * as turf from '@turf/turf';

import Image from "next/image";
import {useState, useEffect, useMemo, useCallback} from 'react';

import Map, {Source, Layer} from 'react-map-gl';

import {AttributionControl} from 'react-map-gl';

import { Navbar } from '@/components/navbar';

// import {water_mpx, buildings_mpx} from './mapbox_bg_layers';

// import { aucklandcoastStyle} from '../../utils/mapboxlayers/projectlayers';
import { aucklandcoastStyle} from '../../utils/mapboxlayers/projectlayers'
import { bboxStyle} from '../../utils/mapboxlayers/turflayers';


const MAPBOX_PUBLIC_TOKEN = 'pk.eyJ1IjoibWFyZ2FyaXRhMTIiLCJhIjoiY2s1Nm5mNWpxMDRvcTNtbHppYm4xeTJpOSJ9.boMER5L2ddRxh1pR7hDWJA'; 



export default function Coastalmap() {
  
  const [aucklandcoastData, setAucklandcoastData] = useState(null)
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

    console.log(data4)

   
    // function polyMask(mask, bounds) {
    //   var bboxPoly = turf.bboxPolygon(bounds);
    //   return turf.difference(bboxPoly, mask);
    // }
    
    var bounds = [-122.5336, 37.7049, -122.3122, 37.8398]; // wsen
    
    const bbox  = turf.bboxPolygon(bounds);

    const tt = {
      "type": "FeatureCollection",
      "name": "bbox_auckland_wgs",
      "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
      "features": [
      { "type": "Feature", "properties": { "MINX": 172.73879362587965, "MINY": -38.404893729613178, "MAXX": 177.18804571185635, "MAXY": -34.927190486231879, "CNTX": 174.963419668868, "CNTY": -36.666042107922529, "AREA": 15.473178410022165, "PERIM": 15.853910658715989, "HEIGHT": 3.4777032433812991, "WIDTH": 4.4492520859766955 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 172.738793625879651, -38.404893729613178 ], [ 177.188045711856347, -38.404893729613178 ], [ 177.188045711856347, -34.927190486231879 ], [ 172.738793625879651, -34.927190486231879 ], [ 172.738793625879651, -38.404893729613178 ] ] ] } }
      ]
      }
      
    
    
    
    return (
      <div>
      <Navbar />
      
      <div className=" pt-[120px] min-h-screen flex-col items-center justify-between p-20 bg-[#354545]">
      
      <div className="flex text-[#e77148] text-4xl tracking-wider text-transform:uppercase py-10"> coastal</div>
      
      {/* <div  className="drop-shadow-2xl">  */}
      <Map
      style={{ height: '80vh', width: '80%' }}
      initialViewState={{
        latitude: -36.9148979,
        longitude: 174.8389683,
        zoom: 12
      }}
      
      mapStyle="mapbox://styles/margarita12/cluq5psso00j001r7ckm2ayus" //               
      mapboxAccessToken={MAPBOX_PUBLIC_TOKEN}
      interactiveLayerIds={['data1']}
      onMouseMove={onHover}
      attributionControl={false}
      >

    
    
    
    <Source id = 'bbox_t' type = 'geojson' data = {data4}> 
      <Layer
        id="bbox_t"
        type="fill"
        paint={{ 'fill-color': '#161E1F', 'fill-opacity': 0.7 }}
        />
    </Source>
  
      
      
      <Source id='aucklandcoast' type="geojson" data = {data4}>
      <Layer {...aucklandcoastStyle} />
      </Source>


      {/* 
      <Source id = 'aucklandBbox' type = 'geojson' data = {geojsonbbox}> 
      <Layer {...bboxStyle} />
    </Source> */}
    
    
    


{/* 
    <Source id = 'bbox_t' type = 'geojson' data = {tt}> 
    <Layer
      id="bbox_t"
      type="fill"
      paint={{ 'fill-color': '#088', 'fill-opacity': 0.2 }}
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

</div>
);
}