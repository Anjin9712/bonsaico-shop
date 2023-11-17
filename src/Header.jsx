import './Header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Header() {

    function showSearchDialog() {
        const modalContainer = document.querySelector('#modalContainer');
        modalContainer.removeAttribute('class');
        setTimeout(() => {
            modalContainer.classList.add('active');
        }, 50);
        

    }

    function hideSearchDialog(event) {
        event.stopPropagation()
        const modalContainer = document.querySelector('#modalContainer');
        modalContainer.classList.add('out')
    }
    
    return(
        <>
            <header>
                <div id='logo-container'>
                    <img src="https://bonsaico.com.co/wp-content/uploads/2021/08/bonsaico-logo-homepage1.png" alt="" />
                    <div id="search-container">
                        <button onClick={showSearchDialog} id='openSearch'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                    </div>
                </div>
                <div id='navbar-container'>
                    <nav>
                        <ul>
                            <li><p>Home</p></li>
                            <li><p>Tienda</p> <i></i></li>
                            <li><p>Donde encontrarnos</p></li>
                            <li><p>Contactanos</p></li>
                            <li><p>Acerca de</p></li>
                        </ul>
                    </nav>
                    
                </div>
            </header>
            <div id='modalContainer' className='' onClick={hideSearchDialog}>
                <div className='modal-background'>
                    <div className='modalSearch'onClick={(event)=>event.stopPropagation()}>
                        <button id='closeSearch' onClick={hideSearchDialog}><FontAwesomeIcon icon={faArrowRight} /></button>
                        <form action="">
                            <input type="text" />
                            <button id='search'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                        </form>
                        <div id='searchResults'>
                            <ul>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header