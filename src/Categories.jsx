import './Categories.css'
import christmas from './assets/navidad.jpg'
import mantas from './assets/mantas.jpg'
import boho from './assets/boho.jpg'
import basico from './assets/basico.jpg'
import design from './assets/diseno.jpg'

export default function Categories() {
    return(
        <div id='categories-container'>

            <h2 id='categories-title'>Inspirate y renueva tu hogar </h2>
            <div className='categories'>
                <div className='col1'>
                    <div className='category' id='christmasImg'>
                        <h3>Cojines Navidenos</h3>
                    </div>
                    <div className='category' id='basicoImg'>
                        <h3>Cojines Basicos</h3>
                    </div>
                    <div className='category' id='designImg'>
                        <h3>Cojines Diseno</h3>
                    </div>
                </div>
                <div className='col2'>
                    <div className='category' id='mantasImg'>
                        <h3>Mantas</h3>
                    </div>
                    <div className='category' id='bohoImg'>
                        <h3>Cojines Boho</h3>
                    </div>
                </div>
            </div>
        </div>
    )
} 