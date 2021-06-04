import React from 'react';
import styles from './styles.module.css';
import DrinkPic from './drinksHome.jpg'
import Landing from '../../components/lading/landing';

const Home = () => {

    return (
        <div className={styles.main}>   
            <Landing />
            <img src={DrinkPic} alt="Imagem do home" />
        </div>
    )
}

export default Home


