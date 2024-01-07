import { useState, useEffect, React } from 'react';
import Globe from 'react-globe.gl';
import { pointsData } from "../constants";

const MyGlobe = () => {
    const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="#1e293b" cx="14" cy="14" r="7"></circle>
    </svg>`;

    const isMobileScreen = () => window.matchMedia('(max-width: 768px)').matches;

    let currentlyClickedElement = null;
    
    return (
        <div style={{ width: '100%' }}>
            <Globe
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

                   
                    el.onclick = () => {

                        if (currentlyClickedElement) {
                            // Reset the styles or do whatever you need to do for the previously clicked element
                            currentlyClickedElement.style.color = 'red'; // Reset color or any other styles
                            currentlyClickedElement.tooltip.remove();
                            currentlyClickedElement.clicked = false; // Reset the custom 'clicked' property
                        }


                        if (el.clicked) {
                            el.tooltip.remove();
                            el.style.color = 'red';
                            el.clicked = false;
                        }

                        else {

                            el.style.color = 'yellow';

                            // Create and show the tooltip on hover
                            const tooltip = document.createElement('div');
                            tooltip.style.position = 'absolute';
                            tooltip.style.top = `${event.clientY}px`;
                            tooltip.style.left = `${event.clientX}px`;
                            tooltip.style.padding = '8px';
                            tooltip.style.background = 'rgba(255, 255, 255, 0.9)';
                            tooltip.style.border = '1px solid #ccc';
                            tooltip.style.borderRadius = '4px';
                            tooltip.innerHTML = `<p>${d.info} <a href="/posts/${d.id}"><u>View Story!</u></a></p>`;
                            document.body.appendChild(tooltip);

                            // Store the tooltip element for removal later
                            el.tooltip = tooltip;
                            
                            el.clicked = true;
                            currentlyClickedElement = el;
                        }
                        
                    }
                    

                    return el;
                }}
            />
        </div>
    );
};

export default MyGlobe;
