import React from 'react'
import styles from './styles.module.css'


const Sobre = () => {
 
    return (
        <div className = {styles.container}>
            <div className = {styles.about1}>
            <p>nicolas Cardia</p>
            <button href = "https://www.linkedin.com/in/nicolas-cardia-silva/">linkedin</button>
            </div>

            <div className = {styles.about2}>
            <p>Thamires Bessa</p>
            <button href = "https://www.linkedin.com/in/thamires-bessa/">linkedin</button>
            </div>

            <div className = {styles.about3}>
            <p>Lais Brandão</p>
            <button href = "https://www.linkedin.com/in/laisbrandaonunes/">linkedin</button>
            </div>
        </div>
    )
}

export default Sobre
