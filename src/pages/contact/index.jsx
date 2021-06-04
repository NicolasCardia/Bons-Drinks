import {React, useState} from 'react';
import styles from './styles.module.css';
import Modal from '../../components/modal/ModalContato';


const Contato = () => {

    const [modalOpen, setModalOpen] = useState()

    return (


        <div className={styles.main} >
            <h3 className={styles.title} > Fale com a gente </h3>
            <div className={styles.body}>
                <div className={styles.contact}>
                <form>
                    <div>
                        <label htmlFor="">Nome:</label>
                        <input type="text" />
                    </div>

                    <div>
                        <label> Email:</label>
                        
                        <input type="email"/>
                    </div>

                    <div>
                        <label htmlFor="">Mensagem</label>
                        <input className={styles.textarea} type="textarea" placeholder="escreva sua menssagem" />
                    </div>

                    <button onClick={(event) => {event.preventDefault()
                    return  setModalOpen(!modalOpen)}} > Enviar! </button>
                </form>
                {modalOpen && <Modal />}
                </div>
            </div>



        </div>

    )
}

export default Contato