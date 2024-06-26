import React from 'react'
import '../../styles/components/layout/Header.css'

const Header = (props) => {
    return(
        <header>
            <div className='holder'>
                <img src='images/logo.png' width="100" alt='E-Nos Construcciones' />
                <h1>construcciones</h1>
            </div>
        </header>
    )
}

export default Header;