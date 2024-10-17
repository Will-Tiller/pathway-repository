import NossosServicos from '../layout/NossosServicos'
import QuemSomos from '../layout/QuemSomos'
import SlideScrol from '../layout/SlideScrol'
import Testemunhos from '../layout/Testemunhos'
import VagasComponent from '../layout/VagasComponent'
import style from './Inicio.module.css'

function Inicio() {
  return (
    <div className={style.inicio_constainer}>
      <SlideScrol />
      <QuemSomos />
      <NossosServicos />
      <Testemunhos />
      <VagasComponent />

    </div>
  )
}

export default Inicio