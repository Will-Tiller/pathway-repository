import { Link } from 'react-router-dom'
import style from './NossosServicos.module.css'

function NossosServicos() {
    return (
        <section id="services" className={style.services}>

            <div className={style.container}>
                <Link to='/servicos' className={style.title}>Nossos Serviços</Link>
                <div className={style.services_grid}>
                    <div className={style.service_card}>
                        <h3>Consultoria de RH</h3>
                        <p>Soluções personalizadas para optimizar seus processos de RH</p>
                    </div>
                    <div className={style.service_card}>
                        <h3>Treinamento</h3>
                        <p>Programas de desenvolvimento para sua equipa</p>
                    </div>
                    <div className={style.service_card}>
                        <h3>Recrutamento</h3>
                        <p>Encontre os melhores talentos para sua empresa</p>
                    </div>
                    <div className={style.service_card}>
                        <h3>Gestão de Talentos</h3>
                        <p>Estratégias para reter e desenvolver seus colaboradores</p>
                    </div>
                </div>
            </div>

        </section>

    )
}

export default NossosServicos