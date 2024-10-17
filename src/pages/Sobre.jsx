import Descricao from "../components/sobreComponents/Descricao";
import Footer from "../components/sobreComponents/Footer";
import Missao from "../components/sobreComponents/Missao";
import Valores from "../components/sobreComponents/Valores";
import Visao from "../components/sobreComponents/Visao";
export default function Sobre(){
    return(
        <>
          <div className="w-full h-full flex flex-col  bg-purple-100">
                <Descricao/>
                <Visao/>
                <Missao/>
                <Valores/>
                <Footer/>
          </div>
        </>
    );
}