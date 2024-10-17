import img from '../../assets/Key-Account-Manager.jpg'
import styles from './SomeVagas.module.css';
import { useState } from 'react';

function SomeVagas() {
  const [filtro, setFiltro] = useState('');
  const [tipoFiltro, setTipoFiltro] = useState('todos');

  const vagas = [
    {
      id: 1,
      titulo: "Gerente de Projetos",
      dataFim: "Out 30, 2024",
      provincia: "Maputo",
      tipo: "Efetivo",
      imagem: {img}
    },
    {
      id: 2,
      titulo: "Analista de Marketing",
      dataFim: "Nov 15, 2024",
      provincia: "Beira",
      tipo: "Estágio",
      imagem: {img}
    },
    {
        id: 3,
        titulo: "Gerente de Projetos",
        dataFim: "Out 30, 2024",
        provincia: "Maputo",
        tipo: "Efetivo",
        imagem: {img}
      },
      {
        id: 4,
        titulo: "Analista de Marketing",
        dataFim: "Nov 15, 2024",
        provincia: "Beira",
        tipo: "Estágio",
        imagem: {img}
      },
      {
        id: 5,
        titulo: "Gerente de Projetos",
        dataFim: "Out 30, 2024",
        provincia: "Maputo",
        tipo: "Efetivo",
        imagem: {img}
      },
      {
        id: 6,
        titulo: "Analista de Marketing",
        dataFim: "Nov 15, 2024",
        provincia: "Beira",
        tipo: "Estágio",
        imagem: {img}
      },
      {
        id: 7,
        titulo: "Gerente de Projetos",
        dataFim: "Out 30, 2024",
        provincia: "Maputo",
        tipo: "Efetivo",
        imagem: {img}
      },
      {
        id: 8,
        titulo: "Analista de Marketing",
        dataFim: "Nov 15, 2024",
        provincia: "Beira",
        tipo: "Estágio",
        imagem: {img}
      }
    
  ];

  const vagasFiltradas = vagas.filter(vaga => {
    const matchFiltro = vaga.titulo.toLowerCase().includes(filtro.toLowerCase()) ||
                        vaga.provincia.toLowerCase().includes(filtro.toLowerCase());
    const matchTipo = tipoFiltro === 'todos' || vaga.tipo.toLowerCase() === tipoFiltro.toLowerCase();
    return matchFiltro && matchTipo;
  });

  return (
    <div className={styles.container}>
      <div className={styles.filterContainer}>
        <input 
          type="text"
          placeholder="Pesquisar vagas" 
          className={styles.inputFilter}
          onChange={(e) => setFiltro(e.target.value)}
        />
        <select 
          className={styles.selectFilter}
          onChange={(e) => setTipoFiltro(e.target.value)}
        >
          <option value="todos">Todos os tipos</option>
          <option value="efetivo">Efetivo</option>
          <option value="estagio">Estágio</option>
        </select>
      </div>
      <div className={styles.listVagas}>
        {vagasFiltradas.map(vaga => (
          <div key={vaga.id} className={styles.vagaCard}>
            <img src={vaga.imagem} alt={vaga.titulo} className={styles.imagemVaga} />
            <div className={styles.infoVaga}>
              <h3 className={styles.tituloVaga}>{vaga.titulo}</h3>
              <p className={styles.tipoVaga}>{vaga.tipo}</p>
              <div className={styles.detalhesVaga}>
                <span className={styles.dataFim}>Data de fim: {vaga.dataFim}</span>
                <span className={styles.provincia}>Província: {vaga.provincia}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SomeVagas;
