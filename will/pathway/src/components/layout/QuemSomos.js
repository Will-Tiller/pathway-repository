import { Link } from 'react-router-dom';
import styles from './QuemSomo.module.css';

function QuemSomos() {
    return (
        <section className={styles.quemSomos}>
            <Link to='/sobre' className={styles.link}><h2 className={styles.title}>Quem Somos</h2></Link>
            <p className={styles.description}>
                Somos uma empresa de consultoria de RH e Negócios que se destaca pela abordagem inovadora
                e busca incansável pela excelência.
            </p>
            <p className={styles.description}>
                Uma <span className={styles.highlight}>equipe de profissionais com mais de 10 anos de experiência em Gestão de RH, Negócios e
                Projectos</span>, fundimos expertise e sinergias para oferecer <span className={styles.highlight}>soluções disruptivas e inovadoras</span> às
                empresas.
            </p>
            <button className={styles.button}>Ler mais</button>
        </section>
    );
}

export default QuemSomos;