import './Categories.css'
import christmas from './assets/navidad.jpg'
import mantas from './assets/mantas.jpg'
import boho from './assets/boho.jpg'
import basico from './assets/basico.jpg'
import design from './assets/diseno.jpg'

export default function Categories() {
    return(
        <>
            <h2 id='categories-title'>Inspirate y renueva tu hogar</h2>
            <div className='categories'>
                <div className='col1'>
                    <div id='christmasImg'>

                    </div>
                    <div id='basicoImg'></div>
                    <div id='designImg'></div>
                </div>
                <div className='col2'>
                    <div id='mantasImg'></div>
                    <div id='bohoImg'></div>
                </div>
            </div>
        </>
    )
} 