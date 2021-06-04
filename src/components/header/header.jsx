import React from 'react';
import styles from './header.module.css'
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header className={styles.header}>

            <nav className={styles.list}>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <li>Inicio</li>
                </Link>

                <Link to='/drinks/populares' style={{ textDecoration: 'none' }} >
                    <li>Drinks</li>
                </Link>


                <Link to='/sobreNos' style={{ textDecoration: 'none' }}>
                    <li>Sobre nós</li>
                </Link>

                <Link to='/contact' style={{ textDecoration: 'none' }}>
                    <li>Contato</li>
                </Link>
            </nav>
        </header>

    )
}

export default Header

