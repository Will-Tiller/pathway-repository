import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Talking from '../../assets/people2.png';
import Text from '../../assets/text.png';

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
      <div className="flex-1 pl-6 pr-6 text-center md:pl-32 md:pr-0 md:text-left lg:pb-6 xl:pb-0">
        <h1 className="font-roboto font-bold text-purple-900 text-2xl pt-10">
          COMO NOS DESCREVEMOS
        </h1>
        <p className="font-open-sans text-purple-900 pt-4">
          Somos uma empresa de consultoria de RH e Negócios que se destaca pela abordagem inovadora e busca incansável pela excelência. <br /> <br />
          Uma equipe de profissionais com mais de <strong>10 anos de experiência em Gestão de RH, Negócios e Projectos</strong>, fundimos expertise e sinergias para oferecer soluções disruptivas e inovadoras às empresas. <br /> <br />
          Nosso propósito é fornecer as melhores soluções em captação, selecção e retenção de talentos, gestão de projectos, consultoria de negócios e auditoria de RH, adaptando-nos às necessidades únicas de cada cliente e forjando parcerias com entidades reconhecidas nacional e internacionalmente em nossas áreas de actuação. <br /> <br />
          Com um foco incansável na excelência, estamos empenhados em impulsionar e transformar seus negócios por meio de estratégias únicas.
        </p>
      </div>
      <div className="flex-1 flex flex-col items-center mx-auto">
        <div className="w-[80%] h-[70%]">
          <img src={Talking} alt="" className='w-full h-full object-scale-down' />
        </div>
        <div className='w-[60%] h-[5%]'>
          <img src={Text} alt="" className='w-full h-full object-scale-down' />
        </div>
      </div>
    </motion.div>
  );
}
