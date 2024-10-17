import { Link } from 'react-router-dom';
import styles from './VagasComponent.module.css';

function VagasComponent() {
  const vagas = [
    { titulo: "Key Account Manager", data: "Sep 20, 2024", empresa: "Pathway" },
    { titulo: "Representante de Vendas", data: "Sep 20, 2024", empresa: "Pathway" },
    { titulo: "Fiel de Armazém", data: "Sep 3, 2024", empresa: "Pathway" },
    { titulo: "Chief Financial Officer (CFO)", data: "Sep 2, 2024", empresa: "Pathway" }
  ];

  return (
    <div className={styles.vagasContainer}>
      <h2 className={styles.titulo}>Vagas</h2>
      <ul className={styles.listaVagas}>
        {vagas.map((vaga, index) => (
          <li key={index} className={`${styles.vagaItem} ${index === vagas.length - 1 ? styles.ultimoItem : ''}`}>
            <Link to='/vagas'>
              <span className={styles.tituloVaga}>{vaga.titulo}</span>
            </Link>
            <span className={styles.detalhesVaga}>
              {vaga.data} — by {vaga.empresa}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VagasComponent;
