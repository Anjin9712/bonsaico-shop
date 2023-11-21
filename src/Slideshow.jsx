import { useEffect, useState } from 'react'
import './Slideshow.css'

export default function Slideshow() {
    
    const [slides, setSlides] = useState([
        {
            'background-image': 'https://media.architecturaldigest.com/photos/6409eebaf004df0027a8b133/16:9/w_1920,c_limit/Aim%C3%A9e%20Mazzenga%20-%20VCLaunch02.jpeg',
            h2: 'Un lugar especial',
            p: "Para crear tu espacio sonado"
        },
        {
            'background-image': 'https://media.admagazine.com/photos/634d6fcdf96d67e35902873c/16:9/w_1920,c_limit/3.%20Living%20Room%20-%20Entrance%20View.jpg',
            h2: 'El lugar especial',
            p: "Para crear tu espacio sonado"
        },
        {
            'background-image': 'https://media.admagazine.com/photos/621d81c974c99c81ee8e73f9/16:9/w_1920,c_limit/GettyImages-967130988.jpg',
            h2: 'El lugar especial',
            p: "Para crear tu espacio sonado"
        },
        {
            'background-image': 'https://media.revistaad.es/photos/628608e3b23b242d804f5bd1/16:9/w_1920,c_limit/Sala%2070.jpg',
            h2: 'El lugar especial',
            p: "Para crear tu espacio sonado"
        }

    ])
    const [slideAutoPlay, setSlideAutoPlay] = useState(true);

    async function autoPlay() {
        const domSlides = [...document.querySelectorAll('.slide')];
        let previousSlide = undefined;
        let index = 0;

        while (slideAutoPlay === true) {
            const currentSlide = domSlides[index];
            currentSlide.classList.add('current');

            if (previousSlide) {
                previousSlide.classList.add('out');

                await new Promise((resolve, _reject) => {
                    setTimeout(resolve, 2600);
                })

                previousSlide.classList.remove('current', 'out');
            }

            previousSlide = currentSlide;

            if (index === domSlides.length - 1) {
                index = 0;

            } else {
                index++
            }

            await new Promise((resolve, _reject) => {
                setTimeout(resolve, 10000);
            })
        }
    }

    useEffect(()=> {
        autoPlay()
    }, [])
    
    return(
        <>
            <div id="slideShowContainer">

                {
                    slides.map((slide, index) => {
                        return <div id={`slide${index}`} key={`slide${index}`}className="slide">
                                <div className="slide-background" style={{
                                    backgroundImage: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0, .5)), url('${slide['background-image']}')`
                                }}></div>
                                <div className="slide-content">
                                        <h2>{slide.h2}</h2>
                                        <p>{slide.p}</p>
                                    </div>
                                </div>
                    })
                }
                
            </div>
        </>
    )
}