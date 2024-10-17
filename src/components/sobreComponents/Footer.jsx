import { motion } from 'framer-motion';
import { CiMail } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin, FaLocationDot, FaSquareXTwitter, FaWhatsapp } from "react-icons/fa6";
import { useInView } from 'react-intersection-observer'; // Importando o hook
import agc from '../../assets/AGCLogo.png';
import fas from '../../assets/FAS.png';
import pathwaylogo from '../../assets/logo.png';
import woodrose from '../../assets/WOODROSE.png';

export default function Footer() {
  const { ref, inView } = useInView({
    triggerOnce: true, // A animação acontece apenas uma vez
    threshold: 0.1, // Quando 10% do componente estiver visível
  });

  return (
    <motion.div
      ref={ref} // Referência para o useInView
      initial={{ y: '100vh', opacity: 0 }} // Inicialmente fora da tela
      animate={inView ? { y: 0, opacity: 1 } : {}} // Anima quando está visível
      transition={{ type: 'spring', stiffness: 80, damping: 20, duration: 1 }} // Definindo a transição
      className="w-full h-auto flex flex-col"
    >
      <div className='w-[80%] h-[5px] border-b-2 border-purple-900 mx-auto mt-10'></div>
      <div className="w-[80%] h-auto flex flex-col items-center md:items-start md:flex-row md:justify-between mx-auto">
        <img src={pathwaylogo} alt="" className='w-[20%] h-[20%] md:w-[10%] md:h-[10%] object-scale-down mt-6'/>
        <div className='w-[30%] md:w-[20%] h-[5%] flex flex-row justify-evenly text-2xl text-purple-900 mt-4'>
          <FaLinkedin />
          <FaFacebook />
          <FaSquareXTwitter />
        </div>
      </div>
      <div className="w-[80%] h-auto flex flex-col md:flex-row mx-auto mt-10">
        <div className="flex-1 flex flex-col text-purple-900">
          <h3 className="font-roboto font-bold pt-6 text-center md:text-left">Serviços</h3>
          <ul className=" hidden md:block list-none">
            <li style={{ fontSize: "0.8rem" }} className="font-open-sans pt-3 pr-6">- Aquisição de talentos</li>
            <li style={{ fontSize: "0.8rem" }} className="font-open-sans pt-3 pr-6">- Mapeamento de Talentos</li>
            <li style={{ fontSize: "0.8rem" }} className="font-open-sans pt-3 pr-6">- Levantamento de referências 360</li>
            <li style={{ fontSize: "0.8rem" }} className="font-open-sans pt-3 pr-6">- Assessment – Testes psicotécnicos, inventário de personalidades</li>
            <li style={{ fontSize: "0.8rem" }} className="font-open-sans pt-3 pr-6">- Formação e desenvolvimento</li>
            <li style={{ fontSize: "0.8rem" }} className="font-open-sans pt-3 pr-6">- Desenvolvimento de liderança e coaching executivo</li>
            <li style={{ fontSize: "0.8rem" }} className="font-open-sans pt-3 pr-6">- Análise de clima organizacional e engajamento dos colaboradores</li>
            <li style={{ fontSize: "0.8rem" }} className="font-open-sans pt-3 pr-6">- Auditoria de RH</li>
            <li style={{ fontSize: "0.8rem" }} className="font-open-sans pt-3 pr-6">- Gestão de talentos e gestão de desempenho</li>
          </ul>
        </div>
        <div className="flex-1 flex flex-col text-purple-900">
          <h3 className="font-roboto font-bold pt-6 text-center md:text-left">Contactos</h3>
          <div className="w-full h-[50px] hidden md:flex justify-evenly ">
            <FaLocationDot className="mt-4 mr-3" />
            <span style={{ fontSize: "0.8rem" }} className="pt-3 pr-8">Cidade, 367 R. João de Barros, Maputo 1102</span>
          </div>
          <div className="w-full h-[50px] hidden md:flex ">
            <FaWhatsapp className="mt-4 mr-3 " />
            <span style={{ fontSize: "0.8rem" }} className="pt-3 pr-8">( +258 ) 84 685 879 55</span>
          </div>
          <div className="w-full h-[50px] hidden md:flex ">
            <CiMail className="mt-4 mr-3 " />
            <span style={{ fontSize: "0.8rem" }} className="pt-3 pr-8">geral@pathway.co.mz</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col text-purple-900">
          <h3 className="font-roboto font-bold pt-6 text-center md:text-left">Parceiros</h3>
          <img src={agc} alt="" className="w-1/5 h-1/5 object-scale-down hidden md:block" />
          <img src={fas} alt="" className="w-1/5 h-1/5 object-scale-down hidden md:block" />
          <img src={woodrose} alt="" className="w-1/5 h-1/5 object-scale-down hidden md:block" />
        </div>
        <div className="flex-1 flex flex-col items-center md:items-start text-purple-900">
          <h3 className="font-roboto font-bold pt-6">Mantenha-se Actualizado</h3>
          <input type="text" name="" id="" placeholder="Endereço de Email :" className="w-full h-[60px] pl-4 fonto-mono outline-none border-2 border-gray-500 bg-white text-purple-600 mt-3" />
          <button className="w-[100px] h-[40px] bg-orange-600 text-white font-mono font-bold mt-3">
            Registar
          </button>
        </div>
      </div>
    </motion.div>
  );
}
