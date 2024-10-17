import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Vision from '../../assets/visao.png';

export default function Visao() {
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
      className="w-full h-auto grid grid-cols-1 flex-col bg-purple-900 md:grid-cols-2 md:flex-row"
    >
      <div className="flex-1">
        <div className='w-[50%] h-[50%] mx-auto mt-[20%]'>
          <img src={Vision} alt="" className='w-full h-full object-cover' />
        </div>
      </div>
      <div className="flex-1 pl-6 pr-6 text-white text-center pt-0 pb-6 md:pb-0 md:pt-[18%] md:pl-6 md:pr-32 md:text-left lg:pt-[5%] xl:pt-[18%]">
        <h1 className="font-roboto font-bold text-2xl pt-10">
          VISÃO
        </h1>
        <p className="font-open-sans pt-4">
          Inspirar e impulsionar a excelência empresarial e ser reconhecidos como líderes inovadores em consultoria, ao motivar equipas, inovar processos e transformar empresas de modo sustentável e impactante, actuando como parceiros estratégicos essenciais para o sucesso da gestão estratégica de negócios e Recursos Humanos.
        </p>
      </div>
    </motion.div>
  );
}
