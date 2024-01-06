import { useState, useEffect, React } from 'react';
import Globe from 'react-globe.gl';

const MyGlobe = () => {
    const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="#1e293b" cx="14" cy="14" r="7"></circle>
    </svg>`;

    const pointsData = [
        {
            id: 'papuaNewGuinea',
            lat: -6.7916,
            lng: 147.3272, // Latitude and Longitude for Papua New Guinea
            size: 10,
            label: 'Papua New Guinea',
            info: 'This is Papua New Guinea. Additional information can go here.',
        },
        {
            id: 'newYork',
            lat: 40.7128,
            lng: -74.006, // Latitude and Longitude for New York
            size: 15,
            label: 'New York',
            info: 'This is New York City. Additional information can go here.',
        },
        {
            id: 'saharaDesert',
            lat: 21.42,
            lng: 13.41, // Latitude and Longitude for Sahara Desert
            size: 20,
            label: 'Sahara Desert',
            info: 'This is the Sahara Desert. Additional information can go here.',
        },
    ];




    return (
        <div style={{ width: '100%' }}>
            <Globe
                // globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                backgroundColor="#0f172a"
                htmlElementsData={pointsData}
                htmlElement={d => {
                    const el = document.createElement('div');
                    el.innerHTML = markerSvg;
                    el.style.color = 'red';
                    el.style.width = `${d.size}px`;

                    el.style['pointer-events'] = 'auto';
                    el.style.cursor = 'pointer';
                    el.onclick = () => console.info(d.info);
                    return el;
                }}
            />
        </div>
    );
};

export default MyGlobe;
