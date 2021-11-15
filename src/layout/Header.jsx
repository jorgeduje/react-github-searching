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
                        <a class="fa fa-home"/><span>Home</span>
                    </li>
                    <li onClick={()=> navigate(- 1)}>
                        <a href="#" class="previous round">&#8249;</a><span>previous</span>
                    </li>
                    <li onClick={()=> navigate(+ 1)}>
                        <span className="onlySpan">Next</span><a href="#" class="next round">&#8250;</a>
                    </li>
                </ul>
        </div>
      </>
    )
}

export default Header
