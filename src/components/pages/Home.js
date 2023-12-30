import styles from '../pages/Home.module.css'
import saving from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>GERCOSTS</span></h1>
            <p>Seu genrenciador de custos de projetos</p>
            <p>Crie seus projetos e gerencie os custos de forma simples</p>
            <LinkButton to='/newproject' text='Criar Projeto' />
            <img src={saving} alt='costs'/>
        </section>
    )
}

export default Home