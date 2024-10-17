import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Mission from '../../assets/missao.png';

export default function Descricao() {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1, 
  });

  return (
    <motion.div
      ref={ref} 
      initial={{ y: '100vh', opacity: 0 }} 
      animate={inView ? { y: 0, opacity: 1 } : {}} 
      transition={{ type: 'spring', stiffness: 80, damping: 20, duration: 1 }} 
      className="w-full h-auto grid grid-cols-1 flex-col md:grid-cols-2 md:flex-row"
    >
      <div className="flex-1 pl-6 pr-6 text-center md:pt-[18%] md:pl-32 md:pr-0 md:text-left lg:pt-[5%] xl:pt-[18%]">
        <h1 className="font-roboto font-bold text-purple-900 text-2xl pt-10">
          MISSÃO
        </h1>
        <p className="font-open-sans text-purple-900 pt-4">
          Nossa equipe utiliza uma abordagem estratégica e personalizada para cada cliente, entendendo suas necessidades específicas e adaptando nossas estratégias de prospecção para obter resultados eficientes.
        </p>
      </div>
      <div className="flex-1">
        <div className="w-[50%] h-[50%] mx-auto mt-[20%]">
          <img src={Mission} alt="" className='w-full h-full object-scale-down' />
        </div>
      </div>
    </motion.div>
  );
}
