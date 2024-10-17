import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // Importando o hook
import Valor from '../../assets/valores2.png';

export default function Valores() {
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
      className="w-full h-auto grid grid-cols-1 flex-col bg-purple-900 md:grid-cols-2 md:flex-row"
    >
      <div className="flex-1">
        <div className='w-[50%] h-[50%] mx-auto mt-[20%]'>
          <img src={Valor} alt="" className='w-full h-full object-cover' />
        </div>
      </div>
      <div className="flex-1 pl-6 pr-6 text-white text-center pt-0 pb-6 md:pb-0 md:pt-[18%] md:pl-6 md:pr-32 md:text-left lg:pt-[5%] lg:pr-24 xl:pr-32 xl:pt-[18%]">
        <h1 className="font-roboto font-bold text-2xl pt-10">
          VALORES
        </h1>
        <p className="font-open-sans pt-4">
          Na Pathway, acreditamos na <strong>inovação</strong> constante, buscando soluções disruptivas, <strong>excelência</strong> em cada interação e entrega, colaboração e parceria como alicerces de nosso trabalho, <strong>flexibilidade</strong> e <strong>adaptação</strong> para atender às necessidades em evolução, e um <strong>compromisso</strong> com um impacto sustentável e positivo, sempre alinhado com nossa missão de <strong>inspirar, motivar, inovar e transformar empresas e comunidades</strong>.
        </p>
      </div>
    </motion.div>
  );
}
