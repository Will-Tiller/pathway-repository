import { AiOutlineThunderbolt } from "react-icons/ai";
import { FaArrowsDownToPeople, FaBriefcase, FaPeopleArrows, FaPersonHiking } from "react-icons/fa6";
import { MdOutlineAssessment } from "react-icons/md";
import { TbView360Number } from "react-icons/tb";
import { VscOrganization } from "react-icons/vsc";
import Footer from '../components/sobreComponents/Footer';

export default function Servicos(){
    return(
        <div className="w-full h-full flex flex-col  bg-purple-100">
            <h1 className="font-roboto font-bold text-center text-purple-900 text-3xl pt-10">NOSSOS SERVIÇOS</h1>
            <div className="w-[80%] h-auto flex flex-row justify-evenly mt-[7%] mx-auto">
                <div className="w-[20%] h-[30%] flex flex-col bg-white rounded shadow-lg items-center justify-center border-b-4 border-purple-900">
                    <FaPeopleArrows style={{fontSize:'3rem'}} className="text-orange-600 mt-4"/>
                    <h4 className="text-orange-600 font-roboto font-bold text-1xl pt-8">Aquisição de Talentos</h4>
                    <p style={{fontSize:"0.8rem"}} className="text-orange-600 font-open-sans text-center pt-4 pb-6">
                        Na nossa organização, acreditamos que o sucesso começa com as pessoas certas. A aquisição de talentos é um processo estratégico que visa identificar, atrair e reter os melhores profissionais do mercado.
                    </p>
                </div>
                <div className="w-[20%] h-[30%] flex flex-col bg-white rounded shadow-lg items-center justify-center border-b-4 border-purple-900">
                    <FaArrowsDownToPeople style={{fontSize:'3rem'}} className="text-orange-600 mt-4"/>
                    <h4 className="text-orange-600 font-roboto font-bold text-1xl pt-8">Mapeamento de Talentos</h4>
                    <p style={{fontSize:"0.8rem"}} className="text-orange-600 font-open-sans text-center pt-4 pb-6">
                         O mapeamento de talentos é uma prática essencial que visa identificar e analisar as habilidades e competências dos colaboradores dentro da nossa organização. 
                    </p>
                </div>
                <div className="w-[20%] h-[30%] flex flex-col bg-white rounded shadow-lg items-center justify-center border-b-4 border-purple-900">
                    <TbView360Number style={{fontSize:'3rem'}} className="text-orange-600 mt-4"/>
                    <h4 className="text-orange-600 font-roboto font-bold text-1xl text-center pl-3 pr-3 pt-8">Levantamento de referências 360</h4>
                    <p style={{fontSize:"0.8rem"}} className="text-orange-600 font-open-sans text-center pt-4 pb-6">
                        O assessment, que inclui testes psicotécnicos e inventários de personalidades, é uma ferramenta essencial para garantir que temos as pessoas certas em cada função.
                    </p>
                </div>
                <div className="w-[20%] h-[30%] flex flex-col bg-white rounded shadow-lg items-center justify-center border-b-4 border-purple-900">
                    <MdOutlineAssessment style={{fontSize:'3rem'}} className="text-orange-600 mt-4"/>
                    <h4 className="text-orange-600 font-roboto font-bold text-1xl pt-8">Formação e desenvolvimento</h4>
                    <p style={{fontSize:"0.8rem"}} className="text-orange-600 font-open-sans text-center pt-4 pb-6">
                        A formação e desenvolvimento são pilares fundamentais da nossa estratégia, proporcionando oportunidades que capacitam os nossos profissionais a evoluir em suas carreiras.
                    </p>
                </div>
                
            </div>
            

            <div className="w-[80%] h-auto flex flex-row justify-evenly mb-10  mt-[7%] mx-auto">
                <div className="w-[20%] h-[30%] flex flex-col bg-white rounded shadow-lg items-center justify-center border-b-4 border-purple-900">
                    <FaPersonHiking style={{fontSize:'3rem'}} className="text-orange-600 mt-4"/>
                    <h4 className="text-orange-600 font-roboto font-bold text-1xl text-center pt-8">Desenvolvimento de liderança</h4>
                    <p style={{fontSize:"0.8rem"}} className="text-orange-600 font-open-sans text-center pt-4 pb-6">
                         O desenvolvimento de liderança e o coaching executivo são elementos essenciais da nossa estratégia para cultivar líderes que motivem e elevem suas equipas.
                    </p>
                </div>
                <div className="w-[20%] h-[30%] flex flex-col bg-white rounded shadow-lg items-center justify-center border-b-4 border-purple-900">
                    <VscOrganization style={{fontSize:'3rem'}} className="text-orange-600 mt-4"/>
                    <h4 className="text-orange-600 font-roboto font-bold text-1xl text-center pt-8">Análise de clima organizacional</h4>
                    <p style={{fontSize:"0.8rem"}} className="text-orange-600 font-open-sans text-center pt-4 pb-6">
                         Na nossa organização, acreditamos que um ambiente de trabalho saudável e engajador é fundamental para o sucesso coletivo. 
                    </p>
                </div>
                <div className="w-[20%] h-[30%] flex flex-col bg-white rounded shadow-lg items-center justify-center border-b-4 border-purple-900">
                    <FaBriefcase style={{fontSize:'3rem'}} className="text-orange-600 mt-4"/>
                    <h4 className="text-orange-600 font-roboto font-bold text-1xl text-center pt-8">Auditoria de RH</h4>
                    <p style={{fontSize:"0.8rem"}} className="text-orange-600 font-open-sans text-center pt-4 pb-6">
                        A auditoria de Recursos Humanos é um processo essencial que visa avaliar a eficácia, a conformidade e a eficiência das práticas e políticas de RH dentro da organização.
                    </p>
                </div>
                <div className="w-[20%] h-[30%] flex flex-col bg-white rounded shadow-lg items-center justify-center border-b-4 border-purple-900">
                    <AiOutlineThunderbolt style={{fontSize:'3rem'}} className="text-orange-600 mt-4"/>
                    <h4 className="text-orange-600 font-roboto font-bold text-1xl text-center pt-8">Gestão de talentos e desempenho</h4>
                    <p style={{fontSize:"0.8rem"}} className="text-orange-600 font-open-sans text-center pt-4 pb-6">
                        Na nossa organização, a gestão de talentos e a gestão de desempenho são fundamentais para construir uma equipa forte e motivada.
                    </p>
                </div>
                
            </div>
            <Footer/>
        </div>
        
    );
}

