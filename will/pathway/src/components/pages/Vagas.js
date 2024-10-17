import SomeVagas from '../layout/SomeVagas'
import VagasHeader from '../layout/VagasHeader'
import style from './Vagas.module.css'

function Vagas() {
  return (
    <div className={style.vagas_constainer}>
      
      <VagasHeader />
      <SomeVagas />

    </div>
  )
}

export default Vagas