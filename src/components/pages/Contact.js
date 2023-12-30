import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import Container from '../layout/Container'
import Input from '../form/Input'
import styles from './Contact.module.css'
import SubmitButton from '../form/SubmitButton'

function Contact() {
    return (
        <div className={styles.contact_container}>
            <h1>Contatos</h1>
                <h3>Redes sociais</h3>
                <ul className={styles.social_list}>
                    <li>
                        <FaFacebook /> <span>GERCOSTS</span>
                    </li>
                    <li>
                        <FaInstagram /> <span>GERCOSTS</span>
                    </li>
                    <li>
                        <FaLinkedin /> <span>GERCOSTS</span>
                    </li>
                </ul>
                <p>Nos envie uma mensagem que entramos em contato</p>
                
                <form>
                    <Input type='text' text='Nome' name='name' placeholder='Digite seu nome'/>
                    <Input type='email'text='E-mail' name='email' placeholder='Digite seu e-mail'/>
                    <Input type='text' text='Assunto' name='name' placeholder='Digite o assunto' />
                    <SubmitButton text='Enviar' />
                </form>
                <div className={styles.linha}></div>
        </div>

        
    )
}

export default Contact