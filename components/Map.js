import { env } from 'process'
import React,{useState,useEffect,useRef} from 'react'
import ReactMapGl from 'react-map-gl'
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiaHVhbmdmdWd1aTAwIiwiYSI6ImNrd3oxeWU3djBreWEyb3BodW45aW9uNGMifQ.NEvRELRamLj9bcTTXOjzaA';


const Map =()=>{
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(113.16);
    const [lat, setLat] = useState(23.05);
    const [zoom, setZoom] = useState(10);

    useEffect(() => {
        // if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
        container: mapContainer&&mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
        });
        });

    return (
            <div ref={mapContainer}  className=" h-full" />
        );
}

// const Map = () => {
//     const [viewPort,setViewPort] = useState({
//         width:'100%',
//         height:'100%',
//         latitude:37.7577,
//         lgnitude:-122.4376,
//         zoom:11,
//     })
//     return (
//             <ReactMapGl
//             mapStyle='mapbox://styles/huangfugui00/ckwzpdgvd1hgg15mt570e2uwq'
//             mapboxApiAccessToken='pk.eyJ1IjoiaHVhbmdmdWd1aTAwIiwiYSI6ImNrd3oxeWU3djBreWEyb3BodW45aW9uNGMifQ.NEvRELRamLj9bcTTXOjzaA'
//             {...viewPort}
//             >
//             </ReactMapGl>
//     )
// }

export default Map
