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


export default Map
