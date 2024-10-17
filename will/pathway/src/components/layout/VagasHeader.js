import style from './VagasHeader.module.css';

function VagasHeader() {
  return (
    <div className={style.headerContainer}>
      <div className={style.content}>
        <h1 className={style.title}>OPORTUNIDADES DE EMPREGO</h1>
        <div className={style.underline}></div>
        <div className={style.textos}>
          <p>Tenha acesso a diversas oportunidades de emprego.</p>
          <p>Encontre a vaga de emprego perfeita que você procura.</p>
        </div>
        <button className={style.cta}>Explorar Vagas</button>
      </div>
    </div>
  );
}

export default VagasHeader;

