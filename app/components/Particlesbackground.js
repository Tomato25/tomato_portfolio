import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { tsParticles } from "tsparticles-engine";

import React from 'react'

export default function Particlesbackground() {

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);



  return (
    <Particles

    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
        background: {
            color: {
                value: "#003D2B",
            },
        },
        fullScreen: {
            enable: true,
            zIndex: 1,
         },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 3,
                },
                repulse: {
                    distance: 150,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#ADE6B940",
            },
            links: {
                color: "#ADE6B940",
                distance: 220,
                enable: true,
                opacity: 0.1,
                width: 1,
            },
            collisions: {
                enable: false,
            },
            move: {
                directions: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
                decay:0.000005
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 70,
            },
            opacity: {
                value: 0.3,
            },
            shape: {
                type: "polygon",
            },
            size: {
                value: { min: 1, max: 3 },
            },
        },
        detectRetina: true,
    }}
/>
  )
}
