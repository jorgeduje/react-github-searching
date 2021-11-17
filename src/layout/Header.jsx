import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';

import "./Header.styles.css"

const Header = () => {

    const [show, setShow] = useState(false)
    const navigate = useNavigate();

    // FUNCION CAMBIAR MENU 

    const handlerMenu = ()=>{
        setShow(!show)
    }

    return (
        <>
            <div className="header-container">
                <a href="https://github.com/"> <i class="bi bi-github"></i></a>
                <h2>Proyect Github</h2>
                <button onClick={handlerMenu}><i class="bi bi-list colore"></i></button>

            </div>

            <div className={show ? "menuNav" : "notVisible"}>
                <ul>
                    <li onClick={()=> navigate('/')}>
                      home
                    </li>
                    <li onClick={()=> navigate(- 1)}>
                     previus
                    </li>
                    <li onClick={()=> navigate(+ 1)}>
                     next
                    </li>
                </ul>
        </div>
      </>
    )
}

export default Header
